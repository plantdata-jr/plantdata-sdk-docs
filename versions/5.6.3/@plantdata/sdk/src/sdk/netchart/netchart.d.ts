/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartLoadParams, PdVisNetChartSettings } from '../../vis/netchart/netchart';
import { PdVisPluginFind, PdVisPluginFindSettings } from '../../vis/netchart/plugins/find/find';
import { PdVisPluginLegendSettings } from '../../vis/netchart/plugins/legend/legend';
import { PdSDKPluginHistory, PdSDKPluginHistorySettings } from './plugins/history/history';
import { PdVisNodeLegendItem, PdVisPluginNodeLegend } from '../../vis/netchart/plugins/legend/node-legend/node-legend';
import { PdKGSchema } from '../model/schema';
import { PdSDKPromptSettings } from '../prompt/prompt';
import { PdSDKInfoboxSettings } from '../infobox/infobox';
import { PdSelector } from '../../common/common';
import { PdEvent, PdEventData } from '../../core/event';
import { PdSDKPluginAdvancedPrompt, PdSDKPluginAdvancedPromptSettings } from './plugins/prompt/advanced-prompt';
import { PdSDKPluginMixins, PdSDKPluginMixinsSettings } from './plugins/mixins/mixins';
import { PdSDKPluginMapx, PdSDKPluginMapxSettings } from './plugins/mapx/mapx';
import { PdVisPluginSettings } from '../../vis/netchart/plugins/plugin';
import { PdVisLinkLegendItem, PdVisPluginLinkLegend } from '../../vis/netchart/plugins/legend/link-legend/link-legend';
import { PdSDKPluginEditor, PdSDKPluginEditorSettings } from './plugins/editor/editor';
import { PdVisPluginMixinsItemSettings } from '../../vis/netchart/plugins/mixins/mixins';
import { PdSDKPluginSettings } from './plugins/plugin';
import { PdVisPluginResetLayout, PdVisPluginResetLayoutSettings } from '../../vis/netchart/plugins/reset-layout/reset-layout';
import { PdViewSettings } from '../../container/view';
import { PdVisViewTree, PdVisViewTreeSettings } from '../../vis/netchart/view/tree';
import { PdSDKViewData, PdSDKViewDataSettings } from './view/data';
import { PdSDKViewWordCloud, PdSDKViewWordCloudSettings } from './view/word-cloud';
import { PdSDKPluginVisConfigure, PdSDKPluginVisConfigureSettings } from './plugins/vis-configure/vis-configure';
import { PdSDKPluginTagView, PdSDKPluginTagViewSettings } from './plugins/tag-view/tag-view';
import { PdSDKPluginInfobox, PdSDKPluginInfoboxSettings } from './plugins/infobox/infobox';
import { PdSDKPluginContextmenu, PdSDKPluginContextmenuSettings } from './plugins/contextmenu/contextmenu';
import { PdVisPluginSnapshot, PdVisPluginSnapshotSettings } from '../../vis/netchart/plugins/snapshot/snapshot';
import { PdSDKPluginFilter, PdSDKPluginFilterSettings } from './plugins/filter/filter';
import { PdVisPluginFilterItemSettings } from '../../vis/netchart/plugins/filter/filter';
import { PdSDKPluginAttValueRule, PdSDKPluginAttValueRuleSettings } from './plugins/attvalue-rule/attvalue-rule';
import { PdVisPluginChangeLayout, PdVisPluginChangeLayoutSettings } from '../../vis/netchart/plugins/change-layout/change-layout';
import { PdCustomPlugin, PdCustomPluginSettings } from '../../container/plugin/custom-plugin';
import { PdSDKInitDataVO, PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from './model';
import { PdSDKKGSettings } from '../utils/service';
/**
 * SDK 视图配置
 */
export interface PdSDKNetChartViewSettings<T extends PdViewSettings> {
    /**
     *  启用插件
     */
    enable?: boolean;
    /**
     *  插件配置
     */
    settings?: T;
}
/**
 * SDK 插件配置
 */
export interface PdSDKNetChartPluginSettings<T extends PdVisPluginSettings> {
    /**
     *  启用插件
     */
    enable?: boolean;
    /**
     * 混合插件的唯一标识
     */
    mixinsId?: string;
    /**
     * 混合子插件配置
     */
    mixinsSettings?: PdVisPluginMixinsItemSettings;
    /**
     *  插件配置
     */
    settings?: T;
}
/**
 * SDK 网络关系图公共插件配置
 */
export interface PdSDKPluginsLegendSettings<T extends PdVisPluginLegendSettings> extends PdSDKNetChartPluginSettings<T> {
    /**
     *  是否合并用户设置的图例和schema生成的图例
     */
    merge?: boolean;
}
/**
 * SDK 网络关系图公共插件配置
 */
export interface PdSDKCommonPluginsSettings {
    /**
     *  高级检索插件
     */
    advancedPrompt?: PdSDKNetChartPluginSettings<PdSDKPluginAdvancedPromptSettings>;
    /**
     *  属性值筛选插件
     */
    attValueRule?: PdSDKNetChartPluginSettings<PdSDKPluginAttValueRuleSettings>;
    /**
     * 更换布局插件
     */
    changeLayout?: PdSDKNetChartPluginSettings<PdVisPluginChangeLayoutSettings>;
    /**
     *  右键菜单插件
     */
    contextmenu?: PdSDKNetChartPluginSettings<PdSDKPluginContextmenuSettings>;
    /**
     *  自定义插件列表
     */
    customPlugins?: PdSDKNetChartPluginSettings<PdCustomPluginSettings>[];
    /**
     *  编辑工具插件
     */
    editor?: PdSDKNetChartPluginSettings<PdSDKPluginEditorSettings>;
    /**
     *  过滤插件
     */
    filter?: PdSDKNetChartPluginSettings<PdSDKPluginFilterSettings>;
    /**
     *  定位插件
     */
    find?: PdSDKNetChartPluginSettings<PdVisPluginFindSettings>;
    /**
     *  历史插件
     */
    history?: PdSDKNetChartPluginSettings<PdSDKPluginHistorySettings>;
    /**
     * infobox插件
     */
    infobox?: PdSDKNetChartPluginSettings<PdSDKPluginInfoboxSettings>;
    /**
     *  边图例插件
     */
    linkLegend?: PdSDKPluginsLegendSettings<PdVisPluginLegendSettings>;
    /**
     *  历史插件
     */
    mapx?: PdSDKNetChartPluginSettings<PdSDKPluginMapxSettings>;
    /**
     *  节点图例插件
     */
    nodeLegend?: PdSDKPluginsLegendSettings<PdVisPluginLegendSettings>;
    /**
     * 重新布局插件
     */
    resetLayout?: PdSDKNetChartPluginSettings<PdVisPluginResetLayoutSettings>;
    /**
     *  快照插件
     */
    snapshot?: PdSDKNetChartPluginSettings<PdVisPluginSnapshotSettings>;
    /**
     *  标签展示插件
     */
    tagView?: PdSDKNetChartPluginSettings<PdSDKPluginTagViewSettings>;
    /**
     *  可视化配置插件
     */
    visConfigure?: PdSDKNetChartPluginSettings<PdSDKPluginVisConfigureSettings>;
}
/**
 * SDK 网络关系图公共视图配置
 */
export interface PdSDKCommonViewSettings {
    /**
     * 数据视图
     */
    dataView?: PdSDKNetChartViewSettings<PdSDKViewDataSettings>;
    /**
     * 树形视图
     */
    treeView?: PdSDKNetChartViewSettings<PdVisViewTreeSettings>;
    /**
     * 字符云视图
     */
    wordCloudView?: PdSDKNetChartViewSettings<PdSDKViewWordCloudSettings>;
}
/**
 * SDK 网络关系图配置
 */
export interface PdSDKNetChartLoaderSettings extends PdSDKKGSettings {
    /**
     * 是否保留之前的数据
     */
    extend?: ((lp: any) => boolean) | boolean;
    /**
     * 是否更新图探索的焦点
     */
    graphFixedNodesUpdateable?: ((lp: any, ins: any) => boolean) | boolean;
}
/**
 * SDK 网络关系图配置
 */
export interface PdSDKNetChartSettings extends PdSDKCommonViewSettings, PdSDKCommonPluginsSettings, PdSDKKGSettings {
    /**
     *  开启调试
     */
    debugger?: boolean;
    /**
     *  节点infobox
     */
    infoboxSettings?: {
        /**
         *  是否启用节点infobox
         */
        enable?: boolean;
        /**
         * 所在混合的唯一标识
         */
        mixinsId?: string;
        /**
         * infobox显示位置
         */
        mode?: 'mixins' | 'contentsMenu';
        /**
         *  节点infobox显示位置
         */
        position?: 'center' | 'auto';
        /**
         *  节点infobox配置
         */
        settings?: PdSDKInfoboxSettings;
    };
    /**
     *  加载初始化关系图的配置
     */
    initSettings?: PdSDKKGSettings;
    /**
     *  加载配置
     */
    loaderSettings?: PdSDKNetChartLoaderSettings;
    /**
     *  混合插件
     */
    mixinsSettings?: {
        [key: string]: PdSDKPluginMixinsSettings;
    };
    /**
     *  网络关系图的配置
     */
    netChartSettings?: PdVisNetChartSettings;
    /**
     * 插件通用配置
     */
    pluginSettings?: PdVisPluginSettings;
    /**
     *  获取下拉提示配置
     */
    promptSettings?: PdSDKPromptSettings;
    /**
     *  预置图谱Schema
     */
    schema?: PdKGSchema;
    /**
     *  Schema获取配置
     */
    schemaSettings?: PdSDKKGSettings;
    /**
     *  生成网络关系图的选择器
     */
    selector?: PdSelector;
    /**
     *  是否显示所有schema选项
     */
    showAllSchemaOptions?: boolean;
    /**
     *  是否在左击边的时候显示边属性
     */
    showLinkInfoOnClick?: boolean;
}
/**
 * SDK 网络关系图
 */
export declare abstract class PdSDKNetChart<T extends PdVisNetChart> extends PdEvent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKNetChartSettings;
    /**
     *  编辑工具插件实例
     */
    editor: PdSDKPluginEditor;
    /**
     *  结束时间
     */
    end: number;
    /**
     *  网络关系图实例
     */
    netChart: T;
    /**
     *  图谱schema
     */
    schema: PdKGSchema;
    /**
     *  配置
     */
    settings: PdSDKNetChartSettings;
    /**
     *  开始时间
     */
    start: number;
    /**
     * 网络关系图类型
     * @class
     * @classdesc new(settings: PdVisNetChartSettings) => T
     * @param settings {PdVisNetChartSettings} - 配置
     * @return T
     */
    protected NetChart: new (settings: PdVisNetChartSettings) => T;
    /**
     *  高级检索插件实例
     */
    protected advancedPrompt: PdSDKPluginAdvancedPrompt;
    /**
     *  过滤插件实例
     */
    protected attValueRule: PdSDKPluginAttValueRule;
    /**
     *  更换布局插件实例
     */
    protected changeLayout: PdVisPluginChangeLayout;
    /**
     *  右键菜单实例
     */
    protected contextmenu: PdSDKPluginContextmenu;
    /**
     *  自定义插件实例列表
     */
    protected customPlugins: PdCustomPlugin[];
    /**
     * 数据视图
     */
    protected dataView: PdSDKViewData;
    /**
     * 初始化类型
     */
    protected defaultType: string;
    /**
     * 导出处理方法
     */
    protected exportHandler: (event: JQuery.KeyDownEvent) => void;
    /**
     *  过滤插件实例
     */
    protected filter: PdSDKPluginFilter;
    /**
     *  定位插件实例
     */
    protected find: PdVisPluginFind;
    /**
     *  历史插件实例
     */
    protected history: PdSDKPluginHistory;
    /**
     *  infobox实例
     */
    protected infobox: PdSDKPluginInfobox;
    /**
     * 初始化准备列表
     */
    protected initPrepareList: {
        [key: string]: boolean;
    };
    /**
     *  是否强制刷新节点图例
     */
    protected isForceRefreshNodeLegend: Boolean;
    /**
     *  是否已完成初始化
     */
    protected isInit: boolean;
    /**
     *  边图例插件实例
     */
    protected linkLegend: PdVisPluginLinkLegend;
    /**
     *  鹰眼图
     */
    protected mapx: PdSDKPluginMapx;
    /**
     *  mixins实例列表
     */
    protected mixins: {
        [key: string]: PdSDKPluginMixins;
    };
    /**
     *  节点图例插件实例
     */
    protected nodeLegend: PdVisPluginNodeLegend;
    /**
     *  重新布局插件实例
     */
    protected resetLayout: PdVisPluginResetLayout;
    /**
     *  快照插件实例
     */
    protected snapshot: PdVisPluginSnapshot;
    /**
     *  标签插件实例
     */
    protected tagView: PdSDKPluginTagView;
    /**
     * 树形视图
     */
    protected treeView: PdVisViewTree;
    /**
     *  可视化配置插件实例
     */
    protected visConfigure: PdSDKPluginVisConfigure;
    /**
     * 字符云视图
     */
    protected wordCloudView: PdSDKViewWordCloud;
    /**
     * 边边属性
     * @param {PdSDKNetChartDataLink} linkData - 边数据
     * @return {string} 渲染的HTML字符串
     */
    static createLinkRInfo(linkData: PdSDKNetChartDataLink): string;
    /**
     * 转换为接口返回的图数据格式
     * @param data - 原始图数据
     * @return 接口返回格式的图数据
     */
    static reversalNetChartData(data: any): any;
    /**
     * 接口返回的图数据格式转换为可用的数据格式
     * @param data - 原始图数据
     * @param nodeMap - 实体类型映射集合
     * @param linkMap - 关系类型映射集合
     * @return {PdSDKNetChartData} 满足网络关系图要求的图数据
     */
    static transformNetChartData(data: any, nodeMap: {
        [key: string]: string;
    }, linkMap: {
        [key: string]: string;
    }): PdSDKNetChartData;
    /**
     * 边详情
     * @param {PdSDKNetChartDataLink} linkData - 边数据
     * @return {string} 渲染的HTML字符串
     */
    protected static linkContentsFunction(linkData: PdSDKNetChartDataLink): string;
    /**
     * 关系排序
     * @param data - 关系数据
     * @param order {string} - 排序方式
     * @return 排序后的关系数据
     */
    protected static orderRelation(data: any, order?: 'desc' | 'asc'): any[];
    /**
     * 构造方法
     * @param {new(settings: PdVisNetChartSettings) => T} NetChart - 网络关系图类型
     * @param {PdSDKNetChartSettings} settings - 网络关系图配置
     */
    protected constructor(NetChart: new (settings: PdVisNetChartSettings) => T, settings: PdSDKNetChartSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 导出当前图数据及坐标
     */
    exportData(): string;
    /**
     * 导出当前图数据及坐标为JSON文件
     */
    exportJSON(name?: string): void;
    /**
     * 初始化网络关系图配置
     * @param {PdSDKNetChartSettings} settings - 网络关系图配置
     * @return {PdSDKNetChartSettings} 更新后的网络关系图配置
     */
    initNetChartSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
    /**
     * 加载数据
     * @param lp - 加载参数
     * @param {string} source - 请求来源
     */
    load(lp?: PdVisNetChartLoadParams, source?: string): void;
    /**
     * 设置是否强制刷新节点图例变量值的方法
     * @param {Boolean} value - 值
     */
    setForceRefreshNodeLegend(value: Boolean): void;
    /**
     * 更新图例数据
     */
    updateLegendData(): void;
    /**
     * 更新Schema
     */
    updateSchema(schema: PdKGSchema): void;
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
     * 生成图探索数据异步加载配置
     * @param lp - 数据加载参数
     * @return {{queryData: any; formData: any; url: string}} 数据异步加载配置
     */
    protected buildGraphLoaderParams(lp: PdVisNetChartLoadParams): {
        queryData: any;
        formData: any;
        url: string;
    };
    /**
     * 创建边图例数据
     * @param {PdVisLinkLegendItem[]} data - 边图例插件数据
     * @return {PdVisLinkLegendItem[]} 边图例数据
     */
    protected buildLinkLegendData(data?: PdVisLinkLegendItem[]): PdVisLinkLegendItem[];
    /**
     * 生成数据异步加载配置
     * @param lp - 数据加载参数
     * @return {{queryData: any; formData: any; url: string}} 数据异步加载配置
     */
    protected buildLoaderParams(lp: PdVisNetChartLoadParams): {
        queryData: any;
        formData: any;
        url: string;
    };
    /**
     * 创建节点图例数据
     * @param {PdVisLegendItem[]} data - 节点图例插件数据
     * @return {PdVisLegendItem[]} 节点图例数据
     */
    protected buildNodeLegendData(data?: PdVisNodeLegendItem[]): PdVisNodeLegendItem[];
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
     * 合并生成视图配置
     * @param {PdSDKNetChartPluginSettings<PdVisPluginSettings>} settings - 用户定义配置
     * @param {PdVisPluginSettings} defaultSettings - 默认配置
     * @return {PdVisPluginSettings} 插件配置
     */
    protected createViewSettings(settings?: PdSDKNetChartViewSettings<PdViewSettings>, defaultSettings?: PdViewSettings): PdViewSettings;
    /**
     * 处理图数据
     * @param data - 原始图数据
     * @return {any} 满足网络关系图要求的图数据
     */
    protected dealGraphData(data: any): PdSDKNetChartData;
    /**
     * 销毁混合插件
     */
    protected destroyMixins(): void;
    /**
     * 销毁插件
     */
    protected destroyPlugins(): void;
    /**
     * 初始化图谱
     */
    protected graphInit(): Promise<PdSDKInitDataVO>;
    /**
     * 初始化图谱成功执行的方法
     * @param {any} data 初始化图谱返回的数据
     */
    protected graphInitSuccess(data: any): void;
    /**
     * 加载schema初始化
     */
    protected init(): void;
    /**
     * 初始化过滤配置项
     * @param config - 过滤配置项
     */
    protected initFilterOptions(config: any): void;
    /**
     * 初始化边图例
     * @param item 边图例项
     */
    protected initLinkLegendItem(item: PdVisLinkLegendItem): void;
    /**
     * 初始化混合插件
     */
    protected initMixins(): void;
    /**
     * 初始化网络关系图
     */
    protected initNetChart(): void;
    /**
     * 初始化节点图例
     * @param item 节点图例项
     */
    protected initNodeLegendItem(item: PdVisNodeLegendItem): void;
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKNetChartSettings} settings - 用户配置
     * @return {PdSDKNetChartSettings} 配置
     */
    protected initSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
    /**
     * 初始化额外视图
     */
    protected initView(): void;
    /**
     * 是否合并数据
     * @param lp - 请求参数
     * @return {boolean} - 是否合并
     */
    protected isExtend(lp: any): boolean;
    /**
     * 是否允许更新图探索的焦点
     * @param lp - 请求参数
     * @return {boolean} - 是否允许
     */
    protected isGraphFixedNodesUpdateable(lp: any): boolean;
    /**
     * loadParams更新之后执行的方法
     * @params {PdEventData} data - 事件数据
     */
    protected loadParamsUpdate(data: PdEventData): void;
    /**
     * 加载图谱Schema
     */
    protected loadSchema(): Promise<PdKGSchema>;
    /**
     * 生成数据加载的方法
     * @param {PdSDKKGSettings} loaderSettings - 数据加载配置
     * @return {($self: T, lp: PdVisNetChartLoadParams) => Promise<any>} 数据加载的方法
     */
    protected loader(loaderSettings: PdSDKKGSettings): ($self: T, lp: PdVisNetChartLoadParams) => Promise<any>;
    /**
     * 节点双击事件处理
     * @param {PdSDKNetChartDataNode} nodeData - 双击的节点数据
     */
    protected nodeDblClick(nodeData: PdSDKNetChartDataNode): void;
    /**
     * 节点转换为焦点参数
     * @param {PdSDKNetChartDataNode} node - 节点数据
     * @return {{ [key: string]: any }} - 焦点参数
     */
    protected transferNode2Param(node: PdSDKNetChartDataNode): {
        [key: string]: any;
    };
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 更新焦点信息
     */
    protected abstract updateFixedNodes(): void;
    /**
     * 更新探索的焦点
     */
    protected updateGraphFixedNodes(node: PdSDKNetChartDataNode): void;
    /**
     * 更新探索的请求参数
     */
    protected updateGraphLoadParams(): void;
    /**
     * 设置是否初始化完成
     */
    protected updateInitStatus(): void;
}
