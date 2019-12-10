import { PdVisPluginHistory, PdVisPluginHistorySettings } from '../../../../vis/netchart/plugins/history/history';
import { PdVisChartCacheData } from '../../../../vis/chart';
import { PdSDKPluginSettings } from '../plugin';
/**
 *  历史插件配置
 */
export interface PdSDKPluginHistorySettings extends PdSDKPluginSettings, PdVisPluginHistorySettings {
}
/**
 * 历史插件
 */
export declare class PdSDKPluginHistory extends PdVisPluginHistory {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginHistorySettings;
    /**
     *  配置
     */
    settings: PdSDKPluginHistorySettings;
    /**
     * 构造方法
     * @param {PdSDKPluginHistorySettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginHistorySettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取历史记录的标题
     * @param {PdVisChartCacheData} history - 历史数据
     * @return {string} 历史数据的标题
     */
    protected getTitle(history: PdVisChartCacheData): string;
}
