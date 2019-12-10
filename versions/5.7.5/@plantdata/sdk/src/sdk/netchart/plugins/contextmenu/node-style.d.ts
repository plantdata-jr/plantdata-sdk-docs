import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item';
/**
 * 节点样式工具配置
 */
export interface PdSDKNodeStyleMenuSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点样式工具
 */
export declare class PdSDKNodeStyleMenu extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKNodeStyleMenuSettings;
    /**
     *  配置
     */
    settings: PdSDKNodeStyleMenuSettings;
    /**
     * 构造方法
     * @param {PdSDKNodeStyleMenuSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKNodeStyleMenuSettings);
    /**
     * 初始化配置
     * @param {PdSDKNodeStyleMenuSettings} settings - 用户定义配置
     * @return {PdSDKNodeStyleMenuSettings} 配置
     */
    protected initSettings(settings: PdSDKNodeStyleMenuSettings): PdSDKNodeStyleMenuSettings;
}
