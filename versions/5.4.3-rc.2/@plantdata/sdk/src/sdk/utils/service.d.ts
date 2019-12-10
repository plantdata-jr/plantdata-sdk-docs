/// <reference types="jquery" />
import { PdUIAjaxSettings } from '../../ui/components/ajax/ajax';
import SuccessTextStatus = JQuery.Ajax.SuccessTextStatus;
/**
 * SDK异步请求成功时返回的数据类型
 */
export declare type PdSDKServiceSuccessVO<T> = Promise<{
    data: T;
    settings: PdSDKAjaxSettings;
}>;
/**
 * SDK数据异步请求配置
 */
export interface PdSDKAjaxSettings extends PdUIAjaxSettings {
    /**
     *  SDK服务的base路径
     */
    baseUrl?: string;
    /**
     * 执行请求前的回调事件
     * @param ajaxSettings 请求配置
     */
    beforeLoad?: (ajaxSettings?: PdSDKAjaxSettings) => void | false | PdSDKAjaxSettings;
    /**
     *  formData数据
     */
    formData?: {
        [key: string]: any;
    };
    /**
     *  query数据
     */
    queryData?: {
        [key: string]: any;
    };
    /**
     *  接口路径后缀
     */
    urlPostfix?: string;
}
/**
 * SDK服务的基本配置
 */
export interface PdSDKBaseSettings {
    /**
     *  异步加载设置
     */
    ajaxSettings?: PdSDKAjaxSettings;
}
/**
 * SDK图服务的基本配置
 */
export interface PdSDKKGSettings extends PdSDKBaseSettings {
    /**
     *  图谱名称
     */
    kgName?: string;
}
/**
 * SDK 图数据CRUD服务
 */
export interface PdSDKCRUDSettings extends PdSDKKGSettings {
    /**
     * 新增接口配置
     */
    addSettings?: PdSDKKGSettings;
    /**
     * 删除接口配置
     */
    deleteSettings?: PdSDKKGSettings;
    /**
     * 编辑接口配置
     */
    editSettings?: PdSDKKGSettings;
    /**
     * 请求列表接口配置
     */
    listSettings?: PdSDKKGSettings;
}
/**
 * SDK统一异步请求工具
 */
export declare class PdSDKService {
    /**
     * 解析ajax请求失败的错误原因
     * @param responseJSON - JSON格式返回数据
     */
    static parseErrorInfo(responseJSON: any): string;
    /**
     * 获取统计配置
     * @param silence 是否静默请求，即发生错误时不提示用户
     * @param kgSettings 请求配置
     */
    static request<T>(silence?: boolean, ...kgSettings: PdSDKKGSettings[]): PdSDKServiceSuccessVO<T>;
    /**
     * 通用异步请求结果处理
     * @param data - 请求结果数据
     * @param {SuccessTextStatus} textStatus - 返回状态描述
     * @param {JQueryXHR}jqXHR  - JQuery异步请求实例
     * @param {boolean} silence - 静默处理
     * @return {Promise<T>} - 结果处理的Promise
     */
    static resultCheck<T>(data: any, textStatus: SuccessTextStatus, jqXHR: JQueryXHR, silence?: boolean): Promise<T>;
}
