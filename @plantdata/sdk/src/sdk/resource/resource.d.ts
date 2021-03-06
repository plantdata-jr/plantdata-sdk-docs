import { PdSDKTable, PdSDKTableSettings } from '../table/table';
import { PdSDKResultVO } from '../utils/model';
import { PdSDKBaseSettings } from '../utils/service';
import { PdMap } from '../../common/common';
/**
 * SDK资源数据行
 */
export declare type PdSDKResourceRow = PdMap<any>;
/**
 * 资源配置
 */
export interface PdSDKResourceSettings extends PdSDKBaseSettings, PdSDKTableSettings {
    /**
     *  数据库
     */
    dataName?: string;
    /**
     * 资源加载之后执行的方法
     * @param data - 数据
     * @param {PdSDKResource} ins - SDK资源实例
     */
    onLoaded?: (data: PdSDKResultVO<PdSDKResourceRow>, ins: PdSDKResource) => void;
}
/**
 * SDK 资源
 */
export declare class PdSDKResource extends PdSDKTable {
    /**
     *  配置
     */
    settings: PdSDKResourceSettings;
    /**
     * 构造方法
     * @param {PdSDKResourceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKResourceSettings);
    /**
     * 重新加载数据
     */
    reload(): Promise<PdSDKResultVO<PdSDKResourceRow>>;
    /**
     * 更新数据
     * @param data - ajax返回数据
     * @param {number} pageNo - 当前页码
     * @param {number} pageSize - 每页数量
     */
    updateData(data: PdSDKResultVO<PdSDKResourceRow>, pageNo: number, pageSize: number): void;
    /**
     * 获取查询条件
     */
    protected getQuery(): any;
    /**
     * 初始化配置
     * @param {PdSDKResourceSettings} settings - 用户定义配置
     * @return {PdSDKResourceSettings} 配置
     */
    protected initSettings(settings: PdSDKResourceSettings): PdSDKResourceSettings;
    /**
     * 数据加载方法
     * @param {number} pageNo - 页码
     */
    protected loader(pageNo: number): Promise<PdSDKResultVO<PdSDKResourceRow>>;
}
