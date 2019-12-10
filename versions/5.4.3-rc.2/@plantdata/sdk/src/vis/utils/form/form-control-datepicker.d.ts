import 'daterangepicker';
import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 编辑选项配置
 */
export interface PdVisFormControlDatepickerSettings extends PdVisFormControlReducibleSettings {
    /**
     *  Datepicker组件配置
     */
    datepickerSettings?: any;
    /**
     * 输入类型
     */
    inputType?: 'date' | 'datetime' | 'dateRange' | 'datetimeRange';
}
/**
 * 编辑选项工具
 */
export declare class PdVisFormControlDatepicker extends PdVisFormControlReducible {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlDatepickerSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlDatepickerSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlDatepickerSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlDatepickerSettings);
    /**
     * 生成内容模板
     * @return {string} 内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlDatepickerSettings} settings - 用户定义配置
     * @return {PdVisFormControlDatepickerSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlDatepickerSettings): PdVisFormControlDatepickerSettings;
}
