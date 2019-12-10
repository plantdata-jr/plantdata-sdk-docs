/// <reference types="jquery" />
import { PdVisLegendItem, PdVisPluginLegend, PdVisPluginLegendSettings } from '../legend';
import { PdOptionType, PdSelector } from '../../../../../common/common';
import { PdVisNetChartDataLink } from '../../../netchart';
/**
 * 关系图例数据
 */
export interface PdVisLinkLegendItem extends PdVisLegendItem {
    /**
     * 边显示的属性
     */
    displayAtt?: string;
    /**
     * 边显示的属性的可选范围
     */
    displayAtts?: PdOptionType[];
}
/**
 * 关系图例插件
 */
export declare class PdVisPluginLinkLegend extends PdVisPluginLegend {
    /**
     *  图例Id数据
     */
    protected legendIds: number[];
    /**
     * 关系数据
     */
    protected linkData: PdVisNetChartDataLink[];
    /**
     * 构造方法
     * @param {PdVisPluginLegendSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginLegendSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成图例项
     * @param {PdVisLinkLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    protected buildLegendItem(item: PdVisLinkLegendItem): PdSelector;
    /**
     * 过滤图例数据是否需要显示
     * @param {PdVisLegendItem} item - 单条图例数据
     */
    protected filter(item: PdVisLinkLegendItem): boolean;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 生成图例
     * @param updateChart 生成图例后是否更新图谱
     */
    protected legendDraw(updateChart?: boolean): void;
    /**
     * 更新图例
     * @param updateChart 生成图例后是否更新图谱
     */
    protected legendUpdate(updateChart?: boolean): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
