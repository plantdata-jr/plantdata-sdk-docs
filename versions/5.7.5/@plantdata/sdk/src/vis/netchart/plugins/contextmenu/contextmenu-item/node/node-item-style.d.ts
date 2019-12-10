/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
import { PdVisNodeStyleConfigurePanel } from '../../../../../utils/style-configure/node-style-configure-panel';
/**
 * 节点样式配置菜单项配置
 */
export interface PdVisContextmenuItemNodeItemStyleSettings extends PdVisContextmenuItemSettings {
}
/**
 * 节点样式配置菜单项
 */
export declare class PdVisContextmenuItemNodeItemStyle extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeItemStyleSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeItemStyleSettings;
    /**
     * 配置面板
     */
    protected panel: PdVisNodeStyleConfigurePanel;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeItemStyleSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeItemStyleSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeItemStyleSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeItemStyleSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeItemStyleSettings): PdVisContextmenuItemNodeItemStyleSettings;
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
