import { forwardRef } from 'react';
import { TextInputProps } from '@/components/UI/textInput/textInput';

export const TimeInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, ...other } = props;
    const elemId = name;
    return (
        <div className={`FormControl UITimeInput ${error && 'Error'}`}>
            <input className={'FormInput'} id={elemId} name={name} ref={ref} type='time' {...other} />
            <label className={'FormLabel'} htmlFor={elemId}>
                {title}
            </label>
            {error && <div className={'FormErrorText'}>{error}</div>}
        </div>
    );
});
