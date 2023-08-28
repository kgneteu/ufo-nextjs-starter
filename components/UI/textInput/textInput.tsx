import { forwardRef, HTMLProps } from 'react';
import { ElementColor } from '@/components/UI/utils';

export interface TextInputProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
    error?: string;
    color?: ElementColor;
    fullWidth?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { fullWidth = true, title, name, error, className = 'UITextInput', type = 'text', ...other } = props;

    const elementId = name;
    const customClasses = fullWidth ? 'w-full' : '';
    return (
        <div className={`FormControlWrapper ${className} ${customClasses}`}>
            <div className={`FormControl${error ? ' Error' : ''}`}>
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
