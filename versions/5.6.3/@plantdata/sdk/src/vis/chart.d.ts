/// <reference types="jquery" />
import { PdContainer, PdContainerSettings } from '../container/container';
import { PdMap, PdSelector } from '../common/common';
import { PdTabPanelChildSettings } from '../container/panels/tab/tab';
/**
 *  自定义可视化组件配置参数类型
 */
export declare type PdVisChartTypeUnion = string | {
    normal: string;
    emphasis: string;
};
/**
 * 加载数据参数的类型
 */
export declare type PdVisChartLoadParams = PdMap<any>;
/**
 * 图表组件的数据类型
 */
export declare type PdVisChartData = any;
/**
 * 缓存数据的结构
 */
export interface PdVisChartCacheData {
    /**
     *  加载到的数据
     */
    data: PdVisChartData;
    /**
     *  加载时的参数
     */
    loadParams: PdVisChartLoadParams;
}
/**
 * 图表组件配置
 */
export interface PdVisChartSettings extends PdContainerSettings {
    /**
     * 添加新数据之前执行的方法
     * @param data - 处理前执行的方法
     * @param lp - 加载数据的参数
     * @return data - 处理后的数据
     */
    beforeAddNewData?: (data: PdVisChartData, lp: PdVisChartLoadParams) => PdVisChartData;
    /**
     *  图表数据加载方法
     * @param {PdVisChart} self - 可视化组件实例
     * @param params - 加载数据的参数
     * @return {Promise} - 异步请求实例
     */
    loader?: (self: PdVisChart, params: PdVisChartLoadParams) => Promise<PdVisChartData>;
}
/**
 * 图表组件
 */
export declare abstract class PdVisChart extends PdContainer {
    /**
     * 图表实例
     */
    chart: any;
    /**
     *  当前应用数据
     */
    data: PdVisChartData;
    /**
     *  历史数据列表中当前数据的位置
     */
    historyCursor: number;
    /**
     *  历史数据列表
     */
    historyList: PdVisChartCacheData[];
    /**
     *  数据是否加载中
     */
    inLoading: boolean;
    /**
     *  当前加载数据的参数
     */
    loadParams: PdVisChartLoadParams;
    /**
     *  配置
     */
    settings: PdVisChartSettings;
    /**
     *  是否启用工具栏
     */
    toolbarEnable: boolean;
    /**
     *  缓存的数据
     */
    protected cacheList: PdVisChartCacheData[];
    /**
     * 视图标识与ID映射记录
     */
    protected view: {
        [key: string]: string;
    };
    /**
     * 构造方法
     * @param {PdVisChartSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisChartSettings);
    /**
     * 添加新的数据
     * @param data - 新的数据
     * @param {PdVisChartLoadParams} lp - 新数据的参数
     */
    addData(data: PdVisChartData, lp: PdVisChartLoadParams): void;
    /**
     * 添加视图
     * @param child - 视图的选择器
     * @param {string} view - 视图标识
     * @param settings - 面板配置
     */
    addViewPanel(child: PdSelector, view: string, settings: PdTabPanelChildSettings): void;
    /**
     * 返回上一步
     */
    back(): void;
    /**
     * 清除当前数据
     */
    clearData(): void;
    /**
     * 清空历史
     */
    clearHistory(): void;
    /**
     * 全屏展示
     */
    fullscreen(): void;
    /**
     * 获取当前的数据
     */
    getData(): PdVisChartData;
    /**
     * 获取单条历史数据
     */
    getHistory(i?: number): PdVisChartCacheData;
    /**
     * 获取所有历史数据
     */
    getHistoryData(): PdVisChartCacheData[];
    /**
     * 获取最后一次加载数据时的参数
     */
    getLastLoadParams(): PdVisChartLoadParams;
    /**
     * 获取当前加载数据时的参数
     */
    getLoadParams(): PdVisChartLoadParams;
    /**
     * 跳转到历史数据队列中指定的位置，并渲染该数据
     * @param {number} i - 历史数据所在位置
     */
    goHistory(i: number): void;
    /**
     * 加载数据
     * @param lp - 加载数据的参数
     * @param {string} source - 请求的来源
     */
    abstract load(lp: PdVisChartLoadParams, source?: string): Promise<PdVisChartData>;
    /**
     * 重新加载数据
     * @return {Promise} 加载数据的Promise
     */
    abstract reload(): Promise<PdVisChartData>;
    /**
     * 替换组件当前展示的数据
     * @param data - 替换的数据
     */
    replaceData(data: PdVisChartData): void;
    /**
     * 显示指定标识的视图
     * @param {string} view - 视图标识
     */
    showView(view: string): void;
    /**
     * 显示指定标识的视图面板
     * @param {string} view - 视图标识
     */
    showViewPage(view: string): void;
    /**
     * 执行加载数据的请求
     * @param {(self: PdVisChart, lp: PdVisChartLoadParams) => Promise<PdVisChartData>} loader - 数据加载的方法
     * @param {PdVisChartLoadParams} lp - 加载数据的参数
     */
    protected ajaxLoad(loader: (self: PdVisChart, lp: PdVisChartLoadParams) => Promise<PdVisChartData>, lp?: PdVisChartLoadParams): Promise<PdVisChartData>;
    /**
     * 创建历史数据
     */
    protected buildHistoryData(): PdVisChartCacheData;
    /**
     * 缓存数据
     */
    protected cacheData(): void;
    /**
     * 绘制图表
     */
    protected draw(): void;
    /**
     * 渲染历史数据
     * @param {PdVisChartCacheData} history - 历史数据
     */
    protected drawCacheData(history: PdVisChartCacheData): void;
    /**
     * 渲染新获取的数据
     * @param data - 新获取的数据
     * @param {PdVisChartLoadParams} lp - 加载数据的参数
     */
    protected drawNewData(data: PdVisChartData, lp: PdVisChartLoadParams): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 预处理数据
     */
    protected preprocessData(): void;
    /**
     * 设置当前展示的数据
     * @param data - 需要展示的数据
     */
    protected setData(data: PdVisChartData): void;
}
