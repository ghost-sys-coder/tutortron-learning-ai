import CompanionCard from '@/components/shared/CompanionCard'
import CompanionList from '@/components/shared/CompanionList'
import CTA from '@/components/shared/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className=''>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          ID="123"
          name="Neura the Brainy Explorer"
          topic="Neural network of the brain"
          subject="science"
          duration={45}
          color="#ffda6a"
        />
        <CompanionCard
          ID="456"
          name="Countsy the number wizard"
          topic="Derivatives & Integrals"
          subject="math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          ID="789"
          name="Verba the vocabulary builder"
          topic="English Literature"
          subject="Languages"
          duration={50}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page