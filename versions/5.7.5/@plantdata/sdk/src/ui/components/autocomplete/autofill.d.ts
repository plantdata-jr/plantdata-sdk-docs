/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * 自动填充组件配置
 */
export interface PdUIAutofillSettings extends PdComponentSettings {
    /**
     * 自动填充可选内容生成之前执行的方法
     * @param {string} text - 输入的文本
     * @param {PdUIAutofill} ins - 自动填充组件实例
     */
    beforePrompt?: (text: string, ins: PdUIAutofill) => void;
    /**
     * 自动填充内容选择之前执行的方法
     * @param data - 选中的项
     * @param {JQuery} $el- 自动填充组件实例的容器
     */
    beforeSearch?: (data: any, $el: JQuery) => void;
    /**
     *  缓存配置
     */
    cache?: {
        /**
         *  是否对可选内容进行缓存
         */
        enable?: boolean;
        /**
         *  最大缓存数量
         */
        maxNum?: number;
    };
    /**
     * 绘制自动填充可选内容的标题
     * @param data - 自动填充的可选内容中的一项
     * @return {string} - 显示的标题
     */
    createItemTitle?: (data: any) => string;
    /**
     * 绘制单条自动填充可选内容
     * @param data - 用于生成可选内容的数据
     * @param {string} text - 输入的文本
     * @return {PdSelector} 创建的选项
     */
    createPromptItem?: (data: any, text: string) => PdSelector;
    /**
     * 绘制所有自动填充的可选内容
     * @param data - 用于生成可选内容的数据
     * @param {string} text - 输入的文本
     * @return {PdSelector} 创建的选项
     */
    createPromptItems?: (data: any[], text: string) => PdSelector;
    /**
     * 默认选择的可选内容
     */
    defaultData?: any;
    /**
     *  是否允许空值时选择
     */
    empty?: boolean;
    /**
     *  输入停止与自动填充可选内容显示之间的间隔时间
     */
    interval?: number;
    /**
     *  自动填充可选内容列表中是否显示输入文本的选项
     */
    keyword?: boolean;
    /**
     * 自动填充中输入框的name属性
     */
    name?: string;
    /**
     *  自动填充可选内容为空时显示的内容
     */
    noData?: {
        /**
         *  自动填充可选内容为空时显示的内容
         */
        content?: string;
        /**
         * 生成自动填充可选内容为空时显示内容的方法
         * @param {string} text - 输入的文本
         * @return {string} - 自动填充可选内容为空时显示的内容
         */
        contentFunction?: (text: string) => string;
        /**
         *  自动填充可选内容为空时是否显示提示内容
         */
        enable?: boolean;
    };
    /**
     * 自动填充选项获取时执行的方法
     * @param {string} text - 输入的文本
     * @return {Promise} Promise
     */
    onPrompt?: (text: string) => Promise<any>;
    /**
     * 选中自动填充选项或在输入框中确认输入的文本时执行的方法
     * @param data - 输入的文本
     * @param {JQuery} $el - 容器
     */
    onSearch?: (data: any, $el: JQuery, ins: PdUIAutofill) => void;
    /**
     * 输入文本变化时执行的方法
     * @param string - 输入的文本
     * @param {JQuery} $el - 自动填充组件实例的容器
     */
    onSearchTextChange?: (string: any, $el: JQuery, ins: PdUIAutofill) => void;
    /**
     * 选中自动填充选项改变时执行的方法
     * @param item - 选中的选项
     * @param {JQuery} $el - 自动填充组件实例的容器
     */
    onSelectItemChange?: (item: any, $el: JQuery, ins: PdUIAutofill) => void;
    /**
     *  输入提示文本
     */
    placeholder?: string;
    /**
     *  自动填充显示的位置，可选：top，bottom
     */
    position?: 'top' | 'bottom';
    /**
     *  是否开启自动填充
     */
    prompt?: boolean;
    /**
     *  自动填充生成的Dom节点的class
     */
    promptContainerCls?: string;
    /**
     *  自动填充生成的Dom节点
     */
    promptContainerParent?: PdSelector;
    /**
     *  生成自动填充组件的Dom对象
     */
    selector?: PdSelector;
    /**
     * 是否显示正在加载
     */
    showLoading?: boolean;
}
/**
 * 自动填充组件
 */
