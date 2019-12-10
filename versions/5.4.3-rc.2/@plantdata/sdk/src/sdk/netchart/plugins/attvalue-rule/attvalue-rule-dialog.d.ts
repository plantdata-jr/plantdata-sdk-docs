/// <reference types="jquery" />
import { PdSelector } from '../../../../common/common';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
import { PdVisDialog } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKKGSettings } from '../../../utils/utils';
import { PdUIModalSettings } from '../../../../ui/components/modal/modal';
import { PdSDKEntityAttValueRuleForm, PdSDKEntityAttValueRuleFormSettings } from './entity-attvalue-rule-form';
import { PdSDKRelationAttValueRuleForm, PdSDKRelationAttValueRuleFormSettings } from './relation-attvalue-rule-form';
import { PdSDKAttValueRuleForm, PdSDKAttValueRuleItemSettings } from './attvalue-rule-form';
/**
 *  属性筛选插件配置
 */
export interface PdSDKPluginAttValueRuleDialogSettings extends PdSDKPluginSettings, PdSDKKGSettings {
    /**
     * 弹框的容器
     */
    parent?: PdSelector;
    /**
     * 实体属性是否开启
     */
    entity?: boolean | PdSDKEntityAttValueRuleFormSettings;
    /**
     * 关系属性是否开启
     */
    relation?: boolean | PdSDKRelationAttValueRuleFormSettings;
    /**
     * 编辑完成的回调事件
     */
    confirm?: (settings: PdSDKAttValueRuleItemSettings) => void;
}
/**
 * 高级检索插件
 */
export declare class PdSDKPluginAttValueRuleDialog extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginAttValueRuleDialogSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginAttValueRuleDialogSettings;
    /**
     * 边属性过滤配置
     */
    protected attAttFilters: any[];
    /**
     * 实体属性值筛选表单
     */
    protected entityForm: PdSDKEntityAttValueRuleForm;
    /**
     * 关系属性值筛选表单
     */
    protected relationForm: PdSDKRelationAttValueRuleForm;
    /**
     * 编辑弹框实例
     */
    protected editDialog: PdVisDialog;
    /**
     * 表单组件
     */
    protected formArray: {
        id: string;
        form: PdSDKAttValueRuleForm;
        type: string;
        title: string;
    }[];
    /**
     * 构造方法
     * @param {PdSDKPluginAttValueRuleDialogSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginAttValueRuleDialogSettings);
    /**
     * 激活表单
     * @param type - 表单类型
     */
    active(type: string): void;
    /**
     * 关闭弹框
     */
    close(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 设置当前的配置
     * @param settings 表单的配置
     */
    setValue(settings: PdSDKAttValueRuleItemSettings): void;
    /**
     * 打开弹框
     */
    show(settings?: PdUIModalSettings): void;
    /**
     * 更新允许的实体类型
     * @param allowTypes 允许的实体类型
     */
    updateAllowTypes(allowTypes: string[]): void;
    /**
     * 更新允许的关系类型
     * @param allowAtts 允许的关系类型
     */
    updateAllowAtts(allowAtts: string[]): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginAttValueRuleDialogSettings} settings - 用户定义配置
     * @return {PdSDKPluginAttValueRuleDialogSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginAttValueRuleDialogSettings): PdSDKPluginAttValueRuleDialogSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
