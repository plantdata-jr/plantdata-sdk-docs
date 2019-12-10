/**
 * 校验工具集
 * */
export declare class PdValidatorUtils {
    /**
     * 判断密码等级，字母、数字、特殊符号、最小长度规则，当不满足最小长度时，返回0
     * @param {string} str - 密码字符串
     * @param {number} minLen - 密码最小长度，默认为6位
     * @return {(0|1|2|3)} 密码等级0-3，越大越强
     * */
    static calcPwdLevel(str: string, minLen?: number): number;
    /**
     * 是否全部中文字符串
     * @param {string} str - 需要校验的字符串
     * */
    static isChinese(str: string): boolean;
    /**
     * 是否email地址字符串
     * @param {string} str - 需要校验的字符串
     * */
    static isEmail(str: string): boolean;
    /**
     * 是否全部英文字符串
     * @param {string} str - 需要校验的字符串
     * */
    static isEnglish(str: string): boolean;
    /**
     * 是否中国第二代身份证
     * @param {string} str - 需要校验的字符串
     * */
    static isIdCard(str: string): boolean;
    /**
     * 是否png|jpg|jpeg后缀的图片地址
     * @param {string} str - 需要校验的字符串
     * */
    static isImage(str: string): boolean;
    /**
     * 是否手机号字符串
     * @param {string} str - 需要校验的字符串
     * */
    static isMobile(str: string): boolean;
    /**
     * 是否数字字符串
     * @param {string} str - 需要校验的字符串
     * */
    static isNumber(str: string): boolean;
}
