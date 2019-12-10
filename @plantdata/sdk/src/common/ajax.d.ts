/// <reference types="jquery" />
import SuccessTextStatus = JQuery.Ajax.SuccessTextStatus;
import TypeOrArray = JQuery.TypeOrArray;
import SuccessCallback = JQuery.Ajax.SuccessCallback;
import ErrorCallback = JQuery.Ajax.ErrorCallback;
import CompleteCallback = JQuery.Ajax.CompleteCallback;
/**
 * 异步请求Promise Resolve类型
 */
export declare type PdAjaxPromiseResolve = (value?: {
    data: any;
    textStatus: SuccessTextStatus;
    jqXHR: JQueryXHR;
}) => void;
/**
 * 异步请求Promise Reject类型
 */
export declare type PdAjaxPromiseReject = (reason?: any) => void;
/**
 * 异步请求
 */
export declare class PdAjax {
    /**
     * 发送ajax请求前调用的方法，同JQuery Ajax的beforeSend
     * @param {JQueryXHR} jqXHR - JQuery异步请求实例
     * @param {JQueryAjaxSettings} settings - 请求配置项
     * @return {false | void} 返回false将阻止本次请求否则不阻止
     */
    static beforeSend: (jqXHR: JQueryXHR, settings: JQueryAjaxSettings) => false | void;
    /**
     * ajax请求完成后调用的方法，同JQuery Ajax的complete
     */
    static complete: TypeOrArray<CompleteCallback<any>>;
    /**
     * ajax请求成功后，进入success前调用的方法，同JQuery Ajax的dataFilter
     * @param {string} data - 请求到的数据
     * @param {string} type - 数据类型
     * @return {string} 处理后的数据
     */
    static dataFilter: (data: string, type: string) => string;
    /**
     *  默认配置
     */
    static defaultSettings: JQueryAjaxSettings;
    /**
     * ajax请求失败时调用的方法，同JQuery Ajax的error
     */
    static error: TypeOrArray<ErrorCallback<any>>;
    /**
     * 请求拦截器
     * @param {JQueryAjaxSettings} settings - 请求配置项
     * @param {JQueryXHR} jqXHR - JQuery异步请求实例
     * @return {false | void} 返回false将阻止本次请求否则不阻止
     */
    static requestInterceptors: Array<(settings: JQueryAjaxSettings, jqXHR: JQueryXHR) => false | void>;
    /**
     * 返回拦截器
     */
    static responseInterceptors: Array<{
        resolve?: PdAjaxPromiseResolve;
        reject?: PdAjaxPromiseReject;
    }>;
    /**
     * ajax请求成功时调用的方法，同JQuery Ajax的success，
     * 不建议设置，虽然异步请求使用的是JQuery, 但所有处理成功结果都是Promise Resolve处理的
     * @deprecated
     */
    static success: TypeOrArray<SuccessCallback<any>>;
    /**
     * 发送ajax请求
     * @param  {JQueryAjaxSettings} settings - ajax请求的配置项
     * @return ajax请求的Promise
     */
    static loader<T>(settings: JQueryAjaxSettings): Promise<any>;
    /**
     * 执行ajax请求
     * @param  {JQueryAjaxSettings} settings - ajax请求的配置项
     * @return ajax请求的Promise
     */
    protected static ajax(settings: JQueryAjaxSettings): Promise<any>;
    /**
     * 生成请求参数配置
     * @param  {JQueryAjaxSettings} settings - ajax请求的配置项
     */
    protected static createSettings(settings: JQueryAjaxSettings): JQueryAjaxSettings;
}
