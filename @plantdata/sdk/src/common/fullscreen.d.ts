/**
 * 全屏工具集，F11的全屏导致暂不能正常使用
 * */
export declare class PdFullscreenUtils {
    /**
     * 文档树
     */
    static document: any;
    /**
     * 全屏相关的API映射，兼容webkit, moz, ms, old webkit等
     */
    static API: any;
    /**
     * change, error事件名称的映射
     */
    static eventNameMap: {
        change: any;
        error: any;
    };
    /**
     * 是否允许键盘
     */
    static keyboardAllowed: boolean;
    /**
     * 当前全屏的元素
     */
    static element(): any;
    /**
     * 是否支持全屏
     */
    static enabled(): boolean;
    /**
     * 退出全屏，返回promise对象
     */
    static exit(): Promise<unknown>;
    /**
     * 是否全屏状态
     */
    static isFullscreen(): boolean;
    /**
     * 移除事件监听
     * @param event 事件名称
     * @param callback 事件回调
     */
    static off(event: string, callback: (event: Event) => void): void;
    /**
     * 添加事件监听
     * @param event 事件名称
     * @param callback 事件回调
     */
    static on(event: string, callback: (event: Event) => void): void;
    /**
     * 设置全屏状态切换的事件回调
     * @param callback 全屏状态切换的事件回调
     */
    static onChange(callback: (event: Event) => void): void;
    /**
     * 设置全屏状态切换时发生错误的事件回调
     * @param callback 全屏状态切换时发生错误的事件回调
     */
    static onError(callback: (event: Event) => void): void;
    /**
     * 全屏展示，返回promise对象
     * @param elem 需要全屏展示的元素
     */
    static request(elem?: any): Promise<unknown>;
    /**
     * 切换全屏展示状态，返回promise对象
     * @param elem 需要全屏展示的元素，仅切换为全屏时有效
     */
    static toggle(elem?: any): Promise<unknown>;
}
