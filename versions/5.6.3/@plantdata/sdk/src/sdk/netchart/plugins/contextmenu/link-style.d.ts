import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item';
/**
 * 边样式工具配置
 */
export interface PdSDKMenuItemLinkStyleSettings extends PdVisContextmenuItemSettings {
}
/**
 * 边样式工具
 */
export declare class PdSDKMenuItemLinkStyle extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKMenuItemLinkStyleSettings;
    /**
     *  配置
     */
    settings: PdSDKMenuItemLinkStyleSettings;
    /**
     * 构造方法
     * @param {PdSDKMenuItemLinkStyleSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKMenuItemLinkStyleSettings);
    /**
     * 初始化配置
     * @param {PdSDKMenuItemLinkStyleSettings} settings - 用户定义配置
     * @return {PdSDKMenuItemLinkStyleSettings} 配置
     */
    protected initSettings(settings: PdSDKMenuItemLinkStyleSettings): PdSDKMenuItemLinkStyleSettings;
}
