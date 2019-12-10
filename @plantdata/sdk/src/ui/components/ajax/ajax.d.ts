/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdAjax } from '../../../common/ajax';
/**
 * 异步请求配置
 */
export interface PdUIAjaxSettings extends JQueryAjaxSettings {
    /**
     *  异步请求关联的对象
     */
    el?: PdSelector;
}
/**
 * 异步请求
 */
export declare class PdUIAjax extends PdAjax {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIAjaxSettings;
    /**
     *  异步请求加载动画的class
     */
    protected static clsLoadingName: string;
    /**
     * 发送异步请求
     * @param  {PdUIAjaxSettings} settings - 异步请求的配置项
     * @return 异步请求的Promise
     */
    static loader<T>(settings: PdUIAjaxSettings): Promise<any>;
    /**
     * 生成请求参数
     * @param  {JQueryAjaxSettings} settings - 异步请求的配置项
     */
    protected static createSettings(settings: PdUIAjaxSettings): PdUIAjaxSettings;
    /**
     * 生成Loading动画的HTML字符串
     * @param  {JQuery} $item - 生成动画的容器
     */
    protected static gentLoadingItem($item: JQuery): string;
    /**
     * 切换loading显示状态
     * @param  {HTMLElement | string} el - 生成动画的容器
     * @param  {boolean} show - 是否显示
     */
    static toggleLoadingStatus(el: PdSelector, show: boolean): void;
}
