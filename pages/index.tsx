import { GetStaticProps } from 'next';
import { getLocaleProps } from '@/lib/locales';
import { ReactHookFormYupDemo } from '@/components/demo/reactHookFormYupDemo';
import { useState } from 'react';
import { ButtonsDemo } from '@/pages/buttons';
import { TextInput } from '@/components/UI/textInput/textInput';
import { CheckboxDemo } from '@/components/demo/checkboxDemo';
import { Radio } from '@/components/UI/radio/radio';

export const getStaticProps: GetStaticProps = async context => {
    return getLocaleProps(context);
};

const enum Demo {
    ReactHookFormYupDemo,
    Inputs,
    Buttons,
    Checkboxes,
}

function InputsDemo() {
    return (
        <div className={'flex gap-4 my-10'}>
            <TextInput label={'Text Input'} outlined />
            <TextInput>Text Input</TextInput>
            <TextInput label={'Text Input'} />
        </div>
    );
}

export default function Home() {
    const [demo, setDemo] = useState<Demo>(Demo.ReactHookFormYupDemo);

    let component = null;

    switch (demo) {
        case Demo.ReactHookFormYupDemo:
            component = <ReactHookFormYupDemo />;
            break;
        case Demo.Inputs:
            component = <InputsDemo />;
            break;
        case Demo.Buttons:
            component = <ButtonsDemo />;
            break;
        case Demo.Checkboxes:
            component = <CheckboxDemo />;
            break;
        default:
            component = <ButtonsDemo />;
    }

    return (
        <fieldset className={'container mt-4'}>
            <legend>Select a demo:</legend>
            <div
                className={'flex gap-2'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setDemo(+e.target.value);
                }}>
                <Radio
                    checked={demo === Demo.ReactHookFormYupDemo}
                    id='hookForm'
                    label={'React Hook Forms'}
                    name='demo'
                    type='radio'
                    value={Demo.ReactHookFormYupDemo}
                />

                <Radio
                    checked={demo === Demo.Inputs}
                    id='inputs'
                    label={'Input'}
                    name='demo'
                    type='radio'
                    value={Demo.Inputs}
                />

                <Radio
                    checked={demo === Demo.Buttons}
                    id='buttons'
                    label={'Buttons'}
                    name='demo'
                    type='radio'
                    value={Demo.Buttons}
                />

                <Radio
                    checked={demo === Demo.Checkboxes}
                    id='checks'
                    label={'Checks'}
                    name='demo'
                    type='radio'
                    value={Demo.Checkboxes}
                />
            </div>
            {component}
        </fieldset>
    );
}
