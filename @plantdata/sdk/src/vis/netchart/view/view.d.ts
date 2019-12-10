/// <reference types="jquery" />
import { PdView, PdViewSettings } from '../../../container/view';
import { PdVisNetChart, PdVisNetChartData } from '../netchart';
import { PdSelector } from '../../../common/common';
/**
 * 可视化视图组件配置
 */
export interface PdVisViewSettings extends PdViewSettings {
    /**
     *  组件关联的容器
     */
    container?: PdVisNetChart;
}
/**
 * 可视化视图组件
 */
export declare abstract class PdVisView extends PdView {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisViewSettings;
    /**
     *  配置
     */
    settings: PdVisViewSettings;
    /**
     *  遮罩的JQuery对象
     */
    protected $mask: JQuery;
    /**
     *  组件关联的容器
     */
    protected container: PdVisNetChart;
    /**
     * 上一次的数据
     */
    protected data: PdVisNetChartData;
    /**
     * 构造方法
     * @param {PdVisViewSettings} settings - 用户配置
     */
    protected constructor(settings?: PdVisViewSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成无数据提示
     * @return {string} 无数据提示字符串
     */
    protected createNoData(): string;
    /**
     * 数据变化
     */
    protected dataChange(): void;
    /**
     * 进入视图
     */
    protected enter(): void;
    /**
     * 初始化视图结构并返回
     * @param body 视图内容的JQuery对象
     * @param title 视图的标题
     * @param icon 视图的图标
     */
    protected initViewTemplate(body: PdSelector, title: string, icon: string): JQuery;
    /**
     * 离开视图
     */
    protected leave(): void;
    /**
     * 设置数据加载状态
     * @param {boolean} inLoading - 是否正在加载
     */
    protected updateLoading(inLoading: boolean): void;
}
