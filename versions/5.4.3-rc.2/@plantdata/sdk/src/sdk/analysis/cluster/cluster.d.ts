import { PdSDKAjaxSettings } from '../../utils/utils';
import { PdVisNetChartData, PdVisNetChartSettings, PdVisNetChart, PdVisNetChartDataNode } from '../../../vis/netchart/netchart';
import { PdSDKNetChartAnalysis, PdSDKNetChartAnalysisSettings } from '../netchart';
import { PdSDKNetChartPluginSettings } from '../../netchart/netchart';
import { PdSDKPluginStatsClusterSettings, PdSDKPluginStatsCluster } from '../plugins/stats-cluster/stats-cluster';
import { PdVisPluginSettings } from '../../../vis/netchart/plugins/plugin';
import { PdSDKPluginSettings } from '../../netchart/plugins/plugin';
import { PdSDKPluginMixins, PdSDKPluginMixinsSettings } from '../../netchart/plugins/mixins/mixins';
import { PdVisPluginFilter, PdVisPluginFilterSettings } from '../../../vis/netchart/plugins/filter/filter';
import { PdSDKPluginVisConfigure, PdSDKPluginVisConfigureSettings } from '../../netchart/plugins/vis-configure/vis-configure';
/**
 * SDK 网络关系图配置
 */
export interface PdSDKClusterSettings<T extends PdVisNetChartSettings> extends PdSDKNetChartAnalysisSettings<T> {
    /**
     *  聚簇统计插件
     */
    cluster?: PdSDKNetChartPluginSettings<PdSDKPluginStatsClusterSettings>;
    /**
     *  过滤插件
     */
    filter?: PdSDKNetChartPluginSettings<PdVisPluginFilterSettings>;
    /**
     *  混合插件
     */
    mixinsSettings?: {
        [key: string]: PdSDKPluginMixinsSettings;
    };
    /**
     * 节点双击事件
     * @param {PdVisNetChartDataNode} node 双击的节点
     */
    onNodeDblClick?: (node: PdVisNetChartDataNode) => void;
    /**
     * 插件通用配置
     */
    pluginSettings?: PdVisPluginSettings;
    /**
     *  可视化配置插件
     */
    visConfigure?: PdSDKNetChartPluginSettings<PdSDKPluginVisConfigureSettings>;
}
/**
 * SDK 网络关系图
 */
export declare abstract class PdSDKCluster<T extends PdVisNetChart, V extends PdVisNetChartSettings> extends PdSDKNetChartAnalysis<T, V> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKClusterSettings<PdVisNetChartSettings>;
    /**
     *  网络关系图实例
     */
    chart: T;
    /**
     *  配置
     */
    settings: PdSDKClusterSettings<V>;
    /**
     *  聚簇统计插件实例
     */
    protected cluster: PdSDKPluginStatsCluster;
    /**
     *  过滤插件实例
     */
    protected filter: PdVisPluginFilter;
    /**
     *  mixins实例列表
     */
    protected mixins: {
        [key: string]: PdSDKPluginMixins;
    };
    /**
     *  可视化配置插件实例
     */
    protected visConfigure: PdSDKPluginVisConfigure;
    /**
     * 构造方法
     * @param {PdSDKClusterSettings<V>} settings - 网络关系图配置
     */
    constructor(settings: PdSDKClusterSettings<V>);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成数据异步加载配置
     * @param lp - 数据加载参数
     * @return {PdSDKAjaxSettings} 数据异步加载配置
     */
    protected createLoaderSettings(lp: any): PdSDKAjaxSettings;
    /**
     * 合并生成插件配置
     * @param {PdSDKNetChartPluginSettings<PdVisPluginSettings>} settings - 用户定义配置
     * @param {PdVisPluginSettings} defaultSettings - 默认配置
     * @return {PdVisPluginSettings} 插件配置
     */
    protected createPluginSettings(settings?: PdSDKNetChartPluginSettings<PdVisPluginSettings>, defaultSettings?: PdVisPluginSettings): PdVisPluginSettings;
    /**
     * 合并生成sdk插件配置
     * @param {PdSDKNetChartPluginSettings<PdVisPluginSettings>} settings - 用户定义配置
     * @param {PdVisPluginSettings} defaultSettings - 默认配置
     * @return {PdSDKPluginSettings} SDK插件配置
     */
    protected createSDKPluginSettings(settings: PdSDKNetChartPluginSettings<PdVisPluginSettings>, defaultSettings?: PdSDKPluginSettings): PdSDKPluginSettings;
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKClusterSettings<V>} settings - 用户配置
     * @return {PdSDKClusterSettings<V>} 配置
     */
    protected initSettings(settings: PdSDKClusterSettings<V>): PdSDKClusterSettings<V>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 处理图数据
     * @param data - 原始图数据
     * @return {any} 满足网络关系图要求的图数据
     */
    protected transformData(data: any): PdVisNetChartData;
}
