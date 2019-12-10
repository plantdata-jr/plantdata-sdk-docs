/// <reference types="jquery" />
import { PdVisTagEditor, PdVisTagEditorSettings } from './tag-editor';
/**
 * 复杂类型的标签编辑器数据值的类型
 */
export declare type PdVisTagEditorDataValueType = any;
/**
 * 复杂类型的标签编辑器数据类型
 */
export declare type PdVisTagEditorDataType = {
    [key: string]: string | PdVisTagEditorDataValueType | any;
};
/**
 * 复杂类型的标签编辑器组件配置
 */
export interface PdVisTagComplexEditorSettings extends PdVisTagEditorSettings {
    /**
     * 添加之前执行的方法。返回false时，阻止添加
     * @param item - 待添加的数据
     * @return {Promise} - 检验添加的异步实例
     */
    beforeAdd?: (item: PdVisTagEditorDataType, ins: PdVisTagComplexEditor) => Promise<any>;
    /**
     * 删除之前执行的方法。返回false时，阻止删除
     * @param item - 待删除的数据
     * @return {Promise} - 检验删除的异步实例
     */
    beforeDelete?: (item: PdVisTagEditorDataType, ins: PdVisTagComplexEditor) => Promise<any>;
    /**
     * 数据
     */
    data?: PdVisTagEditorDataType[];
    /**
     * 显示值字段
     */
    labelKey?: string;
    /**
     * 存储值字段
     */
    valueKey?: string;
}
/**
 * 复杂类型的标签编辑器组件
 */
export declare abstract class PdVisTagComplexEditor extends PdVisTagEditor {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisTagComplexEditorSettings;
    /**
     *  配置
     */
    settings: PdVisTagComplexEditorSettings;
    /**
     * 数据
     */
    protected data: PdVisTagEditorDataType[];
    /**
     * 构造方法
     * @param {PdVisTagComplexEditorSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisTagComplexEditorSettings);
    /**
     * 从对象中获取值
     * @param {PdVisTagEditorDataType} data - 待转换的数据
     */
    dataToValue(data: PdVisTagEditorDataType): PdVisTagEditorDataValueType;
    /**
     * 判断数据是否已存在
     * @param {PdVisTagEditorDataValueType} value - 数据的值
     * @return {boolean} - 是否存在
     */
    existData(value: PdVisTagEditorDataValueType): boolean;
    /**
     * 获取数据
     */
    getData(): any[];
    /**
     * 值转为值对应的对象
     * @param {PdVisTagEditorDataValueType} value - 待转换的值
     */
    valueToData(value: PdVisTagEditorDataValueType): PdVisTagEditorDataType;
    /**
     * 创建标签的HTML字符串
     * @param {PdVisTagEditorDataType} data - 标签对应的数据
     */
    protected createData(data: PdVisTagEditorDataType): string;
    /**
     * 初始化配置
     * @param {PdVisTagComplexEditorSettings} settings - 用户定义配置
     * @return {PdVisTagComplexEditorSettings} 配置
     */
    protected initSettings(settings: PdVisTagComplexEditorSettings): PdVisTagComplexEditorSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
