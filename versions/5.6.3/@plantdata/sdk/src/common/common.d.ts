import { PdUIMessageSettings } from '../ui/components/message/message';
/**
 * 可选项配置类型
 */
export declare type PdOptionsType = {
    [key: string]: string;
} | (PdOptionType | number | string)[];
/**
 * 可选项类型
 */
export declare type PdOptionType = {
    /**
     * 路径
     */
    _path?: any[];
    /**
     * 是否默认选中
     */
    checked?: boolean;
    /**
     * 子选项
     */
    children?: PdOptionType[];
    /**
     * 是否禁止选择
     */
    disabled?: boolean;
    /**
     * 显示标签
     */
    label: string;
    /**
     * 实际值
     */
    value: string;
};
/**
 * 映射类型
 */
export declare type PdMap<T> = {
    [key: string]: T;
};
/**
 * 单值或数组类型
 */
export declare type PdTypeOrArray<T> = T | T[];
/**
 * 支持转为JQuery对象的选择器类型 string | HTMLElement | JQuery， 当前使用any为了兼容@types/JQuery 3.3.6
 */
export declare type PdSelector = any;
/**
 * 视口
 */
export interface PdViewport {
    /**
     * 页面高度
     */
    height: number;
    /**
     * 左侧偏移
     */
    left: number;
    /**
     * 上侧偏移
     */
    top: number;
    /**
     * 页面宽度
     */
    width: number;
}
/**
 * 浏览器环境信息
 */
export interface PdBrowserEnv {
    /**
     * 是否edge浏览器
     */
    edge?: boolean;
    /**
     * 是否firefox浏览器
     */
    firefox?: boolean;
    /**
     * 是否ie浏览器
     */
    ie?: boolean;
    /**
     * 浏览器major版本号
     */
    version?: number;
    /**
     * 是否微信浏览器
     */
    weChat?: boolean;
    /**
     * 其他信息
     */
    [key: string]: any;
}
/**
 * PlantData通用工具集
 * */
export declare class PdCommonUtils {
    /**
     *  基本配色的颜色数组
     */
    static colorBase: string[];
    /**
     *  基本配色的浅色颜色数组
     */
    static colorBaseLight: string[];
    /**
     *  扩展配色的颜色数组
     */
    static colorEx: string[];
    /**
     *  代码执行工具
     */
    static eval: typeof eval;
    /**
     *  上次记录时间
     */
    static logTime: number;
    /**
     *  当前页面环境中已存在自动生成的ID的列表
     */
    protected static exIds: {
        [key: string]: boolean;
    };
    /**
     * 给String类型添加localeCompare方法
     * */
    static addLocaleCompare(): void;
    /**
     * 将其他类混合到一个类中
     * @param derivedCtor - 要被混合到的类
     * @param baseCtors - 要被混合的类数组
     * */
    static applyMixins(derivedCtor: any, baseCtors: any[]): void;
    /**
     * 生成无数据提示字符串
     * @return {string} 无数据提示字符串
     */
    static buildNoData(tip?: string): string;
    /**
     * 判断canvas支持
     * @return {boolean} - 是否支持 canvas
     */
    static canvasSupport(): boolean;
    /**
     * 取消延迟执行
     */
    static craf(id: number): void;
    /**
     * 生成随机ID
     * @param {string} [prefix=''] - 生成ID的前缀
     * @param {string} [postfix=''] - 生成ID的后缀
     * @param {string} [append=''] - 生成ID的中间内容
     * @return {string} 随机ID
     * */
    static createId(prefix?: string, postfix?: string, append?: string): string;
    /**
     * 页面上显示错误消息
     * @param {string} msg - 显示的消息
     * @param {PdUIMessageSettings} settings - 其他配置
     * */
    static error(msg: string, settings?: PdUIMessageSettings): void;
    /**
     * 获取浏览器环境信息
     * @return {PdBrowserEnv} - 浏览器环境信息
     */
    static getBrowserEnv(): PdBrowserEnv;
    /**
     * 获取链接中指定的参数值
     * @deprecated 请使用其他工具实现
     * @param {string} key - 需要获取参数的参数名
     * @param {string} [search = window.location.search] - 需要获取参数的链接
     * */
    static getSearchParam(key: string, search?: string): string;
    /**
     * 获取页面视口
     * @return {PdViewport} 页面宽高
     */
    static getViewport(): PdViewport;
    /**
     * 在数组中查找基础类型的数据位置，忽略数据类型
     * @param list - 待查找的数组
     * @param item - 需要查找的数据
     */
    static indexOfIgnoreType(list: any[], item: any): number;
    /**
     * 页面上显示提示的消息
     * @param {string} msg - 显示的消息
     * */
    static info(msg: string): void;
    /**
     * 将list类型的tree数据转为tree类型的tree数据
     * @param arr - 实体schema
     * @param {string} pId - 父节点ID
     * @param {string} valueKey - value的字段
     * @param {string} labelKey - label的字段
     * @param {string} pIdKey - 父节点ID的字段
     */
    static listToTree(arr: {
        [key: string]: any;
    }[], pId?: string, valueKey?: string, labelKey?: string, pIdKey?: string): any[];
    /**
     * 控制台打印信息
     * @param {log | error | debug | warn} level - 打印等级
     * @param msg - 打印的信息
     * */
    static logger(level?: string, ...msg: any): void;
    /**
     * 合并对象数据
     * @param {boolean} deep - 是否递归合并
     * @param target - 合并目标
     * @param source - 待合并数据
     * */
    static merge(deep: boolean, target: any, ...source: any[]): any;
    /**
     * 合并两条对象数据
     * @param {boolean} deep - 是否深拷贝
     * @param target - 合并目标
     * @param source - 待合并数据
     * @return 合并结果
     * */
    static mergeOne(deep: boolean, target: any, source: any): any;
    /**
     *  延迟执行
     */
    static raf(func: () => void): any;
    /**
     * 生成0-1之间的随机数
     */
    static random(max?: number, floating?: boolean): number;
    /**
     * 显示时间开销
     * @param show 显示时间信息
     * @param info 显示的信息名称
     */
    static showTimeExpenses(show?: boolean, ...info: any): void;
    /**
     * JS代码转成字符串，支持function内容的转换
     * @param js - JS代码
     * @return {string} JS代码字符串
     * */
    static stringify(js: any): string;
    /**
     * 页面上显示成功的消息
     * @param {string} msg - 显示的消息
     * */
    static success(msg: string): void;
    /**
     * 转换可选项为PdOptionType[]格式，并生成选项的路径信息
     * @param {PdOptionsType} options - 可选项
     * @param selected - 选中项
     * @param path - 父选项路径
     */
    static transferOption(options: PdOptionsType, selected?: any, path?: any[]): PdOptionType[];
    /**
     * 页面上显示警告的消息
     * @param {string} msg - 显示的消息
     * */
    static warning(msg: string): void;
}
