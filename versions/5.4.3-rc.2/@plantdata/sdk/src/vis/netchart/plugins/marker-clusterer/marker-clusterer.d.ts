/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisNetChart } from '../../netchart';
/**
 * 地图覆盖物聚合插件配置
 */
export interface PdVisPluginMarkerClustererSettings extends PdVisPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
}
/**
 * 地图覆盖物聚合插件
 */
export declare class PdVisPluginMarkerClusterer extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginMarkerClustererSettings;
    /**
     *  配置
     */
    settings: PdVisPluginMarkerClustererSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 地图覆盖物聚合工具实例
     */
    protected markerClusterer: any;
    /**
     * 是否聚合状态
     */
    protected isCluster: boolean;
    /**
     * 构造方法
     * @param {PdVisPluginMarkerClustererSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginMarkerClustererSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginMarkerClustererSettings} settings - 用户定义配置
     * @return {PdVisPluginMarkerClustererSettings} 配置
     */
    protected initSettings(settings: PdVisPluginMarkerClustererSettings): PdVisPluginMarkerClustererSettings;
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