export declare abstract class PdUIAutofill extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIAutofillSettings;
    /**
     *  组件默认的className
     */
    protected static clsName: string;
    /**
     *  组件默认的class
     */
    protected static cls: string;
    /**
     *  组件输入框默认的className
     */
    protected static clsInputName: string;
    /**
     *  组件输入框默认的class
     */
    protected static clsInput: string;
    /**
     *  自动填充选项容器的className
     */
    protected static clsPromptName: string;
    /**
     *  配置
     */
    settings: PdUIAutofillSettings;
    /**
     *  自动填充选项容器
     */
    protected $optionEl: JQuery;
    /**
     *  缓存数据的列表
     */
    protected cacheList: {
        key: string;
        value: any[];
    }[];
    /**
     *  超时隐藏的定时器
     */
    protected hidePromptTo: any;
    /**
     *  是否正在加载的状态
     */
    protected loading: boolean;
    /**
     *  自动填充选项中显示字段的key
     */
    protected nameKey: string;
    /**
     *  最后一个获取自动填充选项请求的输入文本
     */
    protected promptText: string;
    /**
     *  选中的自动填充选项
     */
    protected selectedItem: any;
    /**
     * 重置自动填充选项框中选项的可视区域
     * @param {JQuery} $now - 当前选中的选项
     * @param {boolean} isDown - 是否向下
     */
    protected static resetPromptPosition($now: JQuery, isDown?: boolean): void;
    /**
     * 构造方法
     * @param {PdUIAutofillSettings} settings - 用户配置
     */
    protected constructor(settings?: PdUIAutofillSettings);
    /**
     * 清空自动填充选项
     */
    clear(): void;
    /**
     * 绘制自动填充选项的选项
     * @param data - 用于生成自动填充选项的数据
     * @param {string} text - 输入的文本
     */
    drawPromptItems(data: any[], text: string): void;
    /**
     * 获取输入的文本
     */
    getSearchText(): string;
    /**
     * 获取选中的选项
     */
    getSelectedItem(): {
        [key: string]: any;
    } | string;
    /**
     * 选中自动填充选项或在输入框中确认输入的文本时执行的方法
     */
    search(): void;
    /**
     * 设置输入的文本
     * @param {string} text - 输入的文本
     */
    setSearchText(text: string): void;
    /**
     * 设置选中的选项
     * @param item - 选中的选项
     */
    setSelectedItem(item: any): void;
    /**
     * 自动填充选项显示之前执行的方法
     * @param {string} text - 输入的文本
     */
    protected beforePrompt(text: string): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 绘制自动填充可选内容的标题
     * @param data - 自动填充的可选内容中的一项
     * @return {string} - 显示的标题
     */
    protected createItemTitle(data: any): PdSelector;
    /**
     * 创建自动填充选项框的容器
     * @param {string} exCls - 额外的className
     * @param {JQuery} $el - 自动填充选项框的容器
     */
    protected createOptionEl(exCls: string, $el: JQuery): void;
    /**
     * 绘制单条自动填充选项框中选项
     * @param data - 用于生成选项的数据
     * @param {string} text - 输入的文本
     * @return {PdSelector} 创建的选项
     */
    protected createPromptItem(data: any, text: string): PdSelector;
    /**
     * 绘制自动填充选项框
     * @param data - 用于生成选项的数据
     * @param {string} text - 输入的文本
     * @return {PdSelector} 创建的选项
     */
    protected createPromptItems(data: any[], text: string): PdSelector;
    /**
     * 根据输入的文本获取缓存数据
     * @param {string} text - 输入的文本
     */
    protected getCacheData(text: string): any[];
    /**
     * 获取显示的标题
     * @param data - 显示的数据
     */
    protected getName(data: any): string;
    /**
     * 初始化配置
     * @param {PdUIAutofillSettings} settings - 用户定义配置
     * @return {PdUIAutofillSettings} 配置
     */
    protected initSettings(settings: PdUIAutofillSettings): PdUIAutofillSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 选中自动填充选项改变执行的方法
     */
    protected onSelectedItemChange(): void;
    /**
     * 自动填充选项获取时执行的方法
     * @param {string} text - 输入的文本
     */
    protected prompt(text: string): void;
    /**
     * 数据添加到缓存
     * @param {string} text - 输入的文本
     * @param data - 缓存数据
     */
    protected setCacheData(text: string, data: any): void;
    /**
     * 显示加载
     */
    protected showLoading(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
