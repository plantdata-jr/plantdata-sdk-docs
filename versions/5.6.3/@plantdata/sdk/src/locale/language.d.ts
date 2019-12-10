/**
 * 语言包模块
 */
export declare class PdLanguage {
    /**
     * 语言包
     */
    private static language;
    /**
     * 获取文本字符串
     * @param path 文本在语言包中的路径
     * @param args 待替换文本
     */
    static getStr(path: string, args?: string[]): string;
    /**
     * 获取语言包指定路径的内容
     * @param path 文本在语言包中的路径
     */
    static getTree(path: string): {
        [key: string]: any;
    };
    /**
     * 设置语言包翻译，如是已存在的语言包将做自动合并，用户设置的优先
     * @param settings 语言包的内容
     * @param lang 语言
     */
    static setLanguage(settings: {
        [key: string]: any;
    }, lang?: string): void;
}
