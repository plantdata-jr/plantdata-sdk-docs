import { PdPlugin, PdPluginSettings } from '../../../container/plugin/plugin';
import { PdEventData } from '../../../core/event';
/**
 * 可视化插件配置
 */
export interface PdVisPluginSettings extends PdPluginSettings {
}
/**
 * 可视化插件
 */
export declare abstract class PdVisPlugin extends PdPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginSettings;
    /**
     *  配置
     */
    settings: PdVisPluginSettings;
    /**
     * 构造方法
     * @param {PdVisPluginSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisPluginSettings);
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
     * @param {PdVisPluginSettings} settings - 用户定义配置
     * @return {PdVisPluginSettings} 配置
     */
    protected initSettings(settings: PdVisPluginSettings): PdVisPluginSettings;
    /**
     * 还原拍摄快照时的环境
     */
    protected restoreSnapshotEnv(env: {
        [key: string]: any;
    }, data: PdEventData): void;
}
