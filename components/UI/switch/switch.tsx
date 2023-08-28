import { forwardRef } from 'react';
import { TextInputProps } from '@/components/UI/textInput/textInput';

export const Switch = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { label, title, name, error, ...other } = props;
    const elemId = name;
    return (
        <div className={`FormControl flex items-center w-full gap-x-3 ${error && 'Error'}`}>
            <input className={'FormSwitch'} id={elemId} name={name} ref={ref} title={title} type='s' {...other} />
            <label className={'FormCheckboxLabel'} htmlFor={elemId}>
                {label}
            </label>
        </div>
    );
});
