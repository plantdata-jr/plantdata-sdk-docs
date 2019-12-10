import { PdSDKEditorAddEntity, PdSDKEditorAddEntitySettings } from './editor-add-entity';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKAjaxSettings } from '../../../utils/service';
/**
 * 概念添加工具配置
 */
export interface PdSDKEditorAddConceptSettings extends PdSDKEditorAddEntitySettings {
    /**
     *添加概念请求配置
     */
    addConceptSettings?: PdSDKAjaxSettings;
}
/**
 * 概念添加工具
 */
export declare abstract class PdSDKEditorAddConcept extends PdSDKEditorAddEntity {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddConceptSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddConceptSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorAddConceptSettings} settings - 用户配置
     */
    protected constructor(settings?: PdSDKEditorAddConceptSettings);
    /**
     * 添加概念的请求
     * @param params - 概念数据
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
     * @param {PdSDKEditorAddConceptSettings} settings - 用户定义配置
     * @return {PdSDKEditorAddConceptSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAddConceptSettings): PdSDKEditorAddConceptSettings;
}
