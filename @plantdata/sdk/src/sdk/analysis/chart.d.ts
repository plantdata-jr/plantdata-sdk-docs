/// <reference types="jquery" />
import { PdSelector } from '../../common/common';
import { PdVisChart, PdVisChartData, PdVisChartLoadParams, PdVisChartSettings } from '../../vis/chart';
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdSDKAjaxSettings, PdSDKBaseSettings } from '../utils/service';
/**
 * SDK 图分析配置
 */
export interface PdSDKChartAnalysisSettings<T extends PdVisChartSettings> extends PdSDKBaseSettings, PdComponentSettings {
    /**
     *  图的配置
     */
    chartSettings?: T;
    /**
     *  加载配置
     */
    loaderSettings?: PdSDKBaseSettings;
    /**
     *  图的配置
     *  @deprecated This settings will be delete in 5.0
     */
    netChartSettings?: T;
    /**
     *  生成图的选择器
     */
    selector?: PdSelector;
}
/**
 * SDK 图分析
 */
export declare abstract class PdSDKChartAnalysis<T extends PdVisChart, V extends PdVisChartSettings> extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKChartAnalysisSettings<PdVisChartSettings>;
    /**
     *  图实例
     */
    chart: T;
    /**
     *  图实例
     *  @deprecated This settings will be delete in 5.0
     */
    netChart: T;
    /**
     *  配置
     */
    settings: PdSDKChartAnalysisSettings<V>;
    /**
     * 构造方法
     * @param {PdSDKChartAnalysisSettings<V>} settings - 图配置
     */
    protected constructor(settings: PdSDKChartAnalysisSettings<V>);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 加载数据
     * @param lp - 加载参数
     * @param {string} source - 请求来源
     */
    load(lp?: PdVisChartLoadParams, source?: string): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成数据异步加载配置
     * @param lp - 数据加载参数
     * @return {PdSDKAjaxSettings} 数据异步加载配置
     */
    protected createLoaderSettings(lp: PdVisChartLoadParams): PdSDKAjaxSettings;
    /**
     * 初始化图
     */
    protected abstract initChart(): void;
    /**
     * 初始化图配置
     * @return {V} 图配置
     */
    protected initChartSettings(): void;
    /**
     * 初始化配置
     * @param {PdSDKChartAnalysisSettings<V>} settings - 用户配置
     * @return {PdSDKChartAnalysisSettings<V>} 配置
     */
    protected initSettings(settings: PdSDKChartAnalysisSettings<V>): PdSDKChartAnalysisSettings<V>;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 生成数据加载的方法
     * @return {($self: T, lp: PdVisChartLoadParams) => Promise<PdVisChartData>} 数据加载的方法
     */
    protected loader(): ($self: T, lp: PdVisChartLoadParams) => Promise<PdVisChartData>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
