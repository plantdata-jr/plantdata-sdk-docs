import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 编辑插件配置
 */
export interface PdVisFormControlSwitchSettings extends PdVisFormControlReducibleSettings {
    /**
     *  编辑数据可选项
     */
    options?: string[];
}
/**
 * 编辑选项工具
 */
export declare class PdVisFormControlSwitch extends PdVisFormControlReducible {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlSwitchSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlSwitchSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlSwitchSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlSwitchSettings);
    /**
     * 生成内容模板
     * @return {string} 内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlSwitchSettings} settings - 用户定义配置
     * @return {PdVisFormControlSwitchSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlSwitchSettings): PdVisFormControlSwitchSettings;
}
