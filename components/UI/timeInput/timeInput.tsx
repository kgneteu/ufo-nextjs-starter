import { forwardRef } from 'react';
import { TextInput, TextInputProps } from '@/components/UI/textInput/textInput';

export const TimeInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    return <TextInput ref={ref} {...{ ...props, type: 'time', className: 'UITimeInput' }} />;
});
