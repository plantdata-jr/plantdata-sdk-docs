import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item';
/**
 * 节点编辑工具配置
 */
export interface PdSDKNodeEditorMenuSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点编辑工具
 */
export declare class PdSDKNodeEditorMenu extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKNodeEditorMenuSettings;
    /**
     *  配置
     */
    settings: PdSDKNodeEditorMenuSettings;
    /**
     * 构造方法
     * @param {PdSDKNodeEditorMenuSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKNodeEditorMenuSettings);
    /**
     * 初始化配置
     * @param {PdSDKNodeEditorMenuSettings} settings - 用户定义配置
     * @return {PdSDKNodeEditorMenuSettings} 配置
     */
    protected initSettings(settings: PdSDKNodeEditorMenuSettings): PdSDKNodeEditorMenuSettings;
}
