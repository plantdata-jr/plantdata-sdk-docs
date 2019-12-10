/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdPanel, PdPanelChildSettings, PdPanelSettings } from '../panel';
import { PdComponent } from '../../../core/component';
/**
 * 标签页面板标签配置
 */
export interface PdTabPanelTabSettings extends PdPanelChildSettings {
    /**
     *  激活状态
     */
    active?: boolean;
    /**
     *  图标
     */
    icon?: string;
    /**
     *  唯一标识
     */
    id?: string;
    /**
     *  标题
     */
    title?: string;
    /**
     *  提示内容
     */
    tooltip?: string;
    /**
     *  提示内容显示位置
     */
    tooltipPosition?: string;
}
/**
 * 标签页面板内容页配置
 */
export interface PdTabPanelPageSettings extends PdPanelChildSettings {
    /**
     *  激活状态
     */
    active?: boolean;
    /**
     *  唯一标识
     */
    id?: string;
}
/**
 * 标签页边面板子组件配置
 */
export interface PdTabPanelChildSettings extends PdTabPanelTabSettings, PdTabPanelPageSettings {
    /**
     * 额外数据
     */
    data?: any;
}
/**
 * 标签页面板配置
 */
export interface PdTabPanelSettings extends PdPanelSettings {
    /**
     * 标签页变化时的事件
     */
    onTabChange?: (to: PdTabPanelChildSettings, from: PdTabPanelChildSettings) => void;
}
/**
 * 标签页面板
 */
export declare class PdTabPanel extends PdPanel {
    /**
     * 配置
     */
    settings: PdTabPanelSettings;
    /**
     *  标签页内容容器
     */
    protected $pagesContainer: JQuery;
    /**
     *  标签页标签容器
     */
    protected $tabsContainer: JQuery;
    /**
     *  标签页激活标签的唯一标识
     */
    protected activeId: string;
    /**
     * 子组件配置
     */
    protected childSettings: {
        [key: string]: PdTabPanelChildSettings;
    };
    /**
     * 构造方法
     * @param {PdTabPanelSettings} settings - 用户配置
     */
    constructor(settings?: PdTabPanelSettings);
    /**
     * 激活子组件
     * @param {string} id - 子组件id
     */
    activeChild(id: string): void;
    /**
     * 激活子组件标签页内容
     * @param {string} id - 子组件id
     */
    activeChildPage(id: string): void;
    /**
     * 激活子组件标签页标签
     * @param {string} id - 子组件id
     */
    activeChildTab(id: string): void;
    /**
     * 添加子组件
     * @param {PdComponent} child - 子组件组件
     * @param {PdPanelChildSettings} settings - 子组件配置
     * @param {PdSelector} $el - 子组件选择器
     * @return {string} 子组件Id
     */
    addChild(child: PdComponent, settings?: PdTabPanelChildSettings, $el?: JQuery<HTMLElement>): string;
    /**
     * 获取当前子组件个数
     * @return {number} 子组件个数
     */
    getChildLength(): number;
    /**
     * 隐藏激活的标签页子组件
     */
    hideActivePanel(): void;
    /**
     * 隐藏指定的标签页子组件
     * @param {string} id - 需要隐藏的标签页子组件的唯一标识
     */
    hideTabPanel(id: string): void;
    /**
     * 移除子组件
     * @param {string} id - 子组件ID
     */
    removeChild(id: string): void;
    /**
     * 显示指定的标签页子组件
     * @param {string} id - 需要显示的标签页子组件的唯一标识
     */
    showTabPanel(id: string): void;
    /**
     * 显示/隐藏指定的标签页子组件
     * @param {string} id - 需要显示/隐藏的标签页子组件的唯一标识
     * @param {boolean} show - 是否显示
     */
    toggleTabPanel(id: string, show?: boolean): void;
    /**
     * 添加标签页内容
     * @param {PdSelector} child - 标签页内容的选择器
     * @param {PdTabPanelPageSettings} settings - 标签页内容的设置
     */
    protected addPage(child: PdSelector, settings: PdTabPanelPageSettings): JQuery;
    /**
     * 添加标签页标签
     * @param {PdTabPanelTabSettings} settings - 标签页标签的设置
     */
    protected addTab(settings: PdTabPanelTabSettings): JQuery;
    /**
     * 创建标签页容器
     */
    protected createTabsContainer(): void;
    /**
     * 初始化配置
     * @param {PdTabPanelSettings} settings - 用户定义配置
     * @return {PdTabPanelSettings} 配置
     */
    protected initSettings(settings: PdTabPanelSettings): PdTabPanelSettings;
}
