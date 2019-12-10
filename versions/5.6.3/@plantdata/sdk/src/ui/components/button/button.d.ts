import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 按钮的配置
 */
export interface PdUIButtonSettings extends PdEleCreatorSettings {
    /**
     *  按钮尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
    /**
     *  按钮类型
     */
    type?: '' | 'primary' | 'primary-outline';
}
/**
 * 按钮
 */
export declare class PdUIButton {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIButtonSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建按钮的HTML字符串
     * @param {PdUIButtonSettings} settings - 配置项
     */
    static create(settings?: PdUIButtonSettings): string;
}
