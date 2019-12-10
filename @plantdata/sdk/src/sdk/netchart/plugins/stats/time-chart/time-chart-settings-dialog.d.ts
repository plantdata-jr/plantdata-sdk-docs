/// <reference types="jquery" />
import 'daterangepicker';
import { PdSelector } from '../../../../../common/common';
import { PdVisDialog, PdVisDialogSettings } from '../../../../../vis/utils/modal/dialog';
import { PdSDKPluginTimeFilterSettings } from './time-chart';
/**
 * 时序设置
 */
export interface PdSDKPluginTimeChartSettingsDialogSettings extends PdVisDialogSettings {
    /**
     * datepicker配置
     */
    datepickerSettings?: any;
    /**
     * 默认时序配置
     */
    defaultTimeFilterSettings?: {
        /**
         * key 为分析目标， value为分析目标对应得默认配置
         */
        [key: string]: PdSDKPluginTimeFilterSettings;
    };
    /**
     * 默认分析目标
     */
    defaultTimeFilterType?: string;
    /**
     * 时间格式
     */
    format?: string;
    /**
     * 用户选择计算规则
     */
    rule?: {
        /**
         * key 为分析目标， value为分析目标对应得默认配置
         */
        [key: string]: {
            /**
             * 重要关系是否计算的用户可配性
             */
            fixedLinks?: boolean;
            /**
             * 重要实体是否计算的用户可配性
             */
            fixedNodes?: boolean;
            /**
             * 无时间关系是否计算的用户可配性
             */
            noTimeLinks?: boolean;
            /**
             * 无时间实体是否计算的用户可配性
             */
            noTimeNodes?: boolean;
        };
    };
}
/**
 * 时序插件
 */
export declare class PdSDKPluginTimeChartSettingsDialog extends PdVisDialog {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTimeChartSettingsDialogSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginTimeChartSettingsDialogSettings;
    /**
     * 错误提示的容器
     */
    protected $tip: JQuery;
    /**
     *  设置面板前缀
     */
    protected namePrefix: string;
    /**
     * 时序分析目标转为数组格式
     * @param str 字符串的时序分析目标
     */
    static timeFilterTypeToArray(str: string): string[];
    /**
     * 时序分析目标转为字符串格式
     * @param arr 数组的时序分析目标
     */
    static timeFilterTypeToString(arr: string[]): string;
    /**
     * 构造方法
     * @param {PdSDKPluginTimeChartSettingsDialogSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTimeChartSettingsDialogSettings);
    /**
     * 获取时序过滤配置
     * @return {PdSDKPluginTimeFilterSettings} 时序过滤配置
     */
    getValue(): PdSDKPluginTimeFilterSettings;
    /**
     * 设置过滤条件设置
     * @param {PdSDKPluginTimeFilterSettings} value
     */
    setValue(value: PdSDKPluginTimeFilterSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成主体
     */
    protected buildBody(): PdSelector;
    /**
     * 获取默认配置
     * @param filterType 分析目标
     */
    protected getDefaultValue(filterType: string): PdSDKPluginTimeFilterSettings;
    /**
     * 初始化配置
     * @param {PdSDKPluginTimeChartSettingsDialogSettings} settings - 用户定义配置
     * @return {PdSDKPluginTimeChartSettingsDialogSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTimeChartSettingsDialogSettings): PdSDKPluginTimeChartSettingsDialogSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新表单选项的可见性
     * @param {PdSDKPluginTimeFilterSettings} value
     */
    protected updateFormVisibility(value: PdSDKPluginTimeFilterSettings): void;
}
