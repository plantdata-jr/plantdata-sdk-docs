import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
import { PdSelector } from '../../../common/common';
/**
 * 编辑选项配置
 */
export interface PdVisFormControlChildSettings extends PdVisFormControlSettings {
    /**
     * 子编辑插件顺序
     */
    index?: number;
}
/**
 * 编辑选项配置
 */
export interface PdVisFormGroupSettings extends PdVisFormControlSettings {
    /**
     * 子编辑插件配置
     */
    children?: PdVisFormControlChildSettings[];
}
/**
 * 编辑选项工具
 */
export declare class PdVisFormGroup extends PdVisFormControl {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormGroupSettings;
    /**
     *  配置
     */
    settings: PdVisFormGroupSettings;
    /**
     * 子
     */
    protected children: {
        [key: string]: PdVisFormControl;
    };
    /**
     * 构造方法
     * @param {PdVisFormGroupSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormGroupSettings);
    /**
     * 生成内容模板
     * @return {string} 内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 获取模板上的值
     * @return {any} 值
     */
    protected getTemplateValue(): any;
    /**
     * 初始化配置
     * @param {PdVisFormGroupSettings} settings - 用户定义配置
     * @return {PdVisFormGroupSettings} 配置
     */
    protected initSettings(settings: PdVisFormGroupSettings): PdVisFormGroupSettings;
    /**
     * 更新模板的值
     * @param data 滤选项的值
     */
    protected updateTemplateValue(data: any): void;
}
