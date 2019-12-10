/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdSDKPrompt, PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKAjaxSettings } from '../../../utils/service';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 概念添加实例配置
 */
export interface PdSDKEditorAddEntitySettings extends PdSDKEditorToolSettings {
    /**
     *添加实例请求配置
     */
    addEntitySettings?: PdSDKAjaxSettings;
    /**
     *  提示组件设置
     */
    promptSettings?: PdSDKPromptSettings;
}
/**
 * 实例添加工具
 */
export declare abstract class PdSDKEditorAddEntity extends PdSDKEditorTool {
    /**
     * 实例提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddEntitySettings;
    /**
     * 父概念数据
     */
    protected data: PdSDKNetChartDataNode;
    /**
     * 是否是全局
     */
    protected isWhole: boolean;
    /**
     *  提示组件
     */
    protected prompt: PdSDKPrompt;
    /**
     * 构造方法
     * @param {PdSDKEditorAddEntitySettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKEditorAddEntitySettings);
    /**
     * 添加
     * @param params - 概念数据
     */
    abstract addEntity(params: any): Promise<number>;
    /**
     * 添加后执行的事件
     * @param data - 父概念数据
     * @param promiseData - addEntity返回的数据
     */
    abstract afterAddEntity(data: any, promiseData: any): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 获取编辑表单配置
     * @return {PdVisEditItemSettings[]} 配置
     */
    protected abstract editFormSettingsGet(): PdVisEditItemSettings[];
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 点击事件处理
     * @param {JQuery.ClickEvent} event - 事件对象
     */
    protected onClick(event: JQuery.ClickEvent): void;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
