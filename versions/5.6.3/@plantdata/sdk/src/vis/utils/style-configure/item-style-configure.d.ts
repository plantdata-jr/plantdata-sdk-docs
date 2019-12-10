/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * 节点/边可视化配置控件启用状态的配置
 */
export interface PdVisItemStyleConfigureControlSettings {
    /**
     * 颜色工具的启用状态
     */
    color?: boolean;
    /**
     * 虚化工具的启用状态
     */
    isVague?: boolean;
    /**
     * 标签可颜色工具的启用状态
     */
    labelColor?: boolean;
    /**
     * 标签可见性工具的启用状态
     */
    labelVisible?: boolean;
    /**
     * 可见性工具的启用状态
     */
    visible?: boolean;
}
/**
 * 节点/边样式可视化配置项
 */
export interface PdVisItemStyleConfigureItemStyle {
    /**
     * 颜色
     */
    color?: string;
    /**
     * 虚化
     */
    isVague?: boolean;
    /**
     * 标签可颜色
     */
    labelColor?: string;
    /**
     * 标签可见性
     */
    labelVisible?: boolean;
    /**
     * 可见性
     */
    visible?: boolean;
}
/**
 * 节点/边可视化配置项
 */
export interface PdVisItemStyleConfigureItem {
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 值
     */
    key?: string;
    /**
     * 标签
     */
    label?: string;
    /**
     * 样式
     */
    style?: PdVisItemStyleConfigureItemStyle;
}
/**
 * 节点/边可视化配置组件配置
 */
export interface PdVisItemStyleConfigureSettings extends PdComponentSettings {
    /**
     * 控件状态
     */
    control?: PdVisItemStyleConfigureControlSettings;
    /**
     * 数据
     */
    data?: PdVisItemStyleConfigureItem[];
    /**
     * 数据改变时的回调
     * @param data 改变后的数据
     */
    onChange?: (data: PdVisItemStyleConfigureItem[]) => void;
    /**
     * 显示模式
     */
    showType?: string;
}
/**
 * 节点/边可视化配置组件
 */
export declare class PdVisItemStyleConfigure extends PdComponent {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisItemStyleConfigureSettings;
    /**
     *  配置
     */
    settings: PdVisItemStyleConfigureSettings;
    /**
     * 配置选项
     */
    protected data: PdVisItemStyleConfigureItem[];
    /**
     * 配置选项显示类型
     */
    protected showType: string;
    /**
     * 显示类型可选项
     */
    protected showTypeOptions: {
        [key: string]: string;
    };
    /**
     * 构造方法
     * @param {PdVisItemStyleConfigureSettings} settings - 用户配置
     */
    constructor(settings?: PdVisItemStyleConfigureSettings);
    /**
     * 更新配置
     * @param data 配置数据
     */
    update(data?: PdVisItemStyleConfigureItem[]): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成表头
     */
    protected createHead(): string[];
    /**
     * 生成控制行
     */
    protected createRow(item: PdVisItemStyleConfigureItem): string[];
    /**
     * 创建显示类型选择器
     */
    protected createShowType(): string;
    /**
     * 生成全选行
     */
    protected createTotalRow(): string[];
    /**
     * 初始化配置
     * @param {PdVisItemStyleConfigureSettings} settings - 用户定义配置
     * @return {PdVisItemStyleConfigureSettings} 配置
     */
    protected initSettings(settings: PdVisItemStyleConfigureSettings): PdVisItemStyleConfigureSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 判断控件是否启用
     * @param item 控件的Key
     */
    protected isEnable(item: string): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新配置面板
     */
    protected updatePanel(): void;
    /**
     * 更新数据
     * @param $item 待更新的项目
     * @param prop 待更新的属性
     * @param value 更新后的值
     */
    protected updateProp($item: JQuery, prop: string, value: any): void;
}
