import React from 'react'
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server'
import CompanionForm from '@/components/shared/CompanionForm'

const CompanionsBuilder = async () => {
  const { userId } = await auth();

  if (!userId ) redirect("/sign-in");
  return (
    <main className='min-lg:w-1/2 min-md:w-2/3 items-center justify-center'>
      <article className='flex flex-col w-full gap-4'>
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  )
}

export default CompanionsBuilder