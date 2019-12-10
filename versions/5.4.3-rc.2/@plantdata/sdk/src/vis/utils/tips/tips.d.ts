/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 提示组件配置
 */
export interface PdVisTipsSettings extends PdComponentSettings {
    /**
     * 关闭前执行的事件
     */
    beforeClose?: Function;
    /**
     * 是否可关闭
     */
    closable?: boolean;
    /**
     * 关闭按钮自定义文本
     */
    closeText?: string;
    /**
     * 生成组件的容器
     */
    selector?: PdSelector;
    /**
     * 是否显示图标
     */
    showIcon?: boolean;
    /**
     * 提示内容
     */
    tip?: string;
    /**
     * 滚动提示内容
     */
    tips?: string[];
    /**
     * 组件类型
     */
    type?: 'success' | 'warning' | 'info' | 'error';
}
/**
 * 提示组件
 */
export declare class PdVisTips extends PdComponent {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisTipsSettings;
    /**
     *  配置项
     */
    settings: PdVisTipsSettings;
    /**
     *  生成组件的容器
     */
    protected selector?: PdSelector;
    /**
     * 构造方法
     * @param {PdVisTipsSettings} settings - 用户配置
     */
    constructor(settings?: PdVisTipsSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
