/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from './contextmenu-item';
import { PdEventData } from '../../../../../core/event';
import { PdVisDialog } from '../../../../utils/modal/dialog';
import { PdVisFormGroup } from '../../../../utils/form/form-group';
/**
 * 通用配置菜单项的配置
 */
export interface PdVisContextmenuItemCommonConfigSettings extends PdVisContextmenuItemSettings {
}
/**
 * 通用配置菜单项
 */
export declare class PdVisContextmenuItemCommonConfig extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemCommonConfigSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemCommonConfigSettings;
    /**
     * 表单
     */
    protected form: PdVisFormGroup;
    /**
     * 设置面板
     */
    protected panel: PdVisDialog;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemCommonConfigSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemCommonConfigSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemCommonConfigSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemCommonConfigSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemCommonConfigSettings): PdVisContextmenuItemCommonConfigSettings;
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
