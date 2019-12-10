/// <reference types="jquery" />
import { PdMainPanel } from './panels/tab/main/main';
import { PdMap, PdSelector } from '../common/common';
import { PdComponent, PdComponentSettings } from '../core/component';
import { PdEventData } from '../core/event';
import { PdSidePanel, PdSidePanelSettings } from './panels/tab/side/side';
import { PdFloatPanel, PdFloatPanelSettings } from './panels/float/float';
import { PdPanel } from './panels/panel';
import { PdTabPanelChildSettings } from './panels/tab/tab';
/**
 * 面板容器主面板配置
 */
export interface PdContainerMainSettings extends PdComponentSettings {
    /**
     *  面板容器主面板配置项
     */
    settings?: any;
}
/**
 * 面板容器配置
 */
export interface PdContainerSettings extends PdComponentSettings {
    /**
     * 背景配置
     */
    background?: {
        /**
         * 背景图地址
         */
        url?: string;
        /**
         * 背景属性
         */
        props?: PdMap<string>;
    };
    /**
     *  底部浮动面板配置
     */
    bottomFloatPanel?: PdFloatPanelSettings;
    /**
     *  左侧面板配置
     */
    leftPanel?: PdSidePanelSettings;
    /**
     *  容器主面板配置
     */
    main?: PdContainerMainSettings;
    /**
     *  面板公共配置
     */
    panelSettings?: {
        /**
         *  浮动面板配置项
         */
        float?: {
            /**
             *  左侧面板配置
             */
            left?: PdFloatPanelSettings;
            /**
             *  右侧面板配置
             */
            right?: PdFloatPanelSettings;
            /**
             *  底部浮动面板配置
             */
            bottom?: PdFloatPanelSettings;
            /**
             *  顶部浮动面板配置项
             */
            top?: PdFloatPanelSettings;
        };
        /**
         *  顶层面板配置
         */
        top?: PdFloatPanelSettings;
        /**
         *  侧边面板配置
         */
        side?: {
            /**
             *  左侧面板配置
             */
            left?: PdSidePanelSettings;
            /**
             *  右侧面板配置
             */
            right?: PdSidePanelSettings;
        };
    };
    /**
     *  右侧面板配置
     */
    rightPanel?: PdSidePanelSettings;
    /**
     *  容器生成位置的选择器
     */
    selector?: PdSelector;
    /**
     *  顶部浮动面板配置项
     */
    topFloatPanel?: PdFloatPanelSettings;
}
/**
 * 面板容器
 */
export declare class PdContainer extends PdComponent {
    /**
     *  主面板容器
     */
    $mainContainer: JQuery;
    /**
     *  配置
     */
    settings: PdContainerSettings;
    /**
     *  主面板
     */
    protected mainPanel: PdMainPanel;
    /**
     *  侧边面板集
     */
    protected sidePanels: {
        [key: string]: PdPanel;
    };
    /**
     * 构造方法
     * @param {PdContainerSettings} settings - 用户配置
     */
    constructor(settings?: PdContainerSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取背景信息
     */
    getBackground(): {
        /**
         * 背景图地址
         */
        url?: string;
        /**
         * 背景属性
         */
        props?: PdMap<string>;
    };
    /**
     * 获取主面板
     * @return {PdMainPanel} 主面板
     */
    getMainPanel(): PdMainPanel;
    /**
     * 获取侧边面板
     * @param {"top" | "right" | "bottom" | "left" | 'mask'} side - 面板位置
     * @param {boolean} isFloat - 是否浮动面板
     * @return {PdPanel} 侧边面板
     */
    getSidePanel(side: 'top' | 'right' | 'bottom' | 'left' | 'mask', isFloat?: boolean): PdPanel;
    /**
     * 更新背景图片
     * @param url 背景图片地址
     * @param backgroundProps 背景样式
     */
    updateBackground(url?: string, backgroundProps?: PdMap<string>): void;
    /**
     * 添加主面板
     * @param {PdSelector} child - 子组件选择器
     * @param {PdTabPanelChildSettings} settings - 子组件配置
     */
    protected addMainPanel(child: PdSelector, settings: PdTabPanelChildSettings): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建浮动面板
     * @param {"top" | "right" | "bottom" | "left"} side
     */
    protected createFloatPanel(side: 'top' | 'right' | 'bottom' | 'left'): PdFloatPanel;
    /**
     * 创建主面板
     */
    protected createMainPanel(): void;
    /**
     * 创建面板
     */
    protected createPanels(): void;
    /**
     * 创建侧边面板
     * @param {"right" | "left"} side
     */
    protected createSidePanel(side: 'right' | 'left'): PdSidePanel;
    /**
     * 隐藏并返回遮罩
     * @return {JQuery} 遮罩
     */
    protected hideMask(): JQuery;
    /**
     * 隐藏侧边面板
     * @param {PdSidePanel} panel - 需要隐藏的面板
     */
    protected hidePanel(panel: PdSidePanel): void;
    /**
     * 初始化主面板
     */
    protected initMainPanel(): void;
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
     * 显示并返回遮罩
     * @return {JQuery} 遮罩
     */
    protected showMask(): JQuery;
    /**
     * 显示侧边面板
     * @param {PdSidePanel} panel - 需要隐藏的面板
     */
    protected showPanel(panel: PdSidePanel): void;
    /**
     * 侧边面板显示状态改变事件处理方法
     * @param {PdEventData} data - 事件相关的数据
     */
    protected sidePanelVisibleChangeHandler(data: PdEventData): void;
}
