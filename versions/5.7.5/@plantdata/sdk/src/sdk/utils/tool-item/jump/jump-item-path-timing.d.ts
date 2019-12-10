import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemPathTimingSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemPathTiming extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemPathTimingSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemPathTimingSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemPathTimingSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemPathTimingSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemPathTimingSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemPathTimingSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemPathTimingSettings): PdSDKToolJumpItemPathTimingSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
