/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 工具组件配置
 */
export interface PdVisToolItemSettings extends PdComponentSettings {
    /**
     * 工具组件点击事件执行之后执行的事件
     * @param {JQuery.ClickEvent} event - 事件对象
     * @param args - 事件产生时的状态数据
     */
    afterClick?: (event: JQuery.ClickEvent, args?: any) => any;
    /**
     * 子工具
     */
    children?: (PdVisToolItem | PdVisToolItemSettings)[];
    /**
     * 工具组件点击事件的处理方法
     * @param {JQuery.ClickEvent} event - 事件对象
     * @param args - 事件产生时的状态数据
     */
    click?: (event: JQuery.ClickEvent, args?: any) => any;
    /**
     *  工具组件额外的class
     */
    cls?: string[];
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 事件绑定
     */
    events?: {
        /**
         * 事件对应的处理方法
         * @param {JQuery.TriggeredEvent} event - 事件对象
         * @param args - 事件产生时的状态数据
         */
        [key: string]: (event: JQuery.TriggeredEvent, args?: any) => void;
    };
    /**
     *  图标
     */
    icon?: string;
    /**
     *  唯一标识
     */
    name?: string;
    /**
     * 生成工具的选择器
     */
    selector?: PdSelector;
    /**
     *  显示的标题
     */
    title?: string;
    /**
     * 显示的文字提示
     */
    tooltip?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 提示的模式
         */
        mode?: 'hover' | 'click';
        /**
         * 提示位置
         */
        position?: 'left' | 'right' | 'top' | 'bottom';
    };
    /**
     * 是否显示
     */
    visible?: ((ins: PdVisToolItem) => boolean) | boolean;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 * 工具组件
 */
export declare class PdVisToolItem extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisToolItemSettings;
    /**
     * 子工具容器
     */
    $childrenContainer: JQuery;
    /**
     * 子工具
     */
    children: PdVisToolItem[];
    /**
     *  配置
     */
    settings: PdVisToolItemSettings;
    /**
     * 构造方法
     * @param {PdVisToolItemSettings} settings - 用户配置
     */
    constructor(settings?: PdVisToolItemSettings);
    /**
     * 是否有效
     * @return {boolean} 有效性
     */
    getStatus(): boolean;
    /**
     * 获取唯一标识
     */
    getToolType(): string;
    /**
     * 是否可见
     * @return {boolean} 可见性
     */
    getVisibility(): boolean;
    /**
     * 更新点击状态
     * @param {boolean} enable - 是否可点击
     */
    updateStatus(enable: boolean): void;
    /**
     * 更新显示状态
     * @param {boolean} visible - 是否可显示
     */
    updateVisibility(visible: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建子工具
     */
    protected buildChildren($el: JQuery): void;
    /**
     * 生成事件的数据
     */
    protected buildEventArguments(): any;
    /**
     * 创建子工具
     * @param settings 子工具的配置
     */
    protected createChild(settings: PdVisToolItemSettings): PdVisToolItem;
    /**
     * 初始化配置
     * @param {PdVisToolItemSettings} settings - 用户定义配置
     * @return {PdVisToolItemSettings} 配置
     */
    protected initSettings(settings: PdVisToolItemSettings): PdVisToolItemSettings;
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
     * 处理点击事件
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
