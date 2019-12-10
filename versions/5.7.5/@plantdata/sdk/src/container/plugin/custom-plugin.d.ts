/// <reference types="jquery" />
import { PdPlugin, PdPluginSettings } from './plugin';
import { PdSelector } from '../../common/common';
/**
 *  自定义插件配置
 */
export interface PdCustomPluginSettings extends PdPluginSettings {
    /**
     * 自定义插件的内容
     */
    $el: PdSelector;
    /**
     * 唯一标识
     */
    type: string;
}
/**
 *  自定义插件
 */
export declare class PdCustomPlugin extends PdPlugin {
    /**
     *  配置
     */
    settings: PdCustomPluginSettings;
    /**
     * 构造方法
     * @param {PdVisPluginHistorySettings} settings - 用户配置
     */
    constructor(settings?: PdCustomPluginSettings);
    /**
     * 获取插件的类型
     */
    getPluginType(): string;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
