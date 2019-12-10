import { PdSDKGraphGis, PdSDKGraphGisSettings } from './graph-gis';
import { PdVisBaiduNetChart, PdVisBaiduNetChartSettings } from '../../../vis/netchart/impls/baidu';
/**
 * SDK Baidu地图图谱探索配置
 */
export interface PdSDKBaiduNetChartSettings extends PdSDKGraphGisSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisBaiduNetChartSettings;
}
/**
 * SDK Baidu地图图谱探索
 */
export declare class PdSDKBaiduNetChart extends PdSDKGraphGis<PdVisBaiduNetChart> {
    /**
     * 构造方法
     * @param {PdSDKBaiduNetChartSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKBaiduNetChartSettings);
    /**
     * 初始化配置
     * @param {PdSDKBaiduNetChartSettings} settings - 用户配置
     * @return {PdSDKBaiduNetChartSettings} 配置
     */
    protected initSettings(settings: PdSDKBaiduNetChartSettings): PdSDKBaiduNetChartSettings;
}
