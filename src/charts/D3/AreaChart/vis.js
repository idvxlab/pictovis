import * as d3 from 'd3';
import _ ,{ mean } from 'lodash';
import { getStackedData, getSeriesValue, getAggregatedRows, getWidth } from './helper';

// const config = {
//     "legend-text-color": "#666"
// }
const draw = (props) => {

    let a = document.createElement("div");
    if (!props.onCanvas) {
        // d3.select('.vis-areachart > *').remove();
        // a = '.vis-areachart';
        d3.select('.'+props.chartId+'>*').remove();
                a = '.'+props.chartId;
    }

    //默认卡片背景
    let cardcolor;
    // let cardcolor;
    // let textcolor="rgb(0, 0, 0)";

    let textcolor=props.textcolor;
    const style = props.spec.style;
    let textfont=props.textfont;
    const colorset =props.colormap;

    const offset = 20;
    let  margin = { top: 10, right: 10, bottom: 40, left: 40 };
    // const width = props.width - margin.left - margin.right - offset;
    // const height = props.height - margin.top - margin.bottom - offset - 40;
    const width = 500/4*props.size.w;
    const height = 500/4*props.size.h;

    let sscale;
    if(props.chartId.indexOf("sugess")>0){
        sscale=0.25;
        margin = { top: width/20, right: width/12, bottom: width/15, left: width/25};
    }else{
        sscale=1;
        margin = { top: 10, right: 10, bottom:40, left: 40 };
    }

    let svg = d3.select(a)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom + 40)
        // .style('background-color',cardcolor)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"+"scale("+sscale+")");
    
        // svg.append("rect")
        //     .attr("height", width + margin.left + margin.right)
        //     .attr("width", height + margin.top + margin.bottom)
        //     .attr("stroke-width","0px")
        //     .attr("fill",cardcolor)
            // .attr("transform", "translate(-" + margin.left + ",-" + margin.top + ")");

    // Get Encoding
    const encoding = props.spec.encoding;
    if (_.isEmpty(encoding) || !('x' in encoding) || !('y' in encoding) || _.isEmpty(encoding.x) || _.isEmpty(encoding.y.field)) {
        svg.append("g");
        return svg;
    }

    let hasSeries = 'color' in encoding;
    let layout =props.stylelayout;// basic/stacked/percent/allarea

    //allarea 为所有的单个面积图显示在一个图表上，有重叠部分
  
    // Process Data
    let data = props.data;
    let series;
    let stackedData = [];
    if (hasSeries) {
        stackedData = getStackedData(data, encoding);
        series = getSeriesValue(data, encoding);
    }
    data = getAggregatedRows(data, encoding);

    // let stackeddata=data.map(d=>parseFloat(d[encoding.y.field]));
    // console.log(data);


    // Style
    // const style = props.spec.style;
   // let colorset = d3.scaleOrdinal(d3.schemeCategory10);

    //Scale
    //X轴

    // for numeric
    // var x = d3.scaleLinear()
    //     .domain(d3.extent(data, function (d) { return d[encoding.x.field]; }))
    //     .range([0, width]);

    // for categorical
    var x = d3.scalePoint()
        .domain(data.map(function (d) { return d[encoding.x.field]; }))
        .range([0, width]);
    // rangeRound使它产生空隙，改成range就好了

    //Y轴        
    var y = d3.scaleLinear()
    if (hasSeries) {
        y.domain([0, d3.max(stackedData[stackedData.length - 1], d => d[1])]).nice().range([height, 0]);
    } else
        y.domain([0, d3.max(data, function (d) { return d[encoding.y.field]; })]).nice().range([height, 0]);

    // basic area
    var area_generator = d3.area()
        .x(function (d) {
            return x(d[encoding.x.field]);
        })
        .y0(height)
        .y1(function (d) {
            return y(d[encoding.y.field]);
        })
    .curve(d3.curveMonotoneX)  //折线变曲线

    var line_generator=d3.line()
    .x(function (d) {
        return x(d[encoding.x.field]);
    })
    .y(function (d) {
        return y(d[encoding.y.field]);
    })
    .curve(d3.curveMonotoneX)  


    // stacked area
    var stacked_area_generator = d3.area()
        .x(d => x(d.data.x))
        .y0(d => y(d[0]))
        .y1(d => y(d[1]))
        .curve(d3.curveCatmullRom.alpha(1))  

    var stacked_line_generator=d3.line()
    .x(d => x(d.data.x))
    .y(d => y(d[1]))
    .curve(d3.curveCatmullRom.alpha(1))  

    //all area
        var all_area_generator=d3.area()
        .x(d=>x(d.data.x))
        .y0(d=> (y(0) - (y(d[0]) - y(d[1]))))
        .y1( d => y(0))
        //.y1( d => y(d[0]) - y(d[1]))
        .curve(d3.curveCatmullRom.alpha(1))  
        
        var all_line_generator=d3.line()
        .x(d=>x(d.data.x))
        .y(d => (y(0) - (y(d[0]) - y(d[1]))))
        .curve(d3.curveCatmullRom.alpha(1))  
   
    // var stacked_area_generator = function (datum, boolean) {
    //     return d3.area()
    //         .y0(d => y(d[0]))
    //         .y1(d => y(d[1]))
    //         .x(function (d) { return boolean ? x(d.data.x) : 0; })
    //         (datum);
    // }

    // 100% stacked area
    let totalDict = {};
    if (hasSeries) {
        stackedData[stackedData.length - 1].forEach(d => {
            totalDict[d.data.x] = d[1];
        });
    }
    var percent_area_generator = d3.area()
        .x(d => x(d.data.x))
        .y0(d => {
            let total = totalDict[d.data.x];
            return y(d[0] / total);
        })
        .y1(d => {
            let total = totalDict[d.data.x];
            return y(d[1] / total);
        })
        .curve(d3.curveMonotoneX)

     var percent_line_generator=d3.line()
    .x(d => x(d.data.x))
    .y(d => {
        let total = totalDict[d.data.x];
        return y(d[1] / total);
    })
    .curve(d3.curveMonotoneX)  

    let areaLayer = svg.append("g").attr('id', 'areaLayer')


    areaLayer.append('defs').append('clipPath')
        .attr('id', 'clip')
        .append('rect')
        .attr("width", width)
        .attr('height', height)

    const areaG = areaLayer.append('g')
        .attr('clip-path', 'url(#clip)').attr('class', 'areaG')

    const legend = svg.append("g")
        .attr("transform", `translate(0, ${height + 60})`);

    if (hasSeries && layout === 'stacked') {
        y.domain([0, d3.max(stackedData[stackedData.length - 1], d => d[1])]).nice().range([height, 0]);
        areaG.selectAll("path")
            .data(stackedData)
            .join("path")
            .attr('id', ({ index }) => 'series_' + index)
            .attr('clip-path', ({ index }) => 'url(#clip_' + index + ')').attr('class', 'areaG')
            .attr('class', 'areaPath')
            // .attr("fill", ({ key }) => colorset[key])
            .attr("fill", function(d,i) {
                return colorset[i]}
             )
            .attr("opacity",0.2)
            .attr("d", stacked_area_generator)

          
        //d3.select("#clip rect").attr("width", width);

        areaG.selectAll("#path1")
        .data(stackedData)
        .join("path")
        .attr('id',"path1")
        .attr("fill", "none" )
        .attr("stroke",function(d,i) {
            return colorset[i]})
        .attr("stroke-width",2)
        .attr("d", stacked_line_generator)

        for(let j=0;j<stackedData.length;j++){
            areaG.selectAll("#circle"+j)
            .data(stackedData[j])
            .enter()
            .append("circle")
            .attr("id","circle"+j)
            .attr("cx", function (d) {
               //console.log(d.data.x)
               return x(d.data.x)
            })
            .attr("cy", function (d) {
                return  y(d[1])
            })
            .attr("r", 5)
            .attr("fill",colorset[j])
            .attr("stroke",colorset[j])
        }

        // var legends = legend.selectAll("legend_color")
        //     .data(series)
        //     .enter()
        //     .append("g")
        //     .attr("class", "legend_color")
        //     .attr('transform', (d, i) => `translate(${i * (80 + 10) + (width - (series.length * 80 + (series.length - 1) * 10)) / 2}, 0)`);
        // legends.append("rect")
        //     .attr("fill", d => colorset(d))
        //     .attr('y', -9)
        //     .attr("width", '10px')
        //     .attr('height', '10px')
        //     .attr("rx", 1.5)
        //     .attr("ry", 1.5)
        // // .attr("cy", -5);
        // legends.append("text")
        //     .attr("fill", 'black')
        //     .attr("x", 15)
        //     .text(d => d);

        /** show legend **/
        var legends = legend.selectAll("legend_color")
            .data(series)
            .enter().append("g")
            .attr("class", "legend_color")
            .attr('transform', (d, i) => `translate(${10}, 10)`);//i * 80 + (chartWidth - 80 * colorSet.length)/2
        // legends.append("circle")
        //     .attr("fill", d => colorset(d))
        //     .attr("r", 6)
        //     .attr("cy", -5);
        legends.append("rect")
            .attr("fill", function(d,i) {
               return colorset[i]}
            )
            .attr('y', -9)
            .attr("width", 10)
            .attr('height', 10)
            .attr("rx", 1.5)
            .attr("ry", 1.5)
        legends.append("text")
            //.attr("fill", config["legend-text-color"])
            .attr("fill",textcolor)
            .attr("x", 15)
            .text(d => d)
            .style('font-family', 'Arial');
        let legend_nodes = legends.nodes();
        let before = legend_nodes[0];
        let current;
        let offset = 10;

        for (let i = 1; i < legend_nodes.length; i++) {
            current = legend_nodes[i];
            if (d3.select(before).select("text").node().getComputedTextLength()) {
                offset += d3.select(before).select("text").node().getComputedTextLength();
            } else {
                offset += getWidth(series[i - 1])
            }
            d3.select(current)
                .attr('transform', `translate(${i * 30 + offset}, 10)`);
            before = current;
        }
        if (legend.node().getBBox().width) {
            legend.attr("transform", `translate(${(width - legend.node().getBBox().width) / 2}, ${height + 60})`);
        } else {
            offset += getWidth(series[series.length - 1]);
            legend.attr("transform", `translate(${(width - offset - 30 * series.length + 20) / 2}, ${height + 60})`);
        }


    } else if (hasSeries && layout === 'allarea') {
        let max = 0;
        stackedData.forEach(ds => {
            ds.forEach(d => {
                if ((d[1] - d[0]) > max) {
                    max = d[1] - d[0];
                }
            });
        });
        y.domain([0, max]).nice().range([height, 0]);

        //y.domain([0, d3.max(stackedData[stackedData.length - 1], d => d[1])]).nice().range([height, 0]);
        areaG.selectAll("path")
            .data(stackedData)
            .join("path")
            .attr('id', ({ index }) => 'series_' + index)
            .attr('clip-path', ({ index }) => 'url(#clip_' + index + ')').attr('class', 'areaG')
            .attr('class', 'areaPath')
            // .attr("fill", ({ key }) => colorset[key])
            .attr("fill", function(d,i) {
                return colorset[i]}
             )
            .attr("opacity",0.2)
            .attr("d", all_area_generator)

  

        areaG.selectAll("#path1")
        .data(stackedData)
        .join("path")
        .attr('id',"path1")
        .attr("fill", "none" )
        .attr("stroke",function(d,i) {
            return colorset[i]})
        .attr("stroke-width",2)
        .attr("d", all_line_generator)

        for(let j=0;j<stackedData.length;j++){
        areaG.selectAll("#circle"+j)
        .data(stackedData[j])
        .enter()
        .append("circle")
        .attr("id","circle"+j)
        .attr("cx", function (d) {
           //console.log(d.data.x)
           return x(d.data.x)
        })
        .attr("cy", function (d) {
            return y(0) - (y(d[0]) - y(d[1]))
        })
        .attr("r", 5)
        .attr("fill",colorset[j])
        .attr("stroke",colorset[j])
    }
       
        /** show legend **/
       let legends = legend.selectAll("legend_color")
            .data(series)
            .enter().append("g")
            .attr("class", "legend_color")
            .attr('transform', (d, i) => `translate(${10}, 10)`);//i * 80 + (chartWidth - 80 * colorSet.length)/2
        // legends.append("circle")
        //     .attr("fill", d => colorset(d))
        //     .attr("r", 6)
        //     .attr("cy", -5);
        legends.append("rect")
            .attr("fill", function(d,i) {
               return colorset[i]}
            )
            .attr('y', -9)
            .attr("width", 10)
            .attr('height', 10)
            .attr("rx", 1.5)
            .attr("ry", 1.5)
        legends.append("text")
            //.attr("fill", config["legend-text-color"])
            .attr("fill",textcolor)
            .attr("x", 15)
            .text(d => d)
            .style('font-family', 'Arial');
        let legend_nodes = legends.nodes();
        let before = legend_nodes[0];
        let current;
        let offset = 10;

        for (let i = 1; i < legend_nodes.length; i++) {
            current = legend_nodes[i];
            if (d3.select(before).select("text").node().getComputedTextLength()) {
                offset += d3.select(before).select("text").node().getComputedTextLength();
            } else {
                offset += getWidth(series[i - 1])
            }
            d3.select(current)
                .attr('transform', `translate(${i * 30 + offset}, 10)`);
            before = current;
        }
        if (legend.node().getBBox().width) {
            legend.attr("transform", `translate(${(width - legend.node().getBBox().width) / 2}, ${height + 60})`);
        } else {
            offset += getWidth(series[series.length - 1]);
            legend.attr("transform", `translate(${(width - offset - 30 * series.length + 20) / 2}, ${height + 60})`);
        }


    }
    
    
    
    else if (hasSeries && layout === 'percent') {
        y.domain([0, 1]);
        areaG.selectAll("path")
            .data(stackedData)
            .join("path")
            .attr('id', ({ index }) => 'series_' + index)
            // .attr("fill", ({ key }) => colorset[key])
            .attr("fill", function(d,i) {
                return colorset[i]}
             )
             .attr("opacity",0.2)
            .attr("d", percent_area_generator)


            areaG.selectAll("#path1")
            .data(stackedData)
            .join("path")
            .attr("id","path1")
            .attr("fill", "none" )
            .attr("stroke",function(d,i) {
                return colorset[i]})
            .attr("stroke-width",2)
            .attr("d",percent_line_generator)
        // legends = legend.selectAll("legend_color")
        //     .data(series)
        //     .enter()
        //     .append("g")
        //     .attr("class", "legend_color")
        //     .attr('transform', (d, i) => `translate(${i * (80 + 10) + (width - (series.length * 80 + (series.length - 1) * 10)) / 2}, 0)`);
        // legends.append("rect")
        //     .attr("fill", d => colorset(d))
        //     .attr('y', -9)
        //     .attr("width", '10px')
        //     .attr('height', '10px')
        //     .attr("rx", 1.5)
        //     .attr("ry", 1.5)
        // // .attr("cy", -5);
        // legends.append("text")
        //     .attr("fill", 'black')
        //     .attr("x", 15)
        //     .text(d => d);

        /** show legend **/
        // colorSet = getSeriesValue(data, encoding);
        legends = legend.selectAll("legend_color")
            .data(series)
            .enter().append("g")
            .attr("class", "legend_color")
            .attr('transform', (d, i) => `translate(${10}, 0)`);//i * 80 + (chartWidth - 80 * colorSet.length)/2
        legends.append("rect")
        .attr("fill", function(d,i) {
            return colorset[i]}
         )
            .attr('y', -9)
            .attr("width", 10)
            .attr('height', 10)
            .attr("rx", 1.5)
            .attr("ry", 1.5)
        legends.append("text")
            //.attr("fill", config["legend-text-color"])
            .attr("fill",textcolor)
            .attr("x", 15)
            .text(d => d)
            .style('font-family', 'Arial');
        let legend_nodes = legends.nodes();
        let before = legend_nodes[0];
        let current;
        let offset = 10;

        for (let i = 1; i < legend_nodes.length; i++) {
            current = legend_nodes[i];
            if (d3.select(before).select("text").node().getComputedTextLength()) {
                offset += d3.select(before).select("text").node().getComputedTextLength();
            } else {
                offset += getWidth(series[i - 1])
            }
            d3.select(current)
                .attr('transform', `translate(${i * 30 + offset}, 0)`);
            before = current;
        }
        if (legend.node().getBBox().width) {
            legend.attr("transform", `translate(${(width - legend.node().getBBox().width) / 2}, ${height + 60})`);
        } else {
            offset += getWidth(series[series.length - 1]);
            legend.attr("transform", `translate(${(width - offset - 30 * series.length + 20) / 2}, ${height + 60})`);
        }

    } else {
        y.domain([0, d3.max(data, function (d) { return d[encoding.y.field]; })]).range([height, 0]);
        areaG.append("path")
            .attr('id', 'series_0')
            .style("fill", colorset[0])
            .attr("d", area_generator(data))

            areaG.append("path")
            .attr('id',"path1")
            .attr("fill", "none" )
            .attr("stroke",colorset[0])
            .attr("stroke-width",2)
            .attr("d", line_generator(data))
    }

    // let rotate = false
    // let tickText = areaLayer.append("g")
    //     .attr("class", "x axis")
    //     .call(d3.axisBottom(x))
    //     .attr("transform", "translate(0," + height + ")")
    //     // .attr("stroke-dasharray","5,5")
    //     .selectAll('.tick text')
    //     .each(function (d) {
    //         if (this.getComputedTextLength() > 20)
    //             rotate = true
    //     })
    // if (rotate)
    //     tickText.attr('transform', 'translate(14,14) rotate(30)')

    areaLayer.append("g")
        .attr("class", "x axis")
        .call(d3.axisBottom(x))
        .attr("transform", "translate(0," + height + ")")
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end")
        .attr("fill",textcolor);
    areaLayer.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .attr("fill",textcolor);

        svg.selectAll(".domain")
        .attr("stroke",textcolor);
        svg.selectAll("line")
        .attr("stroke",textcolor)

        svg.selectAll("text")
        .attr("stroke",textcolor)
    // .attr("stroke-dasharray","5,5");

    return svg;
}

export default draw;