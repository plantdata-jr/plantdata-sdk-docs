import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 标签配置项
 */
export interface PdUITagSettings extends PdEleCreatorSettings {
    /**
     *  自动移除的标签
     */
    autoRemove?: boolean;
    /**
     *  是否可移除的标签
     */
    removable?: boolean;
    /**
     *  标签尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
    /**
     *  标签类型
     */
    type?: '' | 'primary';
}
/**
 * 标签
 */
export declare class PdUITag {
    /**
     *  标签关闭标识的className
     */
    protected static clsActionName: string;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建标签的HTML字符串
     * @param {PdUITagSettings} settings - 配置项
     */
    static create(settings: PdUITagSettings): string;
    /**
     * 初始化标签
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
