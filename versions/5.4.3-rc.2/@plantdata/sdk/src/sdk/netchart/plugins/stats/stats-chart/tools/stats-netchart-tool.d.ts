/// <reference types="echarts" />
/// <reference types="jquery" />
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/title';
import { PdVisNetChart } from '../../../../../../vis/netchart/netchart';
import { PdSelector } from '../../../../../../common/common';
import { PdSDKPluginStatsToolEditable, PdSDKPluginStatsToolEditableConfig, PdSDKPluginStatsToolEditableSettings } from './stats-tool-editable';
import { PdSDKStat } from '../../../../../stats/stat';
import { PdSDKKGSettings } from '../../../../../utils/service';
import { PdVisDialog } from '../../../../../../vis/utils/modal/dialog';
import { PdSDKNetChart } from '../../../../netchart';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsNetChartBarToolConfig extends PdSDKPluginStatsToolEditableConfig {
    /**
     *  统计agg
     */
    agg?: any;
    /**
     *  图表类型
     */
    chartSeries?: 'line' | 'bar';
    /**
     *  统计图配置
     */
    chartSettings?: echarts.EChartOption;
    /**
     *  统计的说明
     */
    title?: string;
    /**
     *  统计x轴配置
     */
    xAxis?: any;
    /**
     *  统计y轴配置
     */
    yAxis?: any;
}
/**
 * SDK 图谱柱状图统计配置
 */
export interface PdSDKPluginStatsNetChartToolSettings<T extends PdSDKPluginStatsNetChartBarToolConfig> extends PdSDKPluginStatsToolEditableSettings<T>, PdSDKKGSettings {
    /**
     *  图表设置
     */
    chartSettings?: echarts.EChartOption;
    /**
     * 高亮的触发方式
     */
    highlightTrigger?: 'click' | 'hover';
    /**
     *  SDK 图谱组件
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
    /**
     * x轴可选项
     */
    xAxisOptions?: {
        value: string;
        label: string;
    }[];
    /**
     * y轴可选项
     */
    yAxisOptions?: {
        value: string;
        label: string;
    }[];
}
/**
 * SDK 图谱柱状图统计
 */
export declare abstract class PdSDKPluginStatsNetChartTool<T extends PdSDKPluginStatsNetChartBarToolConfig> extends PdSDKPluginStatsToolEditable<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsNetChartToolSettings<PdSDKPluginStatsNetChartBarToolConfig>;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsNetChartToolSettings<T>;
    /**
     * 选中柱子
     */
    protected activeBarIndex: number;
    /**
     * 统计的结果
     */
    protected data: any;
    /**
     * 弹框实例
     */
    protected fullDialog: PdVisDialog;
    /**
     *  可视化组件
     */
    protected netChart: PdVisNetChart;
    /**
     * 图表实例
     */
    protected stat: PdSDKStat;
    /**
     * 全屏图表实例
     */
    protected statFull: PdSDKStat;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsNetChartToolSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKPluginStatsNetChartToolSettings<T>);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取配置结果
     * @return {PdSDKPluginStatsNetChartBarToolConfig} - 编辑器的配置结果
     */
    getEditorData(): T;
    /**
     * 获取当前统计标题
     */
    getTitle(): string;
    /**
     * 统计
     * @return {Promise} 获取规则的异步请求实例
     */
    rendererData(force?: boolean): Promise<any>;
    /**
     * 更新图表
     * @params data - 图表的数据
     */
    updateChart(data: any, force?: boolean): void;
    /**
     * 激活柱子
     */
    protected activeBar(index: number): void;
    /**
     * 添加修改图表类型的控件
     */
    protected addChartChangeControl(): void;
    /**
     * 生成图表
     * @param {PdSelector} selector - 生成的DOM位置
     * @param {boolean} showTitle - 是否显示标题
     * @return {PdSDKStat} - 统计实例
     */
    protected createChart(selector: PdSelector, showTitle?: boolean): PdSDKStat;
    /**
     * 创建编辑表单
     * @return {JQuery} 编辑表单的DOM对象
     */
    protected createEditForm(): JQuery;
    /**
     * 自动生成统计标题
     */
    protected createTitle(): string;
    /**
     * 生成X轴选项
     * @return {string} X轴选项表单
     */
    protected createXSelect(): string;
    /**
     * 生成Y轴选项
     * @return {string} Y轴选项表单
     */
    protected createYSelect(): string;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 获取当前统计图表的类型
     */
    protected getChartType(): 'line' | 'bar';
    /**
     * 生成图表类型切换控件的配置
     * @param type 切换为的图表类型，默认根据当前图表类型适应
     */
    protected getChartTypeChangeControlSettings(type?: 'line' | 'bar'): {
        id: string;
        click: (e: JQuery.ClickEvent<any, any, any, any>) => void;
        icon: string;
        title: string;
    };
    /**
     * 取消激活柱子
     */
    protected inactiveBar(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsNetChartToolSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsNetChartToolSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsNetChartToolSettings<T>): PdSDKPluginStatsNetChartToolSettings<T>;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 请求统计结果
     */
    protected abstract load<V>(): Promise<V>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 渲染图表
     */
    protected rendererChart(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新统计标题
     */
    protected updateTitle(): void;
}
