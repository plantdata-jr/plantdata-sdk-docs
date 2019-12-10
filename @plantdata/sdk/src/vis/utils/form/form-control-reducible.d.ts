import { PdSelector } from '../../../common/common';
import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
/**
 * 可单行展示的编辑组件配置
 */
export interface PdVisFormControlReducibleSettings extends PdVisFormControlSettings {
    /**
     * 编辑选项标签的展示模式
     */
    mode?: 'label' | 'placeholder';
    /**
     *  编辑数据的占位提示语
     */
    placeholder?: string;
    /**
     *  编辑组件的后缀
     */
    postfix?: string;
    /**
     * 标题与内容是否同行显示
     */
    singleLine?: boolean;
}
/**
 * 可单行展示的编辑组件
 */
export declare class PdVisFormControlReducible extends PdVisFormControl {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlReducibleSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlReducibleSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlReducibleSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlReducibleSettings);
    /**
     * 生成单行的编辑组件模板
     */
    protected buildSingleLineTemplate(): PdSelector;
    /**
     * 生成编辑组件模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlReducibleSettings} settings - 用户定义配置
     * @return {PdVisFormControlReducibleSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlReducibleSettings): PdVisFormControlReducibleSettings;
}
