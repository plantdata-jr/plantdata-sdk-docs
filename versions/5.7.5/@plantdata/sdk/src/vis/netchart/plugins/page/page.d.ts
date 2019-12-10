/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisChart } from '../../../chart';
import { PdEventData } from '../../../../core/event';
import { PdVisDialog } from '../../../utils/modal/dialog/dialog';
/**
 * 分页插件配置
 */
export interface PdVisPluginPageSettings extends PdVisPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisChart;
    /**
     * 是否有下一页
     * @param data - 当前数据
     */
    hasMore?: (data: any) => boolean;
    /**
     *  页码
     */
    pageNo?: number;
    /**
     *  每页数量
     */
    pageSize?: number;
}
/**
 * 分页插件
 */
export declare class PdVisPluginPage extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginPageSettings;
    /**
     *  当前页码
     */
    pageNo: number;
    /**
     *  每页数量
     */
    pageSize: number;
    /**
     *  配置
     */
    settings: PdVisPluginPageSettings;
    /**
     * 每页数量的JQuery对象
     */
    protected $pageSize: JQuery;
    /**
     *  可视化组件
     */
    protected container: PdVisChart;
    /**
     * 自定义每页数量弹框
     */
    protected customPageSizeDialog: PdVisDialog;
    /**
     *  是否点击事件
     */
    protected isPageEvent: boolean;
    /**
     * 构造方法
     * @param {PdVisPluginPageSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginPageSettings);
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
     * 生成拍摄快照时的环境
     */
    protected buildSnapshotEnv(data: PdEventData): {
        [key: string]: any;
    };
    /**
     * 创建自定义每页数量编辑的弹框
     */
    protected createCustomPageSizeDialog(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginPageSettings} settings - 用户定义配置
     * @return {PdVisPluginPageSettings} 配置
     */
    protected initSettings(settings: PdVisPluginPageSettings): PdVisPluginPageSettings;
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
     * 还原拍摄快照时的环境
     */
    protected restoreSnapshotEnv(env: {
        [key: string]: any;
    }, data: PdEventData): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新页码
     * @param pageNo 页码
     */
    protected updatePageNo(pageNo: number): void;
    /**
     * 更新每页数量
     * @param pageSize 每页数量
     */
    protected updatePageSize(pageSize: number): void;
    /**
     * 更新上下页按钮状态
     */
    protected updatePageStatus(): void;
}
