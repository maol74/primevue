/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 *
 * @module checkbox
 *
 */
import { InputHTMLAttributes } from 'vue';
import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';

/**
 * Defines valid properties in Checkbox component.
 */
export interface CheckboxProps {
    /**
     * Value of the checkbox.
     */
    value?: any;
    /**
     * Value binding of the checkbox.
     */
    modelValue?: any;
    /**
     * Name of the input element.
     */
    name?: string | undefined;
    /**
     * Allows to select a boolean value instead of multiple values.
     * @default false
     */
    binary?: boolean;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * When present, it specifies that the element is required.
     * @default false
     */
    required?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     */
    tabindex?: number | undefined;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: any;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Style class of the input field.
     */
    inputClass?: any | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: any | undefined;
    /**
     * Uses to pass all properties of the HTMLInputElement to the focusable input element inside the component.
     */
    inputProps?: InputHTMLAttributes | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    'aria-label'?: string | undefined;
}

export interface CheckboxSlots {}

/**
 * Defines valid emits in Checkbox component.
 */
export interface CheckboxEmits {
    /**
     * Emitted when the page changes.
     * @param {*} value - New page value.
     */
    'update:page'(value: any): void;
    /**
     * Callback to invoke on value click.
     * @param {MouseEvent} event - Browser event.
     */
    click(event: MouseEvent): void;
    /**
     * Callback to invoke on value change.
     * @param {Event} event - Browser event.
     */
    change(event: Event): void;
    /**
     * Callback to invoke on value change.
     * @param {boolean} value - New value.
     */
    input(value: boolean): void;
}

/**
 * **PrimeVue - Checkbox**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primevue.org/checkbox/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo.svg)
 *
 * @group Component
 *
 */
export declare class Checkbox extends ClassComponent<CheckboxProps, CheckboxSlots, CheckboxEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Checkbox: GlobalComponentConstructor<Checkbox>;
    }
}

/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * Demos:
 *
 * - [Checkbox](https://www.primefaces.org/primevue/checkbox)
 *
 */
export default Checkbox;
