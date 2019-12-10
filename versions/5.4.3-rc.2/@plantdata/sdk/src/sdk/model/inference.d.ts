import { PdSDKBeanVO } from '../utils/model';
/**
 * 推理规则
 */
export interface PdSDKInferenceVO extends PdSDKBeanVO {
    /**
     * 图谱名称
     */
    kgName?: string;
    /**
     * 规则配置
     */
    ruleConfig?: string;
    /**
     * 规则ID
     */
    ruleId?: number;
    /**
     * 规则名称
     */
    ruleName?: string;
    /**
     * 规则表单配置
     */
    ruleSettings?: string;
}
/**
 * 推理规则配置结果
 */
export declare type PdSDKInferenceConfigVO = any;
