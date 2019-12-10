/// <reference types="jquery" />
import { PdVisDialog, PdVisDialogSettings } from '../../../../../vis/utils/modal/dialog/dialog';
import { PdSelector } from '../../../../../common/common';
import { PdUIAutocomplete } from '../../../../../ui/components/autocomplete/autocomplete';
import { PdVisNetChart, PdVisNodeId } from '../../../../../vis/netchart';
import { PdUIPagination } from '../../../../../ui/components/pagination/pagination';
import { PdSDKNetChart } from '../../../netchart';
/**
 * 统计过滤弹出框配置
 */
export interface PdSDKPluginStatsChartFilterDialogSettings extends PdVisDialogSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  SDK 图谱组件
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
}
/**
 * 统计过滤弹出框
 */
export declare class PdSDKPluginStatsChartFilterDialog extends PdVisDialog {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsChartFilterDialogSettings;
    /**
     * 筛选节点ID列表
     */
    entityIds: PdVisNodeId[];
    /**
     *  配置
     */
    settings: PdSDKPluginStatsChartFilterDialogSettings;
    /**
     * 选项过滤提示输入组件
     */
    protected filter: PdUIAutocomplete;
    /**
     * 筛选实体的分页组件实例
     */
    protected filterPagination: PdUIPagination;
    /**
     * 头部
     */
    protected $head: JQuery;
    /**
     * 选项的容器
     */
    protected $options: JQuery;
    /**
     * 分页的容器
     */
    protected $page: JQuery;
    /**
     * 选中的标签容器
     */
    protected $selected: JQuery;
    /**
     * 概念类型筛选
     */
    protected $typeSelect: JQuery;
    /**
     * 应用类型选项
     */
    protected $applyTypeSelect: JQuery;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsChartFilterDialogSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsChartFilterDialogSettings);
    /**
     * 获取应用类型
     */
    getApplyType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成主体
     */
    protected buildBody(): PdSelector;
    /**
     * 创建实体选项的列表
     */
    protected createOptions(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsChartFilterDialogSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsChartFilterDialogSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsChartFilterDialogSettings): PdSDKPluginStatsChartFilterDialogSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新选中的标签
     */
    protected updateSelected(): void;
}
