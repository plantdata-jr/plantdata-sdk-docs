/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../../../../vis/netchart/plugins/plugin';
import { PdVisNetChart } from '../../../../vis/netchart/netchart';
import { PdSDKNetChartDataNode } from '../../model';
/**
 * 可视化配置插件配置
 */
export interface PdSDKPluginTagInfoSettings extends PdVisPluginSettings {
}
/**
 * 可视化配置模块配置
 */
export declare class PdSDKPluginTagInfo extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTagInfoSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginTagInfoSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdSDKPluginTagInfoSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTagInfoSettings);
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
     * @param {PdSDKPluginTagInfoSettings} settings - 用户定义配置
     * @return {PdSDKPluginTagInfoSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTagInfoSettings): PdSDKPluginTagInfoSettings;
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
     * @param data - 节点数据
     */
    protected setTagInfoHTML(data: PdSDKNetChartDataNode): void;
}
