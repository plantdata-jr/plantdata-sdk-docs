/**
 * 下拉框
 */
export declare class PdUIDropdown {
    /**
     *  id属性
     */
    protected static attrId: string;
    /**
     *  role属性，区分dropdown / select
     */
    protected static attrRole: string;
    /**
     *  下拉框选项容器的class
     */
    protected static clsItems: string;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
