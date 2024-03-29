import ChartType from '@/constants/ChartType';
import { configure as barchartAnimationSetting} from './BarChart/animation';
import { configure as linechartAnimationSetting} from './LineChart/animation';
import { configure as areachartAnimationSetting} from './AreaChart/animation';
import { configure as piechartAnimationSetting} from './PieChart/animation';

import { configure as treemapAnimationSetting} from './TreeMap/animation';


export default function animationSetting(chartType, animation, index, props) {
    switch (chartType) {
        case ChartType.BARCHART:
            return barchartAnimationSetting(animation, index, props);

        case ChartType.LINECHART:
            return linechartAnimationSetting(animation, index, props);

        case ChartType.AREACHART:
            return areachartAnimationSetting(animation, index, props);

        case ChartType.PIECHART:
            return piechartAnimationSetting(animation, index, props);


        case ChartType.TREEMAP:
            return treemapAnimationSetting(animation, index, props);

    

        default:
            return null
    }
}