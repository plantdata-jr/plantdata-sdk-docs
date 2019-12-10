/// <reference types="jquery" />
import { PdTabPanel, PdTabPanelChildSettings, PdTabPanelSettings } from '../tab';
import { PdComponent } from '../../../../core/component';
/**
 * 主面板
 */
export declare class PdMainPanel extends PdTabPanel {
    /**
     * 构造方法
     * @param {PdTabPanelSettings} settings - 用户配置
     */
    constructor(settings?: PdTabPanelSettings);
    /**
     * 添加子组件
     * @param {PdComponent} child - 子组件组件
     * @param {PdPanelChildSettings} settings - 子组件配置
     * @param {PdSelector} $el - 子组件选择器
     * @return {string} 子组件Id
     */
    addChild(child: PdComponent, settings?: PdTabPanelChildSettings, $el?: JQuery<HTMLElement>): string;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
