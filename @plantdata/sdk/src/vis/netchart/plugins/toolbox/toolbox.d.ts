/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisChart } from '../../../chart';
import { PdVisToolItem, PdVisToolItemSettings } from '../../../utils/tool-item/tool-item';
/**
 * 工具插件配置
 */
export interface PdVisPluginToolBoxSettings extends PdVisPluginSettings {
    /**
     *  额外的工具选项
     */
    extraItems?: PdVisToolItemSettings[];
    /**
     *  内置的工具选项
     */
    items?: (string | PdVisToolItemSettings)[];
}
/**
 * 工具插件
 */
export declare abstract class PdVisPluginToolBox extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginToolBoxSettings;
    /**
     *  配置
     */
    settings: PdVisPluginToolBoxSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisChart;
    /**
     * 内部工具
     */
    protected tools: {
        [key: string]: PdVisToolItem;
    };
    /**
     * 构造方法
     * @param {PdVisPluginToolBoxSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisPluginToolBoxSettings);
    /**
     * 添加内容
     * @param {JQuery} $item - 内容
     */
    addItem($item: JQuery): void;
    /**
     * 添加工具选项
     * @param {string} name 按钮唯一标识
     * @param {PdVisToolItem} toolItem - 按钮实例
     */
    addToolItem(name: string, toolItem: PdVisToolItem): void;
    /**
     * 隐藏工具
     */
    hide(): void;
    /**
     * 显示工具
     */
    show(): void;
    /**
     * 创建工具的容器
     * @param exCls 额外的className
     */
    protected createContainer(exCls?: string): JQuery;
    /**
     * 生成工具中的按钮
     * @param items 工具中按钮的配置
     */
    protected createToolItems(items: (string | PdVisToolItemSettings)[]): void;
    /**
     * 内置工具
     * @return {PdVisToolItemSettings[]} - 内置工具集
     */
    protected defaultTools(): PdVisToolItemSettings[];
    /**
     * 初始化配置
     * @param {PdVisPluginToolBoxSettings} settings - 用户定义配置
     * @return {PdVisPluginToolBoxSettings} 配置
     */
    protected initSettings(settings: PdVisPluginToolBoxSettings): PdVisPluginToolBoxSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新工具选项
     */
    protected updateItems(): void;
}
