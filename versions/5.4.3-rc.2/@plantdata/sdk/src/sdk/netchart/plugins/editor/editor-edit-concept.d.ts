/// <reference types="jquery" />
import { PdVisNetChartData, PdVisNetChartDataNode, PdVisNetChartDataLink } from '../../../../vis/netchart';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt/tag-prompt';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKEditorEditEntity, PdSDKEditorEditEntitySettings } from './editor-edit-entity';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog';
/**
 * 概念编辑工具配置
 */
export interface PdSDKEditorEditConceptSettings extends PdSDKEditorEditEntitySettings {
    /**
     *  添加子概念设置
     */
    addChildSettings?: PdSDKAjaxSettings;
    /**
     *  子概念提示组件设置
     */
    childPromptSettings?: PdSDKPromptSettings;
    /**
     *  概念详情请求配置
     */
    conceptDetailSettings?: PdSDKAjaxSettings;
    /**
     *  删除子概念设置
     */
    deleteChildSettings?: PdSDKAjaxSettings;
    /**
     *  编辑gis设置
     */
    modifyGisSettings?: PdSDKAjaxSettings;
}
/**
 * 概念编辑工具
 */
export declare class PdSDKEditorEditConcept extends PdSDKEditorEditEntity {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorEditConceptSettings;
    /**
     * 编辑表单配置
     */
    static editFormSettings: PdVisEditItemSettings[];
    /**
     *  配置
     */
    settings: PdSDKEditorEditConceptSettings;
    /**
     * 子概念数据
     */
    protected sons: PdVisNetChartDataNode[];
    /**
     * 子概念标签提示组件
     */
    protected sonsPromptTag: PdSDKTagPrompt;
    /**
     * 构造方法
     * @param {PdSDKEditorEditConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorEditConceptSettings);
    /**
     * 添加父概念
     */
    addParent(data: any): Promise<any>;
    /**
     * 删除父概念
     */
    deleteParent(data: any): Promise<any>;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 更新简介
     */
    updateAbstract(data: any): Promise<any>;
    /**
     * 更新概念名和消歧标识
     */
    updateNameAndMeaningTag(data: any): Promise<any>;
    /**
     * 添加子概念
     */
    protected addChild(data: any): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 删除子概念
     */
    protected deleteChild(data: any): Promise<any>;
    /**
     * 获取概念详情
     */
    protected getConceptDetail(): Promise<any>;
    /**
     * 初始化下拉提示
     */
    protected initPrompts(): void;
    /**
     * 初始化配置
     * @param {PdSDKEditorEditConceptSettings} settings - 用户定义配置
     * @return {PdSDKEditorEditConceptSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorEditConceptSettings): PdSDKEditorEditConceptSettings;
    /**
     * 修改gis开关
     */
    protected modifyGis(isOpenGis: string): Promise<any>;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
    /**
     * 更新图片
     */
    protected updateImage(data: any): Promise<any>;
}
