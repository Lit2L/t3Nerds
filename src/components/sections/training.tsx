import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { GiHighPunch, GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { AspectRatio } from '@/components/ui/aspect-ratio'

interface TrainingCardProps {
  card: {
    id: number
    title: string
    bulletPoints: string[]
    info: string
    image: string
    icon: JSX.Element
    href: string
  }
}

const TrainingCard = ({ card }: TrainingCardProps) => (
  <article className='m-1 mx-auto h-[44rem] w-[24rem] rounded-lg bg-gray-100 p-1 shadow-lg transition-transform duration-200 hover:scale-100 dark:bg-gray-800'>
    <div className='flex w-full flex-col items-center justify-center gap-2 text-lg font-semibold'>
      <div className='rounded-full border-2 border-black/50 p-3'>
        {card.icon}
      </div>
      <h3>{card.title}</h3>
    </div>
    <div className=''>
      <AspectRatio
        ratio={1 / 1}
        className='h-80 rounded-lg border-2 border-transparent/50'
      >
        <Image
          src={card.image}
          alt={card.title}
          className='rounded-lg object-cover shadow-md shadow-emerald-500'
          // width={300}
          // height={300}
          fill
          // sizes='300px'
          loading='lazy'
        />
      </AspectRatio>
    </div>
    <div className='p-3 text-left '>
      {card.bulletPoints.map((bullet, index) => (
        <p key={index} className='font-heading text-sm font-light leading-9'>
          - {bullet}
        </p>
      ))}
    </div>
  </article>
)

export const Training = () => {
  const trainingCards = [
    {
      id: 0,
      title: 'Private Coaching',
      bulletPoints: [
        'Customized training with an experienced coach',
        'Accelerate abilities and master techniques',
        'Progress faster and see real results in training.'
      ],
      info: '30 Min OR 60 Min Sessions',
      image: '/private.jpg',
      icon: <GiWhistle className='size-6 text-gray-500' />,
      href: 'https://calendly.com/nerdsfighting/private-coaching'
    },
    {
      id: 1,
      title: 'Video Analysis',
      bulletPoints: [
        'Experienced coach analyzes your technique',
        'Teaches body mechanics and pinpoints areas for improvement',
        'Reinforces proper technique and helps develop better habits.'
      ],
      info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
      image: '/camera.jpg',
      icon: <CiVideoOn className='size-6 text-red-700' />,
      href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
    },
    {
      id: 2,
      title: 'Group Training',
      bulletPoints: [
        'Supportive group of martial artists that train together',
        'Peak performance training involves calisthenics, drills, strength conditioning, and optional group sparring'
      ],
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/wesmitts.png',
      icon: <GiYinYang className='size-6 text-black dark:text-white' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 3,
      title: 'Kickboxing',
      bulletPoints: [
        'Learn stand-up striking skills involving punches and kicking through Muay Thai.',
        'Develop footwork, head movement, and combinations.',
        'Experience training with focus mitts',
        'Heavy bag work, and optional sparring'
      ],
      info: '30 - ALL AGES. BEGINNERS.',
      image: '/groupClass.webp',
      icon: <GiTeacher className='size-6 text-sky-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 4,
      title: 'Boxing',
      bulletPoints: [
        'Learn boxing fundamentals like footwork, head movement and combinations.',
        'Experience training  focus mitts, and heavy bag work.'
      ],
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/mitts.jpg',
      icon: <GiHighPunch className='size-6 text-red-500' />,

      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 5,
      title: 'Outdoor Training',

      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      bulletPoints: [
        'Outdoor sessions teach resistance and mental toughness',
        'Connect with nature and enhance your fitness in a challenging and new environment.'
      ],
      image: '/burn.jpeg',
      icon: <PiParkDuotone className='size-6 text-green-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    }
  ]

  return (
    <section
      id='training'
      className='container mx-auto bg-[radial-gradient(circle_400px_at_50%_375px,#181818,transparent)] pb-24 font-genos dark:bg-[radial-gradient(circle_350px_at_50%_350px,#14443780,transparent)]'
    >
      <div className='grid items-center justify-center justify-center gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {trainingCards.map((card) => (
          <TrainingCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
