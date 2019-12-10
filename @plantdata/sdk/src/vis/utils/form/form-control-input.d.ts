import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 短文本输入组件配置
 */
export interface PdVisFormControlInputSettings extends PdVisFormControlReducibleSettings {
    /**
     * 输入类型
     */
    inputType?: 'text' | 'number';
}
/**
 * 短文本输入组件
 */
export declare class PdVisFormControlInput extends PdVisFormControlReducible {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlInputSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlInputSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlInputSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlInputSettings);
    /**
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlInputSettings} settings - 用户定义配置
     * @return {PdVisFormControlInputSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlInputSettings): PdVisFormControlInputSettings;
}
