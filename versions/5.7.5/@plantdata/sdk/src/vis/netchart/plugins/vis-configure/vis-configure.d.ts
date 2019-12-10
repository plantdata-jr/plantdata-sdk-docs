/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisSlider, PdVisSliderSettings } from '../../../utils/slider/slider';
import { PdVisNetChart } from '../../netchart';
import { PdSelector } from '../../../../common/common';
import { PdVisLinkLegendItem } from '../legend/link-legend/link-legend';
import { PdVisNodeLegendItem } from '../legend/node-legend/node-legend';
import { PdEventData } from '../../../../core/event';
import { PdVisNodeStyleConfigure, PdVisNodeStyleConfigureControlSettings } from '../../../utils/style-configure/node-style-configure';
import { PdVisLinkStyleConfigure, PdVisLinkStyleConfigureControlSettings } from '../../../utils/style-configure/link-style-configure';
/**
 * 可视化配置插件配置
 */
export interface PdVisPluginVisConfigureSettings extends PdVisPluginSettings {
    /**
     * 边的长度
     */
    linkLength?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 边长度配置
         */
        lengthSettings?: PdVisSliderSettings;
    };
    /**
     * 边样式
     */
    linkStyle?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 控件状态
         */
        control?: PdVisLinkStyleConfigureControlSettings;
    };
    /**
     * 节点标签位置
     */
    nodeDisplay?: {
        /**
         * 是否启用
         */
        enable?: boolean;
    };
    /**
     * 节点距离
     */
    nodeSpacing?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 节点距离配置
         */
        nodeSpacingSettings?: PdVisSliderSettings;
    };
    /**
     * 节点样式
     */
    nodeStyle?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 控件状态
         */
        control?: PdVisNodeStyleConfigureControlSettings;
    };
    /**
     * 层距
     */
    rowSpacing?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 层距配置
         */
        rowSpacingSettings?: PdVisSliderSettings;
    };
}
/**
 * 可视化配置插件
 */
export declare class PdVisPluginVisConfigure extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginVisConfigureSettings;
    /**
     *  配置
     */
    settings: PdVisPluginVisConfigureSettings;
    /**
     * 显示所有边配置
     */
    protected allLinkShow: boolean;
    /**
     * 显示所有节点配置
     */
    protected allNodeShow: boolean;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 边距离设置器
     */
    protected lengthSlider: PdVisSlider;
    /**
     * 边可视化配置面板
     */
    protected linkPanel: PdVisLinkStyleConfigure;
    /**
     * 边配置选项
     */
    protected linkSettings: PdVisLinkLegendItem[];
    /**
     * 节点可视化配置面板
     */
    protected nodePanel: PdVisNodeStyleConfigure;
    /**
     * 节点配置选项
     */
    protected nodeSettings: PdVisNodeLegendItem[];
    /**
     * 节点距离设置器
     */
    protected nodeSpacingSlider: PdVisSlider;
    /**
     * 层距设置器
     */
    protected rowSpacingSlider: PdVisSlider;
    /**
     * 构造方法
     * @param {PdVisPluginVisConfigureSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginVisConfigureSettings);
    /**
     * 添加配置
     * @param {PdSelector} title - 头部
     * @param {PdSelector} content - 主体
     * @param {string} type - 类型标识
     */
    addConfig(title: PdSelector, content: PdSelector, type: string): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 更新配置
     * @param {string} type - 类型标识
     * @param {{title?: PdSelector, content?: PdSelector}} delta - 变化的信息
     */
    updateConfig(type: string, delta?: {
        title?: PdSelector;
        content?: PdSelector;
    }): void;
    /**
     * 添加边长度配置面板
     */
    protected addLinkLengthPanel(): void;
    /**
     * 添加节点显示配置面板
     */
    protected addNodeDisplayPanel(): void;
    /**
     * 添加节点距离配置面板
     */
    protected addNodeSpacingPanel(): void;
    /**
     * 添加层距配置面板
     */
    protected addRowSpacingPanel(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成拍摄快照时的环境
     */
    protected buildSnapshotEnv(data: PdEventData): {
        [key: string]: any;
    };
    /**
     * 生成配置面板
     */
    protected createConfigPanel(): void;
    /**
     * 获取容器主体
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisPluginVisConfigureSettings} settings - 用户定义配置
     * @return {PdVisPluginVisConfigureSettings} 配置
     */
    protected initSettings(settings: PdVisPluginVisConfigureSettings): PdVisPluginVisConfigureSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 判断配置是否开启
     * @param key 需要判断的配置项
     */
    protected isEnable(key: string): boolean;
    /**
     * 边配置更新
     */
    protected linkSettingsChange(): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 节点配置更新
     */
    protected nodeSettingsChange(): void;
    /**
     * 还原拍摄快照时的环境
     */
    protected restoreSnapshotEnv(env: {
        [key: string]: any;
    }, data: PdEventData): void;
    /**
     * 更新边配置面板
     */
    protected updateLinkConfigPanel(): void;
    /**
     * 更新关系配置
     */
    protected updateLinkSetting(): void;
    /**
     * 更新节点配置面板
     */
    protected updateNodeConfigPanel(): void;
    /**
     * 更新节点配置
     */
    protected updateNodeSetting(): void;
}
