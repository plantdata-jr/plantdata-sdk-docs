/// <reference types="jquery" />
import { PdSDKPluginStatsNetChartBarToolConfig, PdSDKPluginStatsNetChartTool, PdSDKPluginStatsNetChartToolSettings } from '../stats-netchart-tool';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsRelationAttrNameConfig extends PdSDKPluginStatsNetChartBarToolConfig {
    /**
     *  所属概念
     */
    conceptId?: string;
}
/**
 * SDK 按对象属性统计关系配置
 */
export interface PdSDKPluginStatsRelationAttrNameSettings extends PdSDKPluginStatsNetChartToolSettings<PdSDKPluginStatsRelationAttrNameConfig> {
}
/**
 * SDK 按对象属性统计关系
 */
export declare class PdSDKPluginStatsRelationAttrName extends PdSDKPluginStatsNetChartTool<PdSDKPluginStatsRelationAttrNameConfig> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsRelationAttrNameSettings;
    /**
     * 统计类型
     */
    static type: string;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsRelationAttrNameSettings;
    /**
     * 统计名称
     */
    static typeName(): string;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsRelationAttrNameSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsRelationAttrNameSettings);
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
     * 生成X轴选项
     * @return {string} X轴选项表单
     */
    protected createXSelect(): string;
    /**
     * 获取关联的关系ID列表
     * @return {string[]} 关联关系的ID列表
     */
    protected getRelatedLinkIds(): string[];
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsRelationAttrNameSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsRelationAttrNameSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsRelationAttrNameSettings): PdSDKPluginStatsRelationAttrNameSettings;
    /**
     * 是否通过校验
     */
    protected isValidate(rule: PdSDKPluginStatsRelationAttrNameConfig): boolean;
    /**
     * 请求统计结果
     */
    protected load<T>(): Promise<T>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新概念选择器
     */
    protected updateConceptOptions(): void;
}
