/// <reference types="jquery" />
/// <reference types="echarts" />
import 'daterangepicker';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/timeline';
import { PdVisNetChart } from '../../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../../plugin';
import { PdVisDialog } from '../../../../../vis/utils/modal/dialog';
import { PdSDKPluginTimeChartSettingsDialog, PdSDKPluginTimeChartSettingsDialogSettings } from './time-chart-settings-dialog';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../../model';
/**
 * 时序数据
 */
export interface PdSDKPluginTimeChartData extends PdSDKNetChartData {
    /**
     *  显示开始日期
     */
    computerTime?: string;
}
/**
 * 时序关系
 */
export interface PdSDKPluginTimeChartDataLink extends PdSDKNetChartDataLink {
    /**
     *  关系终止时间
     */
    endTime?: string[];
    /**
     *  关系发生时间
     */
    startTime?: string[];
}
/**
 * 时序节点
 */
export interface PdSDKPluginTimeChartDataNode extends PdSDKNetChartDataNode {
    /**
     *  开始时间
     */
    fromTime?: string;
    /**
     *  结束时间
     */
    toTime?: string;
}
/**
 * 时序设置
 */
export interface PdSDKPluginTimeChartSettings extends PdSDKPluginSettings {
    /**
     *  图谱更新间隔
     */
    chartUpdateInterval?: number;
    /**
     * 数据过滤的方法
     * @param data 当前图完整的数据
     * @param start 选择的开始时间
     * @param end 选择的结束时间
     */
    dataFilter?: (data: PdSDKNetChartData, settings: PdSDKPluginTimeFilterSettings, start?: string, end?: string) => PdSDKNetChartData;
    /**
     *  时序配置框的配置
     */
    dialogSettings?: PdSDKPluginTimeChartSettingsDialogSettings;
    /**
     * 时间格式
     */
    format?: string;
    /**
     *  是否显示播放按钮
     */
    isShowPlay?: boolean;
    /**
     *  统计组件设置
     */
    settings?: any;
    /**
     *  时间轴组件设置
     */
    timelineSettings?: any;
    /**
     *  未知时间节点的显示控制
     */
    unknowVisible?: boolean;
}
/**
 * 时序数据过滤设置
 */
export interface PdSDKPluginTimeFilterSettings {
    /**
     *  固定关系是否参与计算
     */
    fixedLinks?: boolean;
    /**
     *  固定节点是否参与计算
     */
    fixedNodes?: boolean;
    /**
     *  开始时间
     */
    fromTime?: string;
    /**
     *  无效节点显示类型 可选值hide:隐藏，vague:虚化
     */
    hideType?: string;
    /**
     *  无时间关系是否参与计算
     */
    noTimeLinks?: boolean;
    /**
     *  无时间节点是否参与计算
     */
    noTimeNodes?: boolean;
    /**
     *  时序分析目标
     */
    timeFilterType?: string;
    /**
     *  结束时间
     */
    toTime?: string;
}
/**
 * 时序事件
 */
export interface PdSDKPluginTimeChartLinkEvent extends PdSDKPluginTimeChartDataLink {
    /**
     *  时序事件时间
     */
    time?: {
        /**
         *  时序事件开始时间
         */
        startTime?: string;
        /**
         *  时序事件结束时间
         */
        endTime?: string;
        /**
         *  时序事件开始时间戳
         */
        startTimestamp?: number;
        /**
         *  时序事件结束时间戳
         */
        endTimestamp?: number;
    };
}
/**
 * 时序插件
 */
export declare class PdSDKPluginTimeChart extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTimeChartSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginTimeChartSettings;
    /**
     *  图谱更新的timeout
     */
    protected chartUpdateTimeout: any;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  数量数据
     */
    protected counts: number[];
    /**
     *  图数据
     */
    protected data: PdSDKNetChartData;
    /**
     *  高亮的时间点
     */
    protected emphasisTime: string;
    /**
     *  显示的事件结束时间
     */
    protected end: string;
    /**
     * 全屏弹框
     */
    protected fullDialog: PdVisDialog;
    /**
     *  所有事件
     */
    protected linkEventList: PdSDKPluginTimeChartLinkEvent[];
    /**
     *  设置面板前缀
     */
    protected namePrefix: string;
    /**
     * 配置弹框
     */
    protected settingsDialog: PdSDKPluginTimeChartSettingsDialog;
    /**
     *  设置面板
     */
    protected settingsPanel: JQuery;
    /**
     *  显示的事件开始时间
     */
    protected start: string;
    /**
     *  时间轴组件
     */
    protected timeChart: echarts.ECharts;
    /**
     *  时序过滤设置
     */
    protected timeFilterSettings: PdSDKPluginTimeFilterSettings;
    /**
     *  数据时间映射
     */
    protected timeMap: {
        [key: string]: any[];
    };
    /**
     *  时间数据
     */
    protected times: string[];
    /**
     * 构造方法
     * @param {PdSDKPluginTimeChartSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTimeChartSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取时序过滤配置
     * @return {PdSDKPluginTimeFilterSettings} 时序过滤配置
     */
    getSettings(): PdSDKPluginTimeFilterSettings;
    /**
     * 隐藏时序轴
     */
    hide(): void;
    /**
     * 设置过滤条件设置
     * @param {PdSDKPluginTimeFilterSettings} settings
     */
    setSettings(settings: PdSDKPluginTimeFilterSettings): void;
    /**
     * 显示时序轴
     */
    show(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成时序数据显示的时间区间
     */
    protected buildEventsTimeRange(): void;
    /**
     * 过滤显示的数据
     * @param {PdSDKNetChartData} data 所有可以显示的数据
     * @param {PdSDKPluginTimeFilterSettings} settings 过滤的配置
     * @param {string} start 开始时间
     * @param {string} end 结束时间
     * @return {PdSDKNetChartData} 过滤的结果数据
     */
    protected dataFilter(data: PdSDKNetChartData, settings: PdSDKPluginTimeFilterSettings, start?: string, end?: string): PdSDKNetChartData;
    /**
     * 禁用时序插件
     */
    protected disabledTimeChart(): void;
    /**
     * 渲染时序组件
     */
    protected drawTimeChart(): void;
    /**
     * 启用时序插件
     */
    protected enableTimeChart(): void;
    /**
     * 过滤显示的数据
     * @param {PdSDKNetChartData} data 所有可以显示的数据
     * @return {PdSDKNetChartData} 需要显示的数据
     */
    protected eventFilter(data: PdSDKNetChartData): PdSDKNetChartData;
    /**
     * 初始化配置
     * @param {PdSDKPluginTimeChartSettings} settings - 用户定义配置
     * @return {PdSDKPluginTimeChartSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTimeChartSettings): PdSDKPluginTimeChartSettings;
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
     * 渲染时序组件
     */
    protected rendererTimeChart(): void;
    /**
     * 显示动态组件
     */
    protected showDynamicTimeChart(): void;
    /**
     * 显示静态组件
     */
    protected showStaticTimeChart(): void;
    /**
     * 标准化时间字符串
     */
    protected standardizeDateTime(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 未知时间是否显示
     * @param {PdSDKPluginTimeChartLinkEvent} event - 事件数据
     * @return {boolean} 是否改数据显示
     */
    protected unknowEventEnable(event: PdSDKPluginTimeChartLinkEvent): boolean;
    /**
     * 更新结束时间
     * @param time 结束时间
     */
    protected updateEnd(time: string): void;
    /**
     * 更新关系事件
     */
    protected updateLinkEvent(): void;
    /**
     * 更新开始时间
     * @param time 开始时间
     */
    protected updateStart(time: string): void;
}
