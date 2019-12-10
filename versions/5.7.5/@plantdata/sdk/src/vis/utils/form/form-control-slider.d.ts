import { PdVisFormControl, PdVisFormControlSettings } from './form-control';
import { PdSelector } from '../../../common/common';
import { PdVisSlider, PdVisSliderSettings } from '../../utils/slider';
/**
 * 滑块编辑组件配置
 */
export interface PdVisFormControlSliderSettings extends PdVisFormControlSettings {
    /**
     *  滑块组件的配置
     */
    sliderSettings?: PdVisSliderSettings;
}
/**
 * 滑块编辑组件
 */
export declare class PdVisFormControlSlider extends PdVisFormControl {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisFormControlSliderSettings;
    /**
     *  配置
     */
    settings: PdVisFormControlSliderSettings;
    /**
     * 滑块组件
     */
    protected slider: PdVisSlider;
    /**
     * 构造方法
     * @param {PdVisFormControlSliderSettings} settings - 用户配置
     */
    constructor(settings?: PdVisFormControlSliderSettings);
    /**
     * 生成编辑组件内容模板
     */
    protected buildContentTemplate(): PdSelector;
    /**
     * 获取模板上的值
     */
    protected getTemplateValue(): any;
    /**
     * 初始化配置
     * @param {PdVisFormControlSliderSettings} settings - 用户定义配置
     * @return {PdVisFormControlSliderSettings} 配置
     */
    protected initSettings(settings: PdVisFormControlSliderSettings): PdVisFormControlSliderSettings;
    /**
     * 更新模板的值
     * @param data 值
     */
    protected updateTemplateValue(data: any): void;
}
