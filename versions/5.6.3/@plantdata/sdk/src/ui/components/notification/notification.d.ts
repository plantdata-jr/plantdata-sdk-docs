/// <reference types="jquery" />
/**
 *  消息通知类型
 */
export declare type PdUINotificationType = 'info' | 'success' | 'error' | 'warn' | '';
/**
 * 消息通知配置
 */
export interface PdUINotificationSettings {
    /**
     *    通知描述
     */
    body?: string;
    /**
     *  默认自动关闭延时，单位毫秒, 设置为0时不自动关闭
     */
    delay?: number;
    /**
     *    消息图标地址
     */
    icon?: string;
    /**
     *    消息ID
     */
    id?: string;
    /**
     * 点击通知时触发的回调函数
     * @param {PdUINotificationSettings} settings - 消息通知配置
     */
    onClick?: (settings: PdUINotificationSettings) => void;
    /**
     * 关闭通知时触发的回调函数
     * @param {PdUINotificationSettings} settings - 消息通知配置
     */
    onClose?: (settings: PdUINotificationSettings) => void;
    /**
     * 显示通知时触发的回调函数
     * @param {PdUINotificationSettings} settings - 消息通知配置
     */
    onShow?: (settings: PdUINotificationSettings) => void;
    /**
     *  消息显示位置，可选：topLeft，topRight，bottomRight，bottomLeft
     */
    position?: string;
}
/**
 * 消息通知列队中的内容
 */
export interface PdUINotificationQueueItem {
    /**
     *  显示内容
     */
    notificationHTML: string;
    /**
     *  消息通知配置
     */
    settings: PdUINotificationSettings;
    /**
     *  是否可见
     */
    visible?: boolean;
}
/**
 * 消息通知
 */
export declare class PdUINotification {
    /**
     *  默认配置
     */
    static defaultSettings: PdUINotificationSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     *  关闭按钮的className
     */
    protected static clsCloseName: string;
    /**
     *  消息内容的className
     */
    protected static clsContentName: string;
    /**
     *  消息内容容器的className
     */
    protected static clsContentContainerName: string;
    /**
     *  消息描述容器的className
     */
    protected static clsDescName: string;
    /**
     *  消息图标的className
     */
    protected static clsFlagName: string;
    /**
     *  圆形消息图标的className
     */
    protected static clsFlagCircleName: string;
    /**
     *  显示状态的className
     */
    protected static clsShowName: string;
    /**
     *  消息文本的className
     */
    protected static clsTextName: string;
    /**
     *  消息标题的className
     */
    protected static clsTitleName: string;
    /**
     *  消息通知的列队
     */
    protected static queue: {
        [key: string]: PdUINotificationQueueItem[];
    };
    /**
     * 关闭消息通知
     * @param {string} id - 需要关闭的消息通知对象的id
     */
    static close(id: string): void;
    /**
     * 创建自定义的消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 自定义消息通知
     */
    static custom(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建错误消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 错误消息通知
     */
    static error(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建提示消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 提示消息通知
     */
    static info(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建成功消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 成功消息通知
     */
    static success(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建警告消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 警告消息通知
     */
    static warn(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建警告消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 警告消息通知
     */
    static warning(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 添加事件监听
     * @param {JQuery} $notification - 消息通知的JQuery对象
     * @param {PdUINotificationSettings} settings - 配置项
     * @param {Function} callback - 事件结束时的回调
     * @param {string} end - 事件结束时的标识
     */
    protected static addListener($notification: JQuery, settings: PdUINotificationSettings, callback: Function, end: string): void;
    /**
     * 添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @param {PdUINotificationType} type - 消息通知类型
     * @return {string} - 消息通知的ID
     */
    protected static addToQueue(notification: string, settings: PdUINotificationSettings, type: PdUINotificationType): string;
    /**
     * 创建消息提示的提示内容
     * @param {string} notification - 消息标题
     * @param {PdUINotificationSettings} settings - 配置
     * @param {PdUINotificationType} type - 类型
     * @return {string} 息提示的提示内容的HTML
     */
    protected static createNotification(notification: string, settings: PdUINotificationSettings, type: PdUINotificationType): string;
    /**
     * 移除消息通知
     * @param {JQuery} $notification - 消息通知的JQuery对象
     * @param {PdUINotificationSettings} settings - 配置项
     */
    protected static remove($notification: JQuery, settings: PdUINotificationSettings): void;
    /**
     * 显示消息通知
     * @param {string} notificationHTML
     * @param {PdUINotificationSettings} settings - 配置项
     */
    protected static show(notificationHTML: string, settings: PdUINotificationSettings): void;
    /**
     * 从队列里获取消息通知并显示，同时显示不超过3个
     */
    protected static showNotification(): void;
}
