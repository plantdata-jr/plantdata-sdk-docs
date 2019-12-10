import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 蒙版配置
 */
export interface PdUIMaskSettings extends PdEleCreatorSettings {
}
/**
 * 蒙版
 */
export declare class PdUIMask {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIMaskSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建蒙版的HTML字符串
     * @param {PdUIMaskSettings} settings - 配置项
     */
    static create(settings?: PdUIMaskSettings): string;
}
