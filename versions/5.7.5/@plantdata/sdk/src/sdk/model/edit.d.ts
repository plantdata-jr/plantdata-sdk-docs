/**
 * 下拉提示返回结构
 */
export interface PdSDKEditorVO {
}
/**
 * 添加概念的返回结构
 */
export interface PdSDKAttributeListVO {
    /**
     * 是否有下一页
     */
    hasNext: 0 | 1;
    /**
     * 数量
     */
    rsCount: number;
    /**
     * 结果list
     */
    rsData: {
        /**
         * 所属概念名
         */
        conceptName: string;
        /**
         * 数据类型
         */
        dataType: number;
        /**
         * 方向
         */
        direction: number;
        /**
         * 定义域
         */
        domain: string;
        /**
         * id
         */
        id: number;
        /**
         * 关系是否唯一
         */
        isFunctional: 0 | 1;
        /**
         * 名称
         */
        name: string;
        /**
         * 属性类型，0数值，1对象
         */
        type: '0' | '1';
    }[];
}
