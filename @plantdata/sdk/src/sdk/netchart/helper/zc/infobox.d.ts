/// <reference types="jquery" />
import { PdSDKInfobox } from '../../../infobox/infobox';
import { PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSDKNetChartDataNode } from '../../model';
/**
 * SDK ZcNetChart网络关系图的Infobox插件助手
 */
export declare class PdSDKZcInfoboxHelper {
    /**
     *  infobox插件实例
     */
    protected infobox: PdSDKInfobox;
    /**
     *  infobox缓存
     */
    protected infoboxCacheMap: {
        [key: string]: {
            el: JQuery;
            data: any;
        };
    };
    /**
     *  当前加载节点的ID
     */
    protected infoboxLoadingId: PdVisNodeId;
    /**
     * 构造方法
     * @param {PdSDKInfobox} infobox - infobox插件实例
     */
    constructor(infobox: PdSDKInfobox);
    /**
     * 加载数据
     * @param {PdSDKNetChartDataNode} nodeData - 加载数据的节点
     * @return {Promise} - infobox加载的实例
     */
    load(nodeData: PdSDKNetChartDataNode): Promise<any>;
    /**
     * 显示infobox
     * @param nodeData - 节点数据
     * @param node - 节点
     * @param callback {(data: any) => void} - 获取infobox成功后的回调事件
     * @return {string | HTMLElement} infobox信息
     */
    showInfobox(nodeData: any, node: any, callback: (data: any) => void): string | HTMLElement;
}
