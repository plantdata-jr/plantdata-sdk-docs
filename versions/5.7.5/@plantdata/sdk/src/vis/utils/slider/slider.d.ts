/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 滑块组件配置
 */
export interface PdVisSliderSettings extends PdComponentSettings {
    /**
     * 改变事件
     */
    change?: (value: number | [number, number]) => void;
    /**
     * 拖拽事件响应间隔时间
     */
    debounceTime?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 拖拽时的事件
     */
    dragging?: (value: number | [number, number]) => void;
    /**
     * 高度（垂直时必填）
     */
    height?: number;
    /**
     * 是否显示最大最小值的标签
     */
    labelVisible?: boolean;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     *  是否为范围选择
     */
    range?: boolean;
    /**
     *  生成滑块组件的容器
     */
    selector?: PdSelector;
    /**
     * 是否显示消息提示内容
     */
    showTooltip?: boolean;
    /**
     * 步长
     */
    step?: number;
    /**
     * 当前值
     */
    value?: [number, number] | number;
    /**
     * 是否垂直展示
     */
    vertical?: boolean;
}
/**
 * 滑块组件
 */
export declare class PdVisSlider extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisSliderSettings;
    /**
     *  配置项
     */
    settings: PdVisSliderSettings;
    /**
     * 方向
     */
    protected direction: 'left' | 'bottom';
    /**
     * 移动事件
     */
    protected moveHandler: (e: JQuery.MouseMoveEvent) => void;
    /**
     * 偏移计算方向
     */
    protected pageDirection: 'pageX' | 'pageY';
    /**
     * 消息提示组件的显示位置
     */
    protected tooltipPosition: string;
    /**
     * 弹起事件
     */
    protected upHandler: (e: JQuery.MouseUpEvent) => void;
    /**
     * width / height
     */
    protected wh: 'width' | 'height';
    /**
     * 构造方法
     * @param {PdVisSliderSettings} settings - 用户配置
     */
    constructor(settings?: PdVisSliderSettings);
    /**
     * 取值
     * @return {[number, number] | number} 当前值
     */
    getValue(): [number, number] | number;
    /**
     * 设置值
     * @param {[number, number] | number} v - 值
     */
    setValue(v: [number, number] | number): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 将数值控制在步长设置的小数位数
     * @param {number} rs - 传入的需要计算处理的值
     */
    protected getDecimalNumber(rs: number): number;
    /**
     * 范围选择模式时判断传入的值离当前范围极值中哪个值更接近
     * @param {number} v - 传入值用来对比
     * @return {number} 接近的值
     */
    protected getNearNumber(v: number): number;
    /**
     * 将传入的值处理成符合步长倍数的数值
     * @param {number} rs - 传入的值
     */
    protected getSimilarNumber(rs: number): number;
    /**
     * 从DOM上获取对应的数据值
     */
    protected getValueByElement(e: PdSelector): number;
    /**
     * 初始化配置
     * @param {PdVisSliderSettings} settings - 用户定义配置
     * @return {PdVisSliderSettings} 配置
     */
    protected initSettings(settings: PdVisSliderSettings): PdVisSliderSettings;
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
     * 坐标转化为值
     * @param {number} pos - 坐标
     */
    protected posToValue(pos: number): number;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 在值改变时设置组件上的位置
     */
    protected updateUI(): void;
    /**
     * 根据坐标更新值
     * @param {number} pos - 更新后的位置坐标
     */
    protected updateValueByPos(pos: number): void;
}
