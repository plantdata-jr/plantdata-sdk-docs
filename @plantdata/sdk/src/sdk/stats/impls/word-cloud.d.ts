import { PdSDKStat, PdSDKStatSettings } from '../stat';
import 'echarts-wordcloud';
/**
 * 绘制SDK词云图的配置
 */
export interface PdSDKStatWordCloudSettings extends PdSDKStatSettings {
    /**
     *  图表类型
     */
    type?: 'wordCloud';
}
/**
 * 绘制SDK词云图，需要echarts和echarts-woldcloud插件支持
 */
export declare class PdSDKStatWordCloud extends PdSDKStat {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKStatWordCloudSettings;
    /**
     *  配置
     */
    settings: PdSDKStatWordCloudSettings;
    /**
     * 构造方法
     * @param {PdSDKStatWordCloudSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKStatWordCloudSettings);
    /**
     * 绘制图表
     */
    protected drawChart(): void;
    /**
     * 初始化配置
     * @param {PdSDKStatWordCloudSettings} settings - 用户定义配置
     * @return {PdSDKStatWordCloudSettings} 配置
     */
    protected initSettings(settings: PdSDKStatWordCloudSettings): any;
}
