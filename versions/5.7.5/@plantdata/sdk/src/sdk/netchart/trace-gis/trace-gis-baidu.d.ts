import { PdSDKTraceGis, PdSDKTraceGisSettings } from './trace-gis';
import { PdVisBaiduNetChart, PdVisBaiduNetChartSettings } from '../../../vis/netchart/impls/baidu';
/**
 * SDK Baidu地图图谱探索配置
 */
export interface PdSDKBaiduTraceGisSettings extends PdSDKTraceGisSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisBaiduNetChartSettings;
}
/**
 * SDK Baidu地图图谱探索
 */
export declare class PdSDKBaiduTraceGis extends PdSDKTraceGis<PdVisBaiduNetChart> {
    /**
     * 构造方法
     * @param {PdSDKBaiduTraceGisSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKBaiduTraceGisSettings);
    /**
     * 初始化配置
     * @param {PdSDKBaiduTraceGisSettings} settings - 用户配置
     * @return {PdSDKBaiduTraceGisSettings} 配置
     */
    protected initSettings(settings: PdSDKBaiduTraceGisSettings): PdSDKBaiduTraceGisSettings;
}
