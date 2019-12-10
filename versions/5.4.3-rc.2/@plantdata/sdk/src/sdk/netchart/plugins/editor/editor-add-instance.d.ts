import { PdSDKEditorAddEntity, PdSDKEditorAddEntitySettings } from './editor-add-entity';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKAjaxSettings } from '../../../utils/service';
/**
 * 实例添加实体配置
 */
export interface PdSDKEditorAddInstanceSettings extends PdSDKEditorAddEntitySettings {
    /**
     *添加实体请求配置
     */
    addInstanceSettings?: PdSDKAjaxSettings;
}
/**
 * 实体添加工具
 */
export declare abstract class PdSDKEditorAddInstance extends PdSDKEditorAddEntity {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddInstanceSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddInstanceSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorAddInstanceSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKEditorAddInstanceSettings);
    /**
     * 添加实体的请求
     * @param params - 实例数据
     */
    addEntity(params: any): Promise<number>;
    /**
     * 添加后执行的事件
     * @param data - 父概念数据
     * @param promiseData - addEntity返回的数据
     */
    afterAddEntity(data: any, promiseData: any): void;
    /**
     * 获取编辑表单配置
     * @return {PdVisEditItemSettings[]} 配置
     */
    protected editFormSettingsGet(): PdVisEditItemSettings[];
    /**
     * 初始化配置
     * @param {PdSDKEditorAddInstanceSettings} settings - 用户定义配置
     * @return {PdSDKEditorAddInstanceSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAddInstanceSettings): PdSDKEditorAddInstanceSettings;
}
