/// <reference types="jquery" />
import { PdPanel, PdPanelChildSettings, PdPanelSettings } from '../panel';
import { PdPanelBox } from '../../panel-box/panel-box';
import { PdComponent } from '../../../core/component';
/**
 * 浮动面板配置
 */
export interface PdFloatPanelSettings extends PdPanelSettings {
    /**
     * 当在盒子容器中是是否对同一面板中的盒子排他
     */
    exclusive?: boolean;
    /**
     *  面板位置
     */
    side?: 'mask' | 'top' | 'bottom' | 'left' | 'right';
}
/**
 * 浮动面板
 */
export declare class PdFloatPanel extends PdPanel {
    /**
     *  默认配置
     */
    static defaultSettings: PdFloatPanelSettings;
    /**
     *  配置
     */
    settings: PdFloatPanelSettings;
    /**
     * PdPanelBox的Map
     */
    protected boxMap: {
        [key: string]: PdPanelBox;
    };
    /**
     * 构造方法
     * @param {PdFloatPanelSettings} settings - 用户配置
     */
    constructor(settings?: PdFloatPanelSettings);
    /**
     * 在面板内添加子组件
     * @param {PdComponent} child - 子组件
     * @param {PdPanelChildSettings} settings - 子组件配置
     * @param {PdSelector} $el - 子组件的选择器
     * @return {string} 子组件ID
     */
    addChild(child: PdComponent, settings?: PdPanelChildSettings, $el?: JQuery<HTMLElement>): string;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 初始化配置
     * @param {PdFloatPanelSettings} settings - 用户定义配置
     * @return {PdFloatPanelSettings}
     */
    protected initSettings(settings: PdFloatPanelSettings): PdFloatPanelSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
