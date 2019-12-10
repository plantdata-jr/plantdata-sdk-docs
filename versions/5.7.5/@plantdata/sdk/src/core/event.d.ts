/**
 *  事件处理方法，不返回或返回true，返回true时将使触发事件的结果标识为true，否则标识为false
 */
export declare type PdEventHandler = (event: PdEventData) => void | true;
/**
 * 事件数据
 */
export interface PdEventData {
    /**
     * 触发事件的实例
     * @type{PdEvent}
     */
    self: PdEvent;
    /**
     *  其他数据
     */
    [key: string]: any;
}
/**
 * 事件
 */
export declare class PdEvent {
    /**
     * 在当前组件上通过addEvent方法添加的事件列表
     */
    protected allAddedEventHandlerMap: {
        [key: string]: {
            [key: string]: {
                scope: PdEvent;
                handler: PdEventHandler;
            };
        };
    };
    /**
     *  当前组件上绑定的事件列表
     */
    protected curEventHandlerMap: {
        [key: string]: PdEventHandler[];
    };
    /**
     *  事件数据
     */
    protected eventData: PdEventData;
    /**
     * 触发当前组件上绑定的事件
     * @param {string} eventType - 事件类型
     * @param exData - 附加数据
     * @return {boolean} 当涉及的事件处理方法返回true时结果为true，否则标识为false
     */
    dispatch(eventType: string, exData?: {
        [key: string]: any;
    }): boolean;
    /**
     * 取消当前组件本身绑定的事件
     * @param {string} eventType - 事件类型
     * @param {PdEventHandler} handler - 取消的处理方法
     */
    off(eventType: string, handler?: PdEventHandler): PdEvent;
    /**
     * 给当前组件本身绑定事件
     * @param {string} eventType - 事件类型
     * @param {PdEventHandler} handler - 事件处理方法
     */
    on(eventType: string, handler: PdEventHandler): PdEvent;
    /**
     * 指定组件绑定事件，与on方法不同的是，使用该方法可以指定绑定事件的组件，且使用该方法添加的事件可统一通过clearEvent移除
     * @param {string} eventType - 事件类型，绑定多个事件时使用,隔开
     * @param {(data: PdEventData) => void} handler - 事件处理方法
     * @param {PdEvent} scope - 绑定事件的对象，默认是当前组件本身
     * @param {string} id - 事件标识，方便移除时不需要指定添加事件处理方法的引用，而用标识代替，默认标识为default
     */
    protected addEvent(eventType: string, handler: PdEventHandler, scope?: PdEvent, id?: string): PdEvent;
    /**
     * 清空通过addEvent方法绑定的所有事件
     */
    protected clearEvent(): void;
    /**
     * 取消绑定指定标识的事件，默认是default标识的事件
     * @param {string} eventType - 事件类型
     * @param {string} id - 事件标识，默认值为default
     */
    protected removeEvent(eventType: string, id?: string): PdEvent;
}
