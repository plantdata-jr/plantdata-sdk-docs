/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
import { PdUIModalSettings } from '../../../ui/components/modal/modal';
import { PdUIButtonSettings } from '../../../ui/components/button/button';
/**
 * 可视化模态框组件配置
 */
export interface PdVisModalSettings extends PdComponentSettings {
    /**
     * 主体内容
     */
    body?: ((settings: PdVisModalSettings) => PdSelector) | PdSelector;
    /**
     * 按钮设置
     */
    buttons?: {
        settings: PdUIButtonSettings;
        events?: {
            [key: string]: (event: JQuery.TriggeredEvent) => void;
        };
    }[];
    /**
     * 额外的class
     */
    cls?: string;
    /**
     * 父容器
     */
    parent?: PdSelector;
    /**
     * 标题文本
     */
    title?: ((settings: PdVisModalSettings) => PdSelector) | PdSelector;
}
/**
 * 可视化模态框组件
 */
export declare class PdVisModal extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisModalSettings;
    /**
     *  配置
     */
    settings: PdVisModalSettings;
    /**
     * 主体内容
     */
    protected $body: JQuery;
    /**
     * 弹框内容
     */
    protected $content: JQuery;
    /**
     * 底部内容
     */
    protected $footer: JQuery;
    /**
     * 头部内容
     */
    protected $header: JQuery;
    /**
     * 构造方法
     * @param {PdVisModalSettings} settings - 用户配置
     */
    constructor(settings?: PdVisModalSettings);
    /**
     * 关闭模态框
     * @param {PdUIModalSettings} settings - 配置项
     */
    close(settings?: PdUIModalSettings): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 打开模态框
     * @param {PdUIModalSettings} settings - 配置项
     */
    open(settings?: PdUIModalSettings): void;
    /**
     * 更新主体
     * @param {PdSelector} data - 新的主体内容
     */
    updateBody(data: PdSelector): void;
    /**
     * 更新标题
     * @param {PdSelector} data - 新的标题
     */
    updateTitle(data: PdSelector): void;
    /**
     * 创建主体内容的JQuery对象
     */
    protected createBody(): void;
    /**
     * 创建头部内容的JQuery对象
     */
    protected createHeader(): void;
    /**
     * 生成内容
     */
    protected getSelector(data: ((data: PdVisModalSettings) => PdSelector) | PdSelector): PdSelector;
    /**
     * 初始化配置
     * @param {PdVisModalSettings} settings - 用户定义配置
     * @return {PdVisModalSettings} 配置
     */
    protected initSettings(settings: PdVisModalSettings): PdVisModalSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
