export type ElementSize = 'small' | 'medium' | 'large';
export type ElementColor = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'error' | 'info' | 'black' | 'white';
export type ElementShape = 'rounded' | 'round' | 'rect';

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
            return 'py-1 px-4';
            break;
        case 'medium':
            return 'py-1.5 px-4';
            break;
        default:
            return 'py-4 px-4';
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
