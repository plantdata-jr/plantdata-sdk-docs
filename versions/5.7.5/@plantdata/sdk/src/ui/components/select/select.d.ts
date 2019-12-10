/// <reference types="jquery" />
import { PdOptionsType } from '../../../common/common';
import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 下拉选择框创建配置项
 */
export interface PdUISelectSettings extends PdEleCreatorSettings {
    /**
     * 选项配置
     */
    options?: PdOptionsType;
    /**
     * 选中值
     */
    selected?: any;
    /**
     *  按钮尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 下拉选择框
 */
export declare class PdUISelect {
    /**
     *  change时执行的事件
     */
    static attrChange: string;
    /**
     *  下拉选择框的ID
     */
    static attrId: string;
    /**
     *  role属性，区分dropdown / select
     */
    static attrRole: string;
    /**
     *  标识下拉选择框值的属性
     */
    static attrValue: string;
    /**
     *  下拉选择框选项条目容器的class
     */
    static clsItems: string;
    /**
     *  默认的className
     */
    static clsName: string;
    /**
     *  默认的class
     */
    static cls: string;
    /**
     *  默认配置
     */
    static defaultSettings: PdUISelectSettings;
    /**
     * 清空下拉选择框的值
     * @param $container - 下拉选择框的JQuery对象
     */
    static clearValue($container: JQuery): void;
    /**
     * 创建下拉选择框的HTML字符串
     * @param {PdUISelectSettings} settings - 配置项
     */
    static create(settings?: PdUISelectSettings): string;
    /**
     * 获取下拉选择框选项条目的容器
     * @param {JQuery} $item - 下拉选择框的JQuery对象
     */
    static getItemsContainer($item: JQuery): JQuery;
    /**
     * 获取下拉选择框的值
     * @param {JQuery} $item - 下拉选择框的JQuery对象
     */
    static getValue($item: JQuery): any;
    /**
     * 初始化下拉选择框
     */
    static init(): void;
    /**
     * 设置下拉选择框的值
     * @param $container - 下拉选择框的JQuery对象
     * @param value - 下拉选择框的值
     */
    static setValue($container: JQuery, value: any): void;
    /**
     * 更新下拉选择框的可选项
     * @param $item - 下拉选择框的JQuery对象
     * @param options - 可选项
     * @param selected - 选中的值
     */
    static updateOptions($item: JQuery, options: any[], selected?: any): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
