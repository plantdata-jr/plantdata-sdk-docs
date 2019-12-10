/// <reference types="jquery" />
import { PdContainer } from '../container';
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdPanel } from '../panels/panel';
import { PdEvent, PdEventData } from '../../core/event';
import { PdPanelBox, PdPanelBoxSettings } from '../panel-box/panel-box';
import { PdSelector } from '../../common/common';
import { PdUIButtonSettings } from '../../ui/components/button/button';
/**
 * 插件按钮设置
 */
export interface PdPluginButtonSettings extends PdUIButtonSettings {
    /**
     * 是否显示按钮
     */
    enable?: boolean;
    /**
     * 点击按钮触发事件
     * @param {PdPlugin} ins - 插件产生的数据
     * @return boolean - 是否自动关闭插件框
     */
    onClick?: (ins: PdPlugin, event: JQuery.ClickEvent) => void;
}
/**
 *  插件配置
 */
export interface PdPluginSettings extends PdComponentSettings {
    /**
     * 插件容器，如需要更换默认的容器时才需要设置
     */
    $parent?: PdSelector;
    /**
     *  是否激活状态
     */
    active?: boolean;
    /**
     * 盒子配置
     */
    box?: boolean | PdPanelBoxSettings;
    /**
     * 额外的class
     */
    cls?: string;
    /**
     *  插件生成的面板容器
     */
    container?: PdContainer;
    /**
     * 插件头部的生成方法
     */
    headerFunction?: (title: string, icon?: string, tooltip?: string) => void;
    /**
     * 插件图标
     */
    icon?: string;
    /**
     * 盒子容器初始状态是否展开
     * @deprecated v6.0中移除
     */
    isBoxOpen?: boolean;
    /**
     *  是否在浮动面板中
     */
    isFloat?: boolean;
    /**
     * 是否可见
     */
    isVisible?: (viewType: string, ins: PdPlugin) => boolean;
    /**
     * 否定的按钮配置
     */
    negativeBtn?: PdPluginButtonSettings;
    /**
     * 肯定的按钮配置
     */
    positiveBtn?: PdPluginButtonSettings;
    /**
     *  插件所在面板的位置
     */
    side?: 'top' | 'right' | 'bottom' | 'left' | 'mask';
    /**
     * 插件标题
     */
    title?: string;
    /**
     * 是否在盒子容器内
     * @deprecated v6.0中移除
     */
    widthBox?: boolean;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 *  插件
 */
export declare abstract class PdPlugin extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdPluginSettings;
    /**
     *  配置
     */
    settings: PdPluginSettings;
    /**
     * 否定的按钮
     */
    protected $negativeBtn: JQuery;
    /**
     * 肯定的按钮
     */
    protected $positiveBtn: JQuery;
    /**
     *  插件生成的盒子容器
     */
    protected box: PdPanelBox;
    /**
     *  插件生成的面板容器
     */
    protected container: PdContainer;
    /**
     *  插件所在的面板
     */
    protected panel: PdPanel;
    /**
     *  插件所在的面板的分配的子组件ID
     */
    protected panelId: string;
    /**
     * 构造方法
     * @param {PdPluginSettings} settings - 用户配置
     */
    protected constructor(settings?: PdPluginSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的类型
     */
    abstract getPluginType(): string;
    /**
     * 指定组件绑定事件，与on方法不同的是，使用该方法可以指定绑定事件的组件，且使用该方法添加的事件可统一通过clearEvent移除
     * @param {string} eventType - 事件类型，绑定多个事件时使用,隔开
     * @param {(data: PdEventData) => void} handler - 事件处理方法
     * @param {PdEvent} scope - 绑定事件的对象，默认是当前组件的容器
     * @param {string} id - 事件标识，方便移除时不需要指定添加事件处理方法的引用，而用标识代替，默认标识为default
     */
    protected addEvent(eventType: string, handler: (data: PdEventData) => void, scope?: PdEvent, id?: string): PdEvent;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建插件DOM
     * @param {PdSelector} content - 插件内容
     * @param {string} icon - 插件ICON
     * @param {string} title - 插件标题
     * @param {string} tooltip - 插件文字提示
     * @return {JQuery} - 插件的DOM
     */
    protected buildPluginTemplate(content: PdSelector, icon?: string, title?: string, tooltip?: string): JQuery;
    /**
     * 创建插件按钮
     */
    protected createBtn(): void;
    /**
     * 创建否定的按钮
     * @param {string} cls - 额外的类
     * @param {PdPluginButtonSettings} settings - 按钮配置
     * @return string - 按钮的HTML字符串
     */
    protected createNegativeBtn(cls: string, settings?: PdPluginButtonSettings): string;
    /**
     * 创建肯定的按钮
     * @param {string} cls - 额外的类
     * @param {PdPluginButtonSettings} settings - 按钮配置
     * @return string - 按钮的HTML字符串
     */
    protected createPositiveBtn(cls: string, settings?: PdPluginButtonSettings): string;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 绑定事件
     */
    protected handleViewChange(): void;
    /**
     * 隐藏面板
     */
    protected hidePanel(): void;
    /**
     * 初始化配置
     * @param {PdPluginSettings} settings - 用户定义配置
     * @return {PdPluginSettings} 配置
     */
    protected initSettings(settings: PdPluginSettings): PdPluginSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 否定按钮单击事件
     */
    protected onNegativeBtnClick(): void;
    /**
     * 肯定按钮单击事件
     */
    protected onPositiveBtnClick(): void;
}
