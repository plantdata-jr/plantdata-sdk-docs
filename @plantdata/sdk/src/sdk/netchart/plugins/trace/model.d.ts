import { PdSDKBeanVO } from '../../../utils/model';
/**
 * ?
 */
export interface PdSDKTraceRuleNextNodeVO {
    /**
     * 属性ID
     */
    attrId?: number;
    /**
     * 概念ID
     */
    conceptIds?: number[];
    /**
     * ?
     */
    nextNode: this[];
}
/**
 * 轨迹规则模型
 */
export interface PdSDKTraceRuleVO extends PdSDKBeanVO {
    /**
     * 图谱名称
     */
    kgName?: string;
    /**
     * Id
     */
    ruleId?: number;
    /**
     * 规则语句
     */
    ruleKgql?: string;
    /**
     * 规则名称
     */
    ruleName?: string;
    /**
     * 规则配置
     */
    ruleSettings?: {
        /**
         * 定义域
         */
        domain?: number;
        /**
         * ?
         */
        name?: any;
        /**
         * ?
         */
        nextNode?: PdSDKTraceRuleNextNodeVO[];
    };
    /**
     * 规则类型
     */
    ruleType?: number;
}
