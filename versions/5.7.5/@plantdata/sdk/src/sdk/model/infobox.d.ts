import { PdSDKNetChartDataNode, PdSDKNetChartDataNodeTag } from '../netchart/model';
import { PdVisNodeId } from '../../vis/netchart';
/**
 * 知识卡片中实体关联数据的数据对象
 */
export interface PdSDKInfoboxDataLinkVO {
    /**
     * 数据的ID
     */
    dataId?: string;
    /**
     * 数据标题
     */
    dataTitle?: string;
    /**
     * 评分
     */
    score?: number;
    /**
     * 来源
     */
    source?: number;
}
/**
 * 知识卡片中实体关联数据集的数据对象
 */
export interface PdSDKInfoboxDataSetLinkVO {
    /**
     * 关联数据集的ID
     */
    dataSetId?: number;
    /**
     * 关联数据集的名称
     */
    dataSetTitle?: string;
    /**
     * 关联的数据列表
     */
    links?: PdSDKInfoboxDataLinkVO[];
    /**
     * 数据集的链接 ？ TODO
     */
    url?: string;
}
/**
 * 知识卡片中实体关联实体的数据对象
 */
export interface PdSDKInfoboxEntityEntityLinkVO {
    /**
     * 实体的ID
     */
    entityId?: number;
    /**
     * 实体的名称
     */
    entityName?: string;
    /**
     * 所属图谱的kgName
     */
    kgName?: string;
    /**
     * 所属图谱的名称
     */
    kgTitle?: string;
}
/**
 * 知识卡片中实体额外信息（数值属性）的数据对象
 */
export interface PdSDKInfoboxEntityExtraVO {
    /**
     * 属性定义的ID
     */
    attDefid?: number;
    /**
     * 属性的定义域
     */
    domain?: PdVisNodeId;
    /**
     * 属性名称
     */
    k?: string;
    /**
     * 属性类型
     */
    type?: number;
    /**
     * 属性值
     */
    v?: any;
}
/**
 * 知识卡片中实体额外数据的数据对象
 */
export interface PdSDKInfoboxEntityAdditionalInfoVO {
    /**
     * 颜色
     */
    color?: string;
    /**
     * 地址信息是否打开
     */
    isOpenGis?: boolean;
}
/**
 * 知识卡片中实体的数据对象
 */
export interface PdSDKInfoboxEntityVO extends PdSDKNetChartDataNode {
    /**
     * 额外信息
     */
    additionalInfo?: PdSDKInfoboxEntityAdditionalInfoVO;
    /**
     * ？ TODO
     */
    batch?: string;
    /**
     * 所属所有类型的ID列表
     */
    classIdList?: PdVisNodeId[];
    /**
     * 所属类型的名称
     */
    className?: string;
    /**
     * 所属所有概念的ID列表
     */
    conceptIdList?: PdVisNodeId[];
    /**
     * 创建时间？ TODO
     */
    creationTime?: string;
    /**
     * 关联数据的信息
     */
    dataLinks?: PdSDKInfoboxDataSetLinkVO[];
    /**
     * 关联实体的信息
     */
    entityLinks?: PdSDKInfoboxEntityEntityLinkVO[];
    /**
     * 额外信息，数值属性
     */
    extra?: PdSDKInfoboxEntityExtraVO[];
    /**
     * 是否问答结果
     */
    qa?: boolean;
    /**
     * 置信度
     */
    reliability?: number;
    /**
     * 打分
     */
    score?: number;
    /**
     * 来源
     */
    source?: string;
    /**
     * 标签列表
     */
    tags?: PdSDKNetChartDataNodeTag[];
}
/**
 * 知识卡片中对象属性的数据对象
 */
export interface PdSDKInfoboxObjectAttributesVO {
    /**
     * 属性定义的ID
     */
    attDefid?: number;
    /**
     * 属性名称
     */
    k?: string;
    /**
     * 对象属性值列表
     */
    v?: PdSDKNetChartDataNode[];
}
/**
 * 知识卡片数据对象
 */
export interface PdSDKInfoboxVO {
    /**
     * 正向属性信息
     */
    atts?: PdSDKInfoboxObjectAttributesVO[];
    /**
     * 父概念
     */
    pars?: PdSDKInfoboxEntityVO[];
    /**
     * 反向属性信息
     */
    reAtts?: PdSDKInfoboxObjectAttributesVO[];
    /**
     * 当前实体的信息
     */
    self?: PdSDKInfoboxEntityVO;
    /**
     * 子概念/实体
     */
    sons?: PdSDKInfoboxEntityVO[];
}
