/// <reference types="jquery" />
import { PdVisDialog, PdVisDialogSettings } from '../modal/dialog';
import { PdVisLinkStyleConfigure, PdVisLinkStyleConfigureControlSettings, PdVisLinkStyleConfigureItem } from './link-style-configure';
import { PdVisNetChart, PdVisNetChartDataLink } from '../../netchart/netchart';
/**
 * 边可视化配置弹框配置
 */
export interface PdVisLinkStyleConfigurePanelSettings extends PdVisDialogSettings {
    /**
     * 控件状态
     */
    control?: PdVisLinkStyleConfigureControlSettings;
    /**
     * 可视化组件
     */
    netChart?: PdVisNetChart;
    /**
     * 数据改变时的回调
     * @param data 改变后的数据
     */
    onChange?: (data: PdVisLinkStyleConfigureItem[]) => void;
}
/**
 * 边可视化配置弹框
 */
export declare class PdVisLinkStyleConfigurePanel extends PdVisDialog {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisLinkStyleConfigurePanelSettings;
    /**
     *  配置
     */
    settings: PdVisLinkStyleConfigurePanelSettings;
    /**
     * 配置数据
     */
    protected data: PdVisLinkStyleConfigureItem[];
    /**
     * 边可视化配置组件
     */
    protected panel: PdVisLinkStyleConfigure;
    /**
     * 构造方法
     * @param {PdVisLinkStyleConfigurePanelSettings} settings - 用户配置
     */
    constructor(settings?: PdVisLinkStyleConfigurePanelSettings);
    /**
     * 获取当前配置结果
     */
    getValue(): PdVisNetChartDataLink[];
    /**
     * 更新配置面板选项
     * @param links 可配置的边列表
     */
    update(links: PdVisNetChartDataLink[]): void;
    /**
     * 初始化配置
     * @param {PdVisLinkStyleConfigurePanelSettings} settings - 用户定义配置
     * @return {PdVisLinkStyleConfigurePanelSettings} 配置
     */
    protected initSettings(settings: PdVisLinkStyleConfigurePanelSettings): PdVisLinkStyleConfigurePanelSettings;
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
