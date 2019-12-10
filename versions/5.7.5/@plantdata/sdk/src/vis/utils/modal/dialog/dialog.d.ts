/// <reference types="jquery" />
import { PdVisModal, PdVisModalSettings } from '../modal';
import { PdSelector } from '../../../../common';
/**
 * 可视化弹出框配置
 */
export interface PdVisDialogSettings extends PdVisModalSettings {
    /**
     * 否定按钮点击回调
     * @param {JQuery.ClickEvent} event 点击事件对象
     * @param {PdVisDialogSettings} settings - 弹出框配置
     * @return {Promise} - 异步实例
     */
    negativeClick?: (event: JQuery.ClickEvent, settings: PdVisDialogSettings) => Boolean | Promise<any>;
    /**
     * 否定按钮显示文本
     */
    negativeText?: string;
    /**
     * 肯定按钮点击回调
     * @param {JQuery.ClickEvent} event 点击事件对象
     * @param {PdVisDialogSettings} settings - 弹出框配置
     * @return {Promise} - 异步实例
     */
    positiveClick?: (event: JQuery.ClickEvent, settings: PdVisDialogSettings) => Boolean | Promise<any>;
    /**
     * 肯定按钮显示文本
     */
    positiveText?: string;
    /**
     * 触发显示弹框的事件
     */
    triggerEvent?: string;
    /**
     * 触发显示弹框的元素或选择器
     */
    triggerItem?: PdSelector;
}
/**
 * 可视化弹出框
 */
export declare class PdVisDialog extends PdVisModal {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisDialogSettings;
    /**
     *  配置
     */
    settings: PdVisDialogSettings;
    /**
     * 构造方法
     * @param {PdVisDialogSettings} settings - 用户配置
     */
    constructor(settings?: PdVisDialogSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisDialogSettings} settings - 用户定义配置
     * @return {PdVisDialogSettings} 配置
     */
    protected initSettings(settings: PdVisDialogSettings): PdVisDialogSettings;
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
