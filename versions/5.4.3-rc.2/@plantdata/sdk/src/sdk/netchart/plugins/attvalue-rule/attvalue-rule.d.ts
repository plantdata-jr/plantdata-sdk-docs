/// <reference types="jquery" />
import { PdVisNetChart } from '../../../../vis/netchart';
import { PdSDKPluginAttValueRuleTag, PdSDKPluginAttValueRuleTagSettings } from './attvalue-rule-tag';
import { PdVisChart } from '../../../../vis/chart';
/**
 *  属性值筛选插件配置
 */
export interface PdSDKPluginAttValueRuleSettings extends PdSDKPluginAttValueRuleTagSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
}
/**
 * 属性值筛选插件
 */
export declare class PdSDKPluginAttValueRule extends PdSDKPluginAttValueRuleTag {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginAttValueRuleSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisChart;
    /**
     *  配置
     */
    settings: PdSDKPluginAttValueRuleSettings;
    /**
     * 是否属性值筛选
     */
    protected isAttValueRule: boolean;
    /**
     * 构造方法
     * @param {PdSDKPluginAttValueRuleSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginAttValueRuleSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取值
     * @return {any} 值
     */
    getValue(): any;
    /**
     * 获取容器主题
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginAttValueRuleSettings} settings - 用户定义配置
     * @return {PdSDKPluginAttValueRuleSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginAttValueRuleSettings): PdSDKPluginAttValueRuleSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
