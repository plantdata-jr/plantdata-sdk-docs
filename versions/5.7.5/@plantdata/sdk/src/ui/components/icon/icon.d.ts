import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 图标配置
 */
export interface PdUIIconSettings extends PdEleCreatorSettings {
    /**
     *  图标
     */
    icon?: string;
}
/**
 * 图标
 */
export declare class PdUIIcon {
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建图标的HTML字符串
     * @param {PdUIIconSettings} settings - 配置项
     */
    static create(settings?: PdUIIconSettings): string;
}
