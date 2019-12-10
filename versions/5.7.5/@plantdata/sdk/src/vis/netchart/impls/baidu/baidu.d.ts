import { PdMap, PdSelector } from '../../../../common/common';
import { PdVisNetChart, PdVisNetChartChartSettings, PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode, PdVisNetChartSettings, PdVisNodeId } from '../../netchart';
/**
 * GIS坐标
 */
export interface Point {
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
 * baidu地图配置
 */
export interface PdVisBaiduNetChartChartSettings extends PdVisNetChartChartSettings {
    /**
     * 默认中心
     */
    center?: string;
    /**
     * 生成地图的Dom
     */
    container?: PdSelector;
    /**
     * 是否允许缩放
     */
    enableScrollWheelZoom?: boolean;
    /**
     * 地图样式
     */
    mapStyle?: any;
    /**
     * 缩放最大层级
     */
    maxZoom?: number;
    /**
     * 缩放最小层级
     */
    minZoom?: number;
    /**
     * 默认缩放比例尺
     */
    zoom?: number;
}
/**
 * 节点数据
 */
export interface PdVisBaiduNetChartDataNode extends PdVisNetChartDataNode {
    /**
     * 序号
     */
    index?: number;
}
/**
 * baidu地图配置
 */
export interface PdVisBaiduNetChartData extends PdVisNetChartData {
    /**
     *  边数据
     */
    links: PdVisNetChartDataLink[];
    /**
     *  节点数据
     */
    nodes: PdVisBaiduNetChartDataNode[];
}
/**
 * baidu地图网络关系图配置
 */
export interface PdVisBaiduNetChartSettings extends PdVisNetChartSettings {
    /**
     *  baidu地图配置
     */
    main?: PdVisBaiduNetChartChartSettings;
}
/**
 * baidu地图网络关系图
 */
export declare class PdVisBaiduNetChart extends PdVisNetChart {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisBaiduNetChartSettings;
    /**
     *  配置
     */
    settings: PdVisBaiduNetChartSettings;
    /**
     * 地图上覆盖物的ID映射
     */
    protected nodeOverlayMap: PdMap<any>;
    /**
     * 节点起点位置的映射
     */
    protected nodePosMap: PdMap<any>;
    /**
     * 地图上的覆盖物
     */
    protected overlays: any[];
    /**
     * 地图上的轨迹覆盖物
     */
    protected traceOverlays: any[];
    /**
     * 构造方法
     * @param {PdVisBaiduNetChartSettings} settings - 用户配置
     */
    constructor(settings?: PdVisBaiduNetChartSettings);
    /**
     * 清除覆盖物
     */
    clearData(): void;
    /**
     * 清除地图上的覆盖物
     */
    clearOverlays(): void;
    /**
     * 清除地图上的轨迹覆盖物
     */
    clearTraceOverlays(): void;
    /**
     * 获取当前过滤后的所有数据
     * @return {PdVisBaiduNetChartData} 过滤后的所有数据
     */
    getData(): PdVisBaiduNetChartData;
    /**
     * 实体覆盖物的样式
     * @param {PdVisNetChartDataNode} nodeData - 实体信息
     * @param marker - 覆盖物实例
     */
    nodeStyleFunction(nodeData: PdVisNetChartDataNode, marker: any): void;
    /**
     * 重新布局
     */
    resetLayout(): void;
    /**
     * 重制大小
     */
    resize(): void;
    /**
     * 执行运动轨迹
     * @param ids 要执行运动轨迹的节点ID列表
     */
    run(ids?: PdVisNodeId[]): void;
    /**
     * 经纬度坐标转换
     * @params {[number, number][]} points - 待转换的坐标集合
     * @params {number} from - 原坐标系
     * 1：GPS设备获取的角度坐标，WGS84坐标; （默认）
     * 2：GPS获取的米制坐标、sogou地图所用坐标;
     * 3：google地图、soso地图、aliyun地图、mapabc地图和amap地图所用坐标，国测局（GCJ02）坐标;
     * 4：3中列表地图坐标对应的米制坐标;
     * 5：百度地图采用的经纬度坐标;
     * 6：百度地图采用的米制坐标;
     * 7：mapbar地图坐标;
     * 8：51地图坐标
     *
     * @params {number} to - 转换后的坐标系
     * 3：国测局（GCJ02）坐标;
     * 4：3中对应的米制坐标;
     * 5：bd09ll(百度经纬度坐标); （默认）
     * 6：bd09mc(百度米制经纬度坐标)
     * @params {(data: any) => void} callback - 转换完成的回调方法
     */
    translate(points: [number, number][], from: number, to: number, callback: (data: any) => void): void;
    /**
     * 更新网络关系图
     */
    updateChart(): void;
    /**
     * 更新样式
     */
    updateStyle(): void;
    /**
     * 创建实体覆盖物
     * @param {PdVisNetChartDataNode} nodeData - 实体信息
     */
    protected createMarker(nodeData: PdVisNetChartDataNode): any;
    /**
     * 获取实体的第一个GIS信息
     * @param {PdVisNetChartDataNode} nodeData 实体数据
     */
    protected getNodeFirstGisInfo(nodeData: PdVisNetChartDataNode): Point;
    /**
     * 初始化地图
     */
    protected initChart(): void;
    /**
     * 初始化配置
     * @param {PdVisBaiduNetChartSettings} settings - 用户配置
     * @return {PdVisBaiduNetChartSettings} 配置
     */
    protected initSettings(settings: PdVisBaiduNetChartSettings): PdVisBaiduNetChartSettings;
}
