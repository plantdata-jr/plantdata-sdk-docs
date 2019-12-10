import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
import { PdSelector } from '../../../common/common';
/**
 * 子编辑组件的配置
 */
export interface PdVisFormControlChildSettings extends PdVisFormControlSettings {
    /**
     * 子编辑组件的排列顺序
     */
    index?: number;
}
/**
 * 组编辑组件的配置
 */
export interface PdVisFormGroupSettings extends PdVisFormControlSettings {
    /**
     * 子编辑插件配置
     */
    children?: PdVisFormControlChildSettings[];
}
/**
 * 组编辑组件
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
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 获取模板上的值
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
     * @param data 值
     */
    protected updateTemplateValue(data: any): void;
}
