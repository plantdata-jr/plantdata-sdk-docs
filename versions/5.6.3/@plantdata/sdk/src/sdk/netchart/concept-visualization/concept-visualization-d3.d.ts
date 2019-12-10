/// <reference types="jquery" />
import { BaseType, Selection } from 'd3-selection';
import { HierarchyNode, HierarchyPointNode, TreeLayout } from 'd3-hierarchy';
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSDKKGSettings } from '../../utils/service';
/**
 * 节点数据
 */
export interface PdSDKConceptVisualizationD3DataItem {
    /**
     * children的备份
     */
    _children?: PdSDKConceptVisualizationD3DataItem[];
    /**
     * 子节点
     */
    children?: PdSDKConceptVisualizationD3DataItem[];
    /**
     * 名称
     */
    name?: string;
    /**
     * 数值属性列表
     */
    numAtts?: {
        name: string;
        dataType: number;
    }[];
    /**
     * 类型
     */
    type?: number;
}
/**
 * 线
 */
export interface PdSDKConceptVisualizationD3Link extends HierarchyPointNode<{}> {
    /**
     * x 的备份
     */
    x0?: number;
    /**
     * y 的备份
     */
    y0?: number;
}
/**
 * 节点
 */
export interface PdSDKConceptVisualizationD3Node extends HierarchyPointNode<PdSDKConceptVisualizationD3DataItem> {
    /**
     * children的备份
     */
    _children?: this[];
    /**
     * id
     */
    id?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * x 的备份
     */
    x0?: number;
    /**
     * y 的备份
     */
    y0?: number;
}
/**
 * rootData
 */
export interface PdSDKConceptVisualizationD3RootData extends HierarchyNode<PdSDKConceptVisualizationD3DataItem> {
    /**
     * children的备份
     */
    _children?: this[];
    /**
     * children
     */
    children?: this[];
    /**
     * id
     */
    id?: string;
    /**
     * x
     */
    x?: number;
    /**
     * x 的备份
     */
    x0?: number;
    /**
     * y
     */
    y?: number;
    /**
     * y 的备份
     */
    y0?: number;
}
/**
 * 概念可视化配置
 */
export interface PdSDKConceptVisualizationD3Settings extends PdSDKKGSettings, PdComponentSettings {
    /**
     * 预置包含属性的数据
     */
    allData?: PdSDKConceptVisualizationD3DataItem;
    /**
     *  属性颜色
     */
    attributeColor?: string;
    /**
     *  概念颜色
     */
    conceptColor?: string;
    /**
     *  预置不包含属性的数据
     */
    conceptData?: PdSDKConceptVisualizationD3DataItem;
    /**
     * 初始化层级
     */
    initialTreeDepth?: number;
    /**
     *  布局朝向
     */
    orient?: 'horizontal' | 'vertical';
    /**
     *  概念可视化生成的容器
     */
    selector?: PdSelector;
    /**
     *  是否显示属性信息
     */
    showRelation?: boolean;
}
/**
 * 基于D3的概念可视化
 * */
export declare class PdSDKConceptVisualizationD3 extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKConceptVisualizationD3Settings;
    /**
     *  图表对象
     */
    chart: Selection<BaseType, {}, HTMLElement, any>;
    /**
     *  配置
     */
    settings: PdSDKConceptVisualizationD3Settings;
    /**
     * 树的实例
     */
    treeIns: TreeLayout<{}>;
    /**
     *  包含属性信息的数据
     */
    protected allData: PdSDKConceptVisualizationD3DataItem;
    /**
     * chartResize
     */
    protected chartResize: () => void;
    /**
     *  不包含属性信息的数据
     */
    protected conceptData: PdSDKConceptVisualizationD3DataItem;
    /**
     * 持续的时间
     */
    protected duration: number;
    /**
     * label最大长度
     */
    protected maxLabelLength: number;
    /**
     * 根数据
     */
    protected rootData: PdSDKConceptVisualizationD3RootData;
    /**
     * 树的容器
     */
    protected treeGroup: Selection<BaseType, {}, HTMLElement, any>;
    /**
     * 容器高度
     */
    protected viewerHeight: number;
    /**
     * 容器宽度
     */
    protected viewerWidth: number;
    /**
     * 定义zoomListener
     */
    protected zoomListener: any;
    /**
     * 获取连接线的路径
     * @param s - 起点坐标
     * @param d - 终点坐标
     */
    static diagonal(s: {
        x: number;
        y: number;
    }, d: {
        x: number;
        y: number;
    }): string;
    /**
     * 切换_children 和 children
     * @param d 节点数据
     */
    static toggleChildren(d: PdSDKConceptVisualizationD3Node): PdSDKConceptVisualizationD3Node;
    /**
     * 构造方法
     * @param {PdSDKConceptVisualizationD3Settings} settings - 用户配置
     */
    constructor(settings?: PdSDKConceptVisualizationD3Settings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 下载
     */
    download(): void;
    /**
     * 加载树图
     */
    load(): void;
    /**
     * 加载数据
     */
    loadData(): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 将节点
     */
    protected centerNode(source: PdSDKConceptVisualizationD3Node | PdSDKConceptVisualizationD3RootData): void;
    /**
     * 折叠
     * @param d - 点击的节点
     */
    protected collapse(d: PdSDKConceptVisualizationD3RootData): void;
    /**
     * 绘制
     * @param data - 数据
     */
    protected drawChart(data: PdSDKConceptVisualizationD3DataItem): void;
    /**
     * 绘制信息框
     * @param data - 数据
     */
    protected drawInfo(data: PdSDKConceptVisualizationD3Node): void;
    /**
     * 展开
     * @param d - 点击的节点
     */
    protected expand(d: PdSDKConceptVisualizationD3DataItem): void;
    /**
     * 初始化图
     */
    protected initChart(): void;
    /**
     * 初始化配置
     * @param {PdSDKConceptVisualizationD3Settings} settings - 用户定义配置
     * @return {PdSDKConceptVisualizationD3Settings} 配置
     */
    protected initSettings(settings: PdSDKConceptVisualizationD3Settings): PdSDKConceptVisualizationD3Settings;
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
     * 取消绑定事件
     * */
    protected unbindEvent(): void;
    /**
     * 更新树
     * @param source - 中心点数据
     */
    protected update(source: PdSDKConceptVisualizationD3Node | PdSDKConceptVisualizationD3RootData): void;
    /**
     * 遍历数据的辅助类
     * @param parent - 父节点数据
     * @param visitFn - 遍历方法
     * @param childrenFn - 遍历子数据方法
     * @param index - 层级
     */
    protected visit(parent: PdSDKConceptVisualizationD3DataItem, visitFn: Function, childrenFn: Function, index: number): void;
}
