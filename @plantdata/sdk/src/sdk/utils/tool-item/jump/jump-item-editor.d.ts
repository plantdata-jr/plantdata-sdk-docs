import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemEditorSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemEditor extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemEditorSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemEditorSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemEditorSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemEditorSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemEditorSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemEditorSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemEditorSettings): PdSDKToolJumpItemEditorSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
