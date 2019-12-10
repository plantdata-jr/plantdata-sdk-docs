import { PdVisNetChartData, PdVisNetChartDataGisInfo, PdVisNetChartDataLink, PdVisNetChartDataNode, PdVisNodeId } from '../../vis/netchart/netchart';
/**
 * 节点标签数据
 */
export interface PdSDKNetChartDataNodeTag {
    /**
     * 标签创建时间
     */
    creationTime?: string;
    /**
     * 标签等级
     */
    grade?: number;
    /**
     * 标签标识
     */
    id?: string;
    /**
     * 标签名称
     */
    name?: string;
    /**
     * 标签来源
     */
    source?: string;
}
/**
 * GIS数据
 */
export interface PdSDKNetChartDataGisInfo extends PdVisNetChartDataGisInfo {
    /**
     * 地址信息是否打开
     */
    isOpenGis?: boolean;
}
/**
 * SDK 实体节点基本数据
 */
export interface PdSDKNetChartDataNodeSimple {
    /**
     *  节点ID
     */
    id?: PdVisNodeId;
    /**
     *  唯一标识
     */
    meaningTag?: string;
    /**
     *  节点名称
     */
    name?: string;
}
/**
 * SDK 实体节点数据
 */
export interface PdSDKNetChartDataNode extends PdVisNetChartDataNode {
    /**
     *  节点概念ID
     */
    conceptId?: PdVisNodeId;
    /**
     *  节点概念名称
     */
    conceptName?: string;
    /**
     * 地理信息
     */
    gis?: PdSDKNetChartDataGisInfo;
    /**
     *  唯一标识
     */
    meaningTag?: string;
    /**
     * 标签
     */
    tags?: PdSDKNetChartDataNodeTag[];
    /**
     * 类别
     */
    type?: number;
    /**
     * 类型名称
     */
    typeName?: string;
}
/**
 * SDK 关系数据
 */
export interface PdSDKNetChartDataLink extends PdVisNetChartDataLink {
    /**
     *  创建时间
     */
    creationTime?: string;
    /**
     * 来源信息
     */
    origin?: {
        /**
         * 来源名称
         */
        name?: string;
        /**
         * 来源依据
         */
        reason?: string;
    };
}
/**
 * SDK 网络关系图数据
 */
export interface PdSDKNetChartData extends PdVisNetChartData {
    /**
     *  关系数据
     */
    links: PdSDKNetChartDataLink[];
    /**
     *  实体数据
     */
    nodes: PdSDKNetChartDataNode[];
}
/**
 * SDK 网络关系图初始化配置
 */
export interface PdSDKInitDataVO {
    [key: string]: any;
}
