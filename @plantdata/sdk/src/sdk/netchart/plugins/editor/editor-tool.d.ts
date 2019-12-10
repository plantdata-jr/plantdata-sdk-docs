/// <reference types="jquery" />
import { PdVisToolItem, PdVisToolItemSettings } from '../../../../vis/utils/tool-item/tool-item';
import { PdVisNetChart } from '../../../../vis/netchart/netchart';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisModalSettings } from '../../../../vis/utils/modal/modal';
import { PdVisDialog } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
import { PdSDKNetChart } from '../../netchart';
import { PdSDKKGSettings } from '../../../utils/service';
/**
 * 编辑工具配置
 */
export interface PdSDKEditorToolSettings extends PdVisToolItemSettings, PdSDKKGSettings {
    /**
     *可视化组件
     */
    netChart?: PdVisNetChart;
    /**
     *sdk组件
     */
    getSDKInstance?: () => PdSDKNetChart<PdVisNetChart>;
}
/**
 * 编辑工具
 */
export declare abstract class PdSDKEditorTool extends PdVisToolItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorToolSettings;
    /**
     * 编辑弹框实例
     */
    editDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdSDKEditorToolSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorToolSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKEditorToolSettings);
    /**
     * 添加关系
     */
    addLink(netChart: PdVisNetChart, data: PdSDKNetChartDataLink): void;
    /**
     * 添加子节点
     */
    addNode(netChart: PdVisNetChart, data: PdSDKNetChartDataNode, parentId?: string, attId?: number): void;
    /**
     * 删除边
     */
    deleteLink(netChart: PdVisNetChart, data: PdSDKNetChartDataLink): void;
    /**
     * 删除节点
     */
    deleteNode(netChart: PdVisNetChart, data: PdSDKNetChartDataNode): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 显示编辑
     * @param {any} data - 默认数据
     * @param {JQuery.ClickEvent} event - 触发事件
     */
    showEdit(data: any, event: JQuery.ClickEvent): void;
    /**
     * 更新关系
     */
    updateLink(netChart: PdVisNetChart, data: PdSDKNetChartDataLink): void;
    /**
     * 更新节点
     */
    updateNode(netChart: PdVisNetChart, data: PdSDKNetChartDataNode): void;
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} data - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中节点
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    abstract updateStatusBySelection(data: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 绑定检验必填事件
     */
    protected bindValidateEvent(settings: PdVisEditItemSettings[]): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisModalSettings;
    /**
     * 初始化配置
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新控件状态
     * @param {string} key - 控件路径标识
     * @param {boolean} validate - 校验状态
     */
    protected updateValidateStatus(key: string, validate: boolean): void;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
