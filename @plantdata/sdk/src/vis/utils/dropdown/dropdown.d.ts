/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 下拉按钮菜单项配置
 */
export interface PdVisOptionItemSettings {
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
 * 下拉按钮组件配置
 */
export interface PdVisDropdownSettings extends PdComponentSettings {
    /**
     *  下拉展开按钮的文本
     */
    buttonText?: string;
    /**
     *  工具选项的class
     */
    cls?: string[];
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 是否路径
     */
    isPath?: boolean;
    /**
     * 显示字段
     */
    labelKey?: string;
    /**
     * 值变化时触发的事件
     */
    onSelect?: (value: any, event: JQuery.ClickEvent) => void;
    /**
     * 选项数据
     */
    options?: PdVisOptionItemSettings[] | (() => PdVisOptionItemSettings[]);
    /**
     *  生成下拉按钮组件的容器
     */
    selector?: PdSelector;
    /**
     * 尺寸
     */
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    /**
     * 值的字段
     */
    valueKey?: string;
    /**
     *  下拉展开按钮的容器
     */
    wrapper?: PdSelector;
}
/**
 * 下拉按钮组件
 */
export declare class PdVisDropdown extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisDropdownSettings;
    /**
     *  配置项
     */
    settings: PdVisDropdownSettings;
    /**
     * 菜单容器
     */
    protected $menu: JQuery<HTMLDivElement>;
    /**
     * 菜单触发器
     */
    protected $triggerElement: JQuery<HTMLDivElement>;
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
     * 选项数据
     */
    protected options: PdVisOptionItemSettings[] | (() => PdVisOptionItemSettings[]);
    /**
     * 值的字段
     */
    protected valueKey: string;
    /**
     * 数据值列表
     */
    protected values: any[][];
    /**
     * 构造方法
     * @param {PdVisDropdownSettings} settings - 用户配置
     */
    constructor(settings?: PdVisDropdownSettings);
    /**
     * 关闭选项
     */
    close(): void;
    /**
     * 获取选项列表
     */
    getOptions(): PdVisOptionItemSettings[];
    /**
     * 获取当前选中的值
     * @param {boolean} isPath - 是否按路径获取
     */
    getValue(isPath?: boolean): any | any[];
    /**
     * 获取值对应的选项对象数据
     * @param value - 值
     * @param arr - 选项数据，默认为当前配置的所有选项数据
     */
    getValueObj(value: any, arr?: PdVisOptionItemSettings[]): PdVisOptionItemSettings;
    /**
     * 是否展开状态
     */
    isOpen(): boolean;
    /**
     * 展开选项
     */
    open(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 计算展开框显示的位置
     * @param $trigger 触发元素
     * @param targetInfo 展开框的信息
     * @param gap 触发元素和展开框的间隔
     */
    protected calcPosition($trigger: JQuery, targetInfo: {
        $target?: JQuery;
        width?: number;
        height?: number;
        widthGap?: number;
        heightGap?: number;
    }, gap?: number): {
        left: number;
        top: number;
        position?: undefined;
    } | {
        left: number;
        top: number;
        position: string;
    };
    /**
     * 创建菜单项
     * @param arr 菜单项的配置
     * @param value 选中的菜单值
     */
    protected createMenuItems(arr: PdVisOptionItemSettings[], value?: any): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化配置
     * @param {PdVisDropdownSettings} settings - 用户定义配置
     * @return {PdVisDropdownSettings} 配置
     */
    protected initSettings(settings: PdVisDropdownSettings): PdVisDropdownSettings;
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
}
