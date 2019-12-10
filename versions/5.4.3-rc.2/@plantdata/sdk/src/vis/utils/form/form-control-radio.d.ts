import { PdVisFormControlFilterable, PdVisFormControlFilterableSettings } from './form-control-filterable';
import { PdOptionsType, PdSelector } from '../../../common/common';
/**
 * 编辑选项配置
 */
export interface PdVisFormControlRadioSettings extends PdVisFormControlFilterableSettings {
    /**
     * 允许自定义输入
     */
    custom?: {
        enable: boolean;
        type: string;
    };
    /**
     *  编辑数据可选项
     */
    options?: PdOptionsType;
}
/**
 * 编辑选项工具
 */
export declare class PdVisFormControlRadio extends PdVisFormControlFilterable {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlRadioSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlRadioSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlRadioSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlRadioSettings);
    /**
     * 过滤处理方法
     * @param {string} str 输入的字串
     */
    protected filterHandler(str: string): void;
    /**
     * 生成内容模板
     * @return {string} 内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 生成模板
     * @return {PdSelector} 模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 获取模板上的值
     * @return {any} 值
     */
    protected getTemplateValue(): any;
    /**
     * 初始化配置
     * @param {PdVisFormControlRadioSettings} settings - 用户定义配置
     * @return {PdVisFormControlRadioSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlRadioSettings): PdVisFormControlRadioSettings;
    /**
     * 是否开启自定义输入的选项
     */
    protected isCustomEnable(): boolean;
    /**
     * 更新模板的值
     * @param data 滤选项的值
     */
    protected updateTemplateValue(data: any): void;
}
