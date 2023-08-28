import { Button } from '@/components/UI/button/button';

export function ButtonsDemo() {
    return (
        <div className={'flex flex-wrap gap-1'}>
            <Button color={'primary'} label={'Button'} />
            <Button color={'tertiary'} label={'Button'} outlined />
            <Button color={'secondary'} filled label={'Button'} />
            <Button color={'error'} label={'Button'} raised />
            <hr className={'m-4'} />
            <Button color={'error'} label={'Button'} outlined raised />
            <Button color={'warning'} filled label={'Button'} outlined />
            <Button color={'info'} filled label={'Button'} raised />
            <Button color={'error'} filled label={'Button'} outlined raised />
        </div>
    );
}
