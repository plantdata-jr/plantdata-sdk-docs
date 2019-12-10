import { PdVisEcNetChart, PdVisEcNetChartSettings } from '../../../vis/netchart/impls/ec';
import { PdSDKCluster, PdSDKClusterSettings } from './cluster';
/**
 * SDK 网络关系图配置
 */
export interface PdSDKEcClusterSettings extends PdSDKClusterSettings<PdVisEcNetChartSettings> {
}
/**
 * SDK 网络关系图
 */
export declare class PdSDKEcCluster extends PdSDKCluster<PdVisEcNetChart, PdVisEcNetChartSettings> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEcClusterSettings;
    /**
     *  网络关系图实例
     */
    chart: PdVisEcNetChart;
    /**
     *  配置
     */
    settings: PdSDKEcClusterSettings;
    /**
     * 构造方法
     * @param {PdSDKEcClusterSettings} settings - 网络关系图配置
     */
    constructor(settings: PdSDKEcClusterSettings);
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
     * @param {PdSDKEcClusterSettings} settings - 用户配置
     * @return {PdSDKEcClusterSettings} 配置
     */
    protected initSettings(settings: PdSDKEcClusterSettings): PdSDKEcClusterSettings;
}
