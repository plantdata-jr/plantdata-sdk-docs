/// <reference types="jquery" />
import { PdVisItemStyleConfigure, PdVisItemStyleConfigureControlSettings, PdVisItemStyleConfigureItem, PdVisItemStyleConfigureItemStyle, PdVisItemStyleConfigureSettings } from './item-style-configure';
import { PdVisSlider } from '../slider/slider';
/**
 * 节点可视化配置控件启用状态的配置
 */
export interface PdVisNodeStyleConfigureControlSettings extends PdVisItemStyleConfigureControlSettings {
    /**
     * 节点图片裁切控件是否支持
     */
    imageCropping?: boolean;
    /**
     * 节点图片控件是否支持
     */
    imageVisible?: boolean;
    /**
     * 节点标签是否内嵌显示控件是否支持
     */
    labelInner?: boolean;
    /**
     * 半径控件是否支持
     */
    radius?: boolean;
}
/**
 * 节点样式可视化配置项
 */
export interface PdVisNodeStyleConfigureItemStyle extends PdVisItemStyleConfigureItemStyle {
    /**
     * 节点图片是否裁切
     */
    imageCropping?: boolean;
    /**
     * 节点图片是否显示
     */
    imageVisible?: boolean;
    /**
     * 节点标签是否内嵌显示
     */
    labelInner?: boolean;
    /**
     * 半径
     */
    radius?: number;
}
/**
 * 节点可视化配置项
 */
export interface PdVisNodeStyleConfigureItem extends PdVisItemStyleConfigureItem {
    /**
     * 样式
     */
    style?: PdVisNodeStyleConfigureItemStyle;
}
/**
 * 节点可视化配置组件配置
 */
export interface PdVisNodeStyleConfigureSettings extends PdVisItemStyleConfigureSettings {
    /**
     * 控件状态
     */
    control?: PdVisNodeStyleConfigureControlSettings;
    /**
     * 数据
     */
    data?: PdVisNodeStyleConfigureItem[];
    /**
     * 数据改变时的回调
     * @param data 改变后的数据
     */
    onChange?: (data: PdVisNodeStyleConfigureItem[]) => void;
}
/**
 * 节点可视化配置组件
 */
export declare class PdVisNodeStyleConfigure extends PdVisItemStyleConfigure {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisNodeStyleConfigureSettings;
    /**
     *  配置
     */
    settings: PdVisNodeStyleConfigureSettings;
    /**
     * 配置选项
     */
    protected data: PdVisNodeStyleConfigureItem[];
    /**
     * 半径设置器
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
     * @param {PdVisNodeStyleConfigureSettings} settings - 用户配置
     */
    constructor(settings?: PdVisNodeStyleConfigureSettings);
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
    protected createRow(item: PdVisNodeStyleConfigureItem): string[];
    /**
     * 生成全选行
     */
    protected createTotalRow(): string[];
    /**
     * 初始化配置
     * @param {PdVisNodeStyleConfigureSettings} settings - 用户定义配置
     * @return {PdVisNodeStyleConfigureSettings} 配置
     */
    protected initSettings(settings: PdVisNodeStyleConfigureSettings): PdVisNodeStyleConfigureSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
