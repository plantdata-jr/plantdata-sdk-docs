import { PdVisPluginFloatButton, PdVisPluginFloatButtonSettings } from '../../../../vis/netchart/plugins/float-button';
import { PdSDKPluginAdvancedPromptDialog, PdSDKPluginAdvancedPromptDialogSettings } from './advanced-prompt-dialog';
import { PdSDKNetChartDataNode } from '../../model';
/**
 *  高级检索插件配置
 */
export interface PdSDKPluginAdvancedPromptSettings extends PdVisPluginFloatButtonSettings {
    /**
     * 高级搜索配置
     */
    dialogSettings?: PdSDKPluginAdvancedPromptDialogSettings;
    /**
     * 是否隐藏按钮
     */
    isHideButton?: boolean;
}
/**
 * 高级检索插件
 */
export declare class PdSDKPluginAdvancedPrompt extends PdVisPluginFloatButton {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginAdvancedPromptSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginAdvancedPromptSettings;
    /**
     * 弹框实例
     */
    protected dialog: PdSDKPluginAdvancedPromptDialog;
    /**
     * 构造方法
     * @param {PdSDKPluginAdvancedPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginAdvancedPromptSettings);
    /**
     * 关闭弹框
     */
    closeDialog(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取已选分析对象数据
     */
    getTagData(): PdSDKNetChartDataNode[];
    /**
     * 打开弹框
     */
    openDialog(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginAdvancedPromptSettings} settings - 用户定义配置
     * @return {PdSDKPluginAdvancedPromptSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginAdvancedPromptSettings): PdSDKPluginAdvancedPromptSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
