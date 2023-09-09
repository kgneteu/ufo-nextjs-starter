import { forwardRef, ReactNode } from 'react';
import { Button, ButtonInputProps } from '@/components/UI/button/button';
import { ElementShape, ElementSize } from '@/components/UI/utils';

export interface IconButtonProps extends Omit<ButtonInputProps, 'label'> {
    icon: ReactNode;
}

export const Fab = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ size, shape = 'rounded', ...rest }: IconButtonProps, ref) => {
        function getFabButtonSizeClasses(size: ElementSize) {
            console.log('aa', size, shape);
            switch (size) {
                case 'small':
                    return 'py-2 px-2 text-[13px]';
                    break;
                case 'medium':
                    return 'py-4 px-4';
                    break;
                default:
                    return 'py-[30px] px-[30px] text-[15px]';
            }
        }

        function getFabShapeClasses(shape: ElementShape, size: ElementSize = 'medium') {
            switch (shape) {
                case 'rounded':
                    return size === 'medium' ? 'uui-rounded-16' : size === 'large' ? 'uui-rounded-28' : 'uui-rounded';
                    break;
                case 'round':
                    return 'uui-round';
                    break;
                default:
                    return '';
            }
        }

        return (
            <Button
                elevation={4}
                ref={ref}
                shape={shape}
                size={size}
                {...rest}
                getShapeClassesFunc={(shape: ElementShape) => getFabShapeClasses(shape, size)}
                getSizeClassesFunc={getFabButtonSizeClasses}
            />
        );
    }
);
