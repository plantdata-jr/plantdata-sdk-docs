/// <reference types="jquery" />
import { PdSDKEditorDefineAttribute, PdSDKEditorDefineAttributeSettings } from './editor-define-attribute';
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart/netchart';
import { PdSDKEditorToolSettings } from './editor-tool';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineAttributeConceptSettings extends PdSDKEditorDefineAttributeSettings {
}
/**
 * s数值属性定义工具
 */
export declare class PdSDKEditorDefineAttributeConcept extends PdSDKEditorDefineAttribute {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineAttributeConceptSettings;
    /**
     * 父实体数据
     */
    protected data: PdVisNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineAttributeConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineAttributeConceptSettings);
    /**
     * 打开关系定义弹框
     */
    openAddDialog(data: PdVisNetChartDataNode): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 新增属性
     * @param data - 属性数据
     */
    addAttribute(data: any): Promise<any>;
    /**
     * 删除属性
     */
    deleteAttribute(id: string): Promise<any>;
    /**
     * 获取数据列表数据
     */
    getAttributeList(): Promise<any>;
    /**
     * 修改属性
     * @param data - 属性数据
     */
    updateAttribute(data: any): Promise<any>;
    /**
     * 获取表单配置
     * @return {PdVisEditItemSettings[]} 表单配置
     */
    protected getEditFormSettings(): PdVisEditItemSettings[];
    /**
     * 获取类型列表
     * @return { [key: number]: string } 类型列表
     */
    protected getTypeList(): {
        [key: number]: string;
    };
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
