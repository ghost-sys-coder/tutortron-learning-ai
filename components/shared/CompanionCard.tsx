import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CompanionCardProps {
    ID: string;
    name: string;
    topic: string;
    duration: number;
    subject: string;
    color: string;
}

const CompanionCard: React.FC<CompanionCardProps> = ({ID, subject, name, topic, color, duration}) => {
  return (
      <article className="companion-card" style={{ backgroundColor: color }}>
          <div className="flex justify-between items-center gap-4">
              <div className="subject-badge">{subject}</div>
              <button type='button' className="companion-bookmark" title="Bookmark">
                  <Image src={"/icons/bookmark.svg"} alt='bookmark' width={12.5} height={15} />
              </button>
          </div>

          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="text-sm">{topic}</p>
          <div className="flex gap-2 items-center">
              <Image src={"/icons/clock.svg"} alt='duration' width={13.5} height={13.5} />
              <p>{duration} mins duration</p>
          </div>

          <Link href={`/companions/${ID}`} className='w-full'>
              <button type='button' title='link' className='btn-primary w-full justify-center'>
                  Launch Lesson
              </button>
          </Link>
    </article>
  )
}

export default CompanionCard