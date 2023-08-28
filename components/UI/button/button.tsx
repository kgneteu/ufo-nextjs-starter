import { ChangeHandler } from 'react-hook-form';
import { forwardRef, ReactNode } from 'react';
import {
    createRipple,
    ElementColor,
    ElementShape,
    ElementSize,
    getButtonSizeClasses,
    getShapeClasses,
} from '@/components/UI/utils';

export const Button = forwardRef<HTMLButtonElement, ButtonInputProps>((props: ButtonInputProps, ref) => {
    const {
        color = 'primary',
        label,
        title,
        name,
        type = 'button',
        size = 'large',
        children,
        outlined = false,
        filled = false,
        raised = false,
        shape = 'rounded',
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

    wrapperClasses.push(getShapeClasses(shape));
    inputClasses.push(getButtonSizeClasses(size));

    if (outlined) {
        wrapperClasses.push(borderColor);
        wrapperClasses.push('uui-outlined');
    }

    if (raised) {
        wrapperClasses.push('uui-raised');
    }

    if (filled) {
        wrapperClasses.push(bgColor);
        wrapperClasses.push('uui-filled');
        wrapperClasses.push(contrastTextContrastColor);
    } else {
        wrapperClasses.push(textColor);
    }

    return (
        <div className={'FormControl ' + wrapperClasses.join(' ')}>
            <button
                id={elemId}
                name={name}
                onClick={createRipple}
                ref={ref}
                type={type}
                {...other}
                className={'FormButton  ' + inputClasses.join(' ')}
                title={title}>
                {content}
            </button>
        </div>
    );
});

interface ButtonInputProps {
    color?: ElementColor;
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
    raised?: boolean;
    label?: string;
    shape?: ElementShape;
}
