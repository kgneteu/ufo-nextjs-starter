import { forwardRef } from 'react';
import { TextInput, TextInputProps } from '@/components/UI/textInput/textInput';

export const UrlInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    return <TextInput ref={ref} {...{ ...props, type: 'url', className: 'UIUrlInput' }} />;
});
