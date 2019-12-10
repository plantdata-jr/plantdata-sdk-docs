import { PdSelector } from '../../../common/common';
import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
/**
 * 标签组件配置
 */
export interface PdVisFormControlLabelSettings extends PdVisFormControlSettings {
}
/**
 * 标签组件
 */
export declare class PdVisFormControlLabel extends PdVisFormControl {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlLabelSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlLabelSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlLabelSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlLabelSettings);
    /**
     * 生成编辑组件内容模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlLabelSettings} settings - 用户定义配置
     * @return {PdVisFormControlLabelSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlLabelSettings): PdVisFormControlLabelSettings;
}
