import { forwardRef } from 'react';
import { uniqueID } from '@/components/UI/utils';
import { InputProps } from '@/components/UI/types';

export interface TextInputProps extends InputProps {
    outlined?: boolean;
    filled?: boolean;
    raised?: boolean;
    fullWidth?: boolean;
}
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const {
        label,
        children,
        id,
        fullWidth = true,
        title,
        name,
        error,
        className = 'UITextInput',
        type = 'text',
        ...other
    } = props;

    const elemId = id || name || uniqueID('input');
    const customClasses = fullWidth ? 'w-full' : '';
    const labelText = label || title || children;
    return (
        <div className={`uui-control-wrapper ${className} ${customClasses}`} title={title}>
            <div className={`uui-control${error ? ' uui-error' : ''}`}>
                <input
                    aria-invalid={!!error}
                    className={'uui-form-input'}
                    id={elemId}
                    name={name}
                    ref={ref}
                    type={type}
                    {...other}
                />
                <label className={'uui-label'} htmlFor={elemId}>
                    {labelText}
                </label>
                <fieldset className={'uui-fieldset'}>
                    <legend className={'uui-fieldset-legend'}>{labelText}</legend>
                </fieldset>
            </div>
            {error && <div className={'uui-error-text'}>{error}</div>}
        </div>
    );
});
