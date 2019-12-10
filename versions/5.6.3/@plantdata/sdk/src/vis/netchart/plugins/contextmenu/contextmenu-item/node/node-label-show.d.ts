/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点标签显示菜单项配置
 */
export interface PdVisContextmenuItemNodeLabelShowSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点标签显示菜单项
 */
export declare class PdVisContextmenuItemNodeLabelShow extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeLabelShowSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeLabelShowSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeLabelShowSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeLabelShowSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeLabelShowSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeLabelShowSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeLabelShowSettings): PdVisContextmenuItemNodeLabelShowSettings;
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
