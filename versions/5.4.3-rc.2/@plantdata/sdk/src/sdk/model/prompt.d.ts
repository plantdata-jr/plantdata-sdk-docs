import { PdSDKNetChartDataNode } from '../netchart/model';
/**
 * 下拉提示返回结构
 */
export interface PdSDKPromptResultVO {
    /**
     * 类型Id
     */
    classId?: number | string;
    /**
     * 类型Id列表
     */
    classIdList?: number[];
    /**
     * 类型名称
     */
    className?: string;
    /**
     * Id
     */
    id?: number;
    /**
     * 唯一标识
     */
    meaningTag?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 是否是一个问题
     */
    qa?: boolean;
    /**
     * 类型
     */
    type?: 0 | 1;
}
/**
 * 问答答案的返回结构
 */
export interface PdSDKPromptAnswerVO {
    /**
     * objectarray或textarray类型的返回结果
     */
    array?: PdSDKNetChartDataNode[] | string[];
    /**
     * 结果数量
     */
    count?: number;
    /**
     * 命中数量
     */
    hit?: number;
    /**
     * text类型的返回记过
     */
    text?: string;
    /**
     * 返回结果的类型
     */
    type?: 'objectarray' | 'textarray' | 'text';
    /**
     * 问题关联的实体
     */
    word?: PdSDKNetChartDataNode[];
}
