/**
 * HSB 类型对象
 */
export declare type PdColorHSB = {
    /**
     * 色相
     */
    h?: number;
    /**
     * 饱和度
     */
    s?: number;
    /**
     * 明度
     */
    b?: number;
    /**
     * 透明度
     */
    a?: number;
};
/**
 * HSL 类型对象
 */
export declare type PdColorHSL = {
    /**
     * 色相
     */
    h?: number;
    /**
     * 饱和度
     */
    s?: number;
    /**
     * 亮度
     */
    l?: number;
    /**
     * 透明度
     */
    a?: number;
};
/**
 * RGB 类型对象
 */
export declare type PdColorRGB = {
    /**
     * 红色
     */
    r?: number;
    /**
     * 绿色
     */
    g?: number;
    /**
     * 蓝色
     */
    b?: number;
    /**
     * 透明度
     */
    a?: number;
};
/**
 * 颜色类型, hex格式、HSB格式、RGB格式、RGB格式的字符串，PdColorHSB格式、PdColorHSL格式、PdColorRGB格式对象
 */
export declare type PdColorType = string | PdColorHSB | PdColorHSL | PdColorRGB;
/**
 * 颜色转换工具集
 */
export declare class PdColorUtils {
    /**
     * HSB格式颜色转为HSL格式
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {PdColorHSL} HSL格式的颜色
     */
    static convertHSBToHSL(hsb: PdColorHSB): PdColorHSL;
    /**
     * HSB格式颜色转为Hex格式
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {string} Hex格式的颜色
     */
    static convertHSBToHex(hsb: PdColorHSB): string;
    /**
     * HSB格式颜色转为RGB格式
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {PdColorRGB} RGB格式的颜色
     */
    static convertHSBToRGB(hsb: PdColorHSB): PdColorRGB;
    /**
     * HSL格式颜色转为RGB格式.
     * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
     * h, s, 和 l 设定在 [0, 1] 之间
     * 返回的 r, g, 和 b 在 [0, 255]之间
     * @return {PdColorRGB} RGB格式的颜色
     */
    static convertHSLToRGB(hsl: PdColorHSL): PdColorRGB;
    /**
     * Hex格式颜色转为HSB格式
     * @param {string} hex - Hex格式的颜色
     * @return {PdColorHSB} HSB格式的颜色
     */
    static convertHexToHSB(hex: string): PdColorHSB;
    /**
     * Hex格式颜色转为RGB格式
     * @param {string} hex - Hex格式的颜色
     * @return {PdColorRGB} RGB格式的颜色
     */
    static convertHexToRGB(hex: string): PdColorRGB;
    /**
     * RGB格式颜色转为HSB格式
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @return {PdColorHSB} HSB格式的颜色
     */
    static convertRGBToHSB(rgb: PdColorRGB): PdColorHSB;
    /**
     * RGB格式颜色转为HSL格式.
     * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
     * r, g, 和 b 需要在 [0, 255] 范围内
     * 返回的 h, s, 和 l 在 [0, 1] 之间
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @return {PdColorHSL} HSL格式的颜色
     */
    static convertRGBToHSL(rgb: PdColorRGB): PdColorHSL;
    /**
     * RGB格式颜色转为Hex格式
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @return {string} Hex格式的颜色
     */
    static convertRGBToHex(rgb: PdColorRGB): string;
    /**
     * 颜色格式转化为HSB格式
     * @param {PdColorType} color - 颜色
     */
    static convertToHSB(color: PdColorType): PdColorHSB;
    /**
     * 校验并修改HSB格式的颜色，修复h, s, b, a值越界问题
     * @param {PdColorHSB} hsb - 颜色
     */
    static fixHSB(hsb: PdColorHSB): PdColorHSB;
    /**
     * 校验并修改HSL格式的颜色，修复h, s, l, a值越界问题
     * @param {PdColorHSL} hsl - 颜色
     */
    static fixHSL(hsl: PdColorHSL): PdColorHSL;
    /**
     * 校验并修改Hex格式的颜色，统一输出8位带Alpha透明度的值，如原值无透明度则增加ff
     * @param {string} hex - 颜色
     */
    static fixHex(hex: string): string;
    /**
     * 校验并修改RGB格式的颜色，修复r, g, b, a值越界问题
     * @param {PdColorRGB} rgb - 颜色
     */
    static fixRGB(rgb: PdColorRGB): PdColorRGB;
    /**
     * Alpha值近似为保留指定位数的值，默认为保留2位小数
     * @param {number} val - 原值
     * @param {number} precision - 保留位数，默认值为2
     */
    static roundAlpha(val: number, precision?: number): number;
    /**
     * HSB格式颜色h,s,b值近似为整数值
     * @param {PdColorHSB} hsb - HSB格式的颜色
     */
    static roundHSB(hsb: PdColorHSB): PdColorHSB;
    /**
     * HSL格式颜色h,s,l值近似为整数值
     * @param {PdColorHSL} hsl - HSL格式的颜色
     */
    static roundHSL(hsl: PdColorHSL): PdColorHSL;
}
