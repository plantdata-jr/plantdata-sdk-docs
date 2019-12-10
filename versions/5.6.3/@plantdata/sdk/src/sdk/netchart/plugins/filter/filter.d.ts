import 'daterangepicker';
import { PdVisPluginFilter, PdVisPluginFilterItemSettings, PdVisPluginFilterSettings } from '../../../../vis/netchart/plugins/filter/filter';
import { PdSDKPluginSettings } from '../plugin';
import { PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSDKPluginAttValueRuleTag } from '../attvalue-rule/attvalue-rule-tag';
import { PdSDKKGSettings } from '../../../utils/service';
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
    /**
     * 选中的分析业务员分组Id列表
     */
    protected selectedAllowAttrGroups: string[];
    /**
     * 选中的分析关系Id列表
     */
    protected selectedAllowAtts: string[];
    /**
     * 选中的分析目标Id列表
     */
    protected selectedAllowTypes: PdVisNodeId[];
    /**
     * 分析目标Id路径映射表
     */
    protected typesPathMap: {
        [key: string]: string[];
    };
    /**
     * 创建方向过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static directionFilter(item?: PdVisPluginFilterItemSettings, value?: string): PdVisPluginFilterItemSettings;
    /**
     * 创建扩展层级过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static distanceExpendFilter(item?: PdVisPluginFilterItemSettings, value?: string): PdVisPluginFilterItemSettings;
    /**
     * 创建显示层级过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static distanceFilter(item?: PdVisPluginFilterItemSettings, value?: number): PdVisPluginFilterItemSettings;
    /**
     * 创建高层显示数过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static highLevelSizeFilter(item?: PdVisPluginFilterItemSettings, value?: number): PdVisPluginFilterItemSettings;
    /**
     * 创建上下位层数过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static hyponymyDistanceFilter(item?: PdVisPluginFilterItemSettings, value?: number): PdVisPluginFilterItemSettings;
    /**
     * 创建关系合并过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static isRelationMergeFilter(item?: PdVisPluginFilterItemSettings, value?: string): PdVisPluginFilterItemSettings;
    /**
     * 更新过滤选项
     * @param {PdVisPluginFilterItemSettings[]} filters - 原过滤选项
     * @param {PdVisPluginFilterItemSettings[]} newFilters - 新过滤选项
     * @return {PdVisPluginFilterItemSettings[]} 更新后的过滤选项
     */
    static mergeFilterSettings(filters: PdVisPluginFilterItemSettings[], newFilters: PdVisPluginFilterItemSettings[]): PdVisPluginFilterItemSettings[];
    /**
     * 创建置信度过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static reliabilityFilter(item?: PdVisPluginFilterItemSettings, value?: number[]): PdVisPluginFilterItemSettings;
    /**
     * 创建权重过滤配置项
     * @param {PdVisPluginFilterItemSettings} item 自定义过滤配置项
     * @param {string} value 选中项
     */
    static scoreFilter(item?: PdVisPluginFilterItemSettings, value?: number[]): PdVisPluginFilterItemSettings;
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
     * 获取当前编辑选项的结果
     * @return 当前编辑选项的结果
     */
    getData(): {
        [key: string]: any;
    };
    /**
     * 获取过滤的结果
     * @return 当前过滤项的值
     */
    getFilterOptions(): {
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
     * 设置过滤的值
     * @param data 滤选项的值
     * @param {boolean} silence 是否静默设置
     */
    setFilterOptions(data?: {
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
     * @param data - 配置数据
     * @return {PdVisPluginFilterItemSettings[]} 过滤选项
     */
    protected buildFilter(settings: PdSDKPluginFilterSettings, data?: {
        [key: string]: any;
    }): PdVisPluginFilterItemSettings[];
    /**
     * 创建分析业务分组配置
     * @param {PdSDKPluginFilterSettings} settings - 过滤配置
     * @param {string[]} selectedValue - 选中项目
     * @return {PdVisPluginFilterItemSettings} 分析业务分组配置
     */
    protected createAllowAttrGroupSettings(settings: PdSDKPluginFilterSettings, selectedValue?: string[]): PdVisPluginFilterItemSettings;
    /**
     * 创建分析关系配置
     * @param {PdSDKPluginFilterSettings} settings - 过滤配置
     * @param {PdVisNodeId | PdVisNodeId[]} selectedTypes - 选中的分析目标
     * @param {string[]} selectedValue - 选中项目
     * @return {PdVisPluginFilterItemSettings[]} 分析关系配置
     */
    protected createAllowAttsSettings(settings: PdSDKPluginFilterSettings, selectedTypes: PdVisNodeId | PdVisNodeId[], selectedValue?: string[]): PdVisPluginFilterItemSettings;
    /**
     * 创建分析业务规则混合关系的配置
     * @param {PdSDKPluginFilterSettings} settings - 过滤配置
     * @param {PdVisNodeId | PdVisNodeId[]} selectedTypes - 选中的分析目标
     * @param {string[]} selectedValue - 选中项目
     * @return {PdVisPluginFilterItemSettings[]} 分析关系配置
     */
    protected createAllowAttsWithGroupSettings(settings: PdSDKPluginFilterSettings, selectedTypes: PdVisNodeId | PdVisNodeId[], selectedValue?: string[]): PdVisPluginFilterItemSettings;
    /**
     * 创建分析目标配置
     * @param {PdSDKPluginFilterSettings} settings - 过滤配置
     * @param {string[]} selectedValue - 选中项目
     * @return {PdVisPluginFilterItemSettings} 分析目标配置
     */
    protected createAllowTypesSettings(settings: PdSDKPluginFilterSettings, selectedValue?: string[]): PdVisPluginFilterItemSettings;
    /**
     * 创建属性值筛选配置
     * @return {PdVisPluginFilterItemSettings} 属性值筛选配置
     */
    protected createAttValueFiltersSettings(): PdVisPluginFilterItemSettings;
    /**
     * 过滤属性值筛选的结果
     */
    protected filterAttValueFilterValue(): void;
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
     * @param  data - 拆分前的数据
     * @return 拆分后的数据
     */
    protected reservedAttToAlone(data: any): any;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
