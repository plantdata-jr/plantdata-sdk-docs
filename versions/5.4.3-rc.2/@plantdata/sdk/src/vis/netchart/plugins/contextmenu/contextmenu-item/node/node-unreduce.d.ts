/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeUnreduce工具配置
 */
export interface PdVisContextmenuItemNodeUnreduceSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeUnreduce工具
 */
export declare class PdVisContextmenuItemNodeUnreduce extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeUnreduceSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeUnreduceSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeUnreduceSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeUnreduceSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeUnreduceSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeUnreduceSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeUnreduceSettings): PdVisContextmenuItemNodeUnreduceSettings;
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
