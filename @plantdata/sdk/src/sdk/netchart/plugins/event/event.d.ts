/// <reference types="jquery" />
import { PdVisNetChart, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
import { PdUIPagination } from '../../../../ui/components/pagination/pagination';
import { PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 事件完整数据
 */
export interface PdSDKPluginEventDataEvent {
    /**
     *  事件发生月日
     */
    date?: string;
    /**
     *  事件详情描述
     */
    detail?: any;
    /**
     * 事件id
     */
    id?: string | PdVisNodeId;
    /**
     *  事件发生时间的时间戳
     */
    timestamp?: number;
    /**
     *  事件发生年份
     */
    year?: string;
}
/**
 * 关系事件完整数据
 */
export interface PdSDKPluginEventLinkEvent extends PdSDKNetChartDataLink, PdSDKPluginEventDataEvent {
    /**
     *  事件关联的原对象ID列表
     */
    fromIds?: PdVisNodeId[];
    /**
     * 事件id
     */
    id?: string;
    /**
     *  事件关联的所有对象ID列表
     */
    ids?: string[];
    /**
     *  事件发生时间的时间戳
     */
    timestamp?: number;
    /**
     *  事件关联的目标对象ID列表
     */
    toIds?: PdVisNodeId[];
}
/**
 * 实体事件完整数据
 */
export interface PdSDKPluginEventNodeEvent extends PdSDKNetChartDataNode, PdSDKPluginEventDataEvent {
    /**
     * 事件id
     */
    id: PdVisNodeId;
}
/**
 * 事件列表设置
 */
export interface PdSDKPluginEventSettings extends PdSDKPluginSettings {
    /**
     *  是否激活
     */
    active?: boolean;
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * 渲染事件详情的方法
     * @param {PdSDKPluginEventDataEvent} event - 事件
     * @return {string} 详情HTML字符串
     */
    drawDetail?: (event: PdSDKPluginEventDataEvent) => string;
    /**
     * 标题类型
     */
    titleType?: string;
}
/**
 * 事件列表插件
 */
export declare class PdSDKPluginEvent extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginEventSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginEventSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  关系事件数据集
     */
    protected linkEventList: PdSDKPluginEventLinkEvent[];
    /**
     *  实体事件数据集
     */
    protected nodeEventList: PdSDKPluginEventNodeEvent[];
    /**
     * 页码
     */
    protected pageNo: number;
    /**
     * 事件列表分页
     */
    protected pagination: PdUIPagination;
    /**
     * 可见事件
     */
    protected visibleEvents: PdSDKPluginEventDataEvent[];
    /**
     * 构造方法
     * @param {PdSDKPluginEventSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginEventSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 渲染事件详情的方法
     * @param {PdSDKPluginEventDataEvent} event - 事件
     * @return {string} 详情HTML字符串
     */
    protected drawDetail(event: PdSDKPluginEventDataEvent): string;
    /**
     * 过滤出指定时间内的事件
     * @return {PdSDKPluginEventDataEvent[]} 指定时间内的事件列表
     */
    protected getVisibleEvents(): PdSDKPluginEventDataEvent[];
    /**
     * 初始化配置
     * @param {PdSDKPluginEventSettings} settings - 用户定义配置
     * @return {PdSDKPluginEventSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginEventSettings): PdSDKPluginEventSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 渲染可视事件列表
     */
    protected rendererData(pageNo?: number): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 生成完整事件数据
     */
    protected updateEventDetail(): void;
}
