import { ICSSFilter, IFilterXSSOptions } from 'xss';
/**
 * XSS预防工具集
 * */
export declare class PdXSSUtils {
    /**
     * 过滤Attribute攻击代码
     * @param tag HTML标签
     * @param name 属性名称
     * @param value 属性值
     * @param filter css过滤器
     */
    static filterAttribute(tag: string, name: string, value: string, filter?: ICSSFilter): string;
    /**
     * 过滤xss攻击代码
     * @param html 源字符串
     * @param options 过滤规则配置
     */
    static xss(html: string, options?: IFilterXSSOptions): string;
}
