/// <reference types="jquery" />
import { PdVisNetChart } from '../../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../../plugin';
import { PdSDKPluginStatsTool, PdSDKPluginStatsToolSettings } from './tools/stats-tool';
import { PdSDKPluginStatsToolEditableConfig } from './tools/stats-tool-editable';
import { PdSDKCRUDSettings } from '../../../../utils/service';
import { PdSelector } from '../../../../../common';
/**
 * 统计工具的构造方法
 */
export declare type PdSDKPluginStatsToolConstr = new (settings?: PdSDKPluginStatsToolSettings) => PdSDKPluginStatsTool;
/**
 * 统计项目模型
 */
export interface PdSDKGraphStatVO<T> {
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 统计唯一标识
     */
    id?: number;
    /**
     * 图谱名称
     */
    kgName?: string;
    /**
     * 统计规则
     */
    rule?: T;
    /**
     * 统计类型
     */
    type?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
}
/**
 * SDK 图统计配置
 */
export interface PdSDKPluginStatsChartSettings extends PdSDKPluginSettings, PdSDKCRUDSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  是否允许用户删除统计配置
     */
    deletable?: boolean;
    /**
     *  是否允许用户修改统计配置
     */
    editable?: boolean;
    /**
     * 允许类型
     */
    items?: string[];
    /**
     *  统计类型默认配置
     */
    statsDefaultSettings?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    /**
     *  统计配置
     */
    statsSettings?: PdSDKPluginStatsToolSettings[];
}
/**
 * SDK 图统计
 */
export declare class PdSDKPluginStatsChart extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsChartSettings;
    /**
     * 可添加的统计工具列表
     */
    protected static statToolMap: {
        [key: string]: {
            name: string;
            constr: PdSDKPluginStatsToolConstr;
        };
    };
    /**
     *  配置
     */
    settings: PdSDKPluginStatsChartSettings;
    /**
     * 图表实例
     */
    protected statTools: PdSDKPluginStatsTool[];
    /**
     * 注册统计类型组件
     * @param key 统计类型组件的唯一标识
     * @param name 统计类型组件的名称
     * @param constr 统计类型组件的构造方法
     */
    static register<T extends PdSDKPluginStatsTool, V extends PdSDKPluginStatsToolSettings>(key: string, name: string, constr: PdSDKPluginStatsToolConstr): void;
    /**
     * 取消注册统计类型组件
     * @param key 统计类型组件的唯一标识
     */
    static unregister(key: string): void;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsChartSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsChartSettings);
    /**
     * 添加统计
     * @param type - 统计类型
     * @param rule - 统计配置
     */
    add(type: string, rule: PdSDKPluginStatsToolEditableConfig): Promise<PdSDKPluginStatsToolSettings>;
    /**
     * 清空分析
     */
    clear(): void;
    /**
     * 删除统计配置
     * @param id - 统计配置id
     * @return {Promise} 删除统计配置的异步请求实例
     */
    delete(id: number): Promise<void>;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取当前设置的统计配置项
     */
    getStatsSettings(): PdSDKPluginStatsToolSettings[];
    /**
     * 获取统计配置
     * @param pageNo - 统计配置页码
     */
    list(pageNo?: number): Promise<PdSDKPluginStatsToolSettings[]>;
    /**
     * 获取统计配置
     * @param pageNo - 统计配置页码
     */
    load(pageNo?: number): Promise<PdSDKPluginStatsToolSettings[]>;
    /**
     * 分析
     */
    stats(): void;
    /**
     * 添加统计
     * @param id - 统计Id
     * @param type - 统计类型
     * @param rule - 统计配置
     * @param el - 生成异步请求动画的DOM
     */
    update(id: number, type: string, rule: PdSDKPluginStatsToolEditableConfig, el?: PdSelector): Promise<PdSDKPluginStatsToolSettings>;
    /**
     * 添加统计实例
     * @param {PdSDKPluginStatsTool} stat - 统计实例
     */
    protected addStat(stat: PdSDKPluginStatsTool): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建统计实例
     * @param {string} type - 统计类型
     * @param {PdSDKPluginStatsToolSettings} settings - 统计配置
     * @return {PdSDKPluginStatsTool} - 统计实例
     */
    protected createStatItem(type: string, settings?: PdSDKPluginStatsToolSettings): PdSDKPluginStatsTool;
    /**
     * 生成统计工具的配置
     * @param {PdSDKPluginStatsToolEditableConfig} settings - 用户定义配置
     * @return {PdSDKPluginStatsToolEditableConfig} 统计工具的配置
     */
    protected createStatsToolSettings(settings: PdSDKPluginStatsToolSettings): PdSDKPluginStatsToolSettings;
    /**
     * 删除统计实例
     * @param {PdSDKPluginStatsTool} stat - 统计实例
     */
    protected deleteStat(stat: PdSDKPluginStatsTool): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsChartSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsChartSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsChartSettings): PdSDKPluginStatsChartSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
