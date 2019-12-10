/**
 * 图标工具集
 * */
export declare class PdIconUtils {
    /**
     * 图标常用viewBox
     */
    static viewBox: {
        [key: string]: string;
    };
    /**
     * 创建SVG字符串
     * @param {string} content - SVG的内容
     * @param {object} [atts] - SVG的属性
     * @return {String} SVG字符串
     * */
    static createSVGStr(content: string, atts?: {
        [key: string]: any;
    }): string;
}
