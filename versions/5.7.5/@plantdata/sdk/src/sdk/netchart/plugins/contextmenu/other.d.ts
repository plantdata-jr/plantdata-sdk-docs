import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item';
/**
 * 其他工具配置
 */
export interface PdSDKMenuItemOtherSettings extends PdVisContextmenuItemSettings {
}
/**
 * 其他工具
 */
export declare class PdSDKMenuItemOther extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKMenuItemOtherSettings;
    /**
     *  配置
     */
    settings: PdSDKMenuItemOtherSettings;
    /**
     * 构造方法
     * @param {PdSDKMenuItemOtherSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKMenuItemOtherSettings);
    /**
     * 初始化配置
     * @param {PdSDKMenuItemOtherSettings} settings - 用户定义配置
     * @return {PdSDKMenuItemOtherSettings} 配置
     */
    protected initSettings(settings: PdSDKMenuItemOtherSettings): PdSDKMenuItemOtherSettings;
}
