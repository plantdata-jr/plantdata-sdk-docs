/// <reference types="jquery" />
import { PdVisNetChartDataNode, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSelector } from '../../../../common/common';
import { PdUIPagination } from '../../../../ui/components/pagination/pagination';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt/tag-prompt';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKNetChartDataNode } from '../../model';
import { PdSDKKGSettings } from '../../../utils/service';
import { PdKGSchema } from '../../../model/schema';
/**
 * 搜索配置
 */
export interface PdSDKPluginAdvancedPromptDialogSearchSettings extends PdSDKKGSettings {
}
/**
 *  高级检索插件配置
 */
export interface PdSDKPluginAdvancedPromptDialogSettings extends PdSDKPluginSettings {
    /**
     * 可选择条目的数量,没有代表不限
     */
    max?: number;
    /**
     * 弹框的容器
     */
    parent?: PdSelector;
    /**
     *  对象属性值提示组件设置
     */
    promptSettings?: PdSDKPromptSettings;
    /**
     * 搜索设置
     */
    searchSettings?: PdSDKPluginAdvancedPromptDialogSearchSettings;
}
/**
 * 数据
 */
export interface PdSDKPluginAdvancedPromptDialogData {
    /**
     * 搜索关键字
     */
    kw?: string;
    /**
     * 搜索结果数据
     */
    searchData?: PdVisNetChartDataNode[];
    /**
     * 已选分析对象数据
     */
    tagData?: PdSDKNetChartDataNode[];
}
/**
 * 高级检索插件
 */
export declare class PdSDKPluginAdvancedPromptDialog extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginAdvancedPromptDialogSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginAdvancedPromptDialogSettings;
    /**
     * 选择的数据
     */
    protected data: PdSDKPluginAdvancedPromptDialogData;
    /**
     * 检索条件数据
     */
    protected filterData: any[];
    /**
     * 分页
     */
    protected page: PdUIPagination;
    /**
     * 对象属性值标签提示组件allowTypes
     */
    protected promptRange: string[];
    /**
     * 对象属性值标签提示组件
     */
    protected promptTag: PdSDKTagPrompt;
    /**
     * 构造方法
     * @param {PdSDKPluginAdvancedPromptDialogSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginAdvancedPromptDialogSettings);
    /**
     * 关闭弹框
     */
    closeDialog(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取已选分析对象数据
     */
    getTagData(): PdSDKNetChartDataNode[];
    /**
     * 打开弹框
     */
    openDialog(): void;
    /**
     * 更新schema
     * @param {PdKGSchema} schema
     */
    updateSchema(schema: PdKGSchema): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成高级检索列表的分页组件
     * @param pageNo - 当前页面
     * @param pageSize - 每页个数
     * @param totalItems - 总个数
     */
    protected buildPage(pageNo: number, pageSize: number, totalItems: number): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 绘制表格
     */
    protected drawTable(data: PdSDKNetChartDataNode[], pageNo: number): void;
    /**
     * 获取按钮html
     * @param {number} id - 条目数据id
     * @return {string} 按钮thml
     */
    protected getButton(id: PdVisNodeId): string;
    /**
     * 初始化配置
     * @param {PdSDKPluginAdvancedPromptDialogSettings} settings - 用户定义配置
     * @return {PdSDKPluginAdvancedPromptDialogSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginAdvancedPromptDialogSettings): PdSDKPluginAdvancedPromptDialogSettings;
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
     * 模糊搜索
     */
    protected search(pageNo: number): Promise<void>;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新可选项
     */
    protected updateOptions(): void;
    /**
     * 更新tag
     */
    protected updateTag(): void;
}
