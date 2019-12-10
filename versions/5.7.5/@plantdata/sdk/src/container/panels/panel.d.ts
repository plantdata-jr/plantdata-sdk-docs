/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../core/component';
/**
 * 面板组件配置
 */
export interface PdPanelSettings extends PdComponentSettings {
}
/**
 * 面板内子组件配置
 */
export interface PdPanelChildSettings extends PdComponentSettings {
    /**
     *  面板内子组件ID
     */
    id?: string;
}
/**
 * 面板组件
 */
export declare class PdPanel extends PdComponent {
    /**
     * 子组件
     */
    protected children: {
        [key: string]: {
            component: PdComponent;
            hidden: boolean;
            $el: JQuery;
        };
    };
    /**
     * 构造方法
     * @param {PdPanelSettings} settings - 用户配置
     */
    constructor(settings?: PdPanelSettings);
    /**
     * 激活面板内子组件
     * @param {string} id - 子组件的ID
     */
    activeChild(id: string): void;
    /**
     * 在面板内添加子组件
     * @param {PdComponent} child - 子组件
     * @param {PdPanelChildSettings} settings - 子组件配置
     * @param {PdSelector} $el - 子组件的选择器
     * @return {string} 子组件ID
     */
    addChild(child: PdComponent, settings?: PdPanelChildSettings, $el?: JQuery<HTMLElement>): string;
    /**
     * 清空子组件
     */
    clearChild(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 禁用子组件
     * @param {string} id - 子组件ID
     */
    disableChild(id: string): void;
    /**
     * 启用子组件
     * @param {string} id - 子组件ID
     */
    enableChild(id: string): void;
    /**
     * 获取所有子组件
     */
    getChildren(): PdComponent[];
    /**
     * 隐藏面板
     */
    hidePanel(): void;
    /**
     * 面板是否显示
     * @return {boolean} 面板是否显示
     */
    isPanelShow(): boolean;
    /**
     * 显示面板
     */
    showPanel(): void;
    /**
     * 显示/隐藏面板
     * @param {boolean} show - 是否显示
     */
    togglePanel(show?: boolean): void;
    /**
     * 更新子组件启用状态
     * @param {string} id - 子组件ID
     * @param {boolean} hidden - 是否隐藏
     */
    updateChildStatus(id: string, hidden?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
