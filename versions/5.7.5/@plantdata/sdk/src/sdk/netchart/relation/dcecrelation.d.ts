import { PdSDKRelation, PdSDKRelationSettings } from './relation';
import { PdVisPluginToolbar } from '../../../vis/netchart/plugins/toolbox/toolbar/toolbar';
import { PdSDKNetChartHelper, PdSDKNetChartHelperSettings } from '../helper/netchart';
import { PdVisNetChart, PdVisNetChartSettings } from '../../../vis/netchart/netchart';
/**
 * SDK D3/ECharts关联分析配置
 */
export interface PdSDKDcEcRelationSettings extends PdSDKRelationSettings {
}
/**
 * SDK D3/ECharts关联分析
 */
export declare abstract class PdSDKDcEcRelation<T extends PdVisNetChart, V extends PdSDKNetChartHelperSettings> extends PdSDKRelation<T> implements PdSDKNetChartHelper<T> {
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
     * @param {PdSDKDcEcRelationSettings} settings - 网络关系图配置
     */
    protected constructor(NetChart: new (settings: PdVisNetChartSettings) => T, settings: PdSDKDcEcRelationSettings);
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKDcEcRelationSettings} settings - 用户配置
     * @return {PdSDKDcEcRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKDcEcRelationSettings): PdSDKDcEcRelationSettings;
}
