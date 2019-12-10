import { PdVisFormControlFilterable, PdVisFormControlFilterableSettings } from './form-control-filterable';
import { PdOptionsType, PdSelector } from '../../../common/common';
/**
 * 单选编辑组件配置
 */
export interface PdVisFormControlRadioSettings extends PdVisFormControlFilterableSettings {
    /**
     * 自定义输入配置
     */
    custom?: {
        /**
         * 是否允许自定义输入
         */
        enable: boolean;
        /**
         * 自定义输入内容的数据格式, number 或 string
         */
        type: string;
    };
    /**
     *  单选编辑组件的数据可选项
     */
    options?: PdOptionsType;
}
/**
 * 单选编辑组件
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
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 生成编辑组件模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 筛选数据的处理方法
     * @param {string} str 输入的字符串
     */
    protected filterHandler(str: string): void;
    /**
     * 获取模板上的值
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
     * @param data 值
     */
    protected updateTemplateValue(data: any): void;
}
