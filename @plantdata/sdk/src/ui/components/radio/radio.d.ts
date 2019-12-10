import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 单选配置项
 */
export interface PdUIRadioSettings extends PdEleCreatorSettings {
    /**
     *  单选中input的配置项
     */
    input?: PdEleCreatorSettings;
}
/**
 * 单选
 */
export declare class PdUIRadio {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIRadioSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建单选框的HTML字符串
     * @param {PdUIRadioSettings} settings - 配置项
     */
    static create(settings: PdUIRadioSettings): string;
}
