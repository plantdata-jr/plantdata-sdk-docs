/// <reference types="jquery" />
import { PdOptionType } from '../../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../../core/component';
import { PdUIAutocomplete } from '../../../../ui/components/autocomplete/autocomplete';
import { PdVisCascader } from '../../../../vis/utils/cascader/cascader';
import { PdSDKNetChart } from '../../netchart';
import { PdVisNetChart } from '../../../../vis/netchart';
import { PdSDKKGSettings } from '../../../utils/service';
/**
 *  属性筛选表单配置
 */
export interface PdSDKAttValueRuleFormSettings extends PdComponentSettings, PdSDKKGSettings {
    /**
     * SDK实例
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
    /**
     * 没有可配置项时的提示文本
     */
    noDataTip?: string;
}
/**
 * 属性值规则项
 */
export interface PdSDKAttValueRuleItemSettings {
    /**
     * 等于的值
     */
    $eq?: string | number;
    /**
     * 大于的值
     */
    $gt?: string | number;
    /**
     * 大于等于的值
     */
    $gte?: string | number;
    /**
     * 小于的值
     */
    $lt?: string | number;
    /**
     * 小于等于的值
     */
    $lte?: string | number;
    /**
     * 不等于的值
     */
    $neq?: string | number;
    /**
     * 是否大于等于， 0: 表示等于， 1: 大于等于
     */
    isGte?: '0' | '1';
    /**
     * 是否小于等于， 0: 表示等于， 1: 小于等于
     */
    isLte?: '0' | '1';
    /**
     * 规则类型
     */
    type?: string;
}
/**
 * 属性筛选表单
 */
export declare abstract class PdSDKAttValueRuleForm extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKAttValueRuleFormSettings;
    /**
     *  配置
     */
    settings: PdSDKAttValueRuleFormSettings;
    /**
     * 属性条件选择器的容器
     */
    protected $attSelector: JQuery<HTMLElement>;
    /**
     * 等于的输入框
     */
    protected $eq: JQuery<HTMLInputElement>;
    /**
     * 大于等于的输入框
     */
    protected $gte: JQuery<HTMLInputElement>;
    /**
     * 是否大于等于的输入框
     */
    protected $isGte: JQuery<HTMLSelectElement>;
    /**
     * 是否小于等于的输入框
     */
    protected $isLte: JQuery<HTMLSelectElement>;
    /**
     * 小于等于的输入框
     */
    protected $lte: JQuery<HTMLInputElement>;
    /**
     * 不等于的输入框
     */
    protected $neq: JQuery<HTMLInputElement>;
    /**
     * 属性条件选择器
     */
    protected attSelector: PdVisCascader;
    /**
     * 属性值数据筛选搜索工具
     */
    protected attValueSearcher: PdUIAutocomplete;
    /**
     * 配置的选择结果
     */
    protected data: PdSDKAttValueRuleItemSettings;
    /**
     * 构造方法
     * @param {PdSDKAttValueRuleFormSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKAttValueRuleFormSettings);
    /**
     * 清除值
     */
    clearValue(): void;
    /**
     * 获取值
     * @return {any} 值
     */
    getValue(): PdSDKAttValueRuleItemSettings;
    /**
     * 设置值
     * @param {any} obj - 值
     */
    setValue(obj: PdSDKAttValueRuleItemSettings): void;
    /**
     * 检验表单
     */
    validateMessage(): string;
    /**
     * 属性选择工具选中发生变化时的处理事件
     * @param v 属性选择工具的值
     */
    protected abstract attSelectorChangeHandler(v: any): void;
    /**
     * 创建属性过滤配置的表单
     * @param {PdSDKAttValueRuleItemSettings} data - 需要检验的表单
     */
    protected clearData(data: PdSDKAttValueRuleItemSettings): PdSDKAttValueRuleItemSettings;
    /**
     * 清空表单数据
     */
    protected clearForm(): void;
    /**
     * 创建属性值选择工具
     */
    protected createAttSelector(): void;
    /**
     * 创建属性值选择工具的选项
     */
    protected abstract createAttSelectorOptions(): PdOptionType[];
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 获取属性的数据类型
     * @param settings 配置
     */
    protected abstract getDataType(settings: any): number;
    /**
     * 设置表单数据
     */
    protected getFormData(): PdSDKAttValueRuleItemSettings;
    /**
     * 初始化配置
     * @param {PdSDKAttValueRuleFormSettings} settings - 用户定义配置
     * @return {PdSDKAttValueRuleFormSettings} 配置
     */
    protected initSettings(settings: PdSDKAttValueRuleFormSettings): PdSDKAttValueRuleFormSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 获取边属性值
     * @param pageNo - 规则页码
     * @param  formData - 请求参数
     */
    protected list(pageNo: number, formData: any): Promise<any[]>;
    /**
     * 加载并显示属性值
     * @params formData 请求参数
     */
    protected loadAttValue(formData: any): Promise<any>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 设置表单数据
     */
    protected setFormData(): void;
    /**
     * 渲染边过滤条件的表单配置内容
     */
    protected updateForm(): void;
    /**
     * 更新表单可配置状态
     */
    protected updateFormStatus(): void;
}
