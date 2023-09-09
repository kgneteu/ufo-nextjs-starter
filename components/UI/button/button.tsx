import { ChangeHandler } from 'react-hook-form';
import { forwardRef, ReactNode } from 'react';
import {
    createRipple,
    ElementBorderWidth,
    ElementColor,
    ElementElevation,
    ElementShape,
    ElementSize,
    getBorderClasses,
    getButtonSizeClasses,
    getElevationClasses,
    getShapeClasses,
} from '@/components/UI/utils';

export const Button = forwardRef<HTMLButtonElement, ButtonInputProps>((props: ButtonInputProps, ref) => {
    const {
        color = 'primary',
        label,
        title,
        name,
        type = 'button',
        size = 'medium',
        border = 1,
        children,
        outlined = false,
        filled = false,
        tonal = false,
        elevated = false,
        raised = false,
        shape = 'round',
        icon,
        elevation = 1,
        getSizeClassesFunc,
        getShapeClassesFunc,
        ...other
    } = props;

    const bgColor = `uui-bg-${color}`;
    const borderColor = `uui-border-${color}`;
    const textColor = `uui-text-${color}`;
    const contrastTextContrastColor = `uui-contrast-text-${color}`;

    const elemId = name;
    const content = label || children;

    const wrapperClasses: string[] = [];
    const inputClasses: string[] = [];
    const stateClasses: string[] = [];

    if (getShapeClassesFunc) {
        inputClasses.push(getShapeClassesFunc(shape));
    } else {
        inputClasses.push(getShapeClasses(shape));
    }

    if (getSizeClassesFunc) {
        stateClasses.push(getSizeClassesFunc(size));
    } else {
        stateClasses.push(getButtonSizeClasses(size));
    }

    wrapperClasses.push(bgColor);
    if (outlined) {
        wrapperClasses.push(borderColor);
        inputClasses.push(getBorderClasses(border));
        inputClasses.push('uui-outlined');
    } else {
        inputClasses.push(getBorderClasses(0));
    }

    if (raised) {
        inputClasses.push('uui-raised');
    }

    if (tonal) {
        inputClasses.push('uui-tonal');
    }

    if (elevated) {
        inputClasses.push('uui-elevated');
    }

    if (elevated || raised) {
        inputClasses.push(getElevationClasses(elevation));
    }

    if (filled) {
        inputClasses.push('uui-filled');
        wrapperClasses.push(contrastTextContrastColor);
    } else {
        wrapperClasses.push(textColor);
    }

    return (
        <div className={`uui-control-wrapper uui-button-wrapper ${wrapperClasses.join(' ')}`}>
            <button
                id={elemId}
                name={name}
                onClick={createRipple}
                ref={ref}
                type={type}
                {...other}
                className={'uui-control uui-button  ' + inputClasses.join(' ')}
                title={title}>
                <div className={'uui-button-state ' + stateClasses.join(' ')}>
                    {icon && <div className={'uuu-button-icon'}>{icon}</div>}
                    {content}
                </div>
            </button>
        </div>
    );
});

export interface ButtonInputProps {
    color?: ElementColor;
    elevation?: ElementElevation;
    type?: 'button' | 'submit' | 'reset';
    onChange?: ChangeHandler;
    max?: string | number;
    title?: string;
    required?: boolean;
    onBlur?: ChangeHandler;
    min?: string | number;
    name?: string;
    disabled?: boolean;
    children?: ReactNode;
    size?: ElementSize;
    outlined?: boolean;
    filled?: boolean;
    tonal?: boolean;
    elevated?: boolean;
    raised?: boolean;
    label?: string;
    icon?: ReactNode;
    shape?: ElementShape;
    border?: ElementBorderWidth;
    getSizeClassesFunc?: (size: ElementSize) => string;
    getShapeClassesFunc?: (size: ElementShape) => string;
}
