/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
import { PdVisLinkStyleConfigurePanel } from '../../../../../utils/style-configure/link-style-configure-panel';
/**
 * 边样式配置菜单项配置
 */
export interface PdVisContextmenuItemLinkItemStyleSettings extends PdVisContextmenuItemSettings {
}
/**
 * 边样式配置菜单项
 */
export declare class PdVisContextmenuItemLinkItemStyle extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkItemStyleSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkItemStyleSettings;
    /**
     * 配置面板
     */
    protected panel: PdVisLinkStyleConfigurePanel;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkItemStyleSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkItemStyleSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkItemStyleSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkItemStyleSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkItemStyleSettings): PdVisContextmenuItemLinkItemStyleSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 当前菜单项是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
    /**
     * 处理点击事件
     * @param event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
