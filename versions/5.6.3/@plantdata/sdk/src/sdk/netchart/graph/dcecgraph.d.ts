import { PdSDKGraph, PdSDKGraphSettings } from './graph';
import { PdVisPluginToolbar } from '../../../vis/netchart/plugins/toolbox/toolbar/toolbar';
import { PdSDKNetChartHelper, PdSDKNetChartHelperSettings } from '../helper/netchart';
import { PdVisNetChart, PdVisNetChartSettings } from '../../../vis/netchart/netchart';
/**
 * SDK D3/Echarts图谱探索配置
 */
export interface PdSDKDcEcGraphSettings extends PdSDKGraphSettings {
}
/**
 * SDK D3/ECharts图谱探索
 */
export declare abstract class PdSDKDcEcGraph<T extends PdVisNetChart, V extends PdSDKNetChartHelperSettings> extends PdSDKGraph<T> implements PdSDKNetChartHelper<T> {
    /**
     *  网络关系图实例
     */
    netChart: T;
    /**
     *  配置
     */
    settings: V;
    /**
     *  工具栏插件实例
     */
    toolbar: PdVisPluginToolbar;
    /**
     * 构造方法
     * @param {new(settings: PdVisNetChartSettings) => T} NetChart - 网络关系图类型
     * @param {PdSDKDcEcGraphSettings} settings - 网络关系图配置
     */
    protected constructor(NetChart: new (settings: PdVisNetChartSettings) => T, settings: PdSDKDcEcGraphSettings);
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKDcEcGraphSettings} settings - 用户配置
     * @return {PdSDKDcEcGraphSettings} 配置
     */
    protected initSettings(settings: PdSDKDcEcGraphSettings): PdSDKDcEcGraphSettings;
}
