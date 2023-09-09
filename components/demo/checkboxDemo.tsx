import { Checkbox } from '@/components/UI/checkbox/checkbox';
import { Radio } from '@/components/UI/radio/radio';
import { useState } from 'react';

export function CheckboxDemo() {
    const [checkedC2, setCheckedC2] = useState(false);

    return (
        <div>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox color={'error'}>Checkbox</Checkbox>
            {/*<Checkbox*/}
            {/*    checked={checkedC1}*/}
            {/*    color={'tertiary'}*/}
            {/*    label={'Checkbox'}*/}
            {/*    onChange={() => setCheckedC1(v => !v)}*/}
            {/*/>*/}

            <Checkbox
                checked={checkedC2}
                color={'warning'}
                defaultChecked={false}
                label={'Checkbox'}
                onChange={() => setCheckedC2(v => !v)}
            />
            {/*<Switch color={'secondary'}>Switch</Switch>*/}
            <fieldset>
                <Radio color={'primary'} id={'radio1'} label={'Radio button'} name={'radio1'} />
                <Radio color={'secondary'} id={'radio2'} label={'Radio button'} name={'radio1'} />
                <Radio color={'tertiary'} id={'radio3'} label={'Radio button'} name={'radio1'} />
            </fieldset>
        </div>
    );
}
