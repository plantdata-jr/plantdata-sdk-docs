import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 加载动画配置项
 */
export interface PdUISpinSettings extends PdEleCreatorSettings {
    /**
     *  加载动画的尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 加载动画
 */
export declare class PdUISpin {
    /**
     *  默认配置
     */
    static defaultSettings: PdUISpinSettings;
    /**
     *  加载动画容器的className
     */
    protected static clsContainerName: string;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建加载动画的HTML字符串
     * @param {PdUISpinSettings} settings - 配置项
     */
    static create(settings?: PdUISpinSettings): string;
}
