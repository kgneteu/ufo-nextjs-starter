import { forwardRef } from 'react';
import { CheckboxProps } from '@/components/UI/types';
import { BaseCheckbox } from '@/components/UI/checkbox/baseCheckbox';

const checkIcon = (
    <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
        <path d='M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z' fill='currentColor' />
    </svg>
);

// const intermediateIcon = (
//     <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
//         <path d='M7 13V11H17V13H7Z' fill='currentColor' />
//     </svg>
// );

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
    return <BaseCheckbox baseClassName={'uui-checkbox'} baseIcon={checkIcon} ref={ref} {...props} />;
});
