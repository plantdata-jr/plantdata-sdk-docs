import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 输入框配置
 */
export interface PdUIInputSettings extends PdEleCreatorSettings {
    /**
     *  输入框尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 输入框
 */
export declare class PdUIInput {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIInputSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建输入框的HTML字符串
     * @param {PdUIInputSettings} settings - 配置项
     */
    static create(settings?: PdUIInputSettings): string;
}
