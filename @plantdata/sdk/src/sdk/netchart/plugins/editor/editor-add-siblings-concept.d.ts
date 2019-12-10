import { PdSDKEditorAddConcept, PdSDKEditorAddConceptSettings } from './editor-add-concept';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 概念添加工具配置
 */
export interface PdSDKEditorAddSiblingsConceptSettings extends PdSDKEditorAddConceptSettings {
}
/**
 * 概念添加工具
 */
export declare class PdSDKEditorAddSiblingsConcept extends PdSDKEditorAddConcept {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddSiblingsConceptSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddSiblingsConceptSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorAddSiblingsConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorAddSiblingsConceptSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 初始化配置
     * @param {PdSDKEditorAddSiblingsConceptSettings} settings - 用户定义配置
     * @return {PdSDKEditorAddSiblingsConceptSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAddSiblingsConceptSettings): PdSDKEditorAddSiblingsConceptSettings;
}
