/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * fab组件的配置
 */
export interface PdUIFabSettings extends PdComponentSettings {
    /**
     *  分散角度的范围
     */
    angleRange?: number;
    /**
     *  主按钮半径与子按钮半径的差
     */
    diff?: number;
    /**
     *  子按钮之间收回间隔时间
     */
    inIncr?: number;
    /**
     *  收回时间
     */
    inTime?: number;
    /**
     *  初始状态是否展开
     */
    isOpened?: boolean;
    /**
     *  每层级自动按钮排列个数的上限
     */
    levelMax?: number;
    /**
     *  主按钮配置
     */
    mainBtnSettings?: {
        [key: string]: any;
    };
    /**
     *  主按钮与第一层子按钮中心之间的距离
     */
    mainRadiusDistance?: number;
    /**
     *  动画弹出距离（倍数）
     */
    offset?: number;
    /**
     *  弹出收回的时间
     */
    offsetTime?: number;
    /**
     *  子按钮之间弹出间隔时间
     */
    outIncr?: number;
    /**
     *  弹出时间
     */
    outTime?: number;
    /**
     *  波纹效果的颜色
     */
    ripple?: string;
    /**
     *  Fab组件生成的容器
     */
    selector?: PdSelector;
    /**
     *  子按钮排列的起始角度 X轴负向为0度，顺时针增加
     */
    startAngle?: number;
    /**
     *  子按钮配置
     */
    subBtnSettings?: {
        [key: string]: any;
    }[];
    /**
     *  相邻两层子按钮半径的距离
     */
    subRadiusDistance?: number;
}
/**
 * fab组件
 */
export declare class PdUIFab extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIFabSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     *  子按钮容器的className
     */
    protected static clsItemsName: string;
    /**
     *  子按钮的className
     */
    protected static clsItemName: string;
    /**
     *  主按钮的className
     */
    protected static clsMainName: string;
    /**
     *  配置
     */
    settings: PdUIFabSettings;
    /**
     *  子按钮
     */
    protected $itemButtons: JQuery;
    /**
     *  主按钮
     */
    protected $mainButton: JQuery;
    /**
     *  展开状态
     */
    protected isOpen: boolean;
    /**
     * 排序
     * @param arr - 需要排序的数据
     * @param fun - 获取排序值的方法
     * @param sort - 升序或降序，默认升序
     */
    protected static orderBy(arr: any[], fun: Function, sort?: string): any[];
    /**
     * 构造方法
     * @param {PdUIFabSettings} settings - 用户配置
     */
    constructor(settings?: PdUIFabSettings);
    /**
     * 执行展开或收起
     */
    run(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 自动计算子按钮的位置信息
     * @return 位置信息
     */
    protected calcAutoPosition(): {
        [key: string]: any;
    };
    /**
     * 计算固定的位置
     * @param {number} levelMax - 每层级自按钮排列个数的上限
     * @return 位置信息
     */
    protected calcFixedPosition(levelMax: number): {
        [key: string]: any;
    };
    /**
     * 根据圆心的距离计算该层子按钮能排列的最大个数
     * @param {number} R - 圆心之间的距离
     * @return {number} 子按钮最大个数
     */
    protected calcMax(R: number): number;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化配置项
     * @param {PdUIFabSettings} settings - 配置项
     * @return {PdUIFabSettings} 初始化后的配置项
     */
    protected initSettings(settings: PdUIFabSettings): PdUIFabSettings;
    /**
     * 初始化模板
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 切换子按钮位置（收起后的位置，或展开后的位置）
     * @param {boolean} animated - 是否开启动画
     */
    protected toggleItemsPosition(animated: boolean): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
