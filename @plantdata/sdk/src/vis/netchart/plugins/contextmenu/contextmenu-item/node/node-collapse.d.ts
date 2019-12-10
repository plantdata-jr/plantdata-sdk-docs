/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点收起菜单项配置
 */
export interface PdVisContextmenuItemNodeCollapseSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点收起菜单项
 */
export declare class PdVisContextmenuItemNodeCollapse extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeCollapseSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeCollapseSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeCollapseSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeCollapseSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeCollapseSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeCollapseSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeCollapseSettings): PdVisContextmenuItemNodeCollapseSettings;
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
