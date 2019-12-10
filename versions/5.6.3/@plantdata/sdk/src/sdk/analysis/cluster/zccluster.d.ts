import { PdSDKCluster, PdSDKClusterSettings } from './cluster';
import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc';
/**
 * SDK 网络关系图配置
 */
export interface PdSDKZcClusterSettings extends PdSDKClusterSettings<PdVisZcNetChartSettings> {
}
/**
 * SDK 网络关系图
 */
export declare class PdSDKZcCluster extends PdSDKCluster<PdVisZcNetChart, PdVisZcNetChartSettings> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKZcClusterSettings;
    /**
     *  网络关系图实例
     */
    chart: PdVisZcNetChart;
    /**
     *  配置
     */
    settings: PdSDKZcClusterSettings;
    /**
     * 构造方法
     * @param {PdSDKZcClusterSettings} settings - 网络关系图配置
     */
    constructor(settings: PdSDKZcClusterSettings);
    /**
     * 初始化图配置
     * @return {V} 图配置
     */
    protected initChart(): void;
    /**
     * 加载schema初始化
     */
    protected initChartSettings(): void;
    /**
     * 初始化配置
     * @param {PdSDKZcClusterSettings} settings - 用户配置
     * @return {PdSDKZcClusterSettings} 配置
     */
    protected initSettings(settings: PdSDKZcClusterSettings): PdSDKZcClusterSettings;
}
