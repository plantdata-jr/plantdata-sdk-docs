/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartSnapshot } from '../../netchart';
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisDialog, PdVisDialogSettings } from '../../../utils/modal/dialog/dialog';
import { PdVisEditItemSettings } from '../../../utils/edit-item/edit-item';
/**
 *  快照插件配置
 */
export interface PdVisPluginSnapshotSettings extends PdVisPluginSettings {
}
/**
 * 快照插件
 */
export declare class PdVisPluginSnapshot extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginSnapshotSettings;
    /**
     * 编辑弹框实例
     */
    editDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdVisPluginSnapshotSettings;
    /**
     * 可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdVisPluginSnapshotSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginSnapshotSettings);
    /**
     * 关闭列表展示
     */
    close(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 生成单条快照数据的字符串
     * @param {PdVisNetChartSnapshot} snapshot - 单条快照数据
     */
    protected drawItem(snapshot: PdVisNetChartSnapshot): string;
    /**
     * 渲染快照数据
     */
    protected drawItems(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginSnapshotSettings} settings - 用户定义配置
     * @return {PdVisPluginSnapshotSettings} 配置
     */
    protected initSettings(settings: PdVisPluginSnapshotSettings): PdVisPluginSnapshotSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 检验编辑配置项中必填的数据
     * @param settings 需要校验的编辑配置项
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
