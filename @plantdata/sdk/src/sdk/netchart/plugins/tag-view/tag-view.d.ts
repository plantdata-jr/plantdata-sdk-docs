/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../../../../vis/netchart/plugins/plugin';
import { PdVisNetChart } from '../../../../vis/netchart/netchart';
import { PdSDKNetChartDataNode } from '../../model';
/**
 * 可视化配置插件配置
 */
export interface PdSDKPluginTagViewSettings extends PdVisPluginSettings {
}
/**
 * 可视化配置模块配置
 */
export declare class PdSDKPluginTagView extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTagViewSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginTagViewSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  节点数据
     */
    protected nodes: PdSDKNetChartDataNode[];
    /**
     * 构造方法
     * @param {PdSDKPluginTagViewSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTagViewSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginTagViewSettings} settings - 用户定义配置
     * @return {PdSDKPluginTagViewSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTagViewSettings): PdSDKPluginTagViewSettings;
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
     * 设置标签信息
     * @param tags - 节点数据
     */
    protected setTagViewHTML(tags: any): void;
}
