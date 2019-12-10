import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 编辑插件配置
 */
export interface PdVisFormControlTextareaSettings extends PdVisFormControlReducibleSettings {
}
/**
 * 编辑选项工具
 */
export declare class PdVisFormControlTextarea extends PdVisFormControlReducible {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlTextareaSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlTextareaSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlTextareaSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlTextareaSettings);
    /**
     * 生成内容模板
     * @return {string} 内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlTextareaSettings} settings - 用户定义配置
     * @return {PdVisFormControlTextareaSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlTextareaSettings): PdVisFormControlTextareaSettings;
}
