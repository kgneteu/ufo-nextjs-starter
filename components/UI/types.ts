import { HTMLProps } from 'react';
import { ElementColor } from '@/components/UI/utils';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
    label?: string;
    error?: string;
    color?: ElementColor;
}

export interface CheckboxProps extends InputProps {
    intermediate?: boolean;
}
