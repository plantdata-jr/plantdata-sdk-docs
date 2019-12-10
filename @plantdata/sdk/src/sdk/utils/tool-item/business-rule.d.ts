/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../vis/netchart/plugins/contextmenu/contextmenu-item/contextmenu-item';
import { PdEventData } from '../../../core/event';
import { PdSDKAjaxSettings, PdSDKKGSettings } from '../service';
/**
 * 业务规则工具配置
 */
export interface PdSDKToolBusinessRuleSettings extends PdSDKKGSettings, PdVisContextmenuItemSettings {
    /**
     *获取业务规图谱请求配置
     */
    getRuleGraphSettings?: PdSDKAjaxSettings;
    /**
     *获取业务规则列表请求配置
     */
    getRuleListSettings?: PdSDKAjaxSettings;
}
/**
 * 业务规则工具
 */
export declare class PdSDKToolBusinessRule extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolBusinessRuleSettings;
    /**
     *  配置
     */
    settings: PdSDKToolBusinessRuleSettings;
    protected abc: number;
    /**
     * 构造方法
     * @param {PdSDKToolBusinessRuleSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolBusinessRuleSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取业务规则列表
     */
    getRuleList(): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKToolBusinessRuleSettings} settings - 用户定义配置
     * @return {PdSDKToolBusinessRuleSettings} 配置
     */
    protected initSettings(settings: PdSDKToolBusinessRuleSettings): PdSDKToolBusinessRuleSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 处理点击事件
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
}
