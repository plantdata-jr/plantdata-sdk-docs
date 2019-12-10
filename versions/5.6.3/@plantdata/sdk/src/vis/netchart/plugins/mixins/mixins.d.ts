/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdSelector } from '../../../../common/common';
/**
 * 混合插件中子组件配置
 */
export interface PdVisPluginMixinsItemSettings {
    /**
     * 主体内容
     */
    body?: PdSelector;
    /**
     * 额外的class
     */
    cls?: string;
    /**
     * 隐藏头部的内容
     */
    hideHeader?: boolean;
    /**
     * 图标
     */
    icon?: PdSelector;
    /**
     * 面板中的顺序
     */
    index?: number;
    /**
     * 指定在面板元素中生成子组件
     */
    parent?: PdSelector;
    /**
     * 自插件的标题
     */
    title?: PdSelector;
}
/**
 * 混合插件配置
 */
export interface PdVisPluginMixinsSettings extends PdVisPluginSettings {
}
/**
 * 混合插件
 */
export declare abstract class PdVisPluginMixins extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginMixinsSettings;
    /**
     *  配置
     */
    settings: PdVisPluginMixinsSettings;
    /**
     * 子组件列表
     */
    protected $children: {
        index: number;
        child: JQuery;
        parent: PdSelector;
    }[];
    /**
     * 构造方法
     * @param {PdVisPluginMixinsSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisPluginMixinsSettings);
    /**
     * 添加子组件
     * @return {JQuery} - 子组件的JQuery对象
     */
    addChild(settings?: PdVisPluginMixinsItemSettings): JQuery;
    /**
     * 获取子组件的主体
     * @param {JQuery} $item - 子组件
     */
    getBody($item: JQuery): JQuery;
    /**
     * 获取子组件的头部
     * @param {JQuery} $item - 子组件
     */
    getHeader($item: JQuery): JQuery;
    /**
     *
     * 更新子组件的主体
     * @param {JQuery} $item - 子组件
     * @param {PdSelector} body - 主体内容
     */
    updateBody($item: JQuery, body?: PdSelector): void;
    /**
     * 更新子组件的头部
     * @param {JQuery} $item - 子组件
     * @param {PdSelector} title - 头部内容
     * @param {PdSelector} icon - 头部内容的图标
     */
    updateHeader($item: JQuery, title?: PdSelector, icon?: PdSelector): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginMixinsSettings} settings - 用户定义配置
     * @return {PdVisPluginMixinsSettings} 配置
     */
    protected initSettings(settings: PdVisPluginMixinsSettings): PdVisPluginMixinsSettings;
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
     * 子组件排序
     */
    protected orderChildren(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
