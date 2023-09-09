export type ElementSize = 'small' | 'medium' | 'large';
export type ElementColor =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'error'
    | 'info'
    | 'success'
    | 'black'
    | 'white';
export type ElementShape = 'rounded' | 'round' | 'rect';
export type ElementBorderWidth = 0 | 1 | 2 | 3 | 4;
export type ElementElevation = 1 | 2 | 3 | 4 | 5;

export function getShapeClasses(shape: ElementShape) {
    switch (shape) {
        case 'rounded':
            return 'uui-rounded';
            break;
        case 'round':
            return 'uui-round';
            break;
        default:
            return '';
    }
}

export function getButtonSizeClasses(size: ElementSize) {
    switch (size) {
        case 'small':
            return 'py-2 px-5 text-[13px]';
            break;
        case 'medium':
            return 'py-2.5 px-6';
            break;
        default:
            return 'py-3 px-8 text-[15px]';
    }
}

export function getIconButtonSizeClasses(size: ElementSize) {
    switch (size) {
        case 'small':
            return 'py-2 px-2 text-[13px]';
            break;
        case 'medium':
            return 'py-2.5 px-2.5';
            break;
        default:
            return 'py-3 px-3 text-[15px]';
    }
}

export function getBorderClasses(width: ElementBorderWidth) {
    switch (width) {
        case 1:
            return 'uui-border-1';
            break;
        case 2:
            return 'uui-border-2';
            break;
        case 3:
            return 'uui-border-3';
            break;
        case 4:
            return 'uui-border-4';
            break;
        default:
            return 'uui-border-none';
    }
}

export function getElevationClasses(width: ElementElevation) {
    switch (width) {
        case 2:
            return 'uui-elevation-1';
            break;
        case 3:
            return 'uui-elevation-2';
            break;
        case 4:
            return 'uui-elevation-3';
            break;
        case 5:
            return 'uui-elevation-3';
            break;
        default:
            return 'uui-elevation-1';
    }
}

export function createRipple(event: React.MouseEvent<HTMLElement>) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

export function uniqueID(prefix: string) {
    return (
        prefix +
        '_' +
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
    );
}
