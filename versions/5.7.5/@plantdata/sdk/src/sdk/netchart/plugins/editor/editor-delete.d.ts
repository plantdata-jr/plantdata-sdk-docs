/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
import { PdSDKAjaxSettings } from '../../../utils/service';
/**
 * 删除工具配置
 */
export interface PdSDKEditorDeleteSettings extends PdSDKEditorToolSettings {
    /**
     * 删除概念父概念设置
     */
    deleteConceptParentSetting?: PdSDKAjaxSettings;
    /**
     * 删除概念设置
     */
    deleteConceptSetting?: PdSDKAjaxSettings;
    /**
     * 删除实体父概念设置
     */
    deleteInstanceParentSetting?: PdSDKAjaxSettings;
    /**
     * 删除实体设置
     */
    deleteInstanceSetting?: PdSDKAjaxSettings;
    /**
     * 删除关系设置
     */
    deleteRelationSetting?: PdSDKAjaxSettings;
    /**
     * 更新组件状态
     */
    updateStatus?: Function;
    /**
     * 更新组件显示状态
     */
    updateVisibility?: Function;
}
/**
 * 删除工具
 */
export declare class PdSDKEditorDelete extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDeleteSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorDeleteSettings;
    /**
     * 选中边数据
     */
    protected link: PdSDKNetChartDataLink;
    /**
     * 选中边关联节点数据
     */
    protected linkData: {
        from?: PdSDKNetChartDataNode;
        to?: PdSDKNetChartDataNode;
    };
    /**
     * 选中节点数据
     */
    protected node: PdSDKNetChartDataNode;
    /**
     * 多选选中节点数据
     */
    protected nodes: PdSDKNetChartDataNode[];
    /**
     * 构造方法
     * @param {PdSDKEditorDeleteSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDeleteSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 删除概念
     */
    protected deleteConcept(): Promise<void>;
    /**
     * 删除概念的父概念
     * @param child 子节点数据
     * @param parent 父节点数据
     */
    protected deleteConceptParent(child: PdSDKNetChartDataNode, parent: PdSDKNetChartDataNode): Promise<void>;
    /**
     * 删除实体
     * @param {PdSDKNetChartDataNode} node 节点数据
     */
    protected deleteInstance(node: PdSDKNetChartDataNode): Promise<void>;
    /**
     *
     * 删除实体的父概念
     * @param {PdSDKNetChartDataNode} child 子节点数据
     * @param {PdSDKNetChartDataNode} parent 父节点数据
     */
    protected deleteInstanceParent(child: PdSDKNetChartDataNode, parent: PdSDKNetChartDataNode): Promise<void>;
    /**
     * 删除实体关系
     */
    protected deleteRelation(): Promise<void>;
    /**
     * 初始化配置
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
