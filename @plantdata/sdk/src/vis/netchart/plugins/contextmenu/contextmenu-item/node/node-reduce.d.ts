/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点弱化菜单项配置
 */
export interface PdVisContextmenuItemNodeReduceSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点弱化菜单项
 */
export declare class PdVisContextmenuItemNodeReduce extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeReduceSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeReduceSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeReduceSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeReduceSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeReduceSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeReduceSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeReduceSettings): PdVisContextmenuItemNodeReduceSettings;
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
