/// <reference types="jquery" />
import { PdVisCascader, PdVisCascaderSettings } from '../../cascader/cascader';
import { PdVisTagComplexEditor, PdVisTagComplexEditorSettings, PdVisTagEditorDataType, PdVisTagEditorDataValueType } from '../tag-complex-editor';
/**
 * 级联选择式标签编辑器配置
 */
export interface PdVisTagCascaderSettings extends PdVisTagComplexEditorSettings {
    /**
     * 级联选择器配置
     */
    cascaderSettings: PdVisCascaderSettings;
}
/**
 * 级联选择式标签编辑器
 */
export declare class PdVisTagCascader extends PdVisTagComplexEditor {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisTagCascaderSettings;
    /**
     *  级联选择器实例
     */
    cascader: PdVisCascader;
    /**
     *  配置
     */
    settings: PdVisTagCascaderSettings;
    /**
     * 构造方法
     * @param {PdVisTagCascaderSettings} settings - 用户配置
     */
    constructor(settings?: PdVisTagCascaderSettings);
    /**
     * 值转为值对应的对象
     * @param {PdVisTagEditorDataValueType} value - 待转换的值
     */
    valueToData(value: PdVisTagEditorDataValueType): PdVisTagEditorDataType;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建编辑器
     * @return {JQuery} - 编辑器的JQuery对象
     */
    protected createEditor(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisTagCascaderSettings} settings - 用户定义配置
     * @return {PdVisTagCascaderSettings} 配置
     */
    protected initSettings(settings: PdVisTagCascaderSettings): PdVisTagCascaderSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
}
