/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../core/component';
import { PdContainer } from './container';
import { PdPanel } from './panels/panel';
import { PdEvent, PdEventHandler } from '../core/event';
/**
 * 视图组件配置
 */
export interface PdViewSettings extends PdComponentSettings {
    /**
     *  是否激活
     */
    active?: boolean;
    /**
     * 额外的class
     */
    cls?: string;
    /**
     *  组件关联的容器
     */
    container?: PdContainer;
}
/**
 * 视图组件
 */
export declare abstract class PdView extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdViewSettings;
    /**
     *  配置
     */
    settings: PdViewSettings;
    /**
     *  组件关联的容器
     */
    protected container: PdContainer;
    /**
     *  组件所在的面板
     */
    protected panel: PdPanel;
    /**
     *  容器面板ID
     */
    protected panelId: string;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    protected constructor(settings?: PdViewSettings);
    /**
     * 获取组件的唯一标识
     */
    abstract getViewType(): string;
    /**
     * 指定组件绑定事件，与on方法不同的是，使用该方法可以指定绑定事件的组件，且使用该方法添加的事件可统一通过clearEvent移除
     * @param {string} eventType - 事件类型，绑定多个事件时使用,隔开
     * @param {(data: PdEventData) => void} handler - 事件处理方法
     * @param {PdEvent} scope - 绑定事件的对象，默认是当前组件的容器
     * @param {string} id - 事件标识，方便移除时不需要指定添加事件处理方法的引用，而用标识代替，默认标识为default
     */
    protected addEvent(eventType: string, handler: PdEventHandler, scope?: PdEvent, id?: string): PdEvent;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdViewSettings} settings - 用户定义配置
     * @return {PdViewSettings} 配置
     */
    protected initSettings(settings: PdViewSettings): PdViewSettings;
}
