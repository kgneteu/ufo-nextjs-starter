import { ChangeHandler } from 'react-hook-form';
import { forwardRef } from 'react';

export interface TextInputProps {
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
    error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, ...other } = props;
    const elementId = name;
    return (
        <div className={`FormControl UITextInput ${error && 'Error'}`}>
            <input
                aria-invalid={!!error}
                className={'FormInput'}
                id={elementId}
                name={name}
                ref={ref}
                type='text'
                {...other}
            />
            <label className={'FormLabel'} htmlFor={elementId}>
                {title}
            </label>
            {error && <div className={'FormErrorText'}>{error}</div>}
        </div>
    );
});
