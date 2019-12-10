import { PdVisPluginPage, PdVisPluginPageSettings } from '../../../vis/netchart/plugins/page/page';
import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisNetChart, PdVisNetChartSettings } from '../../../vis/netchart/netchart';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter';
import { PdVisPluginSearchPlace, PdVisPluginSearchPlaceSettings } from '../../../vis/netchart/plugins/search-place';
import { PdVisPluginMarkerClusterer, PdVisPluginMarkerClustererSettings } from '../../../vis/netchart/plugins/marker-clusterer';
import { PdVisPluginMapSelectionGroup, PdVisPluginMapSelectionGroupSettings } from '../../../vis/netchart/plugins/map-selection-group';
import { PdSDKPluginTimeChart, PdSDKPluginTimeChartSettings } from '../plugins/stats/time-chart';
import { PdSDKPluginTrace, PdSDKPluginTraceSettings } from '../plugins/trace';
/**
 * SDK gis图谱探索插件配置
 */
export interface PdSDKGraphGisPluginsSettings {
    /**
     *  区域选择插件配置
     */
    mapSelectionGroup?: PdSDKNetChartPluginSettings<PdVisPluginMapSelectionGroupSettings>;
    /**
     *  聚类器插件配置
     */
    markerClusterer?: PdSDKNetChartPluginSettings<PdVisPluginMarkerClustererSettings>;
    /**
     *  分页插件配置
     */
    page?: PdSDKNetChartPluginSettings<PdVisPluginPageSettings>;
    /**
     *  地点查找插件配置
     */
    searchPlace?: PdSDKNetChartPluginSettings<PdVisPluginSearchPlaceSettings>;
    /**
     *  时间轴插件
     */
    timeChart?: PdSDKNetChartPluginSettings<PdSDKPluginTimeChartSettings>;
    /**
     *  轨迹规则插件配置
     */
    trace?: PdSDKNetChartPluginSettings<PdSDKPluginTraceSettings>;
}
/**
 * SDK gis图谱探索配置
 */
export interface PdSDKGraphGisSettings extends PdSDKNetChartSettings, PdSDKGraphGisPluginsSettings {
}
/**
 * SDK gis图谱探索
 */
export declare abstract class PdSDKGraphGis<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKGraphGisSettings;
    /**
     *  配置
     */
    settings: PdSDKGraphGisSettings;
    /**
     *  时间轴插件实例
     */
    timeChart: PdSDKPluginTimeChart;
    /**
     *  区域选择插件实例
     */
    protected mapSelectionGroup: PdVisPluginMapSelectionGroup;
    /**
     *  聚类器插件实例
     */
    protected markerClusterer: PdVisPluginMarkerClusterer;
    /**
     *  分页插件实例
     */
    protected page: PdVisPluginPage;
    /**
     *  地点查找插件实例
     */
    protected searchPlace: PdVisPluginSearchPlace;
    /**
     *  轨迹规则插件实例
     */
    protected trace: PdSDKPluginTrace;
    /**
     * 构造方法
     * @param {new(settings: PdVisNetChartSettings) => T} NetChart - 网络关系图类型
     * @param {PdSDKGraphGisSettings} settings - 网络关系图配置
     */
    protected constructor(NetChart: new (settings: PdVisNetChartSettings) => T, settings: PdSDKGraphGisSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建过滤配置
     * @param {PdVisPluginFilterItemSettings[]} items - 用户定义过滤选项配置
     * @return {PdVisPluginFilterItemSettings[]} 合并后的过滤选项
     */
    protected buildFilter(items: PdVisPluginFilterItemSettings[]): PdVisPluginFilterItemSettings[];
    /**
     * 生成数据异步加载配置
     * @param lp - 数据加载参数
     * @return {{queryData: any; formData: any; url: string}} 数据异步加载配置
     */
    protected buildLoaderParams(lp: any): {
        queryData: any;
        formData: any;
        url: string;
    };
    /**
     * 销毁插件
     */
    protected destroyPlugins(): void;
    /**
     * 初始化网络关系图
     */
    protected initNetChart(): void;
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKGraphGisSettings} settings - 用户配置
     * @return {PdSDKGraphGisSettings} 配置
     */
    protected initSettings(settings: PdSDKGraphGisSettings): PdSDKGraphGisSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
