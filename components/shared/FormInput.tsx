import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';


interface FormInputProps {
    label: string;
    placeholder?: string;
    name: string;
    description?: string;
    component: string;
    type: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, name, description, component, type }) => {
    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {component === "input" ? (
                            <Input
                                type={type}
                                {...field}
                                placeholder={placeholder}
                                ref={field.ref}
                                onBlur={field.onBlur}
                                value={field.value}
                                className='input'
                            />
                        ) : (
                            <Textarea
                                {...field}
                                placeholder={placeholder}
                                ref={field.ref}
                                onChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    </FormControl>
                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormInput