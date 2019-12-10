/// <reference types="jquery" />
import { PdVisNodeId } from '../../vis/netchart/netchart';
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdSelector } from '../../common/common';
import { PdSDKNetChartDataNode } from '../netchart/model';
import { PdSDKKGSettings } from '../utils/service';
import { PdSDKInfoboxDataLinkVO, PdSDKInfoboxDataSetLinkVO, PdSDKInfoboxEntityEntityLinkVO, PdSDKInfoboxEntityExtraVO, PdSDKInfoboxEntityVO, PdSDKInfoboxObjectAttributesVO, PdSDKInfoboxVO } from '../model/infobox';
import { PdKGSchemaTypes } from '../model/schema';
/**
 * SDK 知识卡片服务请求参数
 */
export declare class PdSDKInfoboxServiceLoaderParams {
    /**
     * 查询指定的属性，格式为json数组，默认为查询全部
     */
    allowAtts?: boolean;
    /**
     * 属性唯一标识key列表，当allowAtts为空时生效,数据将被转换为allowAtts参数
     */
    allowAttsKey?: boolean;
    /**
     * 概念或实体id
     */
    id?: PdVisNodeId;
    /**
     * 是否读取对象属性
     */
    isRelationAtts?: boolean;
    /**
     * 概念或实体名称
     */
    name?: string;
}
/**
 * Infobox配置
 */
export interface PdSDKInfoboxSettings extends PdComponentSettings, PdSDKKGSettings {
    /**
     * 属性是否显示或隐藏
     * @param attr - 属性名称
     * @param data - Infobox数据
     */
    attrVisible?: (attr: string, data: PdSDKInfoboxVO) => boolean;
    /**
     *  infobox的容器
     */
    container?: PdSelector;
    /**
     *  是否显示空对象属性
     */
    emptyAttrVisible?: boolean;
    /**
     * 图片地址重置
     * @param {string} url - 原图片地址
     * @param {PdSDKNetChartDataNode} nodeData - 节点数据
     * @return {string} 更新后的图片地址
     */
    imgBuilder?: (url: string, nodeData?: PdSDKNetChartDataNode) => string;
    /**
     *  是否允许生成超链接
     */
    linkEnable?: boolean;
    /**
     * 加载Infobox数据的方法
     * @param {PdSDKInfobox} self - 知识卡片实例
     * @param params - 请求参数
     * @return {Promise} 加载Infobox数据的Promise
     */
    loader?: (self: PdSDKInfobox, params: PdSDKInfoboxServiceLoaderParams) => Promise<PdSDKInfoboxVO>;
    /**
     *  自动收起长文本，当文本超过设置的长度时自动出现查看全部，默认80个字符
     */
    maxLen?: number;
    /**
     * 点击infobox里的相关资源时执行的方法
     * @param dataset - 点击的相关资源的数据集数据
     * @param dataLink - 点击的相关资源的数据
     * @param {PdSDKInfobox} self - 知识卡片实例
     */
    onDataLinkClick?: (dataset: PdSDKInfoboxDataSetLinkVO, dataLink: PdSDKInfoboxDataLinkVO, self: PdSDKInfobox) => void;
    /**
     * 点击infobox里的关联实体时执行的方法
     * @param data - 点击的关联实体的数据
     * @param {PdSDKInfobox} self - 知识卡片实例
     */
    onEntityLinkClick?: (data: PdSDKInfoboxEntityEntityLinkVO, self: PdSDKInfobox) => void;
    /**
     * 点击infobox里的其他实体时执行的方法
     * @param {PdVisNodeId} id - 点击的实体ID
     * @param {PdSDKInfobox} self - 知识卡片实例
     */
    onLinkClick?: (id: PdVisNodeId, self: PdSDKInfobox) => void;
    /**
     * 知识卡片加载失败的回调
     * @param params 请求数据
     * @param {PdSDKInfobox} self 知识卡片实例
     */
    onLoadFailed?: (params: PdSDKInfoboxServiceLoaderParams, self: PdSDKInfobox) => void;
    /**
     *  实体Schema
     */
    types?: PdKGSchemaTypes[];
}
/**
 * SDK Infobox
 */
