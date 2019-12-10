/// <reference types="jquery" />
/**
 * 波纹效果
 */
export declare class PdUIRipple {
    /**
     *  有波纹效果的标识属性
     */
    protected static attrName: string;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     *  波纹中元素的className
     */
    protected static clsItemName: string;
    /**
     *  动画效果容器className
     */
    protected static clsContainerName: string;
    /**
     *  波纹的默认颜色
     */
    protected static defaultColor: string;
    /**
     *  动画效果的时间
     */
    protected static delay: number;
    /**
     * 波纹效果初始化
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
    /**
     * 执行波纹效果
     * @param {JQuery} $container - 执行波纹效果容器
     * @param {JQuery.MouseEventBase} event - 事件对象
     */
    protected static drawRipple($container: JQuery, event: JQuery.MouseEventBase): void;
}
