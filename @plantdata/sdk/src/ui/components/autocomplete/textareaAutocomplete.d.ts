/// <reference types="jquery" />
import { PdUIAutofill, PdUIAutofillSettings } from './autofill';
/**
 * Textarea型自动完成组件配置
 */
export interface PdUITextareaAutocompleteSettings extends PdUIAutofillSettings {
}
/**
 * Textarea型自动完成组件配置
 */
export declare class PdUITextareaAutocomplete extends PdUIAutofill {
    /**
     *  默认配置
     */
    static defaultSettings: PdUITextareaAutocompleteSettings;
    /**
     *  组件默认的className
     */
    protected static clsName: string;
    /**
     *  组件默认的class
     */
    protected static cls: string;
    /**
     *  Textarea型自动完成组件容器的className
     */
    protected static clsPromptName: string;
    /**
     *  配置
     */
    settings: PdUITextareaAutocompleteSettings;
    /**
     * 构造方法
     * @param {PdUITextareaAutocompleteSettings} settings - 用户配置
     */
    constructor(settings?: PdUITextareaAutocompleteSettings);
    /**
     * 初始化配置
     * @param {PdUIAutofillSettings} settings - 用户定义配置
     * @return {PdUIAutofillSettings} 配置
     */
    protected initSettings(settings: PdUITextareaAutocompleteSettings): PdUITextareaAutocompleteSettings;
    /**
     * 初始化模板
     * @return {JQuery} 模板的JQuery对象
     */
    protected initTemplate(): JQuery;
}
