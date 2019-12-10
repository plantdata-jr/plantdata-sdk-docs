import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemTimingSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemTiming extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemTimingSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemTimingSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemTimingSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemTimingSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemTimingSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemTimingSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemTimingSettings): PdSDKToolJumpItemTimingSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
