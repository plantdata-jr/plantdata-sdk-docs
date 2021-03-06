/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点隐藏菜单项配置
 */
export interface PdVisContextmenuItemNodeHideSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点隐藏菜单项
 */
export declare class PdVisContextmenuItemNodeHide extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeHideSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeHideSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeHideSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeHideSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeHideSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeHideSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeHideSettings): PdVisContextmenuItemNodeHideSettings;
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
