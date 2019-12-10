/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 边取消弱化菜单项配置
 */
export interface PdVisContextmenuItemLinkUnreduceSettings extends PdVisContextmenuItemSettings {
}
/**
 * 边取消弱化菜单项
 */
export declare class PdVisContextmenuItemLinkUnreduce extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkUnreduceSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkUnreduceSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkUnreduceSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkUnreduceSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkUnreduceSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkUnreduceSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkUnreduceSettings): PdVisContextmenuItemLinkUnreduceSettings;
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
