import { ChangeHandler } from 'react-hook-form';
import { forwardRef, ReactNode } from 'react';

interface ButtonInputProps {
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
}

export const Button = forwardRef<HTMLButtonElement, ButtonInputProps>((props: ButtonInputProps, ref) => {
    const { title, name, type: buttonType, children, ...other } = props;
    const elemId = name;

    const content = children || title;

    return (
        <div className={'FormControl'}>
            <button
                id={elemId}
                name={name}
                ref={ref}
                type={buttonType}
                {...other}
                className={'FormButton'}
                title={title}>
                {content}
            </button>
        </div>
    );
});
