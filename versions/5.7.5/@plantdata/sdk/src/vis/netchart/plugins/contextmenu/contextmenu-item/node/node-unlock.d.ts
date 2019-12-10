/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点取消锁定菜单项配置
 */
export interface PdVisContextmenuItemNodeUnlockSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点取消锁定菜单项
 */
export declare class PdVisContextmenuItemNodeUnlock extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeUnlockSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeUnlockSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeUnlockSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeUnlockSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeUnlockSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeUnlockSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeUnlockSettings): PdVisContextmenuItemNodeUnlockSettings;
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
