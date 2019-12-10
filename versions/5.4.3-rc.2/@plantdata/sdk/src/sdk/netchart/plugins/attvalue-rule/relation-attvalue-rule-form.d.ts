import { PdOptionType } from '../../../../common/common';
import { PdSDKAttValueRuleForm, PdSDKAttValueRuleFormSettings, PdSDKAttValueRuleItemSettings } from './attvalue-rule-form';
/**
 *  关系属性值筛选表单配置
 */
export interface PdSDKRelationAttValueRuleFormSettings extends PdSDKAttValueRuleFormSettings {
    /**
     * 允许的属性
     */
    allowAtts?: string[];
}
/**
 * 关系属性值规则项
 */
export interface PdSDKRelationAttValueRuleItemSettings extends PdSDKAttValueRuleItemSettings {
    /**
     * 边属性序号
     */
    seqNo?: string | number;
    /**
     * 属性Id
     */
    attrId?: string | number;
}
/**
 * 关系属性值筛选表单
 */
export declare class PdSDKRelationAttValueRuleForm extends PdSDKAttValueRuleForm {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKRelationAttValueRuleFormSettings;
    /**
     *  配置
     */
    settings: PdSDKRelationAttValueRuleFormSettings;
    /**
     * 允许的属性
     */
    protected allowAtts: string[];
    /**
     * 配置的选择结果
     */
    protected data: PdSDKRelationAttValueRuleItemSettings;
    /**
     * 构造方法
     * @param {PdSDKRelationAttValueRuleFormSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKRelationAttValueRuleFormSettings);
    /**
     * 更新允许的关系类型
     * @param allowAtts 允许的关系类型
     */
    updateAllowAtts(allowAtts: string[]): void;
    /**
     * 属性选择工具选中发生变化时的处理事件
     * @param v 属性选择工具的值
     */
    protected attSelectorChangeHandler(v: any): void;
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
     * @param {PdSDKRelationAttValueRuleFormSettings} settings - 用户定义配置
     * @return {PdSDKRelationAttValueRuleFormSettings} 配置
     */
    protected initSettings(settings: PdSDKRelationAttValueRuleFormSettings): PdSDKRelationAttValueRuleFormSettings;
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
