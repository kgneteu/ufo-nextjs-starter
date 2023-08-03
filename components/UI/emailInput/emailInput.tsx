import { forwardRef } from 'react';
import { TextInputProps } from '@/components/UI/textInput/textInput';

export const EmailInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, ...other } = props;
    const elemId = name;
    return (
        <div className={`FormControl UIFormEmailInput ${error && 'Error'}`}>
            <input className={'FormInput'} formNoValidate id={elemId} name={name} ref={ref} type='email' {...other} />
            <label className={'FormLabel'} htmlFor={elemId}>
                {title}
            </label>
            {error && <div className={'FormErrorText'}>{error}</div>}
        </div>
    );
});
