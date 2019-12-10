import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 卡片的配置
 */
export interface PdUICardSettings extends PdEleCreatorSettings {
    /**
     *  卡片的主体
     */
    body: string | PdEleCreatorSettings;
    /**
     *  卡片的底部
     */
    foot?: string | PdEleCreatorSettings;
    /**
     *  卡片的头部
     */
    head?: string | PdEleCreatorSettings;
}
/**
 * 卡片
 */
export declare class PdUICard {
    /**
     *  卡片的主体className
     */
    protected static clsBodyName: string;
    /**
     *  卡片的底部className
     */
    protected static clsFootName: string;
    /**
     *  卡片的头部className
     */
    protected static clsHeadName: string;
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建卡片的HTML字符串
     * @param {PdUICardSettings} settings - 配置项
     */
    static create(settings?: PdUICardSettings): string;
}
