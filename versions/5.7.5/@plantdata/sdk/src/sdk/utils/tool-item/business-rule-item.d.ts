/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../vis/netchart/plugins/contextmenu/contextmenu-item/contextmenu-item';
import { PdEventData } from '../../../core/event';
import { PdSDKAjaxSettings, PdSDKKGSettings } from '../service';
import { PdSDKNetChartDataNode } from '../../netchart/model';
/**
 * 业务规则元素工具配置
 */
export interface PdSDKToolBusinessRuleItemSettings extends PdVisContextmenuItemSettings, PdSDKKGSettings {
    /**
     *获取业务规图谱请求配置
     */
    getRuleGraphSettings?: PdSDKAjaxSettings;
    ruleId?: number;
    ruleSettings?: {
        domain?: number;
        name?: string;
        pathRuleList?: any[];
    };
}
/**
 * 业务规则工具
 */
export declare class PdSDKToolBusinessRuleItem extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolBusinessRuleItemSettings;
    /**
     *  配置
     */
    settings: PdSDKToolBusinessRuleItemSettings;
    /**
     * 当前点击实体
     */
    protected clickNode: PdSDKNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKToolBusinessRuleItemSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolBusinessRuleItemSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 获取业务规则图数据
     */
    protected getRuleGraphData(): Promise<any>;
    /**
     * 初始化配置
     * @param {PdSDKToolBusinessRuleItemSettings} settings - 用户定义配置
     * @return {PdSDKToolBusinessRuleItemSettings} 配置
     */
    protected initSettings(settings: PdSDKToolBusinessRuleItemSettings): PdSDKToolBusinessRuleItemSettings;
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
