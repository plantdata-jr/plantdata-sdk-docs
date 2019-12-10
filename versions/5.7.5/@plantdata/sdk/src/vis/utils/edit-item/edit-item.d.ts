/// <reference types="jquery" />
import { PdOptionsType, PdOptionType, PdSelector } from '../../../common/common';
/**
 * 编辑项支持的类型
 */
export declare type PdVisEditItemType = 'custom' | 'date' | 'datetime' | 'datetimeRange' | 'dateRange' | 'input' | 'select' | 'checkbox' | 'radio' | 'switch' | 'group' | 'textarea' | 'label' | 'slider' | 'text';
/**
 * 编辑项配置
 */
export interface PdVisEditItemSettings {
    /**
     * 生成自定义模板
     * @param settings 编辑项的配置
     */
    buildItem?: (settings: PdVisEditItemSettings) => PdSelector;
    /**
     * 是否可选择
     */
    checkEnable?: boolean;
    /**
     * 是否已选择
     */
    checked?: boolean;
    /**
     * 子编辑项的配置
     */
    children?: PdVisEditItemSettings[];
    /**
     * 额外的className
     */
    className?: string;
    /**
     * type为radio时是否显示清空按钮
     */
    clearEnable?: boolean;
    /**
     * 是否可收起，仅type为group类型时有效
     */
    closeable?: boolean;
    /**
     * 是否可删除该编辑项
     */
    deletable?: boolean;
    /**
     * 是否禁用该编辑项
     */
    disabled?: boolean;
    /**
     * 是否可编辑该编辑项
     */
    editable?: boolean;
    /**
     * 获取编辑项值的方法
     * @param {PdVisEditItemSettings} settings - 当前编辑项的配置
     * @param {JQuery<HTMLElement>} $item - 当前项目对应的DOM
     */
    getValue?: (settings: PdVisEditItemSettings, $item: JQuery<HTMLElement>) => any;
    /**
     *  编辑数据的html
     */
    html?: string;
    /**
     * input类型的编辑项的输入类型
     */
    inputType?: 'text' | 'number';
    /**
     * 是收起状态，仅type为group类型时有效
     */
    isClose?: boolean;
    /**
     * 是否树状显示，仅类型为checkbox类型时有效
     */
    isTree?: boolean;
    /**
     *  编辑数据的KEY
     */
    key?: string;
    /**
     *  编辑数据的名称
     */
    label?: string;
    /**
     * 编辑项名称的展示模式
     */
    mode?: 'label' | 'placeholder';
    /**
     * 名称与内容分行显示
     */
    multiLine?: boolean;
    /**
     *  选择型编辑项的可选项数据
     */
    options?: PdOptionsType;
    /**
     *  编辑项的占位提示语
     */
    placeholder?: string;
    /**
     *  编辑项的后缀
     */
    postfix?: string;
    /**
     * 是否只读，input textarea有效
     */
    readonly?: boolean;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     *  编辑项的选中值,请使用value代替
     *  @deprecated
     */
    selected?: any;
    /**
     * 设置编辑项值的方法
     * @param {PdVisEditItemSettings} settings - 当前编辑项的配置
     * @param {JQuery<HTMLElement>} $item - 当前项目对应的DOM
     * @param value - 数据
     */
    setValue?: (settings: PdVisEditItemSettings, $item: JQuery<HTMLElement>, value: any) => void;
    /**
     * 编辑项的类型
     */
    type?: PdVisEditItemType;
    /**
     *  编辑项的选中值
     */
    value?: any;
}
/**
 * 编辑项工具
 */
export declare class PdVisEditItem {
    /**
     * 生成编辑项的HTML字符串
     * @param {string} title - 配置的标题
     * @param {string} content - 配置的主体
     * @param {string} cls - 配置的额外class
     * @param {string} path - 编辑项的路径
     */
    static buildEditItem(title: string, content: string, cls: string, path?: string): string;
    /**
     * 检验编辑项是否为空
     * @param {JQuery} $item - 编辑项的JQuery对象
     */
    static checkValueItemRequired($item: JQuery): boolean;
    /**
     * 清空编辑项的校验状态
     * @param {JQuery} $item - 编辑项的JQuery对象
     */
    static clearEditItemStatus($item: JQuery): void;
    /**
     * 生成Checkbox类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createCheckbox(settings: PdVisEditItemSettings): string;
    /**
     * 创建编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     * @param {string} path - 编辑项的路径
     */
    static createEditItem(settings: PdVisEditItemSettings, path?: string): string;
    /**
     * 创建编辑项的HTML字符串
     */
    static createEditor(value?: PdVisEditItemSettings, allow?: string[], childrenAllow?: string[]): string;
    /**
     * 生成Group类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     * @param {string} path - 编辑项的路径
     */
    static createGroup(settings: PdVisEditItemSettings, path?: string): string;
    /**
     * 生成Input类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createInput(settings: PdVisEditItemSettings): string;
    /**
     * 生成Radio类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createRadio(settings: PdVisEditItemSettings): string;
    /**
     * 生成Select类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createSelect(settings: PdVisEditItemSettings): string;
    /**
     * 生成Switch类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createSwitch(settings: PdVisEditItemSettings): string;
    /**
     * 生成Text类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createText(settings: PdVisEditItemSettings): string;
    /**
     * 生成Textarea类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     */
    static createTextarea(settings: PdVisEditItemSettings): string;
    /**
     * 生成编辑选项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项选项配置
     * @param {string} path - 编辑项的路径
     */
    static gentEditItem(settings: PdVisEditItemSettings, path?: string): string;
    /**
     * 更新编辑项状态
     * @param {JQuery} $item - 编辑项的JQuery对象
     * @param {boolean} status - 是否通过校验
     */
    static updateEditItemStatus($item: JQuery, status?: boolean): void;
    /**
     * 生成Checkbox或Radio类型编辑项的HTML字符串
     * @param {PdVisEditItemSettings} settings - 编辑项配置
     * @param {'checkbox' | 'radio'} type - 类型
     */
    protected static createCheckboxOrRadio(settings: PdVisEditItemSettings, type: 'checkbox' | 'radio'): string;
    /**
     * 生成树形编辑项的HTML字符串
     * @param {PdOptionType[]} options - 可选项配置
     * @param {string} name - name属性
     * @param {number} level - 当前层级
     */
    protected static createTree(options: PdOptionType[], name: string, level?: number): string;
}
