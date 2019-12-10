/// <reference types="jquery" />
import 'daterangepicker';
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisEditItemSettings } from '../../../utils/edit-item/edit-item';
import { PdSelector } from '../../../../common/common';
import { PdVisDialog, PdVisDialogSettings } from '../../../utils/modal/dialog/dialog';
import { PdVisConfirm, PdVisConfirmSettings } from '../../../utils/modal/confirm/confirm';
/**
 * 可控制的编辑模态框配置
 */
export interface PdVisPluginControlableDialogSettings extends PdVisDialogSettings {
    /**
     * 是否开启
     */
    enable?: boolean;
}
/**
 * 编辑选项配置
 */
export interface PdVisPluginEditItemSettings extends PdVisEditItemSettings {
    /**
     * 其他数据
     */
    data?: any;
    /**
     * 删除弹框配置
     */
    delete?: PdVisConfirmSettings;
    /**
     * 编辑弹框配置
     */
    edit?: PdVisDialogSettings;
    /**
     * 禁止自动关联树父子节点状态,即点击父节点时，子节点不会更改状态，同理，点击子节点时也不影响父节点
     */
    treeNodeAutoUpdateDisabled?: boolean;
}
/**
 * 编辑插件配置
 */
export interface PdVisPluginEditSettings extends PdVisPluginSettings {
    /**
     * 添加模态框的配置
     */
    add?: PdVisPluginControlableDialogSettings;
    /**
     *  编辑选项
     */
    editItemSettings?: PdVisPluginEditItemSettings[];
    /**
     * 编辑选项的展示模式
     */
    mode?: 'label' | 'placeholder';
}
/**
 * 编辑插件
 */
export declare abstract class PdVisPluginEdit extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginEditSettings;
    /**
     * 删除弹框实例
     */
    deleteDialog: PdVisConfirm;
    /**
     * 编辑弹框实例
     */
    editDialog: PdVisDialog;
    /**
     *  选项配置
     */
    editItemSettings: PdVisPluginEditItemSettings[];
    /**
     *  配置
     */
    settings: PdVisPluginEditSettings;
    /**
     * 父子关系映射
     */
    protected relationMap: {
        [key: string]: any;
    };
    /**
     * 构造方法
     * @param {PdVisPluginEditSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisPluginEditSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取当前编辑的结果
     */
    getData(): any;
    /**
     * 设置编辑选项的值
     * @param data 选项的值
     * @param {boolean} silence 是否静默设置，即不触发change事件
     */
    setData(data?: any, silence?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑选项的JQuery对象
     */
    protected buildEdit(): JQuery;
    /**
     * 更新父子关系映射
     */
    protected buildRelationMap(): void;
    /**
     * 生成编辑选项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑插件选项配置
     */
    protected gentEditItem(settings: PdVisEditItemSettings): PdSelector;
    /**
     * 获取指定路径的编辑项的配置
     * @param {PdVisPluginEditItemSettings[]} settings - 候选配置列表
     * @param {string} path - 需要获取配置的key的路径
     * @return {PdVisPluginEditItemSettings} - 编辑配置
     */
    protected getEditSettings(settings: PdVisPluginEditItemSettings[], path: string): PdVisPluginEditItemSettings;
    /**
     * 获取容器主体
     */
    protected abstract getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisPluginEditSettings} settings - 用户定义配置
     * @return {PdVisPluginEditSettings} 配置
     */
    protected initSettings(settings: PdVisPluginEditSettings): PdVisPluginEditSettings;
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
     * 显示删除弹框
     * @param {JQuery.ClickEvent} event - 删除事件对象
     * @param {PdVisPluginEditItemSettings} settings - 配置
     */
    protected showDeleteDialog(event: JQuery.ClickEvent, settings: PdVisPluginEditItemSettings): void;
    /**
     * 显示编辑弹框
     * @param {JQuery.ClickEvent} event - 编辑事件对象
     * @param {PdVisPluginEditItemSettings} settings - 配置
     */
    protected showEditDialog(event: JQuery.ClickEvent, settings: PdVisPluginEditItemSettings): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新所有全选组件的状态
     */
    protected updateAllSelectAllStatus(): void;
    /**
     * 更新编辑器
     * @param settings 编辑选项的配置列表
     */
    protected updateEdit(settings?: PdVisEditItemSettings[]): void;
    /**
     * 更新全选组件状态
     * @param {string} name 需要判断的key
     */
    protected updateSelectAllStatus(name: string): void;
}
