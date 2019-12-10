/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
/**
 * 文字提示工具
 */
export declare class PdUITooltip {
    /**
     *  文字提示工具属性的前缀
     */
    static attrName: string;
    /**
     *  设置内容显示不下时自动调整显示位置的属性
     */
    static attrAdjust: string;
    /**
     *  设置容器额外class的属性
     */
    static attrClass: string;
    /**
     *  设置文字提示工具容器的容器的属性
     */
    static attrContainer: string;
    /**
     *  设置生成内容方法的属性
     */
    static attrContainerFun: string;
    /**
     *  设置异步生成内容方法的属性
     */
    static attrContentAsync: string;
    /**
     *  设置异步生成内容时是否缓存内容的属性
     */
    static attrContentCache: string;
    /**
     *  设置内容选择器的属性
     */
    static attrContentSelector: string;
    /**
     *  设置与提示对象之间间隔的属性
     */
    static attrGutter: string;
    /**
     *  设置移开时隐藏延迟的属性
     */
    static attrHideDelay: string;
    /**
     *  设置文字提示工具的ID的属性
     */
    static attrId: string;
    /**
     *  标识为持久化的，不自动消失的属性
     */
    static attrPersist: string;
    /**
     *  设置显示位置的属性
     */
    static attrPosition: string;
    /**
     *  设置显示延迟的属性
     */
    static attrShowDelay: string;
    /**
     *  设置显示内容的属性
     */
    static attrTitle: string;
    /**
     *  默认的className
     */
    static clsName: string;
    /**
     *  默认的class
     */
    static cls: string;
    /**
     *  标识为指向箭头的className
     */
    static clsArrowName: string;
    /**
     *  标识为内容的className
     */
    static clsContentName: string;
    /**
     *  标识为内容容器的class
     */
    static clsInner: string;
    /**
     *  标识为内容容器的className
     */
    static clsInnerName: string;
    /**
     *  标识为加载动画的的className
     */
    static clsLoadingName: string;
    /**
     *  标识为显示的className
     */
    static clsShowName: string;
    /**
     *  标识为触发元素的className
     */
    static clsTriggerName: string;
    /**
     * 获取文字提示显示内容的容器
     * @param {JQuery} $triggerItem - 触发的元素
     * @return {JQuery} - 显示内容的容器
     */
    static getTargetByItem($triggerItem: JQuery): JQuery;
    /**
     * 初始化文字提示
     */
    static init(): void;
    /**
     * 更新文字提示的内容
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    static updateTooltip($triggerItem: JQuery): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
    /**
     * 计算显示内容容器的位置
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static calcPosition($triggerItem: JQuery): string;
    /**
     * 创建文字提示
     * @param settings - 配置项
     * @return {JQuery} 文字提示的JQuery对象
     */
    protected static createTooltip(settings: any): JQuery;
    /**
     * 获取生成文字提示容器的容器
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static getTargetContainer($triggerItem: JQuery): string;
    /**
     * 生成文字提示的内容
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static getTooltipContent($triggerItem: JQuery): PdSelector;
    /**
     * 隐藏文字提示
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static hideTooltip($triggerItem: JQuery): void;
    /**
     * 从远程获取数据
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static loadAsyncData($triggerItem: JQuery): void;
    /**
     * 比较默认位置是否足够显示
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     * @param {string} position - 位置信息
     */
    protected static matchPosition($triggerItem: JQuery, position: string): boolean;
    /**
     * 显示文字提示
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static showTooltip($triggerItem: JQuery): void;
    /**
     * 更新位置信息
     * @param {JQuery} $triggerItem - 触发元素的JQuery对象
     */
    protected static updatePosition($triggerItem: JQuery): void;
}
