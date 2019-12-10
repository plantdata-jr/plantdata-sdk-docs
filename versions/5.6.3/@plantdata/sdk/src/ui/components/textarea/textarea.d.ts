import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 文本域的配置项
 */
export interface PdUITextareaSettings extends PdEleCreatorSettings {
    /**
     *  文本域的内容
     */
    content?: string;
    /**
     *  文本域尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 文本域
 */
export declare class PdUITextarea {
    /**
     *  默认配置
     */
    static defaultSettings: PdUITextareaSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建文本域的HTML字符串
     * @param {PdUITextareaSettings} settings - 配置项
     */
    static create(settings?: PdUITextareaSettings): string;
}
