import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemPathSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemPath extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemPathSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemPathSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemPathSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemPathSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemPathSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemPathSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemPathSettings): PdSDKToolJumpItemPathSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
