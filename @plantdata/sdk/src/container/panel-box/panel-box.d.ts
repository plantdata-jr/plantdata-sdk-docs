/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdSelector } from '../../common/common';
/**
 *  盒子容器组件配置
 */
export interface PdPanelBoxSettings extends PdComponentSettings {
    /**
     * 盒子主体内容
     */
    body?: PdSelector;
    /**
     * 是否允许关闭
     */
    closeable?: boolean;
    /**
     * 盒子底部内容
     */
    footer?: PdSelector;
    /**
     * 盒子头部内容
     */
    header?: PdSelector;
    /**
     * 功能图标
     */
    icon?: PdSelector;
    /**
     * 盒子容器初始状态是否展开
     */
    isOpen?: boolean;
    /**
     * 是否允许最小化
     */
    minEnable?: boolean;
    /**
     * 盒子标题
     */
    title?: PdSelector;
    /**
     * 盒子标题的提示
     */
    tooltip?: string;
}
/**
 *  盒子容器组件
 */
export declare class PdPanelBox extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdPanelBoxSettings;
    /**
     *  配置
     */
    settings: PdPanelBoxSettings;
    /**
     * 盒子的状态
     */
    protected status: string;
    /**
     * 构造方法
     * @param {PdPanelBoxSettings} settings - 用户配置
     */
    constructor(settings?: PdPanelBoxSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取当前状态
     */
    getStatus(): string;
    /**
     * 是否关闭或最小化状态
     */
    isClosedOrMini(): boolean;
    /**
     * 更新状态
     * @param {'close' | 'mini' | 'open' | ''} status - 'close'表示关闭状态， 'mini'表示最小化状态， 'open'或''表示展开状态
     */
    updateStatus(status: 'close' | 'mini' | 'open' | ''): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdPanelBoxSettings} settings - 用户定义配置
     * @return {PdPanelBoxSettings} 配置
     */
    protected initSettings(settings: PdPanelBoxSettings): PdPanelBoxSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
