import 'daterangepicker';
import { PdSelector } from '../../../common/common';
import { PdVisFormControlReducible, PdVisFormControlReducibleSettings } from './form-control-reducible';
/**
 * 日期选择组件配置
 */
export interface PdVisFormControlDatepickerSettings extends PdVisFormControlReducibleSettings {
    /**
     *  Datepicker组件配置
     */
    datepickerSettings?: any;
    /**
     * 日期的类型
     */
    inputType?: 'date' | 'datetime' | 'dateRange' | 'datetimeRange';
}
/**
 * 日期选择组件
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
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisFormControlDatepickerSettings} settings - 用户定义配置
     * @return {PdVisFormControlDatepickerSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlDatepickerSettings): PdVisFormControlDatepickerSettings;
}
