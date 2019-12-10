import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../../vis/netchart/plugins/contextmenu/contextmenu-item/contextmenu-item';
import { PdEventData } from '../../../../core/event';
/**
 * 图谱跳转元素工具配置
 */
export interface PdSDKToolJumpItemSettings extends PdVisContextmenuItemSettings {
    type?: string;
}
/**
 * 图谱跳转工具
 */
export declare class PdSDKToolJumpItem extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolJumpItemSettings;
    /**
     * 名称映射
     */
    static nameMap: {
        graph: string;
        path: string;
        relation: string;
        timing: string;
        pathTiming: string;
        relationTiming: string;
        explore: string;
        editor: string;
    };
    /**
     *  配置
     */
    settings: PdSDKToolJumpItemSettings;
    /**
     * 构造方法
     * @param {PdSDKToolJumpItemSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolJumpItemSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKToolJumpItemSettings} settings - 用户定义配置
     * @return {PdSDKToolJumpItemSettings} 配置
     */
    protected initSettings(settings: PdSDKToolJumpItemSettings): PdSDKToolJumpItemSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
    /**
     * 生成事件的数据
     */
    protected buildEventArguments(): any;
}
