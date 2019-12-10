import { PdSelector } from '../../../common/common';
/**
 * 回到顶部
 */
export declare class PdUIBackTop {
    /**
     *  配置回到顶部时离页面顶部距离的属性，默认为0
     */
    protected static attrPos: string;
    /**
     *  回到顶部的默认className
     */
    protected static clsName: string;
    /**
     *  回到顶部的默认class
     */
    protected static cls: string;
    /**
     *  回到顶部时动画的持续时间
     */
    protected static duration: number;
    /**
     *  具体顶部多少距离时显示
     */
    protected static offsetDistance: number;
    /**
     *  回到顶部的容器
     */
    protected static selector: PdSelector;
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
