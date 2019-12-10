/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 级联菜单项配置
 */
export interface PdVisCascaderItemSettings {
    /**
     * 子菜单项配置
     */
    children?: this[];
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 默认显示名称字段
     */
    label?: string;
    /**
     * 默认值字段
     */
    value?: any;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 * 级联菜单组件配置
 */
export interface PdVisCascaderSettings extends PdComponentSettings {
    /**
     * 在级联选项框失去焦点时触发
     */
    blur?: (event: JQuery.BlurEvent) => void;
    /**
     * 值变化时触发的事件
     */
    change?: (value: any, event: JQuery.ClickEvent) => void;
    /**
     * 点击即改变
     */
    changeOnSelect?: boolean;
    /**
     *  工具选项的class
     */
    cls?: string[];
    /**
     * 数据
     */
    data?: PdVisCascaderItemSettings[];
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 在级联选项框获得焦点时触发
     */
    focus?: (event: JQuery.FocusEvent) => void;
    /**
     * 数据是否路径方式读写
     */
    isPath?: boolean;
    /**
     * 显示字段
     */
    labelKey?: string;
    /**
     *  生成级联菜单组件的容器
     */
    selector?: PdSelector;
    /**
     * 是否显示路径
     */
    showPath?: boolean;
    /**
     * 尺寸
     */
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    /**
     * 数据值的字段
     */
    valueKey?: string;
}
/**
 * 级联菜单组件
 */
export declare class PdVisCascader extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisCascaderSettings;
    /**
     *  配置项
     */
    settings: PdVisCascaderSettings;
    /**
     * 显示选中内容的框
     */
    protected $input: JQuery<HTMLInputElement>;
    /**
     * 菜单容器
     */
    protected $menu: JQuery<HTMLDivElement>;
    /**
     * 菜单项的配置数据
     */
    protected data: PdVisCascaderItemSettings[];
    /**
     * 叶子数据值列表
     */
    protected endValues: any[][];
    /**
     * 显示字段
     */
    protected labelKey: string;
    /**
     * 遮罩监听事件
     * @param {JQuery.ClickEvent} e - 点击事件对象
     */
    protected maskListener: (e: JQuery.ClickEvent) => void;
    /**
     * 数据值的字段
     */
    protected valueKey: string;
    /**
     * 数据值列表
     */
    protected values: any[][];
    /**
     * 构造方法
     * @param {PdVisCascaderSettings} settings - 用户配置
     */
    constructor(settings?: PdVisCascaderSettings);
    /**
     * 关闭选项
     */
    close(): void;
    /**
     * 获取当前选中的值
     * @param {boolean} isPath - 是否按路径获取
     * @return 当前选中的结果
     */
    getValue(isPath?: boolean): any | any[];
    /**
     * 获取值对应的数据对象
     * @param value - 数据的值
     * @param arr - 选项数据，默认为当前配置的所有选项数据
     */
    getValueObj(value: any, arr?: PdVisCascaderItemSettings[]): PdVisCascaderItemSettings;
    /**
     * 是否打开状态
     */
    isOpen(): boolean;
    /**
     * 展开选项
     */
    open(): void;
    /**
     * 设置当前选中的值
     * @param value - 需要设置的值
     * @param {boolean} isPath - 是否按路径设置
     */
    setValue(value: any | any[], isPath?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建菜单项
     * @param arr 菜单项的配置
     * @param value 选中的菜单值
     */
    protected createMenuItems(arr: PdVisCascaderItemSettings[], value?: any): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化配置
     * @param {PdVisCascaderSettings} settings - 用户定义配置
     * @return {PdVisCascaderSettings} 配置
     */
    protected initSettings(settings: PdVisCascaderSettings): PdVisCascaderSettings;
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
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 更新数据值列表
     * @param arr 选项数据，默认为当前配置的所有选项数据
     * @param path 菜单项值的父路径
     */
    protected updateValues(arr?: any[], path?: any[]): void;
    /**
     * 更新显示文本
     * @param str 要显示的内容
     */
    protected updateViewValue(str: string): void;
}
