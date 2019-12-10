/// <reference types="jquery" />
import { PdSDKEditorToolSettings } from './editor-tool';
import { PdSDKEditorDefineRelation, PdSDKEditorDefineRelationSettings } from './editor-define-relation';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 对象属性工具配置
 */
export interface PdSDKEditorDefineRelationConceptSettings extends PdSDKEditorDefineRelationSettings {
}
/**
 * 对象属性工具
 */
export declare class PdSDKEditorDefineRelationConcept extends PdSDKEditorDefineRelation {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineRelationConceptSettings;
    /**
     * 父实体数据
     */
    protected data: PdSDKNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineRelationConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineRelationConceptSettings);
    /**
     * 新增属性
     * @param attDefJson - 属性数据
     */
    addAttribute(attDefJson: any): Promise<string>;
    /**
     * 删除属性
     */
    deleteAttribute(id: string): Promise<void>;
    /**
     * 获取数据列表数据
     */
    getAttributeList(): Promise<any[]>;
    /**
     * 打开关系定义弹框
     */
    openAddDialog(data: PdSDKNetChartDataNode): void;
    /**
     * 修改属性
     * @param attDefJson - 属性数据
     */
    updateAttribute(attDefJson: any): Promise<string>;
    /**
     * 更新schema执行的方法
     * @param promiseData - 返回的数据
     * @param formData - 表单数据
     * @param range - 值域
     */
    updateSchemaFun(promiseData: any, formData: any, range: any): void;
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
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
