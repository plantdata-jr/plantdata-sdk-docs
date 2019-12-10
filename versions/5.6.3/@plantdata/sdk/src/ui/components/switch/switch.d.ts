import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 开关配置项
 */
export interface PdUISwitchSettings extends PdEleCreatorSettings {
    /**
     *  input配置项
     */
    input?: PdEleCreatorSettings;
    /**
     *  显示文字
     */
    label?: string[];
    /**
     *  尺寸
     */
    size?: '' | 'xs' | 'md';
}
/**
 * 开关
 */
export declare class PdUISwitch {
    /**
     *  默认配置
     */
    static defaultSettings: PdUISwitchSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建开关的HTML字符串
     * @param {PdUISwitchSettings} settings - 配置项
     */
    static create(settings: PdUISwitchSettings): string;
}
