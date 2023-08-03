import { forwardRef } from 'react';
import { TextInputProps } from '@/components/UI/textInput/textInput';

export const NumberInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, ...other } = props;
    const elementId = name;
    return (
        <div className={`FormControl UINumberInput ${error && 'Error'}`}>
            <input className={'FormInput'} id={elementId} name={name} ref={ref} type='number' {...other} />
            <label className={'FormLabel'} htmlFor={elementId}>
                {title}
            </label>
            {error && <div className={'FormErrorText'}>{error}</div>}
        </div>
    );
});
