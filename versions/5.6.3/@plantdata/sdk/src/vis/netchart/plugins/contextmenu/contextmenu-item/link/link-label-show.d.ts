/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 边标签显示菜单项配置
 */
export interface PdVisContextmenuItemLinkLabelShowSettings extends PdVisContextmenuItemSettings {
}
/**
 * 边标签显示菜单项
 */
export declare class PdVisContextmenuItemLinkLabelShow extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkLabelShowSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkLabelShowSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkLabelShowSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkLabelShowSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkLabelShowSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkLabelShowSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkLabelShowSettings): PdVisContextmenuItemLinkLabelShowSettings;
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
