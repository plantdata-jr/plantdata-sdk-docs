/// <reference types="jquery" />
import { PdMap, PdSelector } from '../../../../common/common';
import { PdVisPluginEdit, PdVisPluginEditItemSettings, PdVisPluginEditSettings } from '../../../../vis/netchart/plugins/edit/edit';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKPluginSettings } from '../plugin';
import { PdSDKResultVO } from '../../../utils/model';
import { PdSDKTraceRuleVO } from './model';
import { PdSDKCRUDSettings, PdSDKKGSettings } from '../../../utils/service';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt';
import { PdVisNetChart } from '../../../../vis/netchart';
import { PdSDKNetChartData } from '../../model';
/**
 * 轨迹规则项的配置
 */
export interface PdSDKPluginTraceItemSettings extends PdVisPluginEditItemSettings {
    /**
     * 颜色
     */
    color?: string;
}
/**
 * 轨迹规则插件配置
 */
export interface PdSDKPluginTraceSettings extends PdSDKPluginSettings, PdVisPluginEditSettings, PdSDKCRUDSettings {
    /**
     * 轨迹规则配置
     */
    editItemSettings?: PdSDKPluginTraceItemSettings[];
    /**
     * 执行的请求配置
     */
    executeSettings?: PdSDKKGSettings;
    /**
     * 默认选中轨迹规则
     */
    ruleChecked?: {
        [key: string]: any;
    };
}
/**
 * 轨迹规则数据
 */
export interface PdSDKNetChartTraceData extends PdSDKNetChartData {
    /**
     * 轨迹规则列表
     */
    traceRules?: any[];
}
/**
 * 轨迹规则模块配置
 */
export declare class PdSDKPluginTrace extends PdVisPluginEdit {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTraceSettings;
    /**
     * 是否通过校验
     */
    isValidate: boolean;
    /**
     * 轨迹规则列表
     */
    ruleList: any[];
    /**
     * 轨迹规则配置列表
     */
    rules: any[];
    /**
     *  配置
     */
    settings: PdSDKPluginTraceSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 提示组件的映射表
     */
    protected promptMap: PdMap<PdSDKTagPrompt>;
    /**
     * 构造方法
     * @param {PdSDKPluginTraceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTraceSettings);
    /**
     * 添加轨迹规则
     * @param config - 轨迹规则配置
     */
    add(config: PdSDKTraceRuleVO): Promise<PdSDKTraceRuleVO>;
    /**
     * 清空校验状态
     */
    clearValidate(): void;
    /**
     * 删除轨迹规则
     * @param id - 轨迹规则id
     * @return {Promise} 删除轨迹规则的异步请求实例
     */
    delete(id: string): Promise<void>;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取规则配置的参数
     */
    getRules(): any[];
    /**
     * 获取当前选中轨迹规则的结果
     * @return 选中轨迹规则的结果
     */
    getSelectedData(): any;
    /**
     * 获取轨迹规则
     * @param pageNo - 轨迹规则页码
     */
    list(pageNo?: number): Promise<PdSDKResultVO<PdSDKTraceRuleVO>>;
    /**
     * 修改轨迹规则
     * @param {number} id - 轨迹规则ID
     * @param config - 轨迹规则配置
     * @return {Promise} 添加轨迹规则的异步请求实例
     */
    update(id: number, config: any): Promise<void>;
    /**
     * 校验数据
     * @return {boolean}
     */
    validate(): boolean;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑弹框的HTML
     * @return {string} 编辑弹框的HTML
     */
    protected createEditDialogBody(): string;
    /**
     * 生成编辑选项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件选项配置
     * @return {string} 编辑选项的HTML
     */
    protected gentEditItem(settings: PdVisEditItemSettings): PdSelector;
    /**
     * 获取弹框数据
     * @return 编辑完的数据
     */
    protected getDialogData(): Promise<any>;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginTraceSettings} settings - 用户定义配置
     * @return {PdSDKPluginTraceSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTraceSettings): PdSDKPluginTraceSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 显示添加弹框
     * @param event 点击事件
     */
    protected showAddDialog(event: JQuery.ClickEvent): void;
    /**
     * 更新删除弹框
     * @param {JQuery.ClickEvent} event - 删除事件对象
     * @param {PdVisPluginEditItemSettings} settings - 配置
     */
    protected showDeleteDialog(event: JQuery.ClickEvent, settings: PdVisPluginEditItemSettings): void;
    /**
     * 生成并显示弹框
     * @param {JQuery.ClickEvent} event - 生成弹框的事件
     * @param {PdVisDialogSettings} settings - 弹框配置
     */
    protected showDialog(event: JQuery.ClickEvent, settings: PdVisDialogSettings): void;
    /**
     * 更新编辑弹框
     * @param {JQuery.ClickEvent} event - 编辑事件对象
     * @param {PdVisPluginEditItemSettings} settings - 配置
     */
    protected showEditDialog(event: JQuery.ClickEvent, settings: PdVisPluginEditItemSettings): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新轨迹规则表单界面
     * @param {PdVisEditItemSettings[]} settings - 表单配置
     */
    protected updateEdit(settings?: PdVisEditItemSettings[]): void;
    /**
     * 更新轨迹规则
     */
    protected updateRule(): void;
    /**
     * 校验编辑弹框数据
     * @return {boolean} - 是否通过校验
     */
    protected validateDialog(): boolean;
}
