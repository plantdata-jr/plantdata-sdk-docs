/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 实体编辑工具配置
 */
export interface PdSDKEditorMergeRelationSettings extends PdSDKEditorToolSettings {
}
/**
 * 实体编辑工具
 */
export declare class PdSDKEditorMergeRelation extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorMergeRelationSettings;
    /**
     * 配置
     */
    settings: PdSDKEditorMergeRelationSettings;
    /**
     * 边数据
     */
    protected links: PdSDKNetChartDataLink[];
    /**
     * 节点数据
     */
    protected nodes: PdSDKNetChartDataNode[];
    /**
     * 构造方法
     * @param {PdSDKEditorMergeRelationSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorMergeRelationSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 初始化配置
     * @param {PdSDKEditorMergeRelationSettings} settings - 用户定义配置
     * @return {PdSDKEditorMergeRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorMergeRelationSettings;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
