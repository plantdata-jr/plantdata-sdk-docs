/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点图片隐藏菜单项配置
 */
export interface PdVisContextmenuItemNodeImageHideSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点图片隐藏菜单项
 */
export declare class PdVisContextmenuItemNodeImageHide extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeImageHideSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeImageHideSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeImageHideSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeImageHideSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeImageHideSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeImageHideSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeImageHideSettings): PdVisContextmenuItemNodeImageHideSettings;
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