export declare class PdSDKInfobox extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKInfoboxSettings;
    /**
     * load方法的参数
     */
    loadParams: {
        query: PdSDKInfoboxServiceLoaderParams;
        callback?: (data: PdSDKInfoboxVO) => void;
    };
    /**
     *  配置
     */
    settings: PdSDKInfoboxSettings;
    /**
     *  加载成功后的回调
     */
    protected callback: (data: PdSDKInfoboxVO) => void;
    /**
     * 构造方法
     * @param {PdSDKInfoboxSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKInfoboxSettings);
    /**
     * 生成infobox内容
     * @param data - 知识卡片的数据
     * */
    buildInfobox(data: PdSDKInfoboxVO): void;
    /**
     * 销毁实例
     */
    clear(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 加载数据
     * @param query - 读取infobox的实例
     * @param callback - 可选，加载数据成功后执行的方法
     */
    load(query: PdSDKInfoboxServiceLoaderParams, callback?: (data: PdSDKInfoboxVO) => void): Promise<void | PdSDKInfoboxVO>;
    /**
     * 重新加载
     */
    reload(): void;
    /**
     * 显示无数据
     */
    showNoData(): void;
    /**
     * 绑定事件
     * */
    protected bindEvent(): void;
    /**
     * 生成属性的HTML字符串
     * @param data - 知识卡片的数据
     */
    protected buildAttributes(data: PdSDKInfoboxVO): string;
    /**
     * 生成关联数据集的HTML字符串
     * @param data - 知识卡片的数据
     */
    protected buildDataLinks(data: PdSDKInfoboxVO): string;
    /**
     * 生成实例的HTML字符串
     * @param entity - 实例数据
     * @param {boolean} buildLink - 是否生成链接
     */
    protected buildEntity(entity: PdSDKInfoboxEntityVO, buildLink: boolean): string;
    /**
     * 生成关联实体的HTML字符串
     * @param data - 知识卡片的数据
     */
    protected buildEntityLinks(data: PdSDKInfoboxVO): string;
    /**
     * 生成对象属性显示内容的HTML字符串
     * @param atts - 对象属性列表
     * @param data - 知识卡片的数据
     */
    protected buildObjectAttributes(atts: PdSDKInfoboxObjectAttributesVO[], data: PdSDKInfoboxVO): string;
    /**
     * 生成标签的HTML字符串
     * @param data - 知识卡片的数据
     */
    protected buildTags(data: PdSDKInfoboxVO): string;
    /**
     * 生成单条数值属性信息
     * @param extra - 属性数据
     */
    protected buildValueAttribute(extra: PdSDKInfoboxEntityExtraVO): string;
    /**
     * 生成数值属性信息
     * @param data - 知识卡片的数据
     */
    protected buildValueAttributes(data: PdSDKInfoboxVO): string;
    /**
     * 初始化配置
     * @param {PdSDKInfoboxSettings} settings - 用户定义配置
     * @return {PdSDKInfoboxSettings} 配置
     */
    protected initSettings(settings: PdSDKInfoboxSettings): PdSDKInfoboxSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 加载数据
     * @param query - 请求参数
     * @param callback - 可选，加载数据成功后执行的方法
     */
    protected loader(query: PdSDKInfoboxServiceLoaderParams, callback?: (data: PdSDKInfoboxVO) => void): Promise<PdSDKInfoboxVO>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 点击infobox里的其他实体时执行的方法
     * @param {PdVisNodeId} id 实例ID
     */
    protected onLinkClick(id: PdVisNodeId): void;
    /**
     * 取消绑定事件
     * */
    protected unbindEvent(): void;
}
