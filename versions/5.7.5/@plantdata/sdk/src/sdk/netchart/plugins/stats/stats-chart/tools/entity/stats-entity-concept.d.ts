/// <reference types="jquery" />
import { PdVisNodeId } from '../../../../../../../vis/netchart/netchart';
import { PdSDKPluginStatsNetChartBarToolConfig, PdSDKPluginStatsNetChartTool, PdSDKPluginStatsNetChartToolSettings } from '../stats-netchart-tool';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsEntityConceptConfig extends PdSDKPluginStatsNetChartBarToolConfig {
    /**
     *  所属概念
     */
    conceptId?: string;
}
/**
 * SDK 实体按概念统计配置
 */
export interface PdSDKPluginStatsEntityConceptSettings extends PdSDKPluginStatsNetChartToolSettings<PdSDKPluginStatsEntityConceptConfig> {
}
/**
 * SDK 实体按概念统计
 */
export declare class PdSDKPluginStatsEntityConcept extends PdSDKPluginStatsNetChartTool<PdSDKPluginStatsEntityConceptConfig> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsEntityConceptSettings;
    /**
     * 统计类型
     */
    static type: string;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsEntityConceptSettings;
    /**
     * 统计名称
     */
    static typeName(): string;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsEntityConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsEntityConceptSettings);
    /**
     * 激活柱子
     */
    protected activeBar(index: number): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建编辑表单
     * @return {JQuery} 编辑表单的DOM对象
     */
    protected createEditForm(): JQuery;
    /**
     * 获取关联的节点ID列表
     * @return {PdVisNodeId[]} 关联节点的ID列表
     */
    protected getRelatedNodeIds(): PdVisNodeId[];
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsEntityConceptSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsEntityConceptSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsEntityConceptSettings): PdSDKPluginStatsEntityConceptSettings;
    /**
     * 是否通过校验
     */
    protected isValidate(rule: PdSDKPluginStatsEntityConceptConfig): boolean;
    /**
     * 请求统计结果
     */
    protected load<T>(): Promise<T>;
}
