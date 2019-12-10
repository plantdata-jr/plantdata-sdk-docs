/// <reference types="jquery" />
import { PdVisNetChart, PdVisNodeId } from '../../../../../vis/netchart/netchart';
import { PdSDKAjaxSettings } from '../../../../utils/utils';
import { PdSDKPluginStatsToolConfig } from './stats-tool';
import { PdSDKNetChart } from '../../../netchart';
import { PdSDKPluginStatsNetChartBarTool, PdSDKPluginStatsNetChartBarToolSettings } from './stats-netchart-bar-tool';
import { PdOptionType, PdSelector } from '../../../../../common/common';
import { PdSDKStat } from '../../../../stats/stat';
import { PdSDKPluginStatsChartFilterDialog } from '../../../../../sdk/netchart/plugins/stats/stats-chart/stats-chart-filter-dialog';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsRelationAttrValueConfig extends PdSDKPluginStatsToolConfig {
    /**
     *  所属属性
     */
    attrId?: string;
    /**
     *  所属概念
     */
    conceptId?: string;
    /**
     *  边属性序号
     */
    seqNo?: number;
    /**
     * 是否合并
     */
    isMerge?: boolean | string;
    /**
     * 限定实体的ID列表
     */
    entityIds?: PdVisNodeId[];
    /**
     *  时间筛选时的类型： 1 按年, 2安季度，3按月 ,4按日,5按时，6按分，7按秒
     */
    type?: number;
}
/**
 * SDK 关系按边属性值统计配置
 */
export interface PdSDKPluginStatsRelationAttrValueSettings extends PdSDKPluginStatsNetChartBarToolSettings {
    /**
     *  SDK 图谱组件
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
    /**
     * 关系按边属性值统计参数
     */
    rule?: PdSDKPluginStatsRelationAttrValueConfig;
    /**
     * 统计筛选回调
     * @param entityIds 选中的实体ID列表
     */
    statFilterHandler?: (entityIds: PdVisNodeId[]) => void;
}
/**
 * SDK 关系按边属性值统计
 */
export declare class PdSDKPluginStatsRelationAttrValue extends PdSDKPluginStatsNetChartBarTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsRelationAttrValueSettings;
    /**
     * 统计类型
     */
    static type: string;
    /**
     * 统计名称
     */
    static typeName: string;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsRelationAttrValueSettings;
    /**
     * 配置弹框实例
     */
    protected filterDialog: PdSDKPluginStatsChartFilterDialog;
    /**
     *  结束时间
     */
    protected end: string;
    /**
     *  开始时间
     */
    protected start: string;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsRelationAttrValueSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsRelationAttrValueSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 根据实体进行统计过滤
     * @param ids 限定的实体ID列表
     */
    filterByEntity(ids: PdVisNodeId[]): void;
    /**
     * 显示编辑
     */
    showEdit(): void;
    /**
     * 激活柱子
     */
    protected activeBar(index: number): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成起步请求配置
     * @return {PdSDKAjaxSettings} 异步请求配置
     */
    protected buildRequest(): PdSDKAjaxSettings;
    /**
     * 生成图表
     * @param {PdSelector} selector - 生成的DOM位置
     * @param {boolean} showTitle - 是否显示标题
     * @return {PdSDKStat} - 统计实例
     */
    protected createChart(selector: PdSelector, showTitle?: boolean): PdSDKStat;
    /**
     * 创建编辑表单
     * @return {JQuery} 编辑表单的DOM对象
     */
    protected createEditForm(): JQuery;
    /**
     * 自动生成统计标题
     */
    protected createTitle(): string;
    /**
     * 生成X轴选项
     * @return {string} X轴选项表单
     */
    protected createXSelect(): string;
    /**
     * 获取候选属性
     * @param {string} conceptId - 概念
     * @return {PdOptionType[]} 候选属性的集合
     */
    protected getAtts(conceptId: string): PdOptionType[];
    /**
     * 获取关联的关系ID列表
     * @return {string[]} 关联关系的ID列表
     */
    protected getRelatedLinkIds(): string[];
    /**
     * 获取关联的节点ID列表
     * @return {PdVisNodeId[]} 关联节点的ID列表
     */
    protected getRelatedNodeIds(): PdVisNodeId[];
    /**
     * 获取候选边属性
     * @param {string} attrId - 属性Id
     * @return {PdOptionType[]} 候选属性的集合
     */
    protected getSeqNo(attrId: string): PdOptionType[];
    /**
     * 获取当前时间范围
     * @return [string, string] 当前时间范围
     */
    protected getTimeRange(): [string, string];
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsRelationAttrValueSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsRelationAttrValueSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsRelationAttrValueSettings): PdSDKPluginStatsRelationAttrValueSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 是否时间类型
     * @param {PdSDKPluginStatsRelationAttrValueConfig} rule 判断当前配置是否时间类型
     */
    protected isTimeType(rule: PdSDKPluginStatsRelationAttrValueConfig): boolean;
    /**
     * 是否通过校验
     */
    protected isValidate(rule: PdSDKPluginStatsRelationAttrValueConfig): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新边属性选择器
     */
    protected updateSeqNoOptions(attrId?: string | number | string[]): void;
    /**
     * 更新属性选择器
     */
    protected updateAttsOptions(conceptId?: string | number | string[]): void;
    /**
     * 更新概念选择器
     */
    protected updateConceptOptions(): void;
    /**
     * 更新表单显示状态
     */
    protected updateFormStatus(): void;
}
