import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className='font-bold text-2xl'>Build and personalize your learning</h2>
      <p>Pick a name, voice, subject and personality -- and start learning through conversations that don&apos;t feel, but are natural and fun</p>
      <Image src={"/images/cta.svg"} alt='call to action' width={362} height={232} />
      <Button className='btn-primary'>
        <Image src={"/icons/plus.svg"} alt='add new companion' width={12} height={12} />
        <Link href={"/companions/new"}>
          <span>Add new companion</span></Link>
      </Button>
    </section>
  )
}

export default CTA