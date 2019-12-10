/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdVisDialog, PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdKGSchemaAttGroup, PdKGSchemaAtts } from '../../../schema';
import { PdVisCascader } from '../../../../vis/utils/cascader';
/**
 * 属性分组工具配置
 */
export interface PdSDKEditorAttributeGroupSettings extends PdSDKEditorToolSettings {
    /**
     * 添加属性分组的属性列表数据
     */
    addAttributeSetting?: PdSDKAjaxSettings;
    /**
     * 添加属性分组列表数据
     */
    addGroupSetting?: PdSDKAjaxSettings;
    /**
     * 删除属性分组列表数据
     */
    deleteGroupSetting?: PdSDKAjaxSettings;
    /**
     * 删除属性分组的属性列表数据
     */
    deleteGroupAttrSetting?: PdSDKAjaxSettings;
    /**
     * 获取属性列表数据
     */
    getDefinitionSetting?: PdSDKAjaxSettings;
    /**
     * 获取属性分组列表数据
     */
    getGroupsSetting?: PdSDKAjaxSettings;
    /**
     * 更新group列表数据
     */
    updateGroupSetting?: PdSDKAjaxSettings;
}
/**
 * 删除工具
 */
export declare class PdSDKEditorAttributeGroup extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAttributeGroupSettings;
    /**
     * 添加属性分组或修改属性名称弹框实例
     */
    addOrUpdateDialog: PdVisDialog;
    /**
     * 添加属性分组的属性弹框实例
     */
    addAttributeDialog: PdVisDialog;
    /**
     * 删除分组确认弹框实例
     */
    deleteConfirmDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdSDKEditorAttributeGroupSettings;
    /**
     * 属性分组列表容器
     */
    protected $groupListContainer: JQuery;
    /**
     * 属性分组列表容器
     */
    protected isAdd: boolean;
    /**
     * 当前选中属性分组的id
     */
    protected selectedGroupId: string;
    /**
     * 概念选择器
     */
    protected typeSelector: PdVisCascader;
    /**
     * 构造方法
     * @param {PdSDKEditorAttributeGroupSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorAttributeGroupSettings);
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
     * 添加属性分组的属性
     * @param name 属性分组名称
     */
    protected addAttribute(attrDefIds: number[]): Promise<any>;
    /**
     * 添加属性分组
     * @param name 属性分组名称
     */
    protected addGroup(name: string): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建属性列表
     * @param data - 属性数据
     */
    protected buildAttrTable(data: any): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 删除属性分组
     */
    protected deleteGroup(): Promise<any>;
    /**
     * 删除属性分组
     * @param ids 属性id的list
     */
    protected deleteGroupAttr(ids: string[]): Promise<any>;
    /**
     * 绘制属性分组列表框
     */
    protected drawGroupListContainer(selector: JQuery): void;
    /**
     * 根据概念id获取属性
     * @param id 概念id
     */
    protected getAttributeById(id: string): Promise<any>;
    /**
     * 获取概念名
     * @param ids 概念id的list
     */
    protected getConceptName(ids: number[] | string[]): string;
    /**
     * 删除实体
     */
    protected getGroups(id?: number): Promise<any>;
    /**
     * 获取数值属性分组列表tr的html
     */
    protected getTr(item: PdKGSchemaAtts): string;
    /**
     * 获取数值属性分组列表tr的html
     */
    protected getTrById(ids: number[]): string;
    /**
     * 初始化配置
     * @param {PdSDKEditorAttributeGroupSettings} settings - 用户定义配置
     * @return {PdSDKEditorAttributeGroupSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAttributeGroupSettings): PdSDKEditorAttributeGroupSettings;
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
     * 渲染数据
     */
    protected renderData(attGroup: PdKGSchemaAttGroup[]): void;
    /**
     * 解除绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新属性分组名称
     * @param name 属性分组名称
     */
    protected updateGroup(name: string): Promise<any>;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
