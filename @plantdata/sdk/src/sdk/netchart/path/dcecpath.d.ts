import { PdSDKPath, PdSDKPathSettings } from './path';
import { PdVisPluginToolbar } from '../../../vis/netchart/plugins/toolbox/toolbar/toolbar';
import { PdSDKNetChartHelper, PdSDKNetChartHelperSettings } from '../helper/netchart';
import { PdVisNetChart, PdVisNetChartSettings } from '../../../vis/netchart/netchart';
/**
 * SDK D3/ECharts路径分析配置
 */
export interface PdSDKDcEcPathSettings extends PdSDKPathSettings {
}
/**
 * SDK D3/ECharts路径分析
 */
export declare abstract class PdSDKDcEcPath<T extends PdVisNetChart, V extends PdSDKNetChartHelperSettings> extends PdSDKPath<T> implements PdSDKNetChartHelper<T> {
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
     * @param {PdSDKDcEcPathSettings} settings - 网络关系图配置
     */
    protected constructor(NetChart: new (settings: PdVisNetChartSettings) => T, settings: PdSDKDcEcPathSettings);
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKDcEcPathSettings} settings - 用户配置
     * @return {PdSDKDcEcPathSettings} 配置
     */
    protected initSettings(settings: PdSDKDcEcPathSettings): PdSDKDcEcPathSettings;
}
