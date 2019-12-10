/**
 * 导出工具
 * */
export declare class PdExportUtil {
    /**
     * 导出文件
     * @param {string} url - 需要导出的内容，符合Data URI Schema定义
     * @param {string} name - 导出的文件名称
     * */
    static export(url: string, name: string): void;
    /**
     * 导出图片
     * @param {string} url - 需要导出的内容，符合Data URI Schema定义的图片数据
     * @param {string} type - 需要导出的图片类型，默认png
     * @param {string} filename - 导出的图片名称，默认为时间戳加上图片类型
     * */
    static exportImg(url: string, type?: string, filename?: string): void;
    /**
     * 导出Canvas中的内容成图片
     * @param {HTMLCanvasElement} canvas - 需要导出的Canvas对象
     * @param {string} type - 需要导出的图片类型，默认png
     * @param {string} filename - 导出的图片名称，默认为时间戳加上图片类型
     * */
    static exportImgInCanvas(canvas: HTMLCanvasElement, type?: string, filename?: string): void;
}
