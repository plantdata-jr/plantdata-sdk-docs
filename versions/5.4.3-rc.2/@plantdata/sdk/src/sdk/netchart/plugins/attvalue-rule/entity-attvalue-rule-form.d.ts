import { PdOptionType } from '../../../../common/common';
import { PdSDKAttValueRuleForm, PdSDKAttValueRuleFormSettings, PdSDKAttValueRuleItemSettings } from './attvalue-rule-form';
/**
 *  实体属性值筛选表单配置
 */
export interface PdSDKEntityAttValueRuleFormSettings extends PdSDKAttValueRuleFormSettings {
    /**
     * 允许的实体
     */
    allowTypes?: string[];
}
/**
 * 实体属性值规则项
 */
export interface PdSDKEntityAttValueRuleItemSettings extends PdSDKAttValueRuleItemSettings {
    /**
     * 概念Id
     */
    conceptId?: string | number;
    /**
     * 属性Id
     */
    attrId?: string | number;
}
/**
 * 实体属性值筛选表单
 */
export declare class PdSDKEntityAttValueRuleForm extends PdSDKAttValueRuleForm {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEntityAttValueRuleFormSettings;
    /**
     *  配置
     */
    settings: PdSDKEntityAttValueRuleFormSettings;
    /**
     * 允许的实体
     */
    protected allowTypes: string[];
    /**
     * 配置的选择结果
     */
    protected data: PdSDKEntityAttValueRuleItemSettings;
    /**
     * 构造方法
     * @param {PdSDKEntityAttValueRuleFormSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEntityAttValueRuleFormSettings);
    /**
     * 更新允许的实体类型
     * @param allowTypes 允许的实体类型
     */
    updateAllowTypes(allowTypes: string[]): void;
    /**
     * 属性选择工具选中发生变化时的处理事件
     * @param v 属性选择工具的值
     */
    protected attSelectorChangeHandler(v: string[]): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建属性值选择工具的选项
     */
    protected createAttSelectorOptions(): PdOptionType[];
    /**
     * 获取属性的数据类型
     * @param settings 配置
     */
    protected getDataType(settings: any): number;
    /**
     * 初始化配置
     * @param {PdSDKEntityAttValueRuleFormSettings} settings - 用户定义配置
     * @return {PdSDKEntityAttValueRuleFormSettings} 配置
     */
    protected initSettings(settings: PdSDKEntityAttValueRuleFormSettings): PdSDKEntityAttValueRuleFormSettings;
    /**
     * 加载并显示属性值
     * @params formData 请求参数
     */
    protected loadAttValue(formData: any): Promise<any>;
    /**
     * 设置表单数据
     */
    protected setFormData(): void;
}
