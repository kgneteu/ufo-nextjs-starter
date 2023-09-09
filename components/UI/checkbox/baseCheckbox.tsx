import { forwardRef, ReactNode, useState } from 'react';
import { createRipple, uniqueID } from '@/components/UI/utils';
import { CheckboxProps } from '@/components/UI/types';

export interface BaseCheckboxProps extends CheckboxProps {
    baseClassName?: string;
    baseIcon?: ReactNode;
    type: 'radio' | 'checkbox';
}

export const BaseCheckbox = forwardRef<HTMLInputElement, BaseCheckboxProps>((props: BaseCheckboxProps, ref) => {
    const {
        checked,
        color = 'primary',
        id,
        label,
        title,
        onChange,
        defaultChecked,
        type = 'checkbox',
        children,
        baseClassName,
        baseIcon,
        ...other
    } = props;

    const [isChecked, setIsChecked] = useState(
        checked !== undefined ? checked : defaultChecked === undefined ? false : defaultChecked
    );
    const elemId = id || uniqueID('checkbox');

    const bgColor = `uui-bg-${color}`;
    const borderColor = `uui-border-${color}`;
    const textColor = `uui-text-${color}`;
    const contrastTextContrastColor = `uui-contrast-text-${color}`;

    const wrapperClasses = `${textColor} ${bgColor} ${borderColor} ${contrastTextContrastColor}`;

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (onChange) {
            onChange(e);
        }
        if (checked === undefined || !onChange) {
            setIsChecked(e.currentTarget.checked);
        }
    }

    const targetChecked = checked !== undefined ? checked : isChecked;

    let icon = null;
    if (targetChecked === undefined) {
        icon = <svg></svg>;
    } else if (targetChecked) {
        icon = baseIcon;
    } else {
        icon = <svg></svg>;
    }

    icon = baseIcon;

    return (
        <span className={`uui-control-wrapper ${baseClassName}-wrapper ${wrapperClasses}`}>
            <span className={`uui-control ${baseClassName}-control`} onClick={createRipple}>
                <input
                    className={`inline-block ${baseClassName}-input`}
                    defaultChecked={targetChecked}
                    id={elemId}
                    onChange={handleChange}
                    ref={ref}
                    title={title}
                    type={type}
                    {...other}
                />
                <div className={'uui-icon-wrapper'}>
                    <div className={'uui-icon'}>{icon}</div>
                </div>
            </span>
            <label className={'ml-2 uui-label'} htmlFor={elemId}>
                {label || children || title}
            </label>
        </span>
    );
});
