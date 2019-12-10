/// <reference types="jquery" />
import { PdVisNetChart } from '../../netchart';
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdEventData } from '../../../../core/event';
/**
 *  更换布局插件配置
 */
export interface PdVisPluginChangeLayoutSettings extends PdVisPluginSettings {
}
/**
 * 更换布局插件
 */
export declare class PdVisPluginChangeLayout extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginChangeLayoutSettings;
    /**
     *  配置
     */
    settings: PdVisPluginChangeLayoutSettings;
    /**
     * 可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdVisPluginChangeLayoutSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginChangeLayoutSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 更换布局
     * @param {string} layout - 布局 可选值：'force' | 'radial' | 'tree' | 'reverseTree' | 'none'
     */
    updateLayout(layout: string): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成拍摄快照时的环境
     */
    protected buildSnapshotEnv(data: PdEventData): {
        [key: string]: any;
    };
    /**
     * 初始化配置
     * @param {PdVisPluginChangeLayoutSettings} settings - 用户定义配置
     * @return {PdVisPluginChangeLayoutSettings} 配置
     */
    protected initSettings(settings: PdVisPluginChangeLayoutSettings): PdVisPluginChangeLayoutSettings;
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
     * 还原拍摄快照时的环境
     */
    protected restoreSnapshotEnv(env: {
        [key: string]: any;
    }, data: PdEventData): void;
}
