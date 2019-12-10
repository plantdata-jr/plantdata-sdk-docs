/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 高亮边菜单项配置
 */
export interface PdVisContextmenuItemLinkEmphasisSettings extends PdVisContextmenuItemSettings {
}
/**
 * 高亮边菜单项
 */
export declare class PdVisContextmenuItemLinkEmphasis extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkEmphasisSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkEmphasisSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkEmphasisSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkEmphasisSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkEmphasisSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkEmphasisSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkEmphasisSettings): PdVisContextmenuItemLinkEmphasisSettings;
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
