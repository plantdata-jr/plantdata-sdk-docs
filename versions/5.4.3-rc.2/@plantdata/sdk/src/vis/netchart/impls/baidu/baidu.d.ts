import { PdSelector } from '../../../../common/common';
import { PdVisNetChartChartSettings, PdVisNetChartData, PdVisNetChartLoadParams, PdVisNetChartSettings, PdVisNetChart, PdVisNetChartDataNode } from '../../netchart';
/**
 * GIS坐标
 */
export interface Point {
    /**
     * 经度
     */
    lng: number;
    /**
     * 纬度
     */
    lat: number;
}
/**
 * baidu地图配置
 */
export interface PdVisBaiduNetChartChartSettings extends PdVisNetChartChartSettings {
    /**
     * 是否允许缩放
     */
    enableScrollWheelZoom?: boolean;
    /**
     * 默认中心
     */
    center?: string;
    /**
     * 生成地图的Dom
     */
    container?: PdSelector;
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
 * baidu地图网络关系图配置
 */
export interface PdVisBaiduNetChartSettings extends PdVisNetChartSettings {
    /**
     *  baidu地图配置
     */
    main?: PdVisBaiduNetChartChartSettings;
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
     * 地图上的实体
     */
    protected overlays: any[];
    /**
     * 清除数据
     */
    clearData(): void;
    /**
     * 清除地图上的实体
     */
    clearOverlays(): void;
    /**
     * 构造方法
     * @param {PdVisBaiduNetChartSettings} settings - 用户配置
     */
    constructor(settings?: PdVisBaiduNetChartSettings);
    /**
     * 重新布局
     */
    resetLayout(): void;
    /**
     * 重制大小
     */
    resize(): void;
    /**
     * 坐标转换
     * @params {[number, number][]} points - 待转换的坐标集合
     * @params {number} from - 原坐标系
     1：GPS设备获取的角度坐标，WGS84坐标; （默认）
     2：GPS获取的米制坐标、sogou地图所用坐标;
     3：google地图、soso地图、aliyun地图、mapabc地图和amap地图所用坐标，国测局（GCJ02）坐标;
     4：3中列表地图坐标对应的米制坐标;
     5：百度地图采用的经纬度坐标;
     6：百度地图采用的米制坐标;
     7：mapbar地图坐标;
     8：51地图坐标
     *
     * @params {number} to - 转换后的坐标系
     3：国测局（GCJ02）坐标;
     4：3中对应的米制坐标;
     5：bd09ll(百度经纬度坐标); （默认）
     6：bd09mc(百度米制经纬度坐标)
     * @params {(data: any) => void} callback - 转换完成的回调方法
     */
    translate(points: [number, number][], from: number, to: number, callback: (data: any) => void): void;
    /**
     * 更新网络关系图
     */
    updateChart(): void;
    /**
     * 创建实体标注
     * @param {PdVisNetChartDataNode[]} list - 实体信息
     */
    protected createMarker(list: PdVisNetChartDataNode[]): void;
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
