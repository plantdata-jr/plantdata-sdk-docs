/// <reference types="jquery" />
import { PdTabPanel, PdTabPanelChildSettings, PdTabPanelSettings } from '../tab';
import { PdComponent } from '../../../../core/component';
/**
 * 侧边面板配置
 */
export interface PdSidePanelSettings extends PdTabPanelSettings {
    /** 面板位置 */
    side?: 'left' | 'right';
    /** 面板激活状态 */
    active?: boolean;
    /** 面板模式 */
    mode?: 'fixed' | 'overlay';
}
/**
 *  侧边面板
 */
export declare class PdSidePanel extends PdTabPanel {
    /**
     *  默认配置
     */
    static defaultSettings: PdSidePanelSettings;
    /**
     *  配置
     */
    settings: PdSidePanelSettings;
    /**
     * 构造方法
     * @param {PdSidePanelSettings} settings - 用户配置
     */
    constructor(settings?: PdSidePanelSettings);
    /**
     * 添加子面板
     * @param {PdComponent} child - 子面板组件
     * @param {PdPanelChildSettings} settings - 子面板配置
     * @param {PdSelector} $el - 子面板选择器
     * @return {string} 子面板Id
     */
    addChild(child: PdComponent, settings?: PdTabPanelChildSettings, $el?: JQuery<HTMLElement>): string;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建标签页容器
     */
    protected createTabsContainer(): void;
    /**
     * 初始化配置
     * @param {PdSidePanelSettings} settings - 用户定义配置
     * @return {PdSidePanelSettings} 配置
     */
    protected initSettings(settings: PdSidePanelSettings): PdSidePanelSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
