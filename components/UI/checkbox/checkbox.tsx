import { forwardRef } from 'react';
import { TextInputProps } from '@/components/UI/textInput/textInput';

export const Checkbox = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, ...other } = props;
    const elemId = name;
    return (
        <div className={`FormControl flex items-center w-full gap-x-3 ${error && 'Error'}`}>
            <input className={'FormCheckbox'} id={elemId} name={name} ref={ref} type='checkbox' {...other} />
            <label className={'FormCheckboxLabel'} htmlFor={elemId}>
                {title}
            </label>
        </div>
    );
});
