/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * 分页组件配置项
 */
export interface PdUIPaginationSettings extends PdComponentSettings {
    /**
     * 点击分页按钮后的响应事件
     * @param {JQuery.ClickEvent | JQuery.KeyDownEvent} event - 点击事件对象
     * @param {number} pageNo - 跳转的页码
     * @param eventData - 跳转时的额外数据
     */
    callback: (event: JQuery.ClickEvent | JQuery.KeyDownEvent, pageNo: number, eventData: any) => void;
    /**
     *  分页组件容器额外的class名
     */
    cls?: string;
    /**
     *  当前页码
     */
    current: number;
    /**
     *  额外数据
     */
    data?: any;
    /**
     *  是否开启跳页功能
     */
    jumpEnable?: boolean;
    /**
     *  每页数量，总页数或者（总条目数+每页数量）至少配置一个
     */
    pageSize?: number;
    /**
     *  是否显示上下一页按钮
     */
    prevNext?: boolean;
    /**
     *  是否显示上下N页按钮，N为一共显示多少页
     */
    prevNextMulti?: boolean;
    /**
     *  生成分页组件的选择器
     */
    selector: PdSelector;
    /**
     *  每次分页最大的显示分页页码数量
     */
    showNum?: number;
    /**
     *  是否显示首页末页按钮
     */
    startEnd?: boolean;
    /**
     *  总页数，总页数或者（总条目数+每页数量）至少配置一个
     */
    total?: number;
    /**
     *  总条目数，总页数或者（总条目数+每页数量）至少配置一个
     */
    totalItems?: number;
    /**
     *  是否显示总条目数,仅当totalItem设置时有效
     */
    totalItemsShow?: boolean;
}
/**
 * 分页组件
 */
export declare class PdUIPagination extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIPaginationSettings;
    /**
     *  按钮表示页码的属性
     */
    protected static attrPage: string;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     *  标识首页的className
     */
    protected static clsFirstName: string;
    /**
     *  标识分页项的className
     */
    protected static clsItemName: string;
    /**
     *  标识跳转的className
     */
    protected static clsJumpName: string;
    /**
     *  标识末页的className
     */
    protected static clsLastName: string;
    /**
     *  标识下N页的className
     */
    protected static clsNextMultiName: string;
    /**
     *  标识下一页的className
     */
    protected static clsNextName: string;
    /**
     *  标识上N页的className
     */
    protected static clsPrevMultiName: string;
    /**
     *  标识上一页的className
     */
    protected static clsPrevName: string;
    /**
     *  标识总数的className
     */
    protected static clsTotalName: string;
    /**
     *  配置
     */
    settings: PdUIPaginationSettings;
    /**
     * 构造方法
     * @param {PdUIPaginationSettings} settings - 用户配置
     */
    constructor(settings?: PdUIPaginationSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建分页的HTML字符串
     */
    protected createPageHTML(): string;
    /**
     * 执行跳转的方法
     * @param {JQuery.ClickEvent | JQuery.KeyDownEvent} event - 事件
     * @param {number} pageNo - 跳转到的页码
     * @param eventData - 事件数据
     */
    protected goTo(event: JQuery.ClickEvent | JQuery.KeyDownEvent, pageNo: number, eventData: any): void;
    /**
     * 初始化配置
     * @param {PdUIPaginationSettings} settings - 配置的settings
     * @return {PdUIPaginationSettings} 生成的settings
     */
    protected initSettings(settings: PdUIPaginationSettings): PdUIPaginationSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
