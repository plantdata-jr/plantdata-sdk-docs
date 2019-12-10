import { PdVisNetChart } from '../../netchart';
import { PdVisPluginFloatButton, PdVisPluginFloatButtonSettings } from '../float-button/float-button';
/**
 *  重新布局插件配置
 */
export interface PdVisPluginResetLayoutSettings extends PdVisPluginFloatButtonSettings {
}
/**
 * 重新布局插件
 */
export declare class PdVisPluginResetLayout extends PdVisPluginFloatButton {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginResetLayoutSettings;
    /**
     *  配置
     */
    settings: PdVisPluginResetLayoutSettings;
    /**
     * 可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdVisPluginResetLayoutSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginResetLayoutSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 初始化配置
     * @param {PdVisPluginResetLayoutSettings} settings - 用户定义配置
     * @return {PdVisPluginResetLayoutSettings} 配置
     */
    protected initSettings(settings: PdVisPluginResetLayoutSettings): PdVisPluginResetLayoutSettings;
}
