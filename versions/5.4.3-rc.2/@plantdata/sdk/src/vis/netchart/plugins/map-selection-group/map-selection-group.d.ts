/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisNetChart } from '../../netchart';
/**
 * 地图区域选择插件样式配置
 */
export interface PdVisGisBaiduStyleSettings {
    /**
     * 边框颜色
     */
    strokeColor?: string;
    /**
     * 填充颜色
     */
    fillColor?: string;
    /**
     * 边框粗细
     */
    strokeWeight?: number;
    /**
     * 边框透明度
     */
    strokeOpacity?: number;
    /**
     * 填充透明度
     */
    fillOpacity?: number;
    /**
     * 边框样式 solid 或 dashed
     */
    strokeStyle?: 'solid' | 'dashed';
}
/**
 * 地图区域选择插件配置
 */
export interface PdVisPluginMapSelectionGroupSettings extends PdVisPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * 地图区域选择工具样式配置
     */
    drawingManagerSettings?: {
        /**
         * 是否默认开启
         */
        isOpen?: boolean;
        /**
         * 选择工具类型
         */
        drawingType?: string;
        /**
         * 圆形区域选择工具样式配置
         */
        circleOptions?: PdVisGisBaiduStyleSettings;
        /**
         * 方形区域选择工具样式配置
         */
        rectangleOptions?: PdVisGisBaiduStyleSettings;
    };
    /**
     * 区域选择工具公共样式配置
     */
    drawingStyle?: PdVisGisBaiduStyleSettings;
}
/**
 * 自定义百度地图控件的配置
 */
export interface PdVisBaiduNetChartCustomControlSettings {
    /**
     * 默认位置
     */
    defaultAnchor?: string;
    /**
     * 默认偏移
     */
    defaultOffset?: [number, number];
    /**
     * 控件内容
     */
    template?: HTMLElement;
}
/**
 * 地图区域选择插件
 */
export declare class PdVisPluginMapSelectionGroup extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginMapSelectionGroupSettings;
    /**
     *  配置
     */
    settings: PdVisPluginMapSelectionGroupSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 键盘ctrl按键按下事件
     */
    protected ctrlOpenEvent: (e: JQuery.KeyDownEvent) => void;
    /**
     * 键盘ctrl按键弹起事件
     */
    protected ctrlCloseEvent: (e: JQuery.KeyUpEvent) => void;
    /**
     * 区域选择工具
     */
    protected drawingManager: any;
    /**
     * 选择的区域
     */
    protected selectedOverlay: any;
    /**
     * 构造方法
     * @param {PdVisPluginMapSelectionGroupSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginMapSelectionGroupSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 设置当前选择方式
     * @param {'handler' | 'circle' | 'rectangle'} mode - 选择的方式，handler表示不选择
     */
    setDrawingMode(mode: 'handler' | 'circle' | 'rectangle'): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginMapSelectionGroupSettings} settings - 用户定义配置
     * @return {PdVisPluginMapSelectionGroupSettings} 配置
     */
    protected initSettings(settings: PdVisPluginMapSelectionGroupSettings): PdVisPluginMapSelectionGroupSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
