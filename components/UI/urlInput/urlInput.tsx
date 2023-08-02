import { forwardRef } from 'react';
import { TextInputProps } from '@/components/UI/textInput/textInput';

export const UrlInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    const { title, name, error, ...other } = props;
    const elemId = name;
    return (
        <div className={'FormControl UIUrlInput'}>
            <input className={'FormInput'} id={elemId} name={name} ref={ref} type='url' {...other} />
            <label className={'FormLabel'} htmlFor={elemId}>
                {title}
            </label>
            {error && <div className={'FormErrorText'}>{error}</div>}
        </div>
    );
});
