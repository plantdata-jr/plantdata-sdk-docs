import { PdVisFormControlFilterable, PdVisFormControlFilterableSettings } from './form-control-filterable';
import { PdOptionsType, PdOptionType, PdSelector } from '../../../common';
/**
 * 树状多选项关系映射类型
 */
export declare type PdVisFormControlCheckboxGroupRelationMap = {
    [key: string]: {
        brother: PdOptionType[];
        self: PdOptionType;
        children: PdOptionType[];
        parent: PdOptionType;
    };
};
/**
 * 树状多选项组件配置
 */
export interface PdVisFormControlCheckboxGroupSettings extends PdVisFormControlFilterableSettings {
    /**
     * 是否树状显示
     */
    isTree?: boolean;
    /**
     *  树状多选项组件的可选项
     */
    options?: PdOptionsType;
    /**
     * 禁止自动关联树的父子节点状态
     */
    treeNodeAutoUpdateDisabled?: boolean;
}
/**
 * 树状多选项组件
 */
export declare class PdVisFormControlCheckboxGroup extends PdVisFormControlFilterable {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlCheckboxGroupSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlCheckboxGroupSettings;
    /**
     * 树状关系映射
     */
    protected relationMap: PdVisFormControlCheckboxGroupRelationMap;
    /**
     * 构造方法
     * @param {PdVisFormControlCheckboxGroupSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlCheckboxGroupSettings);
    /**
     * 修改编辑组件
     * @param {PdVisFormControlSettings} settings 编辑组件的配置
     */
    updateTemplate(settings?: PdVisFormControlCheckboxGroupSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 生成编辑组件头部模板
     */
    protected buildHeaderTemplate(): PdSelector;
    /**
     * 创建树状多选项的关系映射
     */
    protected buildRelationMap(): void;
    /**
     * 根据输入的值过滤出需要显示的数据
     * @param {string} str 输入的字符串
     */
    protected filterHandler(str: string): void;
    /**
     * 初始化配置
     * @param {PdVisFormControlCheckboxGroupSettings} settings - 用户定义配置
     * @return {PdVisFormControlCheckboxGroupSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlCheckboxGroupSettings): PdVisFormControlCheckboxGroupSettings;
    /**
     * 是否树状展示
     */
    protected isTree(): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新全选组件状态
     */
    protected updateSelectAllStatus(): void;
}
