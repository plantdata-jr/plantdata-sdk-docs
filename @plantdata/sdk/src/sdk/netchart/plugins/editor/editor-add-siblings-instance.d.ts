import { PdSDKEditorAddInstance, PdSDKEditorAddInstanceSettings } from './editor-add-instance';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 实例添加工具配置
 */
export interface PdSDKEditorAddSiblingsInstanceSettings extends PdSDKEditorAddInstanceSettings {
}
/**
 * 添加同级实例工具
 */
export declare class PdSDKEditorAddSiblingsInstance extends PdSDKEditorAddInstance {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddSiblingsInstanceSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddSiblingsInstanceSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorAddSiblingsInstanceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorAddSiblingsInstanceSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 初始化配置
     * @param {PdSDKEditorAddSiblingsInstanceSettings} settings - 用户定义配置
     * @return {PdSDKEditorAddSiblingsInstanceSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAddSiblingsInstanceSettings): PdSDKEditorAddSiblingsInstanceSettings;
}
