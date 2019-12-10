/// <reference types="jquery" />
import { PdSelector } from '../../../../common/common';
import { PdVisPluginEdit, PdVisPluginEditItemSettings, PdVisPluginEditSettings } from '../../../../vis/netchart/plugins/edit/edit';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialog, PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKPluginSettings } from '../plugin';
import { PdSDKCRUDSettings } from '../../../utils/service';
import { PdSDKInferenceConfigVO, PdSDKInferenceVO } from '../../../model/inference';
import { PdSDKResultVO } from '../../../utils/model';
/**
 * 推理规则项的配置
 */
export interface PdSDKPluginInferenceItemSettings extends PdVisPluginEditItemSettings {
    /**
     * 颜色
     */
    color?: string;
}
/**
 * 推理规则插件配置
 */
export interface PdSDKPluginInferenceSettings extends PdSDKPluginSettings, PdVisPluginEditSettings, PdSDKCRUDSettings {
    /**
     * 推理规则配置
     */
    editItemSettings?: PdSDKPluginInferenceItemSettings[];
    /**
     * 默认选中推理规则
     * 默认选中规则及其配置结果
     */
    ruleChecked?: {
        [key: string]: PdSDKInferenceConfigVO;
    };
}
/**
 * 推理规则模块配置
 */
export declare class PdSDKPluginInference extends PdVisPluginEdit {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginInferenceSettings;
    /**
     * 是否通过校验
     */
    isValidate: boolean;
    /**
     * 推理规则列表
     */
    ruleList: PdSDKInferenceVO[];
    /**
     *  配置
     */
    settings: PdSDKPluginInferenceSettings;
    /**
     * 添加推理规则的弹框实例
     */
    protected addRuleDialog: PdVisDialog;
    /**
     * 构造方法
     * @param {PdSDKPluginInferenceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginInferenceSettings);
    /**
     * 添加推理规则
     * @param config - 推理规则配置
     */
    add(config: PdSDKInferenceVO): Promise<number>;
    /**
     * 清空校验状态
     */
    clearValidate(): void;
    /**
     * 删除推理规则
     * @param id - 推理规则id
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
     * 获取当前选中推理规则的结果
     * @return 选中推理规则的结果
     */
    getSelectedData(): PdSDKInferenceConfigVO;
    /**
     * 获取推理规则
     * @param pageNo - 推理规则页码
     */
    list(pageNo?: number): Promise<PdSDKResultVO<PdSDKInferenceVO>>;
    /**
     * 修改推理规则
     * @param {number} id - 推理规则ID
     * @param config - 推理规则配置
     */
    update(id: number, config: PdSDKInferenceVO): Promise<void>;
    /**
     * 校验数据
     * @return {boolean}
     */
    validate(): boolean;
    /**
     * 创建推理规则编辑字段
     * @return {string} - 推理规则编辑字段的HTML
     */
    protected addRuleField(): string;
    /**
     * 绑定弹框事件
     */
    protected bindDialogEvent(): void;
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
     * 创建推理规则编辑字段配置
     * @param data - 推理规则编辑字段配置的值
     * @return {PdVisEditItemSettings[]} - 推理规则编辑字段配置
     */
    protected createRuleSettingsItem(data?: {
        [key: string]: PdSDKInferenceConfigVO;
    }): PdVisEditItemSettings[];
    /**
     * 生成编辑选项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件选项配置
     * @return {string} 编辑选项的HTML
     */
    protected gentEditItem(settings: PdVisEditItemSettings): PdSelector;
    /**
     * 获取弹框数据
     */
    protected getDialogData(): PdSDKInferenceConfigVO;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginInferenceSettings} settings - 用户定义配置
     * @return {PdSDKPluginInferenceSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginInferenceSettings): PdSDKPluginInferenceSettings;
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
     * 更新推理规则表单界面
     * @param {PdVisEditItemSettings[]} settings - 表单配置
     */
    protected updateEdit(settings?: PdVisEditItemSettings[]): void;
    /**
     * 更新推理规则
     */
    protected updateRule(): void;
    /**
     * 校验编辑弹框数据
     * @return {boolean} - 是否通过校验
     */
    protected validateDialog(): boolean;
}
