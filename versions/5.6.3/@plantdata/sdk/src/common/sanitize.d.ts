/**
 * 净化代码工具
 * */
export declare class PdSanitizeUtil {
    /**
     * 全部的标识
     */
    protected static ALL: string;
    /**
     * 规则的正则
     */
    protected static REGEX_PROTOCOL: RegExp;
    /**
     * 相对的标识
     */
    protected static RELATIVE: string;
    /**
     * 默认规则配置列表
     */
    static SETTINGS: {
        BASIC: {
            elements: string[];
            attributes: {
                'a': string[];
                'blockquote': string[];
                'q': string[];
            };
            addAttributes: {
                'a': {
                    'rel': string;
                };
            };
            protocols: {
                'a': {
                    'href': string[];
                };
                'blockquote': {
                    'cite': string[];
                };
                'q': {
                    'cite': string[];
                };
            };
        };
        RELAXED: {
            elements: string[];
            attributes: {
                'a': string[];
                'blockquote': string[];
                'col': string[];
                'colgroup': string[];
                'img': string[];
                'ol': string[];
                'q': string[];
                'table': string[];
                'td': string[];
                'th': string[];
                'ul': string[];
            };
            protocols: {
                'a': {
                    'href': string[];
                };
                'blockquote': {
                    'cite': string[];
                };
                'img': {
                    'src': string[];
                };
                'q': {
                    'cite': string[];
                };
            };
        };
        RESTRICTED: {
            elements: string[];
        };
    };
    /**
     * 允许的元素
     */
    protected allowedElements: {
        [key: string]: boolean;
    };
    /**
     * 当前元素
     */
    protected currentElement: Node;
    /**
     * 文档树
     */
    protected dom: Document;
    /**
     * 当前的规则
     */
    protected settings: any;
    /**
     * 转换器的列表
     */
    protected transformers: any[];
    /**
     * 白名单节点列表
     */
    protected whitelistNodes: any[];
    /**
     * 构造方法
     * @param [settings= PdSanitizeUtil.SETTINGS.RELAXED] - 净化配置
     * */
    constructor(settings?: any);
    /**
     * 净化危险节点
     * @param {Element} container - 需要净化的元素
     * @return {DocumentFragment} 净化后的代码片段
     * */
    cleanElement(container: Element): DocumentFragment;
    /**
     * 净化危险的HTML字符串
     * @param {string} str - 需要净化的HTML字符串
     * @return {string} 净化后的HTML字符串
     * */
    cleanHTML(str: string): string;
}
