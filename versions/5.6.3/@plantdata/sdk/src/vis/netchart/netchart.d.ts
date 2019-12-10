/// <reference types="jquery" />
import { PdContainerMainSettings } from '../../container/container';
import { PdVisChart, PdVisChartCacheData, PdVisChartLoadParams, PdVisChartSettings } from '../chart';
import { PdVisNodeLegendItem } from './plugins/legend/node-legend/node-legend';
import { PdVisLinkLegendItem } from './plugins/legend/link-legend/link-legend';
/**
 *  可视化节点数据类型
 */
export declare type PdVisNodeId = number | string;
/**
 * 网络关系图组件加载数据参数的类型
 */
export declare type PdVisNetChartLoadParams = PdVisChartLoadParams;
/**
 *  节点，边状态
 */
export declare enum PdVisStatus {
    /**
     * 普通
     */
    NORMAL = "normal",
    /**
     * 弱化
     */
    REDUCE = "reduce",
    /**
     * 高亮
     */
    EMPHASIS = "emphasis",
    /**
     * 虚拟状态
     */
    VIRTUAL = "virtual"
}
/**
 * 网络关系图中项目的颜色配置
 */
export interface PdVisNetChartChartColorSettings {
    /**
     *  高亮时的颜色
     */
    emphasis?: string;
    /**
     *  默认颜色
     */
    normal?: string;
    /**
     *  弱化时的颜色
     */
    reduce?: string;
}
/**
 * 网络关系图中项目的半径配置
 */
export interface PdVisNetChartChartRadiusSettings {
    /**
     *  高亮时的半径
     */
    emphasis?: number;
    /**
     *  高亮时的半径缩放比率
     */
    emphasisRatio?: number;
    /**
     *  默认半径
     */
    normal?: number;
    /**
     *  弱化时的半径
     */
    reduce?: number;
    /**
     *  弱化时的半径缩放比率
     */
    reduceRatio?: number;
}
/**
 * 网络关系图节点配置
 */
export interface PdVisNetChartChartNodeSettings {
    /**
     *  颜色配置
     */
    color?: PdVisNetChartChartColorSettings;
    /**
     *  半径配置
     */
    radius?: PdVisNetChartChartRadiusSettings;
}
/**
 * 网络关系图边配置
 */
export interface PdVisNetChartChartLinkSettings {
    /**
     *  颜色配置
     */
    color?: PdVisNetChartChartColorSettings;
    /**
     *  半径配置
     */
    radius?: PdVisNetChartChartRadiusSettings;
}
/**
 * 网络关系图配置
 */
export interface PdVisNetChartChartSettings extends PdContainerMainSettings {
    /**
     *  回调事件
     */
    callback?: {
        /**
         * 全屏状态切换时的回调
         * @param {boolean} isFullscreen - 当前是否全屏
         */
        onFullscreen?: (isFullscreen: boolean) => void;
    };
    /**
     *  @deprecated
     *  颜色配置, 请在nodeSettings和linkSettings中进行设置
     */
    color?: {
        /**
         *  默认的高亮颜色
         */
        emphasis?: string;
        /**
         *  边默认颜色
         */
        link?: string;
        /**
         *  节点默认颜色
         */
        node?: string;
        /**
         *  默认的弱化颜色
         */
        reduce?: string;
    };
    /**
     *  是否同时显示历史数据
     */
    extend?: boolean;
    /**
     * 边设置
     */
    linkSettings?: PdVisNetChartChartLinkSettings;
    /**
     * 节点设置
     */
    nodeSettings?: PdVisNetChartChartNodeSettings;
    /**
     *  @deprecated
     *  节点半径配置, 请在nodeSettings和linkSettings中进行设置
     */
    radius?: PdVisNetChartChartRadiusSettings;
}
/**
 * 缓存数据的类型
 */
export interface PdVisNetChartCacheData extends PdVisChartCacheData {
    /**
     * 高亮节点列表
     */
    fixedNodes?: PdVisNetChartDataNode[];
}
/**
 * 网络关系图快照数据
 */
