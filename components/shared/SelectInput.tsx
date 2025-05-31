import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';


interface SelectInputProps {
    label: string;
    placeholder?: string;
    name: string;
    description?: string;
    selectLabel?: string;
    options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, placeholder, name, description, selectLabel, options }) => {
    const { control } = useFormContext();
    return (
        <FormField
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className='w-full input capitalize'>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>{selectLabel}</SelectLabel>
                                {options.map((subject) => (
                                    <SelectItem
                                        key={subject}
                                        value={subject}
                                        className='capitalize'
                                    >
                                        {subject}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {description && (
                        <FormDescription>
                            {description}
                        </FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default SelectInput