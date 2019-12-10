/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * 节点标签隐藏菜单项配置
 */
export interface PdVisContextmenuItemNodeLabelHideSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点标签隐藏菜单项
 */
export declare class PdVisContextmenuItemNodeLabelHide extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeLabelHideSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeLabelHideSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeLabelHideSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeLabelHideSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeLabelHideSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeLabelHideSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeLabelHideSettings): PdVisContextmenuItemNodeLabelHideSettings;
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
