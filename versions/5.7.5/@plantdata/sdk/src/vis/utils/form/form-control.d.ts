/// <reference types="jquery" />
import { PdVisEditItemType } from '../edit-item/edit-item';
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * 编辑组件配置
 */
export interface PdVisFormControlSettings extends PdComponentSettings {
    /**
     * 生成自定义模板
     * @param settings 编辑组件的配置
     */
    buildItem?: (settings: PdVisFormControlSettings) => PdSelector;
    /**
     * 额外的className
     */
    className?: string;
    /**
     * 是否可删除
     */
    deletable?: boolean;
    /**
     * 是否禁用该选项
     */
    disabled?: boolean;
    /**
     * 是否可编辑
     */
    editable?: boolean;
    /**
     * 获取编辑组件值的方法
     * @param {PdVisEditItemSettings} settings - 当前编辑组件的配置
     * @param {JQuery<HTMLElement>} $item - 当前项目对应的DOM
     */
    getValue?: (settings: PdVisFormControlSettings, $item: JQuery<HTMLElement>) => any;
    /**
     *  编辑数据的html
     */
    html?: string;
    /**
     *  编辑数据的KEY
     */
    key?: string;
    /**
     *  编辑数据的名称
     */
    label?: string;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     * 设置编辑组件值的方法
     * @param {PdVisEditItemSettings} settings - 当前编辑组件的配置
     * @param {JQuery<HTMLElement>} $item - 当前项目对应的DOM
     * @param value - 数据
     */
    setValue?: (settings: PdVisFormControlSettings, $item: JQuery<HTMLElement>, value: any) => void;
    /**
     * 编辑类型
     */
    type?: PdVisEditItemType;
    /**
     *  编辑组件的选中值
     */
    value?: any;
    /**
     * 其他自定义配置
     */
    [key: string]: any;
}
/**
 * 编辑组件
 */
export declare class PdVisFormControl extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlSettings;
    /**
     * 构造方法
     * @param {PdVisFormControlSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlSettings);
    /**
     * 获取编辑组件值的方法
     */
    getData(): any;
    /**
     * 设置编辑组件值的方法
     * @param data 滤选项的值
     * @param {boolean} silence 是否静默设置
     */
    setData(data: any, silence?: boolean): void;
    /**
     * 修改编辑组件
     * @param {PdVisFormControlSettings} settings 编辑组件的配置
     */
    updateTemplate(settings?: PdVisFormControlSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 生成额外的Class
     */
    protected buildExtraClasses(): string;
    /**
     * 生成编辑组件头部模板
     */
    protected buildHeaderTemplate(): PdSelector;
    /**
     * 生成编辑组件模板
     */
    protected buildTemplate(): PdSelector;
    /**
     * 获取模板上的值
     */
    protected getTemplateValue(): any;
    /**
     * 初始化配置
     * @param {PdVisFormControlSettings} settings - 用户定义配置
     * @return {PdVisFormControlSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlSettings): PdVisFormControlSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 更新模板的值
     * @param data 值
     */
    protected updateTemplateValue(data: any): void;
}
