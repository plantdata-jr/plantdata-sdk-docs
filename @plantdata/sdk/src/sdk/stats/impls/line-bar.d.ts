import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import { PdSDKStat, PdSDKStatSettings } from '../stat';
/**
 * 绘制SDK折线图/柱状图的配置
 */
export interface PdSDKStatLineBarSettings extends PdSDKStatSettings {
    /**
     *  图表类型
     */
    type?: 'line' | 'bar';
}
/**
 * 绘制SDK折线图/柱状图，需要echarts插件支持
 */
export declare class PdSDKStatLineBar extends PdSDKStat {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKStatLineBarSettings;
    /**
     *  配置
     */
    settings: PdSDKStatLineBarSettings;
    /**
     * 构造方法
     * @param {PdSDKStatWordCloudSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKStatLineBarSettings);
    /**
     * 绘制图表
     */
    protected drawChart(): void;
    /**
     * 初始化配置
     * @param {PdSDKStatWordCloudSettings} settings - 用户定义配置
     * @return {PdSDKStatWordCloudSettings} 配置
     */
    protected initSettings(settings: PdSDKStatLineBarSettings): any;
}
