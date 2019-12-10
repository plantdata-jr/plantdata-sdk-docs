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
    static defaultSettings: PdSDKToolJumpItemSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemTimingSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemSettings);
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
