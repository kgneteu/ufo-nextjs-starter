import { forwardRef } from 'react';
import { TextInput, TextInputProps } from '@/components/UI/textInput/textInput';

export const NumberInput = forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
    return <TextInput ref={ref} {...{ ...props, type: 'number', className: 'UINumberInput' }} />;
});
