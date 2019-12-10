/// <reference types="jquery" />
import { PdVisLegendItem, PdVisPluginLegend, PdVisPluginLegendSettings } from '../legend';
import { PdVisNetChartDataNode, PdVisNodeId } from '../../../netchart';
import { PdSelector } from '../../../../../common/common';
/**
 * 节点图例数据
 */
export interface PdVisNodeLegendItem extends PdVisLegendItem {
    /**
     * 是否空心节点
     */
    outline?: boolean;
}
/**
 * 节点图例插件
 */
export declare class PdVisPluginNodeLegend extends PdVisPluginLegend {
    /**
     *  图例Id数据
     */
    protected legendIds: PdVisNodeId[];
    /**
     * 节点数据
     */
    protected nodeData: PdVisNetChartDataNode[];
    /**
     * 分配图例颜色
     */
    static assignColor(legends: PdVisLegendItem[], colorMap?: {
        [key: string]: string;
    }, candColor?: string[]): PdVisLegendItem[];
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
     * @param {PdVisNodeLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    protected buildLegendItem(item: PdVisNodeLegendItem): PdSelector;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 过滤图例数据是否需要显示
     * @param {PdVisLegendItem} item - 单条图例数据
     */
    protected filter(item: PdVisNodeLegendItem): boolean;
    /**
     * 初始化图例数据
     */
    protected initData(): void;
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
