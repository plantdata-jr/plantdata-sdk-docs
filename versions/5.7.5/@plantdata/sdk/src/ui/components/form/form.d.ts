/// <reference types="jquery" />
/**
 * 设置表单值时的配置
 */
export interface PdUIFormSetSettings {
    /**
     *  属性名
     */
    attr?: string;
    /**
     *  是否清除null
     */
    clearNull?: boolean;
    /**
     * 需要自定义表单项值设置器
     */
    setter?: {
        [key: string]: ($item: JQuery, value: any) => void;
    };
}
/**
 * 获取表单值时的配置
 */
export interface PdUIFormGetSettings {
    /**
     *  属性名
     */
    attr?: string;
    /**
     * 需要自定义表单项值获取器
     */
    getter?: {
        [key: string]: ($item: JQuery) => any;
    };
}
/**
 * 表单工具
 */
export declare class PdUIForm {
    /**
     *  表单的属性名
     */
    static attrName: string;
    /**
     *  标识是否是数组的属性
     */
    static attrArray: string;
    /**
     *  获取数据之后的回调函数
     */
    static attrAfterGet: string;
    /**
     *  设置数据之后的回调函数
     */
    static attrAfterUpdate: string;
    /**
     *  获取数据之前的回调函数
     */
    static attrBeforeGet: string;
    /**
     *  设置数据之前的回调函数
     */
    static attrBeforeUpdate: string;
    /**
     *  如果是个复杂DOM结构的表单项时标识当前dom节点及子节点为一个完整的表单项，
     */
    static attrContainer: string;
    /**
     *    当前表单项获取数据的方法
     */
    static attrGet: string;
    /**
     *    当前表单项获取数据的方法对应的key
     */
    static attrGetter: string;
    /**
     *  标识一个完整的表单项设置/读取数据的方式，设置后为html方式，获取的是HTML内容；否则为text方式，获取的是text内容
     */
    static attrHTML: string;
    /**
     *    一个完整的表单项设置/读取数据的标识
     */
    static attrItem: string;
    /**
     *  唯一标识
     */
    static attrKey: string;
    /**
     *  一个完整的表单项的模板标识
     */
    static attrModel: string;
    /**
     *    当前表单项设置数据的方法
     */
    static attrSet: string;
    /**
     *    当前表单项设置数据的方法对应的key
     */
    static attrSetter: string;
    /**
     *    当前复选框类型的表单项是否为单选
     */
    static attrSwitch: string;
    /**
     *  默认的className
     */
    static clsName: string;
    /**
     *  默认的class
     */
    static cls: string;
    /**
     *  对象数据的标识，标识里面的表单项的值合为一个对象
     */
    static clsFieldsetName: string;
    /**
     *  获取值的配置
     */
    static getSettings: PdUIFormGetSettings;
    /**
     *  设置值的配置
     */
    static setSettings: PdUIFormSetSettings;
    /**
     * 获取表单的值
     * @param {JQuery} $form - 需要获取值的表单
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     */
    static getFormData($form: JQuery, settings?: PdUIFormGetSettings): {
        [key: string]: any;
    };
    /**
     * 设置表单的值
     * @param {JQuery} $form - 需要设置值的表单
     * @param data - 表单的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    static setFormData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 将null数据设置为''
     * @param data - 需要处理的数据
     */
    protected static changeNullData(data: any): any;
    /**
     *  将值为null的数据改为''
     * @param data - 需要处理的数据
     */
    protected static clearNullData(data: any): any;
    /**
     * 复制表单表单项
     * @param {JQuery} $obj - 需要复制的表单项
     * @param {JQuery} $model - 模板
     * @param {JQuery} $parent - 父表单项
     * @param {number} idx - 索引
     * @return {JQuery} 复制的表单表单项
     */
    protected static cloneFormItem($obj: JQuery, $model: JQuery, $parent: JQuery, idx: number): JQuery;
    /**
     * 获取组表单数据
     * @param {JQuery} $form - 表单容器
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     */
    protected static getFormGroupData($form: JQuery, settings?: PdUIFormGetSettings): {
        [key: string]: any;
    };
    /**
     * 获取单个表单项的数据
     * @param {JQuery} $form - 表单项的容器
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     */
    protected static getFormItemData($form: JQuery, settings?: PdUIFormGetSettings): any;
    /**
     * 从数据中获取单个表单项的值
     * @param {JQuery} $form - 表单项的容器
     * @param data - 表单数据
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     */
    protected static getFormItemValue($form: JQuery, data?: any, settings?: PdUIFormGetSettings): any;
    /**
     * 判断表单项的值是否是数组类型
     * @param {JQuery} $item - 需要判断的表单项
     * @return {boolean} 判断的结果
     */
    protected static isArrayItem($item: JQuery): boolean;
    /**
     * 设置表单项组数据
     * @param {JQuery} $form - 表单项的容器
     * @param data - 设置的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    protected static setFormGroupData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 设置单个表单项的值
     * @param {JQuery} $form - 表单表单项
     * @param data - 表单项的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    protected static setFormItemData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 设置子表单项组数据
     * @param {JQuery} $form - 表单项的容器
     * @param data - 设置的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    protected static setSubFormGroupData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 更新表单项的id，复制出来的表单项ID不能与原表单项的ID重复
     * @param {JQuery} $item - 表单项
     * @param {JQuery} $obj - 父表单项
     * @param {number} idx - 索引
     */
    protected static updateFormItemId($item: JQuery, $obj: JQuery, idx: number): void;
}
