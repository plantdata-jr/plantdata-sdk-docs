import { PdSDKEditorDefine, PdSDKEditorDefineSettings } from './editor-define';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialog, PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKNetChartData, PdSDKNetChartDataLink, PdSDKNetChartDataNode } from '../../model';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineAttributeSettings extends PdSDKEditorDefineSettings {
}
/**
 * 属性定义工具
 */
export declare abstract class PdSDKEditorDefineAttribute extends PdSDKEditorDefine {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineAttributeSettings;
    /**
     * 添加弹框实例
     */
    addDialog: PdVisDialog;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineAttributeSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKEditorDefineAttributeSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取数值属性定义列表tr的html
     */
    getAttributeTr(item: any): string;
    /**
     * 根据选中节点更新状态
     * @param {PdSDKNetChartDataNode[]} nodes - 选中节点
     * @param {PdSDKNetChartDataLink[]} links - 选中边
     * @param {PdSDKNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdSDKNetChartDataNode[], links: PdSDKNetChartDataLink[], graphData?: PdSDKNetChartData): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 获取表单配置
     * @return {PdVisEditItemSettings[]} 表单配置
     */
    protected abstract getEditFormSettings(): PdVisEditItemSettings[];
    /**
     * 获取类型列表
     * @return { [key: number]: string } 类型列表
     */
    protected abstract getTypeList(): {
        [key: number]: string;
    };
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
}
