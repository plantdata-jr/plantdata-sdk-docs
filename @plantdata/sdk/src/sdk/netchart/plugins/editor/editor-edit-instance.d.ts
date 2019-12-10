/// <reference types="jquery" />
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKEditorEditEntity, PdSDKEditorEditEntitySettings } from './editor-edit-entity';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
import { PdSDKAjaxSettings } from '../../../utils/service';
/**
 * 实体编辑工具配置
 */
export interface PdSDKEditorEditInstanceSettings extends PdSDKEditorEditEntitySettings {
    /**
     *  实体详情请求设置
     */
    instanceDetailSettings?: PdSDKAjaxSettings;
    /**
     *  更新gis请求设置
     */
    updateGisSettings?: PdSDKAjaxSettings;
}
/**
 * 实体编辑工具
 */
export declare class PdSDKEditorEditInstance extends PdSDKEditorEditEntity {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorEditInstanceSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorEditInstanceSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorEditInstanceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorEditInstanceSettings);
    /**
     * 添加父概念
     */
    addParent(parent: any): Promise<void>;
    /**
     * 删除父概念
     */
    deleteParent(parent: any): Promise<void>;
    /**
     * 编辑表单配置
     */
    editFormSettings(): PdVisEditItemSettings[];
    /**
     * 更新简介
     * @param abs 数据
     */
    updateAbstract(abs: string): Promise<void>;
    /**
     * 更新Gis
     * @param params - 数据
     */
    updateGis(params: any): Promise<void>;
    /**
     * 更新实体名和消歧标识
     * @param params - 数据
     */
    updateNameAndMeaningTag(params: any): Promise<void>;
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 获取实体详情
     */
    protected getInstanceDetail(): Promise<any>;
    /**
     * 初始化配置
     * @param {PdSDKEditorEditInstanceSettings} settings - 用户定义配置
     * @return {PdSDKEditorEditInstanceSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorEditInstanceSettings): PdSDKEditorEditInstanceSettings;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
    /**
     * 更新图片
     * @param params - 数据
     */
    protected updateImage(params: any): Promise<void>;
}
