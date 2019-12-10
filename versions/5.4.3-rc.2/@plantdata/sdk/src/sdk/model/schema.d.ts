import { PdVisNodeId } from '../../vis/netchart/netchart';
/**
 * 主体的额外信息
 */
export interface PdSDKSchemaTypeAdditionalInfo {
    /**
     * 类型颜色
     */
    color?: string;
    /**
     * 其他
     */
    extra?: {
        /**
         *节点形状
         */
        display: 'circle' | 'rectangle';
        /**
         * 图片模式
         */
        imageMode: 'crop' | 'fit';
        /**
         * 图片是否可见
         */
        imageVisible: boolean;
        /**
         *标签颜色
         */
        labelColor: string;
        /**
         *标签是否显示在节点内部 // 仅在node 的display为'circle'时有效
         */
        labelInner: boolean;
        /**
         *标签是否可见
         */
        labelVisible: boolean;
        /**
         *节点边框颜色
         */
        lineColor: string;
        /**
         *节点边框虚线
         */
        lineDash: number[];
        /**
         *节点边框宽度
         */
        lineWidth: number;
        /**
         *节点半径
         */
        radius: number;
    };
}
/**
 * 属性的额外信息
 */
export interface PdSDKSchemaAttributeAdditionalInfo {
    /**
     * 类型颜色
     */
    color?: string;
    /**
     * 其他
     */
    extra?: {
        /**
         * 是否显示箭头
         */
        arrowVisible: boolean;
        /**
         * 标签字体颜色
         */
        labelColor: string;
        /**
         * 是否显示标签
         */
        labelVisible: boolean;
        /**
         * 边的宽度
         */
        radius: number;
        /**
         * 边的虚线
         */
        lineDash: number[];
        /**
         * 边的长度
         */
        length: number;
    };
}
/**
 *  JSSDK中通用属性的数据对象
 */
export interface PdKGSchemaCommonAtts {
    /**
     * 数据类型
     */
    dataType?: number;
    /**
     * 定义域
     */
    domain?: string;
    /**
     * 值域
     */
    range?: string[];
    /**
     * 属性类型 0：数值属性， 1：对象属性
     */
    type?: 0 | 1;
}
/**
 *  JSSDK中边属性的数据对象
 */
export interface PdKGSchemaEdgeAtts extends PdKGSchemaCommonAtts {
    /**
     * 边属性名称
     */
    name: string;
    /**
     * 边属性ID
     */
    seqNo: number;
}
/**
 *  JSSDK中属性分组的数据对象
 */
export interface PdKGSchemaAttGroup {
    /**
     * 相关的属性id
     */
    attrDefIds: number[];
    /**
     * 分组id
     */
    id: number;
    /**
     * 分组名称
     */
    name: string;
}
/**
 *  JSSDK中属性的数据对象
 */
export interface PdKGSchemaAtts extends PdKGSchemaCommonAtts {
    /**
     * 额外信息
     */
    additionalInfo?: PdSDKSchemaAttributeAdditionalInfo;
    /**
     * 边属性
     */
    extraInfos?: PdKGSchemaEdgeAtts[];
    /**
     * 属性ID
     */
    k: number;
    /**
     * 属性名称
     */
    v: string;
}
/**
 *  JSSDK中主体的数据对象
 */
export interface PdKGSchemaTypes {
    /**
     * 额外信息
     */
    additionalInfo?: PdSDKSchemaTypeAdditionalInfo;
    /**
     * 属性列表
     */
    atts?: PdKGSchemaAtts[];
    /**
     * 图片
     */
    img?: string;
    /**
     * 概念ID
     */
    k: PdVisNodeId;
    /**
     * 父概念ID
     */
    parentId?: PdVisNodeId;
    /**
     * 概念名称
     */
    v: string;
}
/**
 * JSSDK中Schema的数据对象
 */
export interface PdKGSchema {
    /**
     *  属性分组
     */
    attGroup?: PdKGSchemaAttGroup[];
    /**
     *  属性Schema
     */
    atts?: PdKGSchemaAtts[];
    /**
     *  图名
     */
    kgTitle?: string;
    /**
     *  实体Schema
     */
    types?: PdKGSchemaTypes[];
}
/**
 *  接口返回的通用属性的数据对象
 */
export interface PdSDKSchemaCommonVO {
    /**
     * 数据类型
     */
    dataType?: number;
    /**
     * 数据单位
     */
    dataUnit?: string;
    /**
     * 定义域
     */
    domain?: number;
    /**
     * 属性类型 0：数值属性， 1：对象属性
     */
    type?: 0 | 1;
}
/**
 *  接口返回的边属性的数据对象
 */
export interface PdSDKSchemaEdgeAttributeVO extends PdSDKSchemaCommonVO {
    /**
     * ？
     */
    indexed: number;
    /**
     * 边属性名称
     */
    name: string;
    /**
     * 值域
     */
    objRange?: string | number[];
    /**
     * 边属性ID
     */
    seqNo: number;
}
/**
 *  接口返回的属性分组的数据对象
 */
export interface PdSDKSchemaAttributeGroupVO {
    /**
     * 相关的属性id
     */
    attrDefIds: number[];
    /**
     * 分组id
     */
    id: number;
    /**
     * 分组名称
     */
    name: string;
}
/**
 *  接口返回的属性的数据对象
 */
export interface PdSDKSchemaAttributeVO extends PdSDKSchemaCommonVO {
    /**
     * 额外信息
     */
    additionalInfo?: PdSDKSchemaAttributeAdditionalInfo;
    /**
     * 边属性
     */
    extraInfos?: PdSDKSchemaEdgeAttributeVO[];
    /**
     * 属性ID
     */
    k: number;
    /**
     * 值域
     */
    range?: number[];
    /**
     * 属性名称
     */
    v: string;
}
/**
 *  接口返回的主体的数据对象
 */
export interface PdSDKSchemaTypeVO {
    /**
     * 额外信息
     */
    additionalInfo?: PdSDKSchemaTypeAdditionalInfo;
    /**
     * 图片
     */
    img?: string;
    /**
     * 概念ID
     */
    k: number;
    /**
     * 父概念ID
     */
    parentId?: number;
    /**
     * 概念名称
     */
    v: string;
}
/**
 * 接口返回的Schema的数据对象
 */
export interface PdSDKSchemaVO {
    /**
     *  属性分组
     */
    attGroup?: PdSDKSchemaAttributeGroupVO[];
    /**
     *  属性Schema
     */
    atts?: PdSDKSchemaAttributeVO[];
    /**
     *  图名
     */
    kgTitle?: string;
    /**
     *  实体Schema
     */
    types?: PdSDKSchemaTypeVO[];
}
declare function transformSchema(data: PdSDKSchemaVO | PdKGSchema): PdKGSchema;
export { transformSchema };
