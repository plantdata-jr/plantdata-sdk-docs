import { PdOptionsType, PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 下拉选择编辑组件配置
 */
export interface PdVisFormControlSelectSettings extends PdVisFormControlReducibleSettings {
    /**
     *  编辑组件数据的可选项
     */
    options?: PdOptionsType;
    /**
     *  编辑数据的占位提示语
     */
    placeholder?: string;
}
/**
 * 下拉选择编辑组件
 */
export declare class PdVisFormControlSelect extends PdVisFormControlReducible {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlSelectSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlSelectSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlSelectSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlSelectSettings);
    /**
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlSelectSettings} settings - 用户定义配置
     * @return {PdVisFormControlSelectSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlSelectSettings): PdVisFormControlSelectSettings;
}
