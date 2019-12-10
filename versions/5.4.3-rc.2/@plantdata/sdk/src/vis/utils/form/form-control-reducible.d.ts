import { PdSelector } from '../../../common/common';
import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
/**
 * 编辑插件配置
 */
export interface PdVisFormControlReducibleSettings extends PdVisFormControlSettings {
    /**
     * 编辑选项Label展示模式
     */
    mode?: 'label' | 'placeholder';
    /**
     * 标题与内容同行显示
     */
    singleLine?: boolean;
    /**
     *  编辑数据的占位提示语
     */
    placeholder?: string;
    /**
     *  后缀
     */
    postfix?: string;
}
/**
 * 编辑选项工具
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
     * 生成单行模板的HTML
     * @return {PdSelector} 模板
     */
    protected buildSingleLineTemplate(): PdSelector;
    /**
     * 生成模板
     * @return {PdSelector} 模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlReducibleSettings} settings - 用户定义配置
     * @return {PdVisFormControlReducibleSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlReducibleSettings): PdVisFormControlReducibleSettings;
}
