import 'daterangepicker';
import { PdVisPluginFilterSettings, PdVisPluginFilter, PdVisPluginFilterItemSettings } from '../../../../vis/netchart/plugins/filter/filter';
import { PdSDKPluginSettings } from '../plugin';
import { PdSDKKGSettings } from '../../../utils/utils';
import { PdSDKPluginAttValueRuleTag } from '../attvalue-rule/attvalue-rule-tag';
/**
 * 过滤插件配置
 */
export interface PdSDKPluginFilterSettings extends PdSDKPluginSettings, PdSDKKGSettings, PdVisPluginFilterSettings {
    /**
     *  是否显示所有schema选项
     */
    showAllSchemaOptions?: boolean;
}
/**
 * 过滤模块配置
 */
export declare class PdSDKPluginFilter extends PdVisPluginFilter {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginFilterSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginFilterSettings;
    /**
     * 属性值规则
     */
    protected avr: PdSDKPluginAttValueRuleTag;
    static directionFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static distanceFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static distanceExpendFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static highLevelSizeFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static hyponymyDistanceFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static isRelationMergeFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static reliabilityFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    static scoreFilter(item?: PdVisPluginFilterItemSettings): PdVisPluginFilterItemSettings;
    /**
     * 更新过滤选项
     * @param {PdVisPluginFilterItemSettings[]} filters - 原过滤选项
     * @param {PdVisPluginFilterItemSettings[]} newFilters - 新过滤选项
     * @return {PdVisPluginFilterItemSettings[]} 更新后的过滤选项
     */
    static mergeFilterSettings(filters: PdVisPluginFilterItemSettings[], newFilters: PdVisPluginFilterItemSettings[]): PdVisPluginFilterItemSettings[];
    /**
     * 构造方法
     * @param {PdSDKPluginFilterSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginFilterSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取过滤的结果
     * @return {any} 当前过滤项的值
     */
    getFilterOptions(): {
        [key: string]: any;
    };
    /**
     * 设置过滤的值
     * @param data 滤选项的值
     * @param {boolean} silence 是否静默设置
     */
    setFilterOptions(data?: {
        [key: string]: any;
    }, silence?: boolean): void;
    /**
     * 获取当前编辑选项的结果
     * @return {any} 当前编辑选项的结果
     */
    getData(): {
        [key: string]: any;
    };
    /**
     * 设置编辑选项
     * @param data 滤选项配置
     * @param {boolean} silence 是否静默设置
     */
    setData(data?: {
        [key: string]: any;
    }, silence?: boolean): void;
    /**
     * 单独字段合并为保留字段
     * @param {any} data - 合并前的数据
     * @returan {any} 合并后的数据
     */
    protected aloneToReservedAtt(data: any): any;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建过滤配置
     * @param {PdSDKPluginFilterSettings} settings - 过滤配置
     * @return {PdVisPluginFilterItemSettings[]} 过滤选项
     */
    protected buildFilter(settings: PdSDKPluginFilterSettings): PdVisPluginFilterItemSettings[];
    /**
     * 初始化配置
     * @param {PdSDKPluginFilterSettings} settings - 用户定义配置
     * @return {PdSDKPluginFilterSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginFilterSettings): PdSDKPluginFilterSettings;
    /**
     * 是否允许指定项目的配置
     * @param {string} key 项目的唯一标识
     * @return {boolean} 是否允许
     */
    protected isItemEnable(key: string): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 保留字段拆分为单独字段
     * @param {any} data - 拆分前的数据
     * @returan {any} 拆分后的数据
     */
    protected reservedAttToAlone(data: any): any;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
