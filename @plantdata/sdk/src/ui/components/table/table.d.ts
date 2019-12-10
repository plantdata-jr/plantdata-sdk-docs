import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 表格配置项
 */
export interface PdUITableSettings extends PdEleCreatorSettings {
}
/**
 * 表格
 */
export declare class PdUITable {
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     * 创建表格的HTML字符串
     * @param {PdUITableSettings} settings - 配置项
     */
    static create(settings: PdUITableSettings): string;
}
