import { forwardRef } from 'react';
import { BaseCheckbox, CheckboxProps } from '@/components/UI/checkbox/baseCheckbox';

const icon = (
    <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z'
            fill='currentColor'
        />
    </svg>
);

export const Radio = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
    return <BaseCheckbox baseClassName={'uui-radio'} baseIcon={icon} ref={ref} type={'radio'} {...props} />;
});
