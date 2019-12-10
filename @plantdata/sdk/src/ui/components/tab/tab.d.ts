/// <reference types="jquery" />
/**
 * 标签页
 */
export declare class PdUITab {
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     *  标识为左侧标签页的className
     */
    protected static clsLeftName: string;
    /**
     *  标识为标签外层容器的className
     */
    protected static clsNavContainerName: string;
    /**
     *  标识为标签控制的项的className
     */
    protected static clsNavControlName: string;
    /**
     *  标识为下一组标签控制项的className
     */
    protected static clsNavControlNextName: string;
    /**
     *  标识为上一组标签控制项的className
     */
    protected static clsNavControlPrevName: string;
    /**
     *  标识为当前标签的下划线的className
     */
    protected static clsNavDecorationName: string;
    /**
     *  标识为标签父容器的className
     */
    protected static clsNavName: string;
    /**
     *  标识为标签父容器的class
     */
    protected static clsNav: string;
    /**
     *  标识为显示全部标签的className
     */
    protected static clsNavShowAllName: string;
    /**
     *  标识为包裹标签的父容器的className
     */
    protected static clsNavWrapName: string;
    /**
     *  标识为右侧标签页的className
     */
    protected static clsRightName: string;
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 更新页面上所有标签页标签容器的样式
     */
    static updateAllTabNav(): void;
    /**
     * 更新标签页标签容器的样式
     * @param {JQuery} $item - 标签父容器的JQuery对象
     */
    static updateTabNav($item: JQuery): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
    /**
     * 获取控制器状态
     * @param {JQuery} $item - 标签父容器的JQuery对象
     * @param {number} pPos - 当前位置
     */
    protected static getControlStatus($item: JQuery, pPos?: number): {
        prev: boolean;
        next: boolean;
    };
    /**
     * 是否竖排的标签页
     * @param {JQuery} $item - 标签父容器的JQuery对象
     */
    protected static isVertical($item: JQuery): boolean;
    /**
     * 设置控制器状态
     * @param {JQuery} $item - 标签父容器的JQuery对象
     * @param {boolean} prev - 左控制器状态
     * @param {boolean} next - 右控制器状态
     */
    protected static setControlStatus($item: JQuery, prev?: boolean, next?: boolean): void;
    /**
     * 设置下划线的位置
     * @param {JQuery} $item - 当前选中标签的JQuery对象
     */
    protected static setDecorationPos($item: JQuery): void;
    /**
     * 设置可视区域的位置
     * @param {JQuery} $wrap - 包裹标签页容器的JQuery对象
     * @param {number} deltaPos - 位移
     * @param {boolean} isVertical - 是否竖排
     */
    protected static setVisiblePos($wrap: JQuery, deltaPos: number, isVertical: boolean): void;
    /**
     * 更新页面上所有控制器状态
     */
    protected static updateAllControlStatus(): void;
    /**
     * 为标签添加容器
     * @param {JQuery} $item 标签父容器的JQuery对象
     */
    protected static updateTabNavContainer($item: JQuery): void;
}
