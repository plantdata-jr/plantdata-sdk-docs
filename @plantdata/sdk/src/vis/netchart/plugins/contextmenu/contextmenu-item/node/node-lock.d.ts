/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点锁定菜单项配置
 */
export interface PdVisContextmenuItemNodeLockSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点锁定菜单项
 */
export declare class PdVisContextmenuItemNodeLock extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeLockSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeLockSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeLockSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeLockSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeLockSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeLockSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeLockSettings): PdVisContextmenuItemNodeLockSettings;
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
