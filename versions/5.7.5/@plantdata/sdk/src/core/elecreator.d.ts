/**
 * DOM字符串创建配置
 */
export interface PdEleCreatorSettings {
    /**
     *  属性
     */
    atts?: {
        [key: string]: any;
    };
    /**
     *  类
     */
    cls?: string;
    /**
     *  内部HTML
     */
    html?: any;
    /**
     *  样式
     */
    style?: {
        [key: string]: any;
    };
}
/**
 * DOM字符串创建
 */
export declare class PdEleCreator {
    /**
     * 创建DOM字符串，会自动对attribute和style进行xss过滤
     * @param {string} tagName - DOM的tagName
     * @param {PdEleCreatorSettings} settings - DOM字符串创建配置
     * @param {boolean} selfClose - 是否自闭和元素
     * @param {boolean} xssFilter - 是否对内容进行XSS过滤，暂时只支持标准的过滤，如需要设置过滤规则，请先过滤完后设置settings的HTML内容
     * @return {string} DOM字符串
     */
    static createEle(tagName: string, settings?: PdEleCreatorSettings, selfClose?: boolean, xssFilter?: boolean): string;
}
