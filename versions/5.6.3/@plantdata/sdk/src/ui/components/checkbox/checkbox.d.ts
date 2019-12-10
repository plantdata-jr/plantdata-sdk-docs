import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 复选框的配置
 */
export interface PdUICheckboxSettings extends PdEleCreatorSettings {
    /**
     *  复选框中input的配置
     */
    input?: PdEleCreatorSettings;
}
/**
 * 复选框
 */
export declare class PdUICheckbox {
    /**
     *  默认配置
     */
    static defaultSettings: PdUICheckboxSettings;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建复选框的HTML字符串
     * @param {PdUICheckboxSettings} settings - 配置项
     */
    static create(settings: PdUICheckboxSettings): string;
}
