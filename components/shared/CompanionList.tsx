import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface CompanionListProps {
    title: string;
    companions?: Companion[];
    classNames?: string
}

const CompanionList: React.FC<CompanionListProps> = ({ title, companions, classNames }) => {

    return (
        <article className={cn("companion-list", classNames)}>
            <h3 className='font-bold text-3xl'>Recent Sessions</h3>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-2/3 text-lg">Lessons</TableHead>
                        <TableHead className='text-lg'>Subject</TableHead>
                        <TableHead className='text-lg'>Duration</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map((companion) => (
                        <TableRow key={companion.id}>
                            <TableCell className="font-medium">
                                <Link href={`/companions/${companion.$id}`}>
                                    <div className="flex items-center gap-2">
                                        <div className="size-[72px] flex justify-center items-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(companion.subject) }}>
                                            <Image
                                                src={`/icons/${companion.subject}.svg`}
                                                alt={companion.subject}
                                                width={35}
                                                height={35}
                                            />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-2xl">{companion.name}</p>
                                            <p className="text-lg">{companion.topic}</p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="subject-badge w-fit max-md:hidden">{companion.subject}</div>
                                <div className="flex justify-center items-center rounded-lg w-fit p-2 md:hidden"
                                    style={{ backgroundColor: getSubjectColor(companion.subject) }}
                                >
                                    <Image
                                        alt={companion.subject}
                                        width={18} height={18}
                                        src={`/icons/${companion.subject}.svg`}
                                    />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2 w-full justify-end">
                                    <p className="text-2xl">
                                        {companion.duration} {" "}
                                        <span className="max-md:hidden">duration</span>
                                    </p>
                                    <Image src={"/icons/clock.svg"} alt='duration' width={14} height={14} className='md:hidden' />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </article>
    )
}

export default CompanionList