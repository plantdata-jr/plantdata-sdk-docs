/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 隐藏边菜单项配置
 */
export interface PdVisContextmenuItemLinkHideSettings extends PdVisContextmenuItemSettings {
}
/**
 * 隐藏边菜单项
 */
export declare class PdVisContextmenuItemLinkHide extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkHideSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkHideSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkHideSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkHideSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkHideSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkHideSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkHideSettings): PdVisContextmenuItemLinkHideSettings;
    /**
     * 当前菜单项是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
    /**
     * 处理点击事件
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
