/// <reference types="jquery" />
import { PdVisNetChart, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
import { PdUIPagination } from '../../../../ui/components/pagination/pagination';
import { PdVisDropdown } from '../../../../vis/utils/dropdown';
import { PdSDKNetChartDataLink } from '../../model';
/**
 * 轨迹完整数据
 */
export interface PdSDKPluginTraceEventDataEvent {
    /**
     *  发生月日
     */
    date?: string;
    /**
     *  详情描述
     */
    detail?: any;
    /**
     * id
     */
    id?: string;
    /**
     * 生成轨迹的规则ID
     */
    ruleId?: string;
    /**
     *  发生时间的时间戳
     */
    timestamp?: number;
    /**
     *  发生年份
     */
    year?: string;
}
/**
 * 关系事件完整数据
 */
export interface PdSDKPluginEventLinkEvent extends PdSDKNetChartDataLink, PdSDKPluginTraceEventDataEvent {
}
/**
 * 轨迹列表设置
 */
export interface PdSDKPluginTraceEventSettings extends PdSDKPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * 渲染轨迹详情的方法
     * @param {PdSDKPluginEventDataEvent} event - 轨迹
     * @return {string} 详情HTML字符串
     */
    drawDetail?: (event: PdSDKPluginTraceEventDataEvent) => string;
}
/**
 * 轨迹列表插件
 */
export declare class PdSDKPluginTraceEvent extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTraceEventSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginTraceEventSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 过滤按钮
     */
    protected filter: PdVisDropdown;
    /**
     * 轨迹过滤Id
     */
    protected filterId: PdVisNodeId;
    /**
     * 页码
     */
    protected pageNo: number;
    /**
     * 轨迹列表分页
     */
    protected pagination: PdUIPagination;
    /**
     *  关系轨迹数据集
     */
    protected traceEventList: PdSDKPluginEventLinkEvent[];
    /**
     * 可见轨迹
     */
    protected visibleEvents: PdSDKPluginTraceEventDataEvent[];
    /**
     * 构造方法
     * @param {PdSDKPluginTraceEventSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTraceEventSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定轨迹
     */
    protected bindEvent(): void;
    /**
     * 渲染轨迹详情的方法
     * @param {PdSDKPluginEventDataEvent} event - 轨迹
     * @return {string} 详情HTML字符串
     */
    protected drawDetail(event: PdSDKPluginTraceEventDataEvent): string;
    /**
     * 过滤出指定时间内的轨迹
     * @return {PdSDKPluginEventDataEvent[]} 指定时间内的轨迹列表
     */
    protected getVisibleEvents(): PdSDKPluginTraceEventDataEvent[];
    /**
     * 初始化配置
     * @param {PdSDKPluginTraceEventSettings} settings - 用户定义配置
     * @return {PdSDKPluginTraceEventSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTraceEventSettings): PdSDKPluginTraceEventSettings;
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
     * 渲染可视轨迹列表
     */
    protected rendererData(pageNo?: number): void;
    /**
     * 取消绑定轨迹
     */
    protected unbindEvent(): void;
    /**
     * 生成完整轨迹数据
     */
    protected updateEventDetail(): void;
}
