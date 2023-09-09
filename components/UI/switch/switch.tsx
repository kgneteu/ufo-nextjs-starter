import { forwardRef } from 'react';
import { uniqueID } from '@/components/UI/utils';
import { InputProps } from '@/components/UI/types';

export const Switch = forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, children, title, name, error, ...other }: InputProps, ref) => {
        const elemId = id || name || uniqueID('switch');
        return (
            <div className={`uui-control flex items-center w-full gap-x-3 ${error && 'uui-error'}`}>
                <input className={'FormSwitch'} id={elemId} name={name} ref={ref} title={title} type='s' {...other} />
                <label className={'FormCheckboxLabel'} htmlFor={elemId}>
                    {label || children || title}
                </label>
            </div>
        );
    }
);
