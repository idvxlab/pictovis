import VisActionType from '@/actions/visTypes';
import cars from '@/datasets/cars';
import carsSchema from '@/datasets/carsSchema';

import entertainment from '@/datasets/entertainment';
import entertainmentSchema from '@/datasets/entertainmentSchema';

import city_day from '@/datasets/city_day_simple';
import foodPriceSchema from '@/datasets/foodPriceSchema';

import food_price from '@/datasets/food_prices';
import cityDaySchema from '@/datasets/cityDaySchema';

import countrys from '@/datasets/scatterPlot/countrys';
import countrysSchema from '@/datasets/scatterPlot/countrysSchema';
import nCoV2020 from '@/datasets/map/nCoV2020';
import nCoV2020Schema from '@/datasets/map/nCoV2020Schema';
import Color from '@/constants/Color';
import _ from 'lodash';

const originSpec = {
    // "mark": "line",
    "encoding": {
        "color": {
            "value": Color.BLUE
        }
    }
}

const initialState = {
    // data
    dataIndex: 0,
    // dataNameList: ['cars.csv','countrys.csv','nCoV2020.csv','entertainment.csv', 'food_price.csv', 'city_day.csv'],
    // dataList: [cars,countrys,nCoV2020,entertainment,food_price,city_day],
    // fieldsList: [carsSchema,countrysSchema,nCoV2020Schema,entertainmentSchema,foodPriceSchema,cityDaySchema],

    dataNameList: ['entertainment.csv', 'food_price.csv', 'city_day.csv'],
    dataList: [entertainment,food_price,city_day],
    fieldsList: [entertainmentSchema,foodPriceSchema,cityDaySchema],


    // //imgData
    // imgDataIndex: 0,
    // imgDataNameList: [],
    // imgDataList: [],

    // vis
    specIndex: 0,
    specHistory: [JSON.stringify(originSpec)],
    displaySpec: originSpec,
    globalColorStyle: {},

    
    // animation
    choosenAnimation: {},
    selectedAnimation: {},
    selectedAnimationIndex: -1,
    isSelectingChartElement: false,
    selectingParameter: {},
    isGenerateChartVideoUrl: true,
    chartAnimationVideoUrl : null, 
    // history
    actionHistory: [{
        "type": "none",
        "description": "origin state",
    }],
}

