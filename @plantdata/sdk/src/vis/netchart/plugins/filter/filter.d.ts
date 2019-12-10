/// <reference types="jquery" />
import { PdVisChart } from '../../../chart';
import { PdVisEditItemSettings } from '../../../utils/edit-item/edit-item';
import { PdVisPluginEdit, PdVisPluginEditSettings } from '../edit/edit';
import { PdVisSlider, PdVisSliderSettings } from '../../../utils/slider/slider';
import { PdEventData } from '../../../../core/event';
import { PdUIInputSettings } from '../../../../ui/components/input/input';
import { PdSelector } from '../../../../common/common';
/**
 * 过滤选项配置
 */
export interface PdVisPluginFilterItemSettings extends PdVisEditItemSettings {
    /**
     * customType 为 'custom' 时有效，自定义生成编辑选项的方法
     */
    buildItem?: (settings: PdVisPluginFilterItemSettings) => PdSelector;
    /**
     * 允许自定义输入，仅类型为radio时有效
     */
    custom?: {
        /**
         * 是否允许自定义输入单选选项的值
         */
        enable: boolean;
        /**
         * 输入框配置
         */
        settings?: PdUIInputSettings;
        /**
         * 自定义输入选项值的数据类型
         */
        type: string;
    };
    /**
     * 自定义类型的标识
     */
    customType?: 'slider' | 'custom';
    /**
     * 是否增加选项过滤的组件，仅类型为checkbox / radio时有效
     */
    filterable?: boolean;
    /**
     * 顺序
     */
    index?: number;
    /**
     *  选中数据变化时的事件
     */
    onChange?: (value: any[], origin: any[]) => void;
    /**
     *  为slider类型的编辑选项时的slider组件配置
     */
    settings?: PdVisSliderSettings;
    /**
     * 编辑选项的类型
     */
    type?: 'checkbox' | 'radio' | 'custom';
}
/**
 * 过滤插件配置
 */
export interface PdVisPluginFilterSettings extends PdVisPluginEditSettings {
    /**
     *  过滤选项的配置
     */
    editItemSettings?: PdVisPluginFilterItemSettings[];
}
/**
 * 过滤插件
 */
export declare class PdVisPluginFilter extends PdVisPluginEdit {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginFilterSettings;
    /**
     *  过滤选项的配置
     */
    editItemSettings: PdVisPluginFilterItemSettings[];
    /**
     *  配置
     */
    settings: PdVisPluginFilterSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisChart;
    /**
     * 当前配置结果
     */
    protected filterData: {
        [key: string]: any;
    };
    /**
     *  选项的key与对应slider组件实例的映射
     */
    protected sliderMap: {
        [key: string]: PdVisSlider;
    };
    /**
     * 构造方法
     * @param {PdVisPluginFilterSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginFilterSettings);
    /**
     * 获取当前过滤选项的结果
     */
    getData(): {
        [key: string]: any;
    };
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 设置编辑选项的值
     * @param data 选项的值
     * @param {boolean} silence 是否静默设置，即不触发change事件
     */
    setData(data?: {
        [key: string]: any;
    }, silence?: boolean): void;
    /**
     * 修改过滤选项
     * @param {PdVisPluginFilterItemSettings} settings 需要更新的过滤选项的配置
     */
    updateFilter(settings?: PdVisPluginFilterItemSettings): void;
    /**
     * 添加选项过多时的收起控制按钮
     * @param {PdVisPluginFilterItemSettings} settings - 配置选项
     */
    protected addCollapseOption(settings: PdVisPluginFilterItemSettings): void;
    /**
     * 添加选项名称的过滤器
     * @param {PdVisPluginFilterItemSettings} settings - 配置选项
     */
    protected addOptionFilter(settings: PdVisPluginFilterItemSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成拍摄快照时的环境
     */
    protected buildSnapshotEnv(data: PdEventData): {
        [key: string]: any;
    };
    /**
     * 生成编辑选项的HTML字符串
     * @param {PdVisPluginFilterItemSettings} settings - 编辑插件选项配置
     */
    protected gentEditItem(settings: PdVisPluginFilterItemSettings): PdSelector;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisPluginFilterSettings} settings - 用户定义配置
     * @return {PdVisPluginFilterSettings} 配置
     */
    protected initSettings(settings: PdVisPluginFilterSettings): PdVisPluginFilterSettings;
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
     * 还原拍摄快照时的环境
     */
    protected restoreSnapshotEnv(env: {
        [key: string]: any;
    }, data: PdEventData): void;
}
