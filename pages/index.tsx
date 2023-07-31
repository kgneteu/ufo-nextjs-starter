import { GetStaticProps } from 'next';
import T from '@/components/UI/t';
import { getLocaleProps } from '@/lib/locales';
import { useForm } from 'react-hook-form';
import { TextInput } from '@/components/UI/textInput/textInput';
import { NumberInput } from '@/components/UI/numberInput/numberInput';
import { Button } from '@/components/UI/button/button';
import { EmailInput } from '@/components/UI/emailInput/emailInput';
import { UrlInput } from '@/components/UI/urlInput/urlInput';
import { DateInput } from '@/components/UI/dateInput/dateInput';
import { TelInput } from '@/components/UI/telInput/telInput';
import { DateTimeInput } from '@/components/UI/dateTimeInput/dateTimeInput';
import { TimeInput } from '@/components/UI/timeInput/timeInput';
import { Checkbox } from '@/components/UI/checkbox/checkbox';
import { Select } from '@/components/UI/select/select';

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log('dat', data);
    console.log('err', errors);
    return (
        <div className={'container'}>
            <h1 className={'my-4'}>
                <T id={'home.hello'} />
            </h1>
            <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    placeholder='Enter Your First name'
                    title='First name'
                    {...register('First name', { required: true, maxLength: 80 })}
                />
                <NumberInput
                    placeholder='Enter your age'
                    title={'Age'}
                    {...register('Age', { required: true, maxLength: 100 })}
                />
                <EmailInput
                    placeholder='Enter your email'
                    title={'Email'}
                    {...register('email', { required: true, maxLength: 100 })}
                />
                <UrlInput
                    placeholder='Enter your website address'
                    title={'Website'}
                    {...register('website', { required: true, maxLength: 100 })}
                />
                <DateInput
                    placeholder='Enter your date of birth'
                    title={'Date of Birth'}
                    {...register('date', { required: true, maxLength: 100 })}
                />
                <TelInput
                    placeholder='Enter phone number'
                    title={'Telephone'}
                    {...register('phone', { required: true, maxLength: 100 })}
                />
                <DateTimeInput
                    placeholder='Enter start date'
                    title={'Start Date'}
                    {...register('startDate', { required: true, maxLength: 100 })}
                />
                <TimeInput
                    placeholder='Enter end time'
                    title={'End Time'}
                    {...register('endTime', { required: true, maxLength: 100 })}
                />
                <Checkbox title={'Yes, I agree!'} {...register('phone', { required: true })} />

                <Select {...register('Title', { required: true })}>
                    <option value='Mr'>Mr</option>
                    <option value='Mrs'>Mrs</option>
                    <option value='Miss'>Miss</option>
                    <option value='Dr'>Dr</option>
                </Select>

                <Button title={'Wyślij'} type={'submit'} />
            </form>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async context => {
    return getLocaleProps(context);
};
