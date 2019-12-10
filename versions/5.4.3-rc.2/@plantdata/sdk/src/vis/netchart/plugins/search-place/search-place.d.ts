/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisNetChart } from '../../netchart';
import { PdUIAutocomplete, PdUIAutocompleteSettings } from '../../../../ui/components/autocomplete/autocomplete';
/**
 * 地点查询插件配置
 */
export interface PdVisPluginSearchPlaceSettings extends PdVisPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  提示插件的配置
     */
    settings?: PdUIAutocompleteSettings;
}
/**
 * 地点查询插件
 */
export declare class PdVisPluginSearchPlace extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginSearchPlaceSettings;
    /**
     *  配置
     */
    settings: PdVisPluginSearchPlaceSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  地点查询提示插件
     */
    protected searchPlace: PdUIAutocomplete;
    /**
     * 构造方法
     * @param {PdVisPluginSearchPlaceSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginSearchPlaceSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginSearchPlaceSettings} settings - 用户定义配置
     * @return {PdVisPluginSearchPlaceSettings} 配置
     */
    protected initSettings(settings: PdVisPluginSearchPlaceSettings): PdVisPluginSearchPlaceSettings;
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
