/// <reference types="jquery" />
import { PdUIAutofill, PdUIAutofillSettings } from './autofill';
/**
 * Input型自动完成组件中图标的配置
 */
export interface PdUIAutocompleteIconSettings {
    /**
     *  是否允许点击
     */
    click?: boolean;
    /**
     *  图标内容
     */
    content?: string;
    /**
     *  是否显示图标
     */
    enable?: boolean;
    /**
     * 点击时执行的事件
     * @param {PdUIAutocomplete} ins - Input型自动完成组件实例
     * @param event - 点击的事件对象
     */
    onClick?: (ins: PdUIAutocomplete, event: JQuery.ClickEvent) => void;
}
/**
 * Input型自动完成组件配置
 */
export interface PdUIAutocompleteSettings extends PdUIAutofillSettings {
    /**
     *  Input型自动完成组件中icon配置
     */
    icon?: {
        /**
         *  关闭图标的配置
         */
        close?: PdUIAutocompleteIconSettings;
        /**
         *  回车图标的配置
         */
        enter?: PdUIAutocompleteIconSettings;
        /**
         *  搜索图标的配置
         */
        search?: PdUIAutocompleteIconSettings;
    };
    /**
     *  Input型自动完成组件的大小 可选：xs，sm，md，lg
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /**
     *  Input型自动完成组件的类型 可选：default，normal
     */
    theme?: string;
}
/**
 * Input型自动完成组件
 */
export declare class PdUIAutocomplete extends PdUIAutofill {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIAutocompleteSettings;
    /**
     *  组件默认的className
     */
    protected static clsName: string;
    /**
     *  组件默认的class
     */
    protected static cls: string;
    /**
     *  图标可点击时的className
     */
    protected static clsClickableName: string;
    /**
     *  Input型自动完成组件容器的className
     */
    protected static clsPromptName: string;
    /**
     *  配置
     */
    settings: PdUIAutocompleteSettings;
    /**
     * 构造方法
     * @param {PdUIAutocompleteSettings} settings - 用户配置
     */
    constructor(settings?: PdUIAutocompleteSettings);
    /**
     * 创建图标
     * @param {PdUIAutocompleteIconSettings} settings - 图标配置
     * @param {JQuery} $el - Input型自动完成组件实例的容器
     */
    protected createIcon(settings: PdUIAutocompleteIconSettings, $el: JQuery): void;
    /**
     * 初始化配置
     * @param {PdUIAutofillSettings} settings - 用户定义配置
     * @return {PdUIAutofillSettings} 配置
     */
    protected initSettings(settings: PdUIAutocompleteSettings): PdUIAutocompleteSettings;
    /**
     * 初始化模板
     * @return {JQuery} 模板的JQuery对象
     */
    protected initTemplate(): JQuery;
}
