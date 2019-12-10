/// <reference types="jquery" />
import 'echarts/lib/component/title';
import { PdVisNetChart, PdVisNetChartDataNode } from '../../../../vis/netchart/netchart';
import { PdVisPlugin } from '../../../../vis/netchart/plugins';
import { PdSDKPluginSettings } from '../../../netchart/plugins';
import { PdSDKStatLineBar, PdSDKStatLineBarSettings } from '../../../stats/impls/line-bar';
/**
 * 知识卡片插件配置
 */
export interface PdSDKPluginStatsClusterSettings extends PdSDKPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * 图表配置
     */
    statsChartSettings?: PdSDKStatLineBarSettings;
}
/**
 * 知识卡片插件
 */
export declare class PdSDKPluginStatsCluster extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsClusterSettings;
    /**
     * 高亮的类型
     */
    activeBarIndex: number;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsClusterSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  infobox插件实例
     */
    protected stat: PdSDKStatLineBar;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsClusterSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsClusterSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 激活柱子
     */
    protected activeBar(nodes: PdVisNetChartDataNode[]): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成图表
     * @return {PdSDKStatLineBar} - 统计实例
     */
    protected createChart(nodes: PdVisNetChartDataNode[]): void;
    /**
     * 取消激活柱子
     */
    protected inactiveBar(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsClusterSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsClusterSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsClusterSettings): PdSDKPluginStatsClusterSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
