import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import { PdSDKStat, PdSDKStatSettings } from '../stat';
/**
 * 绘制SDK饼图的配置
 */
export interface PdSDKStatPieSettings extends PdSDKStatSettings {
    /**
     *  图表类型
     */
    type?: 'pie';
}
/**
 * 绘制SDK饼图，需要echarts插件支持
 */
export declare class PdSDKStatPie extends PdSDKStat {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKStatPieSettings;
    /**
     *  配置
     */
    settings: PdSDKStatPieSettings;
    /**
     * 构造方法
     * @param {PdSDKStatWordCloudSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKStatPieSettings);
    /**
     * 绘制图表
     */
    protected drawChart(): void;
    /**
     * 初始化配置
     * @param {PdSDKStatWordCloudSettings} settings - 用户定义配置
     * @return {PdSDKStatWordCloudSettings} 配置
     */
    protected initSettings(settings: PdSDKStatPieSettings): any;
}
