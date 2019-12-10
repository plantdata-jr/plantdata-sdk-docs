/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 边标签隐藏菜单项配置
 */
export interface PdVisContextmenuItemLinkLabelHideSettings extends PdVisContextmenuItemSettings {
}
/**
 * 边标签隐藏菜单项
 */
export declare class PdVisContextmenuItemLinkLabelHide extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkLabelHideSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkLabelHideSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkLabelHideSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkLabelHideSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkLabelHideSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkLabelHideSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkLabelHideSettings): PdVisContextmenuItemLinkLabelHideSettings;
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
