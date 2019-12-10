/// <reference types="jquery" />
import { PdTabPanel, PdTabPanelChildSettings } from '../tab';
import { PdComponent } from '../../../../core/component';
/**
 * 主面板
 */
export declare class PdMainPanel extends PdTabPanel {
    /**
     * 添加子面板
     * @param {PdComponent} child - 子面板组件
     * @param {PdPanelChildSettings} settings - 子面板配置
     * @param {PdSelector} $el - 子面板选择器
     * @return {string} 子面板Id
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
