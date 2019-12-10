import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemRelationTimingSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemRelationTiming extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemRelationTimingSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemRelationTimingSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemRelationTimingSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemRelationTimingSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemRelationTimingSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemRelationTimingSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemRelationTimingSettings): PdSDKToolJumpItemRelationTimingSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
