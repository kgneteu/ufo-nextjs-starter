import { forwardRef, HTMLProps } from 'react';

export interface TextInputProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
    error?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, className = 'UITextInput', type = 'text', ...other } = props;
    const elementId = name;
    return (
        <div className={`FormControlWrapper ${className}`}>
            <div className={`FormControl ${error && 'Error'} `}>
                <input
                    aria-invalid={!!error}
                    className={'FormInput'}
                    id={elementId}
                    name={name}
                    ref={ref}
                    type={type}
                    {...other}
                />
                <label className={'FormLabel'} htmlFor={elementId}>
                    {title}
                </label>
                <fieldset className={'FormFieldset'}>
                    <legend className={'FormFieldsetLegend'}>{title}</legend>
                </fieldset>
            </div>
            {error && <div className={'FormErrorText'}>{error}</div>}
        </div>
    );
});
