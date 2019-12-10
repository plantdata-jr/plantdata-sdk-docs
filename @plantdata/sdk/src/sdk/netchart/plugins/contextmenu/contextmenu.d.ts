import { PdSDKPluginSettings } from '../plugin';
import { PdVisPluginContextmenu, PdVisPluginContextmenuSettings } from '../../../../vis/netchart/plugins/contextmenu';
import { PdVisToolItem, PdVisToolItemSettings } from '../../../../vis/utils/tool-item/tool-item';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKEditorToolSettings } from '../editor/editor-tool';
import { PdSDKKGSettings } from '../../../utils/service';
/**
 * 右击菜单项配置
 */
export interface PdSDKContextmenuItemSettings {
    /**
     * 子菜单
     */
    children?: (string | PdVisToolItemSettings)[];
    /**
     * 构造方法
     * @param {PdVisToolItemSettings} settings - 配置
     */
    constr?: new (settings?: PdVisToolItemSettings) => PdVisToolItem;
    /**
     * 是否启用
     */
    enable?: boolean;
    /**
     * 是否可视化编辑菜单
     */
    isEdit?: boolean;
    /**
     * 配置
     */
    settings?: PdVisToolItemSettings;
}
/**
 * 右键菜单插件配置
 */
export interface PdSDKPluginContextmenuSettings extends PdSDKKGSettings, PdSDKPluginSettings, PdVisPluginContextmenuSettings {
    /**
     * 是否允许可视化编辑
     */
    editEnable?: boolean;
    /**
     * 可视化编辑公有配置
     */
    editSettings?: PdSDKEditorToolSettings;
    /**
     * 菜单配置
     */
    menu?: {
        [key: string]: PdSDKContextmenuItemSettings;
    };
    /**
     *  获取下拉提示配置
     */
    promptSettings?: PdSDKPromptSettings;
}
/**
 * 右键菜单插件
 */
export declare class PdSDKPluginContextmenu extends PdVisPluginContextmenu {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginContextmenuSettings;
    /**
     * 禁用编辑配置
     */
    static editDisableSettings: PdSDKPluginContextmenuSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginContextmenuSettings;
    /**
     * 构造方法
     * @param {PdSDKPluginContextmenuSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginContextmenuSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 新建工具选项
     */
    protected createToolItem(item: string | PdVisToolItemSettings): PdVisToolItem;
    /**
     * 创建通用工具配置
     */
    protected createToolItemSettings(settings?: PdVisToolItemSettings, isEdit?: boolean): PdVisToolItemSettings;
    /**
     * 生成工具选项
     */
    protected createToolItems(items: (string | PdVisToolItemSettings)[]): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginContextmenuSettings} settings - 用户定义配置
     * @return {PdSDKPluginContextmenuSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginContextmenuSettings): PdSDKPluginContextmenuSettings;
}
