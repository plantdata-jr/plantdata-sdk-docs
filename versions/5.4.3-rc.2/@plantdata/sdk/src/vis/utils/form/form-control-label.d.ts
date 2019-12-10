import { PdSelector } from '../../../common/common';
import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
/**
 * 编辑插件配置
 */
export interface PdVisFormControlLabelSettings extends PdVisFormControlSettings {
}
/**
 * 编辑选项工具
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
     * 生成模板
     * @return {PdSelector} 模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlLabelSettings} settings - 用户定义配置
     * @return {PdVisFormControlLabelSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlLabelSettings): PdVisFormControlLabelSettings;
}
