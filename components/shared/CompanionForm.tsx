"use client"
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { Form } from '../ui/form';
import FormInput from './FormInput';
import { Button } from '../ui/button';
import SelectInput from './SelectInput';
import { subjects } from '@/constants';
import { createCompanion } from '@/lib/actions/companion';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';


const voices = ["male", "female"]

const styles = ["formal", "casual"]


const formSchema = z.object({
    name: z.string().min(1, { message: "Companion is required!" }),
    subject: z.string().min(1, { message: "Subject is required!" }),
    topic: z.string().min(1, { message: "Topic is rquired!" }),
    voice: z.string().min(1, { message: "Voice is required!" }),
    style: z.string().min(1, { message: "Style is required!" }),
    duration: z.coerce.number().min(1, { message: "Duration is required!" })
});


const CompanionForm = () => {
    const router = useRouter();
    const [isCreating, setIsCreating] = useState<boolean>(false);
    // define my form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 0
        }
    });

    // submit the form 
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsCreating(true);

        try {
            const companion = await createCompanion(values);

            if (companion) {
                console.log({ companion });
                router.push(`/companions/${companion.id}`);
            } else {
                router.push("/");
            }
        } catch (error) {
            console.log("CompanionCreation Error:", error);
        } finally {
            setIsCreating(false);
        }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
            >
                <FormInput
                    type='text'
                    name='name'
                    placeholder='Enter name of the companion'
                    label='Companion Name'
                    component='input'
                />

                <SelectInput
                    label='Select your Subject'
                    placeholder='Select the subject'
                    name='subject'
                    description='describe your subject to study'
                    selectLabel='Subjects'
                    options={subjects}
                />


                <FormInput
                    type='text'
                    name='topic'
                    placeholder='Ex. Supply and Demand'
                    label='Topic'
                    component='textarea'
                />

                <SelectInput
                    label='Select Voice'
                    placeholder='Select the Voice'
                    name='voice'
                    description='Choose whether you want a male or female voice'
                    selectLabel='Voice'
                    options={voices}
                />
                <SelectInput
                    label='Select Conversation Style'
                    placeholder='Select the Conversation Style'
                    name='style'
                    description='Choose whether you want a formal or casual interaction'
                    selectLabel='Style'
                    options={styles}
                />

                <FormInput
                    type='number'
                    name='duration'
                    placeholder='15 mins'
                    label='Duration'
                    component='input'
                />

                <div className="flex justify-center items-center">
                    <Button type='submit' disabled={isCreating}>
                        {isCreating ?
                            (
                                <>
                                    <Loader2 className='animate-spin' />
                                    <span>Building...</span>
                                </>
                            ) :
                            ("Build your Companion")}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default CompanionForm