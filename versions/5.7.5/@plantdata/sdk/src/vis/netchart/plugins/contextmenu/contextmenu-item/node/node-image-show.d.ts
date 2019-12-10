/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点图片显示菜单项配置
 */
export interface PdVisContextmenuItemNodeImageShowSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点图片显示菜单项
 */
export declare class PdVisContextmenuItemNodeImageShow extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeImageShowSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeImageShowSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeImageShowSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeImageShowSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeImageShowSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeImageShowSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeImageShowSettings): PdVisContextmenuItemNodeImageShowSettings;
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
