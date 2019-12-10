/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item/contextmenu-item';
import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转工具配置
 */
export interface PdSDKToolJumpSettings extends PdVisContextmenuItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJump extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建子菜单
     * @param settings 子菜单配置
     */
    protected createChild(settings: PdSDKToolJumpItemSettings): PdSDKToolJumpItem;
    /**
     * 初始化配置
     * @param {PdSDKToolJumpSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpSettings): PdSDKToolJumpSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
    /**
     * 处理点击事件
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
