import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemGraphSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemGraph extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemGraphSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemGraphSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemGraphSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemGraphSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemGraphSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemGraphSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemGraphSettings): PdSDKToolJumpItemGraphSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
