import { PdSDKKGSettings } from '../utils/service';
import { PdSDKChartAnalysis, PdSDKChartAnalysisSettings } from './chart';
import { PdVisNetChart, PdVisNetChartSettings } from '../../vis/netchart/netchart';
/**
 * SDK 图分析配置
 */
export interface PdSDKNetChartAnalysisSettings<T extends PdVisNetChartSettings> extends PdSDKChartAnalysisSettings<T>, PdSDKKGSettings {
    /**
     *  加载配置
     */
    loaderSettings?: PdSDKKGSettings;
}
/**
 * SDK 图分析
 */
export declare abstract class PdSDKNetChartAnalysis<T extends PdVisNetChart, V extends PdVisNetChartSettings> extends PdSDKChartAnalysis<T, V> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKNetChartAnalysisSettings<PdVisNetChartSettings>;
    /**
     *  配置
     */
    settings: PdSDKNetChartAnalysisSettings<V>;
    /**
     * 构造方法
     * @param {PdSDKNetChartAnalysisSettings<V>} settings - 图配置
     */
    protected constructor(settings: PdSDKNetChartAnalysisSettings<V>);
    /**
     * 初始化配置
     * @param {PdSDKNetChartAnalysisSettings<V>} settings - 用户配置
     * @return {PdSDKNetChartAnalysisSettings<V>} 配置
     */
    protected initSettings(settings: PdSDKNetChartAnalysisSettings<V>): PdSDKNetChartAnalysisSettings<V>;
}
