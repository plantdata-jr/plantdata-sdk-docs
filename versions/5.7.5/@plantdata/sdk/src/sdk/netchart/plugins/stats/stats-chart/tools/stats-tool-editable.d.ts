/// <reference types="jquery" />
import { PdVisDialog } from '../../../../../../vis/utils/modal/dialog/dialog';
import { PdSDKPluginStatsTool, PdSDKPluginStatsToolSettings } from './stats-tool';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsToolEditableConfig {
}
/**
 * SDK 可编辑的图统计配置
 */
export interface PdSDKPluginStatsToolEditableSettings<T extends PdSDKPluginStatsToolEditableConfig> extends PdSDKPluginStatsToolSettings {
    /**
     * 更新前的回调事件
     */
    beforeUpdate?: (settings: PdSDKPluginStatsToolEditableSettings<T>, ins: PdSDKPluginStatsToolEditable<T>) => Promise<any>;
    /**
     *  是否允许用户修改统计配置
     */
    editable?: boolean;
    /**
     * 否定按钮事件
     */
    negativeClick?: () => void;
    /**
     * 更新时的回调事件
     */
    onUpdate?: (settings: PdSDKPluginStatsToolEditableSettings<T>, ins: PdSDKPluginStatsToolEditable<T>) => void;
    /**
     * 肯定按钮事件
     */
    positiveClick?: () => void;
    /**
     *  统计配置项
     */
    rule?: T;
}
/**
 * SDK 可编辑的图统计
 */
export declare abstract class PdSDKPluginStatsToolEditable<T extends PdSDKPluginStatsToolEditableConfig> extends PdSDKPluginStatsTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsToolEditableSettings<PdSDKPluginStatsToolEditableConfig>;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsToolEditableSettings<T>;
    /**
     * 配置表单的容器
     */
    protected $editor: JQuery;
    /**
     * 编辑弹框实例
     */
    protected editDialog: PdVisDialog;
    /**
     * 是否修改状态
     */
    protected isModify: boolean;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsToolEditableSettings<T>} settings - 用户配置
     */
    protected constructor(settings?: PdSDKPluginStatsToolEditableSettings<T>);
    /**
     * 获取编辑器的配置结果
     * @return {PdSDKPluginStatsToolEditableConfig} - 编辑器的配置结果
     */
    abstract getEditorData(): T;
    /**
     * 获取当前的统计配置规则
     */
    getStatsConfig(): PdSDKPluginStatsToolEditableConfig;
    /**
     * 取消编辑
     */
    hideEdit(): void;
    /**
     * 显示编辑
     */
    showEdit(event?: JQuery.TriggeredEvent): void;
    /**
     * 更新实例
     * @param {PdSDKPluginStatsToolEditableSettings<T>} settings - 统计配置
     */
    update(settings: PdSDKPluginStatsToolEditableSettings<T>): Promise<void>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 取消事件
     */
    protected closeEvent(): void;
    /**
     * 创建编辑表单
     * @return {JQuery}
     */
    protected abstract createEditForm(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsToolEditableSettings<T>} settings - 用户定义配置
     * @return {PdSDKPluginStatsToolEditableSettings<T>} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsToolEditableSettings<T>): PdSDKPluginStatsToolEditableSettings<T>;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 是否通过校验
     */
    protected abstract isValidate(rule: PdSDKPluginStatsToolEditableConfig): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
