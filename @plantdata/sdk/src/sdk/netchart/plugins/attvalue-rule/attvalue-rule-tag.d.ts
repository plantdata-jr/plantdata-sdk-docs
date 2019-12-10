/// <reference types="jquery" />
import { PdSelector } from '../../../../common/common';
import { PdKGSchema } from '../../../model/schema';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
import { PdEventData } from '../../../../core/event';
import { PdSDKPluginAttValueRuleDialog } from './attvalue-rule-dialog';
import { PdUIModalSettings } from '../../../../ui/components/modal/modal';
import { PdSDKKGSettings } from '../../../utils/service';
/**
 *  属性值筛选插件配置
 */
export interface PdSDKPluginAttValueRuleTagSettings extends PdSDKPluginSettings, PdSDKKGSettings {
    /**
     * 允许的属性
     */
    allowAtts?: string[];
    /**
     * 允许的实体
     */
    allowTypes?: string[];
    /**
     * 弹框的容器
     */
    parent?: PdSelector;
}
/**
 * 属性值筛选插件
 */
export declare class PdSDKPluginAttValueRuleTag extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginAttValueRuleTagSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginAttValueRuleTagSettings;
    /**
     * 允许的属性
     */
    protected allowAtts: string[];
    /**
     * 允许的实体
     */
    protected allowTypes?: string[];
    /**
     * 配置结果
     */
    protected data: any[];
    /**
     * 编辑弹框实例
     */
    protected editDialog: PdSDKPluginAttValueRuleDialog;
    /**
     * 当前编辑条目
     */
    protected editIndex: number;
    /**
     * 构造方法
     * @param {PdSDKPluginAttValueRuleTagSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginAttValueRuleTagSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 过滤可配置的属性值筛选项
     * @params allowAtts - 允许的属性
     * @params allowTypes - 允许的实体
     */
    filterValue(allowAtts?: string[], allowTypes?: string[]): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取值
     * @return {any[]} 值
     */
    getValue(): any[];
    /**
     * 设置允许的属性类型
     * @param allowAtts - 允许的属性类型ID列表
     */
    setAllowAtts(allowAtts?: string[]): void;
    /**
     * 设置允许的实体类型
     * @param allowTypes - 允许的实体类型ID列表
     */
    setAllowTypes(allowTypes?: string[]): void;
    /**
     * 设置值
     * @param {any[]} value - 值
     */
    setValue(value?: any[]): void;
    /**
     * 添加规则
     * @param settings 弹框配置
     */
    showAdd(settings?: PdUIModalSettings): void;
    /**
     * 更新schema
     * @param {PdKGSchema} schema
     */
    updateSchema(schema: PdKGSchema): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成拍摄快照时的环境
     */
    protected buildSnapshotEnv(data: PdEventData): {
        [key: string]: any;
    };
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 渲染边过滤条件
     */
    protected drawList(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginAttValueRuleTagSettings} settings - 用户定义配置
     * @return {PdSDKPluginAttValueRuleTagSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginAttValueRuleTagSettings): PdSDKPluginAttValueRuleTagSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 还原拍摄快照时的环境
     */
    protected restoreSnapshotEnv(env: {
        [key: string]: any;
    }, data: PdEventData): void;
    /**
     * 添加或更新属性过滤配置的结果
     * @param settings 配置
     */
    protected saveItem(settings: any): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
