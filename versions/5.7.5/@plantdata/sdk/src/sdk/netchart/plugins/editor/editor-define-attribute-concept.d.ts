/// <reference types="jquery" />
import { PdSDKEditorDefineAttribute, PdSDKEditorDefineAttributeSettings } from './editor-define-attribute';
import { PdSDKEditorToolSettings } from './editor-tool';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineAttributeConceptSettings extends PdSDKEditorDefineAttributeSettings {
}
/**
 * 数值属性定义工具
 */
export declare class PdSDKEditorDefineAttributeConcept extends PdSDKEditorDefineAttribute {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineAttributeConceptSettings;
    /**
     * 父实体数据
     */
    protected data: PdSDKNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineAttributeConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineAttributeConceptSettings);
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
     * 获取类型列表
     * @return { [key: number]: string } 类型列表
     */
    protected getTypeList(): {
        1: string;
        2: string;
        4: string;
        41: string;
        5: string;
        8: string;
        10: string;
        9: string;
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
