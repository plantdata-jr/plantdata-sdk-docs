/**
 * 默认Bean模型
 */
export interface PdSDKBeanVO {
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
}
/**
 * 默认返回结构模型
 */
export interface PdSDKResultVO<T> {
    /**
     * 总数
     */
    rsCount?: number;
    /**
     * 数据列表
     */
    rsData?: T[];
}
