import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item';
/**
 * 边编辑工具配置
 */
export interface PdSDKMenuItemLinkEditorSettings extends PdVisContextmenuItemSettings {
}
/**
 * 边编辑工具
 */
export declare class PdSDKMenuItemLinkEditor extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKMenuItemLinkEditorSettings;
    /**
     *  配置
     */
    settings: PdSDKMenuItemLinkEditorSettings;
    /**
     * 构造方法
     * @param {PdSDKMenuItemLinkEditorSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKMenuItemLinkEditorSettings);
    /**
     * 初始化配置
     * @param {PdSDKMenuItemLinkEditorSettings} settings - 用户定义配置
     * @return {PdSDKMenuItemLinkEditorSettings} 配置
     */
    protected initSettings(settings: PdSDKMenuItemLinkEditorSettings): PdSDKMenuItemLinkEditorSettings;
}
