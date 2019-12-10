import { PdSDKNetChartDataNode } from '../netchart/model';
/**
 * SDK工具包
 */
export declare class PdSDKUtils {
    /**
     * 更新图片地址
     * @param {string} img - 图片地址
     * @param {PdSDKNetChartDataNode} nodeData - 节点数据
     * @return {string} - 更新后的图片地址
     */
    static imgBuilder(img: string, nodeData?: PdSDKNetChartDataNode): string;
    /**
     * 替换正则特殊符号
     * @param {string} str - 正则字符串
     * @return {string} - 替换后的正则字符串
     */
    static str2reg(str: string): string;
}
