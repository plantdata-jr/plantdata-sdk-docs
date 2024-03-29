/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点显示所有关联边菜单项的配置
 */
export interface PdVisContextmenuItemNodeShowAllLinksSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点显示所有关联边菜单项
 */
export declare class PdVisContextmenuItemNodeShowAllLinks extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeShowAllLinksSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeShowAllLinksSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeShowAllLinksSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeShowAllLinksSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeShowAllLinksSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeShowAllLinksSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeShowAllLinksSettings): PdVisContextmenuItemNodeShowAllLinksSettings;
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
