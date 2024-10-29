import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { GiHighPunch, GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'

interface TrainingCardProps {
  card: {
    id: number
    title: string
    description: string
    info: string
    image: string
    icon: JSX.Element
    href: string
  }
}

const TrainingCard = ({ card }: TrainingCardProps) => (
  <article className='min-w-[300px] max-w-[400px] rounded-lg bg-gray-100 p-3 shadow-lg transition-transform duration-200 hover:scale-105 dark:bg-gray-800'>
    <div className='flex w-full flex-col items-center justify-center gap-2 border-4 text-lg font-semibold'>
      <div>{card.icon}</div>
      <h3>{card.title}</h3>

      <AspectRatio ratio={1 / 1} className=''>
        <Image
          src={card.image}
          alt={card.title}
          className='rounded-lg object-cover'
          // width={300}
          // height={300}
          fill
          loading='lazy'
        />
      </AspectRatio>

      <div className='p-3 text-center md:text-left'>
        <p className='text-sm text-gray-700 dark:text-gray-300'>
          {card.description}
        </p>
      </div>
    </div>
  </article>
)

export const Training = () => {
  const trainingCards = [
    {
      id: 0,
      title: 'Private Coaching',
      description:
        'Learning technique through private lessons with an experienced coach is a great way accelerate your abilities. Private lessons are customized to fit your individual needs or goals for yourself. Tailor your training to accelerate your progression towards your goals.',
      info: '30 Min OR 60 Min Sessions',
      image: '/private.jpg',
      icon: <GiWhistle className='size-6 text-gray-500' />,
      href: 'https://calendly.com/nerdsfighting/private-coaching'
    },
    {
      id: 1,
      title: 'Video Analysis',
      description:
        'Visually analyze your technique and fast-track the learning process. Pinpoint areas for improvement and get a deeper understanding of body mechanics to help make rapid progress toward your goals.',
      info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
      image: '/camera.jpg',
      icon: <CiVideoOn className='size-6 text-red-700' />,
      href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
    },
    {
      id: 2,
      title: 'Group Training',
      description:
        'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/wesdaypose.jpeg',
      icon: <GiYinYang className='size-6 text-black dark:text-white' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 3,
      title: 'Kickboxing',
      description:
        'Kickboxing is an umbrella term for stand-up striking sports based on punching and kicking. Muay Thai is one of the most well-known kickboxing sports along with Kyokushin Karate and kickboxing fought under K-1 rules..',
      info: '30 - ALL AGES. BEGINNERS.',
      image: '/groupClass.webp',
      icon: <GiTeacher className='size-6 text-sky-500' />,
      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 4,
      title: 'Boxing',
      description:
        'The Sweet Science, The Art of Punching is one of the most battle tested martial arts in the world. Learn the fundamentals of boxing, footwork, head movement, and combinations.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
      image: '/mitts.jpg',
      icon: <GiHighPunch className='size-6 text-red-500' />,

      href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
    },
    {
      id: 5,
      title: 'Outdoor Training',
      description:
        'Mix it up sometime and train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
      info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
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
      <div className='grid items-center justify-center gap-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
        {trainingCards.map((card) => (
          <TrainingCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
