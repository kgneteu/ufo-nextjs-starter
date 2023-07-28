import React, { useRef, useState } from 'react';

export interface DropDownButtonItem {
    key: string;
    title: string;
    icon?: React.ReactNode;
}

interface DropDownMenuProps {
    items: DropDownButtonItem[];
    onChange: (v: string) => void;
}

const DropDownMenu = ({ items = [], onChange }: DropDownMenuProps) => (
    <div className='shadow h-auto w-auto absolute'>
        <ul className='text-left'>
            {items.map(item => (
                <li
                    className={
                        'p-3 hover:text-white hover:bg-blue-700 dark:hover:bg-blue-700 cursor-pointer flex items-center bg-white dark:bg-black gap-x-4'
                    }
                    key={item.key}
                    onClick={e => {
                        e.stopPropagation();
                        onChange(item.key);
                    }}>
                    {item.icon}
                    {item.title}
                </li>
            ))}
        </ul>
    </div>
);

export function DropDownButton({
    items,
    value,
    onChange,
}: {
    items: DropDownButtonItem[];
    value?: string;
    onChange: (v: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const drop = useRef<HTMLButtonElement>(null);

    const activeItem = items.find(v => v.key === value);

    const handleChange = (v: string) => {
        setOpen(false);
        onChange(v);
    };

    return (
        <button
            className='dropdown-button relative'
            onBlur={() => setOpen(false)}
            onClick={() => {
                setOpen(open => !open);
            }}
            ref={drop}
            style={{
                width: 'auto',
                display: 'inline-block',
            }}>
            {activeItem && activeItem.icon}
            {open && <DropDownMenu items={items} onChange={handleChange} />}
        </button>
    );
}
