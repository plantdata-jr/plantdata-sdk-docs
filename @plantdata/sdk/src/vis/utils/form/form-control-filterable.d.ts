import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
import { PdUIAutocomplete } from '../../../ui/components/autocomplete/autocomplete';
import { PdSelector } from '../../../common/common';
/**
 * 可筛选的编辑编辑组件配置
 */
export interface PdVisFormControlFilterableSettings extends PdVisFormControlSettings {
    /**
     * 是否开启筛选功能
     */
    filterable?: boolean;
}
/**
 * 可筛选的编辑编辑组件
 */
export declare abstract class PdVisFormControlFilterable extends PdVisFormControl {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlFilterableSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlFilterableSettings;
    /**
     * 筛选实例
     */
    protected filter: PdUIAutocomplete;
    /**
     * 构造方法
     * @param {PdVisFormControlFilterableSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisFormControlFilterableSettings);
    /**
     * 生成编辑组件模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 筛选数据的处理方法
     * @param {string} str 输入的字符串
     */
    protected abstract filterHandler(str: string): void;
    /**
     * 初始化配置
     * @param {PdVisFormControlFilterableSettings} settings - 用户定义配置
     * @return {PdVisFormControlFilterableSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlFilterableSettings): PdVisFormControlFilterableSettings;
}
