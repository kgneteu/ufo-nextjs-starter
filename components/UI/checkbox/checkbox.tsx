import { ChangeHandler } from 'react-hook-form';
import { forwardRef } from 'react';

interface TextInputProps {
    onChange?: ChangeHandler;
    max?: string | number;
    minLength?: number;
    pattern?: string;
    title?: string;
    required?: boolean;
    onBlur?: ChangeHandler;
    min?: string | number;
    name: string;
    disabled?: boolean;
    placeholder?: string;
    maxLength?: number;
}

export const Checkbox = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, ...other } = props;
    const elemId = name;
    return (
        <div className={'FormControl flex items-center w-full gap-x-3'}>
            <input className={'FormCheckbox'} id={elemId} name={name} ref={ref} type='checkbox' {...other} />
            <label className={'FormCheckboxLabel'} htmlFor={elemId}>
                {title}
            </label>
        </div>
    );
});
