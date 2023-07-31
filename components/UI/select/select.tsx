import { ChangeHandler } from 'react-hook-form';
import { forwardRef, ReactNode } from 'react';

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
    options?: { title: string; value: string }[];
    children?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, ...other } = props;
    const elemId = name;
    return (
        <div className={'FormControl'}>
            <select className={'FormSelect'} id={elemId} name={name} ref={ref} {...other}>
                {props.children}
            </select>
            <label className={'FormCheckboxLabel'} htmlFor={elemId}>
                {title}
            </label>
        </div>
    );
});