export interface PdVisNetChartSnapshot {
    /**
     * 拍摄时间
     */
    createTime: number;
    /**
     * 数据
     */
    data: PdVisNetChartData;
    /**
     * 快照描述
     */
    desc?: string;
    /**
     * 快照ID
     */
    id: string;
    /**
     * 边图例
     */
    linkLegends: PdVisLinkLegendItem[];
    /**
     * 边状态信息
     */
    linkStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 名称
     */
    name: string;
    /**
     * 节点图例
     */
    nodeLegends: PdVisNodeLegendItem[];
    /**
     * 节点状态信息
     */
    nodeStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 其他数据
     */
    [key: string]: any;
}
/**
 * 网络关系图组件配置
 */
export interface PdVisNetChartSettings extends PdVisChartSettings {
    /**
     *  网络关系图配置
     */
    main?: PdVisNetChartChartSettings;
    /**
     *  预置内容
     */
    payload?: {
        /**
         *  预置数据
         */
        data: PdVisNetChartData;
        /**
         *  预置数据对应的加载参数
         */
        loadParams?: PdVisNetChartLoadParams;
    };
}
/**
 * 边的信息
 */
export interface PdVisNetChartRInfo {
    /**
     *  信息的ID
     */
    id?: string;
    /**
     * 字段列表
     */
    ks?: string[];
    /**
     *  边的详细信息
     */
    kvs: {
        /**
         *  信息名
         */
        k: string;
        /**
         *  信息值
         */
        v: string;
    }[];
}
/**
 * 节点样式
 */
export interface PdVisNetChartDataNodeStyle {
    /**
     *  节点ID
     */
    id?: PdVisNodeId;
    /**
     * 标签样式
     */
    labelStyle?: {
        [key: string]: any;
    };
    /**
     * 节点样式
     */
    nodeStyle?: {
        [key: string]: any;
    };
}
/**
 * 边样式
 */
export interface PdVisNetChartDataLinkStyle {
    /**
     *  边ID
     */
    id?: string;
    /**
     * 边上标签的样式
     */
    labelStyle?: {
        [key: string]: any;
    };
    /**
     * 边样式
     */
    linkStyle?: {
        [key: string]: any;
    };
}
/**
 * GIS数据
 */
export interface PdVisNetChartDataGisInfo {
    /**
     * 地址详情
     */
    address: string;
    /**
     * 纬度
     */
    lat: number;
    /**
     * 经度
     */
    lng: number;
}
/**
 * 节点数据
 */
export interface PdVisNetChartDataNode extends PdVisNetChartDataNodeStyle {
    /**
     *  节点类型
     */
    classId?: PdVisNodeId;
    /**
     *  节点颜色
     */
    color?: string;
    /**
     * 地理信息
     */
    gis?: PdVisNetChartDataGisInfo;
    /**
     *  节点ID
     */
    id?: PdVisNodeId;
    /**
     *  节点图片
     */
    img?: string;
    /**
     *  节点名称
     */
    name?: string;
    /**
     *  节点半径
     */
    radius?: number;
    /**
     * 状态
     */
    status?: PdVisStatus;
    /**
     * 类别
     */
    type?: number;
}
/**
 * 边数据
 */
export interface PdVisNetChartDataLink extends PdVisNetChartDataLinkStyle {
    /**
     *  边类型
     */
    attId?: number;
    /**
     *  边名称
     */
    attName?: string;
    /**
     *  边颜色
     */
    color?: string;
    /**
     *  方向
     */
    direction?: 0 | 1;
    /**
     *  边显示名称
     */
    displayName?: string;
    /**
     *  边起点的ID
     */
    from?: PdVisNodeId;
    /**
     *  边的ID
     */
    id?: string;
    /**
     *  边的数值属性信息
     */
    nRInfo?: PdVisNetChartRInfo[];
    /**
     *  边的对象属性信息
     */
    oRInfo?: PdVisNetChartRInfo[];
    /**
     * 状态
     */
    status?: PdVisStatus;
    /**
     *  边终点的ID
     */
    to?: PdVisNodeId;
}
/**
 * 网络关系图数据
 */
