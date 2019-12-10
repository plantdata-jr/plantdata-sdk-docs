/// <reference types="jquery" />
import { PdVisItemStyleConfigure, PdVisItemStyleConfigureControlSettings, PdVisItemStyleConfigureItem, PdVisItemStyleConfigureItemStyle, PdVisItemStyleConfigureSettings } from './item-style-configure';
import { PdVisSlider } from '../slider/slider';
import { PdOptionType } from '../../../common/common';
/**
 * 边可视化配置控件启用状态的配置
 */
export interface PdVisLinkStyleConfigureControlSettings extends PdVisItemStyleConfigureControlSettings {
    /**
     * 边图片控件是否支持
     */
    arrowVisible?: boolean;
    /**
     * 边标签控件是否支持
     */
    labelAtts?: boolean;
    /**
     * 长度控件是否支持
     */
    length?: boolean;
    /**
     * 宽度控件是否支持
     */
    radius?: boolean;
}
/**
 * 边样式可视化配置项
 */
export interface PdVisLinkStyleConfigureItemStyle extends PdVisItemStyleConfigureItemStyle {
    /**
     * 箭头显示
     */
    arrowVisible?: boolean;
    /**
     * 边标签显示内容
     */
    labelAtts?: string;
    /**
     * 长度
     */
    length?: number;
    /**
     * 宽度
     */
    radius?: number;
}
/**
 * 边可视化配置项
 */
export interface PdVisLinkStyleConfigureItem extends PdVisItemStyleConfigureItem {
    /**
     * 显示的候选属性列表
     */
    displayAtts?: PdOptionType[];
    /**
     * 样式
     */
    style?: PdVisLinkStyleConfigureItemStyle;
}
/**
 * 边可视化配置组件配置
 */
export interface PdVisLinkStyleConfigureSettings extends PdVisItemStyleConfigureSettings {
    /**
     * 控件状态
     */
    control?: PdVisLinkStyleConfigureControlSettings;
    /**
     * 数据
     */
    data?: PdVisLinkStyleConfigureItem[];
    /**
     * 数据改变时的回调
     * @param data 改变后的数据
     */
    onChange?: (data: PdVisLinkStyleConfigureItem[]) => void;
}
/**
 * 边可视化配置组件
 */
export declare class PdVisLinkStyleConfigure extends PdVisItemStyleConfigure {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisLinkStyleConfigureSettings;
    /**
     *  配置
     */
    settings: PdVisLinkStyleConfigureSettings;
    /**
     * 配置选项
     */
    protected data: PdVisLinkStyleConfigureItem[];
    /**
     * 边距离设置器
     */
    protected lSlider: PdVisSlider;
    /**
     * 宽度设置器
     */
    protected radiusSlider: PdVisSlider;
    /**
     * 显示类型选项
     */
    protected showTypeOptions: {
        [key: string]: string;
    };
    /**
     * 构造方法
     * @param {PdVisLinkStyleConfigureSettings} settings - 用户配置
     */
    constructor(settings?: PdVisLinkStyleConfigureSettings);
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
    protected createRow(item: PdVisLinkStyleConfigureItem): string[];
    /**
     * 生成全选行
     */
    protected createTotalRow(): string[];
    /**
     * 初始化配置
     * @param {PdVisLinkStyleConfigureSettings} settings - 用户定义配置
     * @return {PdVisLinkStyleConfigureSettings} 配置
     */
    protected initSettings(settings: PdVisLinkStyleConfigureSettings): PdVisLinkStyleConfigureSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
