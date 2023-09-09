import { forwardRef, ReactNode } from 'react';
import { Button, ButtonInputProps } from '@/components/UI/button/button';
import { getIconButtonSizeClasses } from '@/components/UI/utils';

export interface IconButtonProps extends Omit<ButtonInputProps, 'label'> {
    icon: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props: IconButtonProps, ref) => {
    return <Button ref={ref} {...props} getSizeClassesFunc={getIconButtonSizeClasses} />;
});
