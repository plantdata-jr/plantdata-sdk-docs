/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../../../../core/component';
export { PdUIDropdown } from '../../../../../../ui/components/dropdown/dropdown';
/**
 * 图统计操作控件配置
 */
export interface PdSDKPluginStatsToolControlSettings {
    /**
     *  控件点击事件
     */
    click?: (e: JQuery.ClickEvent) => void;
    /**
     *  控件class
     */
    cls?: string;
    /**
     *  控件图标
     */
    icon?: string;
    /**
     *  控件唯一标识
     */
    id: string;
    /**
     *  控件名称
     */
    title: string;
}
/**
 * SDK 图统计配置
 */
export interface PdSDKPluginStatsToolSettings extends PdComponentSettings {
    /**
     * 删除前的回调事件
     */
    beforeDelete?: (settings: PdSDKPluginStatsToolSettings, ins: PdSDKPluginStatsTool) => Promise<any>;
    /**
     *  是否允许删除
     */
    deletable?: boolean;
    /**
     *  统计的ID
     */
    id?: number;
    /**
     * 删除时的回调事件
     */
    onDelete?: (settings: PdSDKPluginStatsToolSettings, ins: PdSDKPluginStatsTool) => void;
    /**
     *  统计的类型
     */
    type?: string;
}
/**
 * SDK 图统计
 */
export declare abstract class PdSDKPluginStatsTool extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsToolSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsToolSettings;
    /**
     * 图表的容器
     */
    protected $chart: JQuery;
    /**
     * 更多操作的容器
     */
    protected $moreGroup: JQuery;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsToolSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKPluginStatsToolSettings);
    /**
     * 添加控件
     * @param {PdSDKPluginStatsToolControlSettings} settings 控件配置
     */
    addControl(settings: PdSDKPluginStatsToolControlSettings): void;
    /**
     * 创建控件
     * @param {PdSDKPluginStatsToolControlSettings} settings 控件配置
     */
    createControl(settings: PdSDKPluginStatsToolControlSettings): JQuery;
    /**
     * 删除实例
     */
    delete(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取控件JQuery实例
     * @param {string} id 控件唯一标识
     */
    getControl(id: string): JQuery;
    /**
     * 获取当前统计配置项
     */
    getStatsSettings(): PdSDKPluginStatsToolSettings;
    /**
     * 获取当前统计标题
     */
    getTitle(): string;
    /**
     * 统计
     * @return {Promise} 获取规则的异步请求实例
     */
    abstract rendererData(force: boolean): Promise<any>;
    /**
     * 设置当前统计配置项
     * @param {PdSDKPluginStatsToolSettings} settings - 统计配置
     */
    setStatsSettings(settings: PdSDKPluginStatsToolSettings): void;
    /**
     * 更新实例
     * @param {PdSDKPluginStatsToolSettings} settings - 统计配置
     */
    update(settings: PdSDKPluginStatsToolSettings): Promise<any>;
    /**
     * 更新控件
     * @param {string} id 控件唯一标识
     * @param {PdSDKPluginStatsToolControlSettings} settings 控件配置
     */
    updateControl(id: string, settings: PdSDKPluginStatsToolControlSettings): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsToolSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsToolSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsToolSettings): PdSDKPluginStatsToolSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
