import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 开关编辑组件的配置
 */
export interface PdVisFormControlSwitchSettings extends PdVisFormControlReducibleSettings {
    /**
     *  开关的显示文本
     */
    options?: string[];
}
/**
 * 开关编辑组件
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
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlSwitchSettings} settings - 用户定义配置
     * @return {PdVisFormControlSwitchSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlSwitchSettings): PdVisFormControlSwitchSettings;
}
