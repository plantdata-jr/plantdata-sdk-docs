import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 栅格配置
 */
export interface PdUILayoutSettings extends PdEleCreatorSettings {
    /**
     *  栅格之间的间隔
     */
    gutter?: 8 | 16 | 24;
}
/**
 * 栅格元素配置
 */
export interface PdUILayoutColSettings extends PdEleCreatorSettings {
    /**
     *  栅格列数
     */
    cols: number | {
        [key: string]: number;
    };
}
/**
 * 栅格
 */
export declare class PdUILayout {
    /**
     *  默认的className
     */
    protected static clsName: string;
    /**
     *  默认的class
     */
    protected static cls: string;
    /**
     *  行的className
     */
    protected static clsRowName: string;
    /**
     * 创建栅格的HTML字符串
     * @param {PdUILayoutSettings} settings - 配置项
     */
    static create(settings?: PdUILayoutSettings): string;
    /**
     * 创建栅格列的HTML字符串
     * @param {PdUILayoutColSettings} settings - 配置项
     */
    static createCol(settings: PdUILayoutColSettings): string;
}