export interface PdVisNetChartData {
    /**
     *  边数据
     */
    links: PdVisNetChartDataLink[];
    /**
     *  节点数据
     */
    nodes: PdVisNetChartDataNode[];
}
/**
 * 网络关系图数据的过滤规则
 */
export interface PdVisNetChartDataFilter {
    /**
     * 过滤方法
     * @param {PdVisNetChartData} data - 待过滤数据
     * @return {PdVisNetChartData} 过滤数据结果
     */
    filter: (data: PdVisNetChartData) => PdVisNetChartData;
    /**
     *  规则类型
     */
    type: string;
}
/**
 * 网络关系图组件
 */
export declare abstract class PdVisNetChart extends PdVisChart {
    /**
     *  强调色
     */
    static emphasisColor: string;
    /**
     *  边默认颜色
     */
    static linkColor: string;
    /**
     *  节点默认半径
     */
    static normalRadius: number;
    /**
     *  节点高亮时的半径
     */
    static emphasisRadius: number;
    /**
     *  主题颜色
     */
    static primaryColor: string;
    /**
     * 节点默认颜色
     */
    static nodeColor: string;
    /**
     *  弱化的颜色
     */
    static reduceColor: string;
    /**
     *  默认配置
     */
    static defaultSettings: PdVisNetChartSettings;
    /**
     *  信息详情的容器
     */
    $infoContainer: JQuery;
    /**
     *  当前数据
     */
    data: PdVisNetChartData;
    /**
     *  固定的边
     */
    fixedLinks: PdVisNetChartDataNode[];
    /**
     *  固定的节点
     */
    fixedNodes: PdVisNetChartDataNode[];
    /**
     *  历史数据列表
     */
    historyList: PdVisNetChartCacheData[];
    /**
     *  当前加载数据的参数
     */
    loadParams: PdVisNetChartLoadParams;
    /**
     *  配置
     */
    settings: PdVisNetChartSettings;
    /**
     * 快照数据列表
     */
    snapshotList: PdVisNetChartSnapshot[];
    /**
     * 候选数据缓存
     */
    protected availableDataCache: {
        [key: string]: PdVisNetChartData;
    };
    /**
     *  候选数据过滤器
     */
    protected availableDataFilters: PdVisNetChartDataFilter[];
    /**
     * 边的默认长度
     */
    protected defaultLinkLength: number;
    /**
     *  数据过滤器
     */
    protected filters: PdVisNetChartDataFilter[];
    /**
     *  边的图例映射
     */
    protected linkLegendMap: {
        [key: string]: PdVisLinkLegendItem;
    };
    /**
     *  边的图例
     */
    protected linkLegends: PdVisLinkLegendItem[];
    /**
     * 边状态映射表
     */
    protected linkStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 边样式映射表
     */
    protected linkStyleMap: {
        [key: string]: PdVisNetChartDataLink;
    };
    /**
     *  实体的图例映射
     */
    protected nodeLegendMap: {
        [key: string]: PdVisNodeLegendItem;
    };
    /**
     *  节点的图例
     */
    protected nodeLegends: PdVisNodeLegendItem[];
    /**
     * 节点状态映射表
     */
    protected nodeStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 节点样式映射表
     */
    protected nodeStyleMap: {
        [key: string]: PdVisNetChartDataNode;
    };
    /**
     * 生成边详细信息的HTML字符串
     * @param {PdVisNetChartDataLink} linkData - 边数据
     */
    static createLinkRInfo(linkData: PdVisNetChartDataLink): string;
    /**
     * 节点ID是否相等
     * @param {PdVisNodeId} id1 - 待比较的节点ID
     * @param {PdVisNodeId} id2 - 待比较的节点ID
     * @return {boolean} 是否相等
     */
    static idEquals(id1: PdVisNodeId, id2: PdVisNodeId): boolean;
    /**
     * 处理虚线数据
     * @param {any[]} lineDash - 待处理的虚线数据
     * @return {number[] | false} 处理后的虚线数据
     */
    static lineDashFilter(lineDash: any[]): number[] | false;
    /**
     * 生成边详细信息的HTML字符串
     * @param {PdVisNetChartDataLink} linkData - 边数据
     */
    protected static linkContentsFunction(linkData: PdVisNetChartDataLink): string;
    /**
     * 构造方法
     * @param {PdVisNetChartSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisNetChartSettings);
    /**
     * 清除高亮的边
     */
    clearEmphasisLink(): void;
    /**
     * 清除高亮节点
     */
    clearEmphasisNode(): void;
    /**
     * 清除边状态映射表
     */
    clearLinkStatus(): void;
    /**
     * 清除锁定状态的边
     */
    clearLockedLink(): void;
    /**
     * 清除锁定状态的节点
     */
    clearLockedNode(): void;
    /**
     * 清除节点状态
     */
    clearNodeStatus(): void;
    /**
     * 清除弱化的边
     */
    clearReducedLink(): void;
    /**
     * 清除弱化的节点
     */
    clearReducedNode(): void;
    /**
     * 清除边、节点状态
     */
    clearStatus(): void;
    /**
     * 删除已设置的候选数据过滤器
     * @param {string[]} types - 需要删除的过滤器类型
     */
    deleteAvailableDataFilter(types?: string[]): void;
    /**
     * 删除已设置的数据过滤器
     * @param {string[]} types - 需要删除的过滤器类型
     */
    deleteFilter(types?: string[]): void;
    /**
     * 过滤可获得的数据
     * @param {PdVisNetChartData} data - 待过滤的数据
     * @return {PdVisNetChartData} 过滤出来的节点列表
     */
    filterAvailableData(data: PdVisNetChartData): PdVisNetChartData;
    /**
     * 过滤节点
     * @param {PdVisNodeId[]} ids - 节点ID列表
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 过滤出来的节点列表
     */
    filterNodes(ids?: PdVisNodeId[], nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode[];
    /**
     * 查找节点
     * @param {PdVisNodeId} id - 节点ID
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 节点
     */
    findNode(id: PdVisNodeId, nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode;
    /**
     * 查找节点
     * @param value - 节点的匹配条件
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 节点
     */
    findNodeAdvance(value: {
        [key: string]: any;
    }, nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode;
    /**
     * 通过给定的Key查找节点,默认Key为ID
     * @param value - 节点的匹配值
     * @param {string} key - 节点的匹配key
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 节点
     */
    findNodeByKey(value: any, key?: string, nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode;
    /**
     * 获取当前未经过滤的所有数据
     * @return {PdVisNetChartData} 当前未经过滤的所有数据
     */
    getAvailableData(): PdVisNetChartData;
    /**
     * 获取已设置的候选数据过滤器
     * @param {string[]} types - 需要获取的过滤器类型
     * @return {PdVisNetChartDataFilter[]} 已设置的过滤器
     */
    getAvailableDataFilter(types?: string[]): PdVisNetChartDataFilter[];
    /**
     * 获取当前过滤后的所有数据
     * @return {PdVisNetChartData} 过滤后的所有数据
     */
    getData(): PdVisNetChartData;
    /**
     * 获取高亮的边
     * @return 高亮的边
     */
    getEmphasisLink(): {
        [key: string]: boolean;
    };
    /**
     * 获取高亮的节点
     * @return 高亮的节点
     */
    getEmphasisNode(): {
        [key: string]: boolean;
    };
    /**
     * 获取已设置的数据过滤器
     * @param {string[]} types - 需要获取的过滤器类型
     * @return {PdVisNetChartDataFilter[]} 已设置的过滤器
     */
    getFilter(types?: string[]): PdVisNetChartDataFilter[];
    /**
     * 获取边的高亮颜色
     * @return {string} 高亮颜色
     */
    getLinkEmphasisColor(): string;
    /**
     * 获取边高亮半径比率
     */
    getLinkEmphasisRadiusRatio(): number;
    /**
     * 获取边的图例
     * @param {PdVisNetChartDataLink} linkData - 边数据
     */
    getLinkLegend(linkData: PdVisNetChartDataLink): PdVisLinkLegendItem;
    /**
     * 获取所有边图例
     */
    getLinkLegends(): PdVisLinkLegendItem[];
    /**
     * 获取边的虚化颜色
     * @return {string} 虚化颜色
     */
    getLinkReduceColor(): string;
    /**
     * 获取边虚化半径比率
     */
    getLinkReduceRadiusRatio(): number;
    /**
     * 获取锁定状态的边的ID
     */
    getLockedLink(): {
        [key: string]: boolean;
    };
    /**
     * 获取锁定状态的节点的ID
     */
    getLockedNode(): {
        [key: string]: boolean;
    };
    /**
     * 获取节点高亮颜色
     */
    getNodeEmphasisColor(): string;
    /**
     * 获取节点高亮半径比率
     */
    getNodeEmphasisRadiusRatio(): number;
    /**
     * 获取节点的图例
     * @param {PdVisNetChartDataNode} nodeData - 节点数据
     */
    getNodeLegend(nodeData: PdVisNetChartDataNode): PdVisNodeLegendItem;
    /**
     * 获取所有节点图例
     */
    getNodeLegends(): PdVisNodeLegendItem[];
    /**
     * 获取节点虚化颜色
     */
    getNodeReduceColor(): string;
    /**
     * 获取节点虚化半径比率
     */
    getNodeReduceRadiusRatio(): number;
    /**
     * 获取弱化的的边
     * @return 弱化的边id
     */
    getReducedLink(): {
        [key: string]: boolean;
    };
    /**
     * 获取弱化的的节点
     * @return 弱化的节点id
     */
    getReducedNode(): {
        [key: string]: boolean;
    };
    /**
     * 是否固定边
     * @param {string} id - 边ID
     * @return {boolean} 是否固定边
     */
    isFixedLink(id: string): boolean;
    /**
     * 是否固定节点
     * @param {PdVisNodeId} id - 节点ID
     * @return {boolean} 是否固定节点
     */
    isFixedNode(id: PdVisNodeId): boolean;
    /**
     * 根据图例状态过滤数据
     * @param {PdVisNetChartData} data - 待过滤的数据
     * @return {PdVisNetChartData} 过滤的结果数据
     */
    legendFilter(data: PdVisNetChartData): PdVisNetChartData;
    /**
     * 边箭头是否显示
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 是否显示
     */
    linkArrowShow(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): boolean;
    /**
     * 计算边的颜色
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 边的颜色
     */
    linkColor(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): string;
    /**
     * 边的默认颜色
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 默认颜色
     */
    linkDefaultColor(legend?: PdVisLinkLegendItem): string;
    /**
     * 边的默认距离
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {number} 默认距离
     */
    linkDefaultLength(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): number;
    /**
     * 节点的默认边框虚线
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} - 默认边框虚线
     */
    linkDefaultLineDash(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): number[];
    /**
     * 边的默认宽度
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {number} 边的宽度
     */
    linkDefaultRadius(legend?: PdVisLinkLegendItem): number;
    /**
     * 边的显示属性
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 边的颜色
     */
    linkDisplayAtt(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): string;
    /**
     * 边标签的颜色
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} - 颜色
     */
    linkLabelColor(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): string;
    /**
     * 边标签的默认颜色
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 默认颜色
     */
    linkLabelDefaultColor(legend?: PdVisLinkLegendItem): string;
    /**
     * 边标签是否显示
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 是否显示
     */
    linkLabelShow(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): boolean;
    /**
     * 计算边的宽度
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} 边的宽度
     */
    linkLength(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): number;
    /**
     * 计算边的虚线
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的边框虚线
     */
    linkLineDash(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): number[];
    /**
     * 计算边的宽度
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} 边的宽度
     */
    linkRadius(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): number;
    /**
     * 计算边的状态
     * @param {PdVisNetChartDataLink} linkData - 边数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 边状态
     */
    linkStatus(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): string;
    /**
     * 加载数据
     * @param {PdVisNetChartLoadParams} lp - 加载数据的参数
     * @param {string} source - 请求来源
     * @return {Promise} 加载数据的Promise
     */
    load(lp: PdVisNetChartLoadParams, source?: string): Promise<PdVisNetChartData>;
    /**
     * 计算节点的颜色
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的颜色
     */
    nodeColor(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点的默认颜色
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 默认颜色
     */
    nodeDefaultColor(legend?: PdVisNodeLegendItem): string;
    /**
     * 节点的默认边框颜色
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @return {string} - 默认边框颜色
     */
    nodeDefaultDisplay(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 节点的默认边框颜色
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @return {string} - 默认边框颜色
     */
    nodeDefaultLineColor(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 节点的默认边框虚线
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 默认边框虚线
     */
    nodeDefaultLineDash(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): number[];
    /**
     * 节点的默认边框宽度
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @return {string} - 默认边框宽度
     */
    nodeDefaultLineWidth(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): number;
    /**
     * 节点的默认半径
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {number} - 节点的半径
     */
    nodeDefaultRadius(legend?: PdVisNodeLegendItem): number;
    /**
     * 计算节点的展示形式
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的展示形式
     */
    nodeDisplay(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点图片
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 图片
     */
    nodeImage(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 图片展示模式
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点图片展示模式
     */
    nodeImageMode(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点标签是否显示
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 是否显示
     */
    nodeImageShow(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): boolean;
    /**
     * 节点标签的颜色
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} - 颜色
     */
    nodeLabelColor(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点标签的默认颜色
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 默认颜色
     */
    nodeLabelDefaultColor(legend?: PdVisNodeLegendItem): string;
    /**
     * 获取节点标签显示位置
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点标签显示位置
     */
    nodeLabelPosition(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 是否支持更新节点标签显示位置
     * @return {boolean} 是否支持更新
     */
    nodeLabelPositionUpdatable(): boolean;
    /**
     * 节点标签是否显示
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 是否显示
     */
    nodeLabelShow(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): boolean;
    /**
     * 计算节点的的边框颜色
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的边框颜色
     */
    nodeLineColor(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 计算节点的虚线
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的边框虚线
     */
    nodeLineDash(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): number[];
    /**
     * 计算节点的的边框宽度
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的边框宽度
     */
    nodeLineWidth(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): number;
    /**
     * 节点的半径
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} - 节点的半径
     */
    nodeRadius(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): number;
    /**
     * 计算节点的状态
     * @param {PdVisNetChartDataNode} nodeData - 节点数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 节点状态
     */
    nodeStatus(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 重新加载数据
     * @return {Promise<PdVisNetChartData>} 加载数据的Promise
     */
    reload(): Promise<PdVisNetChartData>;
    /**
     * 重置布局
     */
    abstract resetLayout(): void;
    /**
     * 重置图表尺寸
     */
    abstract resize(): void;
    /**
     * 还原快照
     */
    restoreSnapshot(idx: number): void;
    /**
     * 设置候选数据过滤器
     * @param {PdVisNetChartDataFilter} dataFilter - 数据过滤器
     */
    setAvailableDataFilter(dataFilter: PdVisNetChartDataFilter): void;
    /**
     * 设置高亮的边
     * @param {string[]} ids - 高亮的边ID
     */
    setEmphasisLink(ids: string[]): void;
    /**
     * 设置高亮的节点
     * @param {PdVisNodeId[]} ids - 高亮的节点ID
     */
    setEmphasisNode(ids: PdVisNodeId[]): void;
    /**
     * 设置数据过滤器
     * @param {PdVisNetChartDataFilter} dataFilter - 数据过滤器
     */
    setFilter(dataFilter: PdVisNetChartDataFilter): void;
    /**
     * 设置边的高亮颜色
     * @params {string} color 高亮颜色
     */
    setLinkEmphasisColor(color: string): void;
    /**
     * 设置边高亮半径比率
     * @param {number} ratio 高亮比率
     */
    setLinkEmphasisRadiusRatio(ratio: number): void;
    /**
     * 设置边的虚化颜色
     * @params {string} color 虚化颜色
     */
    setLinkReduceColor(color: string): void;
    /**
     * 设置边虚化半径比率
     * @param {number} ratio 虚化比率
     */
    setLinkReduceRadiusRatio(ratio: number): void;
    /**
     * 设置边的样式
     * @param {string[]} ids - 边ID
     * @param {PdVisNetChartDataLinkStyle} style - 样式
     */
    setLinkStyle(ids: string[], style: PdVisNetChartDataLinkStyle): void;
    /**
     * 设置锁定状态的边
     * @param {string[]} ids - 锁定样式的边ID
     */
    setLockedLink(ids: string[]): void;
    /**
     * 设置锁定状态的节点
     * @param {PdVisNodeId[]} ids - 锁定样式的节点ID
     */
    setLockedNode(ids: PdVisNodeId[]): void;
    /**
     * 设置节点高亮颜色
     * @param {string} color 高亮颜色
     */
    setNodeEmphasisColor(color: string): void;
    /**
     * 设置节点高亮半径比率
     * @param {number} ratio 高亮比率
     */
    setNodeEmphasisRadiusRatio(ratio: number): void;
    /**
     * 设置节点虚化颜色
     * @param {string} color 虚化颜色
     */
    setNodeReduceColor(color: string): void;
    /**
     * 设置节点虚化半径比率
     * @param {number} ratio 虚化比率
     */
    setNodeReduceRadiusRatio(ratio: number): void;
    /**
     * 设置节点的样式
     * @param {PdVisNodeId[]} ids - 节点ID
     * @param {PdVisNetChartDataNodeStyle} style - 样式
     */
    setNodeStyle(ids: PdVisNodeId[], style: PdVisNetChartDataNodeStyle): void;
    /**
     * 设置弱化的边
     * @param {string[]} ids - 弱化的边ID
     */
    setReducedLink(ids: string[]): void;
    /**
     * 设置弱化的节点
     * @param {PdVisNodeId[]} ids - 弱化的节点ID
     */
    setReducedNode(ids: PdVisNodeId[]): void;
    /**
     * 拍摄快照
     */
    takeSnapshot(name: string, desc: string): void;
    /**
     * 更新图表
     */
    abstract updateChart(): void;
    /**
     * 更新边的图例
     * @param {PdVisLinkLegendItem[]} legends - 图例
     */
    updateLinkLegend(legends: PdVisLinkLegendItem[]): void;
    /**
     * 设置边的状态
     * @param {string[]} ids - 边ID
     * @param {'' | PdVisStatus} status - 状态
     */
    updateLinkStatus(ids: string[], status?: '' | PdVisStatus): void;
    /**
     * 更新节点标签显示位置
     * @param {string} position - 标签显示
     */
    updateNodeLabelPosition(position: string): void;
    /**
     * 更新节点图例
     * @param {PdVisNodeLegendItem[]} legends - 图例
     */
    updateNodeLegend(legends: PdVisNodeLegendItem[]): void;
    /**
     * 设置节点的状态
     * @param {PdVisNodeId[]} ids - 节点ID
     * @param {'' | PdVisStatus} status - 状态
     */
    updateNodeStatus(ids: PdVisNodeId[], status?: '' | PdVisStatus): void;
    /**
     * 更新样式
     */
    updateStyle(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 绘制图表数据
     */
    protected draw(): void;
    /**
     * 初始化图表插件
     */
    protected abstract initChart(): void;
    /**
     * 初始化主面板
     */
    protected initMainPanel(): void;
    /**
     * 初始化配置
     * @param {PdVisNetChartSettings} settings - 用户定义配置
     * @return {PdVisNetChartSettings} 配置
     */
    protected initSettings(settings: PdVisNetChartSettings): PdVisNetChartSettings;
    /**
     * 计算边的颜色
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 边的颜色
     */
    protected linkColorFunction(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): string;
    /**
     * 计算边的宽度
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} 边的宽度
     */
    protected linkRadiusFunction(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): number;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 计算节点的颜色
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的颜色
     */
    protected nodeColorFunction(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点双击事件处理
     * @param {PdVisNetChartDataNode} nodeData - 双击的节点
     */
    protected nodeDblClick(nodeData: PdVisNetChartDataNode): void;
    /**
     * 计算节点的半径
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} - 节点的半径
     */
    protected nodeRadiusFunction(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): number;
    /**
     * 预处理数据
     */
    protected preprocessData(): void;
}
