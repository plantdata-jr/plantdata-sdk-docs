import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemExploreSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemExplore extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemExploreSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemExploreSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemExploreSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemExploreSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemExploreSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemExploreSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemExploreSettings): PdSDKToolJumpItemExploreSettings;
}
