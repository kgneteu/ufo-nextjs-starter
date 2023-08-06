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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Home() {
    const schema = yup.object({
        firstName: yup.string().required(),
        age: yup.number().min(18).max(120).required(),
        email: yup.string().email().required(),
        website: yup.string().url().required(),
        date: yup.date().required(),
        phone: yup.string().required(),
        startDate: yup.date().required(),
        endTime: yup.date().required(),
        title: yup.string().min(8).max(32).required(),
    });

    type FormData = yup.InferType<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => console.log('dat', data);
    return (
        <div className={'container mx-auto'}>
            <h1 className={'my-4'}>
                <T id={'home.hello'} />
            </h1>
            <form className={'flex gap-4 w-full'} onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    error={errors.firstName?.message}
                    placeholder='Enter Your First name'
                    title='First name'
                    {...register('firstName')}
                />
                <NumberInput
                    error={errors.age?.message}
                    placeholder='Enter your age'
                    title={'Age'}
                    {...register('age', { required: true, maxLength: 100 })}
                />
                <EmailInput
                    error={errors.email?.message}
                    placeholder='Enter your email'
                    title={'Email'}
                    {...register('email')}
                />
                <UrlInput
                    error={errors.website?.message}
                    placeholder='Enter your website address'
                    title={'Website'}
                    {...register('website', { required: true, maxLength: 100 })}
                />
                <DateInput
                    error={errors.date?.message}
                    placeholder='Enter your date of birth'
                    title={'Date of Birth'}
                    {...register('date', { required: true, maxLength: 100 })}
                />
                <TelInput
                    error={errors.phone?.message}
                    placeholder='Enter phone number'
                    title={'Telephone'}
                    {...register('phone', { required: true, maxLength: 100 })}
                />
                <DateTimeInput
                    error={errors.startDate?.message}
                    placeholder='Enter start date'
                    title={'Start Date'}
                    {...register('startDate', { required: true, maxLength: 100 })}
                />
                <TimeInput
                    error={errors.endTime?.message}
                    placeholder='Enter end time'
                    title={'End Time'}
                    {...register('endTime', { required: true, maxLength: 100 })}
                />
                <Checkbox title={'Yes, I agree!'} {...register('phone', { required: true })} />

                <Select {...register('title', { required: true })}>
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

// export const getStaticPaths = async () => {
//     const paths: string[] = [];
//     console.log('called');
//     return { paths, fallback: false };
// };
