import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 长文本编辑组件配置
 */
export interface PdVisFormControlTextareaSettings extends PdVisFormControlReducibleSettings {
}
/**
 * 长文本编辑组件
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
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlTextareaSettings} settings - 用户定义配置
     * @return {PdVisFormControlTextareaSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlTextareaSettings): PdVisFormControlTextareaSettings;
}
