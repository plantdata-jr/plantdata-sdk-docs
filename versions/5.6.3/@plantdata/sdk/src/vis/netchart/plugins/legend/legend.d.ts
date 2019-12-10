/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisNetChart } from '../../netchart';
import { PdSelector } from '../../../../common/common';
/**
 * 图例数据
 */
export interface PdVisLegendItem {
    /**
     *  图例颜色
     */
    color?: string;
    /**
     * 是否虚线
     */
    dashed?: boolean;
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 其他
     */
    extra?: {
        [key: string]: any;
    };
    /**
     * 是否隐藏
     */
    hidden?: boolean;
    /**
     *  图例key
     */
    key?: any;
    /**
     * 状态
     */
    status?: string;
    /**
     *  图例显示名
     */
    value?: string;
}
/**
 * 图例插件配置
 */
export interface PdVisPluginLegendSettings extends PdVisPluginSettings {
    /**
     * 是否自动配色，TODO 无颜色的自动分配，有颜色的不更换
     */
    auto?: boolean;
    /**
     * 生成图例的方法
     * @param {PdVisLegendItem[]} data - 图例数据
     * @param {JQuery} $container - 生成图例的Dom容器
     */
    buildLegend?: (data: PdVisLegendItem[], $container: JQuery) => void;
    /**
     * 生成图例项
     * @param {PdVisLegendItem} item - 单条图例数据
     */
    buildLegendItem?: (item: PdVisLegendItem) => PdSelector;
    /**
     * 所有颜色
     */
    color?: string[];
    /**
     * 展示列数
     */
    columns?: number;
    /**
     * 展示的最大列数
     */
    columnsMax?: number;
    /**
     * 可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  图例数据
     */
    data?: PdVisLegendItem[];
    /**
     * 图例相关的回调事件
     */
    events?: {
        /**
         * 单击图例项的回调事件
         * @param {JQuery.ClickEvent} e - 事件对象
         */
        click?: (e: JQuery.ClickEvent) => any;
        /**
         * 双击图例项的回调事件
         * @param {JQuery.DoubleClickEvent} e - 事件对象
         */
        dblclick?: (e: JQuery.DoubleClickEvent) => any;
        /**
         * 鼠标移入图例项的回调事件
         * @param {JQuery.MouseEnterEvent} e - 事件对象
         */
        mouseenter?: (e: JQuery.MouseEnterEvent) => any;
        /**
         * 鼠标移出图例项的回调事件
         * @param {JQuery.MouseLeaveEvent} e - 事件对象
         */
        mouseleave?: (e: JQuery.MouseLeaveEvent) => any;
    };
    /**
     * 过滤图例数据是否需要显示
     * @param {PdVisLegendItem} item - 单条图例数据
     */
    filter?: (item: PdVisLegendItem) => boolean;
    /**
     * 图例的最大行数
     */
    rowsMax?: number;
    /**
     * 是否显示所有的图例数据
     */
    showAllLegend?: boolean;
}
/**
 * 图例插件
 */
export declare abstract class PdVisPluginLegend extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginLegendSettings;
    /**
     *  配置
     */
    settings: PdVisPluginLegendSettings;
    /**
     *  颜色映射
     */
    protected colorMap: {
        [key: string]: string;
    };
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 分配图例颜色
     * @param legends 图例数据
     * @param colorMap 已分配的颜色记录
     * @param candColor 候选颜色列表
     */
    static assignColor(legends: PdVisLegendItem[], colorMap?: {
        [key: string]: string;
    }, candColor?: string[]): PdVisLegendItem[];
    /**
     * 构造方法
     * @param {PdVisPluginLegendSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisPluginLegendSettings);
    /**
     * 获取显示的图例
     */
    getAvailableData(): PdVisLegendItem[];
    /**
     * 获取图例数据
     */
    getData(): PdVisLegendItem[];
    /**
     * 替换图例数据并重绘
     * @param data 新的图例数据
     */
    replaceData(data: PdVisLegendItem[]): void;
    /**
     * 更新图例数据
     * @param data - 新的图例数据
     */
    updateData(data: PdVisLegendItem[]): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 渲染图例
     * @param {PdVisLegendItem[]} data - 图例数据
     * @param {JQuery} $container - 生成图例的Dom容器
     */
    protected buildLegend(data: PdVisLegendItem[], $container: JQuery): void;
    /**
     * 生成图例项
     * @param {PdVisLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    protected buildLegendItem(item: PdVisLegendItem): PdSelector;
    /**
     * 计算列总宽度
     * @param columns - 列总数
     */
    protected calcColumnsWidth(columns: number): number;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 过滤图例数据是否需要显示
     * @param {PdVisLegendItem} item - 单条图例数据
     */
    protected abstract filter(item: PdVisLegendItem): boolean;
    /**
     * 初始化图例数据，状态，分配颜色等
     */
    protected initData(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginLegendSettings} settings - 用户定义配置
     * @return {PdVisPluginLegendSettings} 配置
     */
    protected initSettings(settings: PdVisPluginLegendSettings): PdVisPluginLegendSettings;
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
    protected abstract legendUpdate(updateChart?: boolean): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新图例的列宽度
     */
    protected updateColumnWidth(): void;
}
