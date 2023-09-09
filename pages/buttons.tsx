import { Button, ButtonInputProps } from '@/components/UI/button/button';
import { FaHome } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import { BiHome } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi2';
import { BsHouse } from 'react-icons/bs';
import { RiHomeLine } from 'react-icons/ri';
import { TbHome } from 'react-icons/tb';
import { IoHome } from 'react-icons/io5';
import { PiHouse } from 'react-icons/pi';
import { ElementBorderWidth, ElementShape, ElementSize } from '@/components/UI/utils';
import { useState } from 'react';
import { IconButton } from '@/components/UI/iconButton/iconButton';
import { Fab } from '@/components/UI/fab/fab';

interface ButtonStyles extends ButtonInputProps {}

const buttonStyles: ButtonStyles[] = [
    { label: 'Default', color: 'error', tonal: false, filled: false, outlined: false, raised: false, elevated: false },
    { label: 'Text', color: 'primary' },
    { label: 'Outlined', color: 'secondary', outlined: true },
    { label: 'Raised', color: 'tertiary', raised: true },
    { label: 'Elevated', color: 'error', elevated: true },
    { label: 'Tonal', color: 'warning', tonal: true },
    { label: 'Filled', color: 'info', filled: true },

    { label: 'Outlined Raised', color: 'success', outlined: true, raised: true },
    { label: 'Outlined Elevated', color: 'primary', outlined: true, elevated: true },
    { label: 'Outlined Tonal', color: 'secondary', outlined: true, tonal: true },
    { label: 'Outlined Filled', color: 'tertiary', outlined: true, filled: true },

    { label: 'Raised Elevated', color: 'error', raised: true, elevated: true },
    { label: 'Raised Tonal', color: 'warning', raised: true, tonal: true },
    { label: 'Raised Filled', color: 'info', raised: true, filled: true },

    { label: 'Elevated Tonal', color: 'success', elevated: true, tonal: true },
    { label: 'Elevated Filled', color: 'primary', elevated: true, filled: true },

    { label: 'Tonal Filled', color: 'secondary', tonal: true, filled: true },

    { label: 'Outlined Tonal Raised', color: 'tertiary', tonal: true, raised: true, outlined: true },
    { label: 'Outlined Tonal Filled', color: 'error', tonal: true, filled: true, outlined: true },
    { label: 'All', color: 'secondary', tonal: true, filled: true, outlined: true, raised: true, elevated: true },
];

export function ButtonsDemo() {
    const [size, setSize] = useState<ElementSize>('medium');
    const [shape, setShape] = useState<ElementShape>();
    const [borderWidth, setBorderWidth] = useState<ElementBorderWidth>(1);
    const shared: { size: ElementSize; shape?: ElementShape; border: ElementBorderWidth } = {
        size: size,
        shape: shape,
        border: borderWidth,
    };

    return (
        <div>
            <div className={'flex py-2'}>
                <label>Size:</label>
                <select defaultValue={'medium'} onChange={e => setSize(e.currentTarget.value as ElementSize)}>
                    <option value={'small'}>Small</option>
                    <option value={'medium'}>Medium</option>
                    <option value={'large'}>Large</option>
                </select>
                <label>Shape:</label>
                <select defaultValue={''} onChange={e => setShape(e.currentTarget.value as ElementShape)}>
                    <option value={''}>Default</option>
                    <option value={'round'}>Round</option>
                    <option value={'rounded'}>Rounded</option>
                    <option value={'rect'}>Rect</option>
                </select>
                <label>Border width:</label>
                <select defaultValue='1' onChange={e => setBorderWidth(+e.currentTarget.value as ElementBorderWidth)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            <div className={'grid grid-cols-[max-content_1fr] gap-10 items-center'}>
                {buttonStyles.map(s => (
                    <>
                        <div>{s.label}</div>
                        <div className={'flex gap-4 items-center'} {...shared}>
                            <Button {...s} label={'Label'} {...shared} />
                            <Button {...s} disabled label={'Label'} {...shared} />
                            <Button {...{ ...s, label: 'label' }} icon={<MdAdd />} {...shared} />
                            <Button {...{ ...s, label: 'label' }} disabled icon={<MdAdd />} {...shared} />
                            <Button {...{ ...s, label: '' }} icon={<MdAdd />} {...shared} />
                            <Button {...{ ...s, label: '' }} disabled icon={<MdAdd />} {...shared} />
                        </div>
                    </>
                ))}

                <hr className={'w-full col-span-2'} />
                <div>Size</div>
                <div className={'flex gap-4 items-center'}>
                    <Button
                        color={'primary'}
                        filled
                        icon={<MdAdd />}
                        label={'Label'}
                        outlined
                        raised
                        {...shared}
                        size={'small'}
                    />
                    <Button
                        color={'primary'}
                        filled
                        icon={<MdAdd />}
                        label={'Label'}
                        outlined
                        raised
                        {...shared}
                        size={'medium'}
                    />
                    <Button
                        color={'primary'}
                        filled
                        icon={<MdAdd />}
                        label={'Label'}
                        outlined
                        raised
                        {...shared}
                        size={'large'}
                    />
                </div>
                <hr className={'w-full col-span-2'} />
                <div>Custom icons</div>
                <div className={'flex gap-4'}>
                    <Button filled shape={'round'}>
                        <FaHome />
                    </Button>
                    <Button color={'secondary'} filled shape={'round'}>
                        <MdHome />
                    </Button>
                    <Button color={'tertiary'} filled shape={'round'}>
                        <BiHome />
                    </Button>
                    <Button color={'warning'} filled shape={'round'}>
                        <HiHome />
                    </Button>
                    <Button color={'info'} filled shape={'round'}>
                        <BsHouse />
                    </Button>
                    <Button color={'error'} filled shape={'round'}>
                        <RiHomeLine />
                    </Button>
                    <Button color={'success'} filled shape={'round'}>
                        <TbHome />
                    </Button>
                    <Button color={'black'} filled shape={'round'}>
                        <IoHome />
                    </Button>
                    <Button color={'white'} filled raised shape={'round'} size={'medium'}>
                        <PiHouse />
                    </Button>
                </div>
                <hr className={'w-full col-span-2'} />
                <h2 className={'col-span-2 font-bold'}>Icon buttons</h2>
                <div className={'col-span-2 grid grid-cols-4 gap-2'}>
                    {buttonStyles.map(s => (
                        <>
                            <div>{s.label}</div>
                            <div className={'flex gap-4 items-center'} {...shared}>
                                <IconButton {...{ ...s, label: '' }} icon={<MdAdd />} {...shared} />
                                <IconButton {...{ ...s, label: '' }} disabled icon={<MdAdd />} {...shared} />
                            </div>
                        </>
                    ))}
                </div>
                <h2 className={'col-span-2 font-bold'}>FAB</h2>
                <div className={'col-span-2 grid grid-cols-4 gap-2'}>
                    {buttonStyles.map(s => (
                        <>
                            <div>{s.label}</div>
                            <div className={'flex gap-4 items-center'} {...shared}>
                                <Fab {...{ ...s, label: '' }} icon={<MdAdd />} {...shared} />
                                <Fab {...{ ...s, label: '' }} disabled icon={<MdAdd />} {...shared} />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