export default (state = initialState, action) => {
    // const newSpec = JSON.parse(state.specHistory[state.specIndex]);
    const newSpec = _.cloneDeep(state.displaySpec)
    const newState = Object.assign({}, state);
    const newList = newState.dataNameList.slice();
    var newSpecHistory = [];
    var newActionHistory = [];

    // console.log('action', action.type)

    switch (action.type) {

        // Select Chart
        case VisActionType.OPEN_EDITOR:
            newState.dataIndex = action.dataIndex;
            newState.displaySpec = action.spec;
            if (!("encoding" in newState.displaySpec)) {
                newState.displaySpec.encoding = {}
            }
            newState.specIndex = 0;
            newState.specHistory = [JSON.stringify(action.spec)];
            return newState;

        // Data
        case VisActionType.ADD_DATA:
            newList.push(action.dataName)
            newState.dataNameList = newList;
            newState.dataList.push(action.data);
            newState.fieldsList.push(action.dataSchema);
            return newState

        case VisActionType.SWITCH_DATA:
            newState.dataIndex = action.index
            //console.log("SWITCH_DATA",newState)
            return newState

        case VisActionType.UPDATE_DATA:
            newState.dataIndex = action.index;
            const dataList = newState.dataList.slice();
            dataList[action.index] = action.data;
            newState.dataList = dataList;
            return newState

        case VisActionType.DELETE_DATA:
            newList.splice(action.index, 1)
            newState.dataNameList = newList;
            newState.dataList.splice(action.index, 1)
            newState.fieldsList.splice(action.index, 1)
            newState.dataIndex = 0
            return newState

        // Vis
        case VisActionType.ENCODING:
        case VisActionType.MODIFY_ENCODING:
            // state
            // newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            //console.log(newSpecHistory);
            console.log('newSpec["encoding"]', newSpec)
            if (action.channel in newSpec["encoding"]) {
                newSpec["encoding"][action.channel]["field"] = action.field.name;
                newSpec["encoding"][action.channel]["type"] = action.field.type;
            }
            else {
                newSpec["encoding"][action.channel] = {};
                newSpec["encoding"][action.channel]["field"] = action.field.name;
                newSpec["encoding"][action.channel]["type"] = action.field.type;
            };
            // console.log('action', action);
            // newSpec["style"] = action.specstyle;
            // newSpecHistory.push(JSON.stringify(newSpec));
            // newState.specHistory = newSpecHistory
            // // action
            // newActionHistory = newState.actionHistory.slice();
            // if (action.type === VisActionType.ENCODING) {
            //     newActionHistory.push({
            //         "type": VisActionType.ENCODING,
            //         "channel": action.channel,
            //         "field": action.field,
            //         "description": "add field " + action.channel,
            //     });
            // } else {
            //     newActionHistory.push({
            //         "type": VisActionType.MODIFY_ENCODING,
            //         "channel": action.channel,
            //         "field": action.field,
            //         "description": "modify field " + action.channel,
            //     });
            // }
            // newState.actionHistory = newActionHistory;
            // newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState

        case VisActionType.REMOVE_ENCODING:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            //console.log(newSpecHistory);
            if (action.channel in newSpec["encoding"]) {
                delete newSpec["encoding"][action.channel].field;
                delete newSpec["encoding"][action.channel].type;
            }
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.REMOVE_ENCODING,
                "channel": action.channel,
                "field": action.field,
                "description": "remove field " + action.channel,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState

        case VisActionType.CHANGE_AGGREGATION:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            //console.log(newSpecHistory);
            if (action.channel in newSpec["encoding"]) {
                newSpec["encoding"][action.channel]["aggregation"] = action.method;
            }
            else {
                newSpec["encoding"][action.channel] = {};
                newSpec["encoding"][action.channel]["aggregation"] = action.method;
            };
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.CHANGE_AGGREGATION,
                "channel": action.channel,
                "method": action.method,
                "description": "change aggregation to " + action.channel,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState

        case VisActionType.CONFIGURE_STYLE:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            newSpec.style = action.style;
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.CONFIGURE_STYLE,
                "description": "change style configuration",
                "detail": action.style,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState;
        
        case VisActionType.GLOBAL_STYLE:
            console.log('GLOABL_STYLE', action)
            newState.globalColorStyle = action.colorset;
            return newState;

        case VisActionType.CHOOSE_CHART_ANIMATION:
            newState.choosenAnimation = action.animation;
            return newState;

        case VisActionType.SELECT_CHART_ANIMATION:
            newState.selectedAnimation = action.animation;
            newState.selectedAnimationIndex = action.index;
            return newState;

        case VisActionType.SELECTING_CHART_ELEMENT:
            newState.isSelectingChartElement = action.isSelectingChartElement;
            newState.selectingParameter = action.parameter;
            return newState;

        case VisActionType.ADD_CHART_ANIMATION:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            if (!newSpec.animation) {
                newSpec.animation = [];
            }
            newSpec.animation.push(_.cloneDeep(action.animation));
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.ADD_CHART_ANIMATION,
                "description": "add chart animation",
                "detail": action.animation,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState;

        case VisActionType.MODIFY_CHART_ANIMATION:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            if (!newSpec.animation || action.index >= newSpec.animation.length) {
                return newState;
            }
            newSpec.animation[action.index] = action.animation;
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.MODIFY_CHART_ANIMATION,
                "description": "add chart animation",
                "detail": {
                    "index": action.index,
                    "animation": action.animation,
                },
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState;

        case VisActionType.REMOVE_CHART_ANIMATION:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            if (!newSpec.animation || action.index >= newSpec.animation.length) {
                return newState;
            }
            newSpec.animation.splice(action.index, 1);
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.REMOVE_CHART_ANIMATION,
                "description": "remove chart animation",
                "detail": action.index,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState;

        case VisActionType.REORDER_CHART_ANIMATION:
            // state
            newSpecHistory = newState.specHistory.slice(0, newState.specIndex + 1);
            newSpec.animation = _.cloneDeep(action.animations);
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": VisActionType.REORDER_CHART_ANIMATION,
                "description": "reorder chart animation",
                "detail": action.animations,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex++;
            newState.displaySpec = newSpec;
            return newState;

        case VisActionType.UPDATE_CHART_ANIMATION_VIDEO_URL:
            newState.chartAnimationVideoUrl = action.chartAnimationVideoUrl;
            return newState;
        // Meta

        default:
            return state
    }
}