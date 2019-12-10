/// <reference types="jquery" />
import { PdSDKEditorDefineRelation, PdSDKEditorDefineRelationSettings } from './editor-define-relation';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 边数值属性工具配置
 */
export interface PdSDKEditorDefineRelationEdgeSettings extends PdSDKEditorDefineRelationSettings {
}
/**
 * 边数值属性工具
 */
export declare class PdSDKEditorDefineRelationEdge extends PdSDKEditorDefineRelation {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineRelationEdgeSettings;
    /**
     * 父实体数据
     */
    protected data: PdSDKNetChartDataLink;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineRelationEdgeSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineRelationEdgeSettings);
    /**
     *  新增数据
     * @param relationAttDefJson - 属性数据
     */
    addAttribute(relationAttDefJson: any): Promise<number>;
    /**
     * 删除属性
     * @param relationAttDefId - 属性id
     */
    deleteAttribute(relationAttDefId: string): Promise<void>;
    /**
     * 获取数据列表数据
     */
    getAttributeList(): Promise<any[]>;
    /**
     * 打开关系定义弹框
     */
    openAddDialog(data: PdSDKNetChartDataLink): void;
    /**
     * 修改属性
     * @param relationAttDefJson - 属性数据
     */
    updateAttribute(relationAttDefJson: any): Promise<number>;
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 获取表单配置
     * @return {PdVisEditItemSettings[]} 表单配置
     */
    protected getEditFormSettings(): PdVisEditItemSettings[];
    /**
     * 初始化配置
     * @param {PdSDKEditorDefineRelationEdgeSettings} settings - 用户定义配置
     * @return {PdSDKEditorDefineRelationEdgeSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorDefineRelationEdgeSettings): PdSDKEditorDefineRelationEdgeSettings;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
