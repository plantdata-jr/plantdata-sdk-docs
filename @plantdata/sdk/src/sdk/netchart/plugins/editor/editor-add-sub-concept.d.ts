import { PdSDKEditorAddConcept, PdSDKEditorAddConceptSettings } from './editor-add-concept';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 概念添加工具配置
 */
export interface PdSDKEditorAddSubConceptSettings extends PdSDKEditorAddConceptSettings {
}
/**
 * 概念添加工具
 */
export declare class PdSDKEditorAddSubConcept extends PdSDKEditorAddConcept {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddSubConceptSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddSubConceptSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorAddSubConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorAddSubConceptSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 初始化配置
     * @param {PdSDKEditorAddSubConceptSettings} settings - 用户定义配置
     * @return {PdSDKEditorAddSubConceptSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAddSubConceptSettings): PdSDKEditorAddSubConceptSettings;
}
