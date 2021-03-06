import { PdEventData } from '../../../../core/event';
import { PdSDKToolJumpItem, PdSDKToolJumpItemSettings } from './jump-item';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemRelationSettings extends PdSDKToolJumpItemSettings {
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItemRelation extends PdSDKToolJumpItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemRelationSettings;
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemRelationSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemSettings);
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemRelationSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemRelationSettings): PdSDKToolJumpItemRelationSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
