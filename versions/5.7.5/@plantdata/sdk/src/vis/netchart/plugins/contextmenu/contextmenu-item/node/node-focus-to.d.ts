/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点设为焦点菜单项配置
 */
export interface PdVisContextmenuItemNodeFocusToSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点设为焦点菜单项
 */
export declare class PdVisContextmenuItemNodeFocusTo extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeFocusToSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeFocusToSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeFocusToSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeFocusToSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeFocusToSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeFocusToSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeFocusToSettings): PdVisContextmenuItemNodeFocusToSettings;
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
