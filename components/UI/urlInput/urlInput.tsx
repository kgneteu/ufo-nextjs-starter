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

export const UrlInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, ...other } = props;
    const elemId = name;
    return (
        <div className={'FormControl'}>
            <input className={'FormInput'} id={elemId} name={name} ref={ref} type='url' {...other} />
            <label className={'FormLabel'} htmlFor={elemId}>
                {title}
            </label>
        </div>
    );
});
