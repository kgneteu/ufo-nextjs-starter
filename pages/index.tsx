import { GetStaticProps } from 'next';
import { getLocaleProps } from '@/lib/locales';
import { ReactHookFormYupDemo } from '@/components/demo/reactHookFormYupDemo';
import { useState } from 'react';
import { ButtonsDemo } from '@/pages/buttons';

export const getStaticProps: GetStaticProps = async context => {
    return getLocaleProps(context);
};

const enum Demo {
    ReactHookFormYupDemo = 1,
    Buttons = 2,
}

export default function Home() {
    const [demo, setDemo] = useState<Demo>(Demo.ReactHookFormYupDemo);

    let component = null;

    switch (demo) {
        case Demo.ReactHookFormYupDemo:
            component = <ReactHookFormYupDemo />;
            break;
        default:
            component = <ButtonsDemo />;
    }

    return (
        <fieldset className={'container mt-4'}>
            <legend>Select a demo:</legend>
            <div
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value);
                    setDemo(+e.target.value);
                }}>
                <label htmlFor={'hookForm'}>React Hook Forms</label>
                <input
                    checked={demo === Demo.ReactHookFormYupDemo}
                    id='hookForm'
                    name='demo'
                    type='radio'
                    value={Demo.ReactHookFormYupDemo}
                />
                <label htmlFor={'buttons'}>Buttons</label>
                <input checked={demo === Demo.Buttons} id='buttons' name='demo' type='radio' value={Demo.Buttons} />
            </div>
            {component}
        </fieldset>
    );
}
