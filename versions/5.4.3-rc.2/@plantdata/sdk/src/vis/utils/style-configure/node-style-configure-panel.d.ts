/// <reference types="jquery" />
import { PdVisDialog, PdVisDialogSettings } from '../modal/dialog';
import { PdVisNodeStyleConfigure, PdVisNodeStyleConfigureControlSettings, PdVisNodeStyleConfigureItem } from './node-style-configure';
import { PdVisNetChart, PdVisNetChartDataNode } from '../../netchart/netchart';
/**
 * 节点可视化配置弹框配置
 */
export interface PdVisNodeStyleConfigurePanelSettings extends PdVisDialogSettings {
    /**
     * 控件状态
     */
    control?: PdVisNodeStyleConfigureControlSettings;
    /**
     * 可视化组件
     */
    netChart?: PdVisNetChart;
    /**
     * 数据改变时的回调
     * @param data 改变后的数据
     */
    onChange?: (data: PdVisNodeStyleConfigureItem[]) => void;
}
/**
 * 节点可视化配置弹框
 */
export declare class PdVisNodeStyleConfigurePanel extends PdVisDialog {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisNodeStyleConfigurePanelSettings;
    /**
     *  配置
     */
    settings: PdVisNodeStyleConfigurePanelSettings;
    /**
     * 配置数据
     */
    protected data: PdVisNodeStyleConfigureItem[];
    /**
     * 节点可视化配置组件
     */
    protected panel: PdVisNodeStyleConfigure;
    /**
     * 构造方法
     * @param {PdVisNodeStyleConfigurePanelSettings} settings - 用户配置
     */
    constructor(settings?: PdVisNodeStyleConfigurePanelSettings);
    /**
     * 获取当前配置结果
     */
    getValue(): PdVisNetChartDataNode[];
    /**
     * 更新配置面板选项
     * @param nodes 可配置的节点列表
     */
    update(nodes: PdVisNetChartDataNode[]): void;
    /**
     * 初始化配置
     * @param {PdVisNodeStyleConfigurePanelSettings} settings - 用户定义配置
     * @return {PdVisNodeStyleConfigurePanelSettings} 配置
     */
    protected initSettings(settings: PdVisNodeStyleConfigurePanelSettings): PdVisNodeStyleConfigurePanelSettings;
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
