import { MinimalCardDescription } from '../ui/minimal-card'
import { FaBrave, FaHeartPulse } from 'react-icons/fa6'
import { GiShieldBash, GiStrong } from 'react-icons/gi'
import { MdOutlineSelfImprovement, MdSelfImprovement } from 'react-icons/md'
import { RiMentalHealthLine } from 'react-icons/ri'
import { TbUsersGroup } from 'react-icons/tb'

export const Benefits = () => {
  const trainingBenefits = [
    {
      title: 'Self-Defense',
      icon: <GiShieldBash />,
      description:
        'Learn attack and defense techniques that inflict damage and protect yourself at the same time.'
    },
    {
      title: 'Health and Wellness',
      icon: <FaHeartPulse />,
      description: [
        'Burn up to 1500 calories per 1-2 hour session',
        'Reduce blood pressure and increase heart strength'
      ]
    },
    {
      title: 'Confidence & Mental Toughness',
      icon: <FaBrave />,

      description: [
        'Persevere through rigorous training and power through fear',
        'Strengthen both your mind and your body'
      ]
    },
    {
      title: 'Discpline & Focus',
      icon: <RiMentalHealthLine />,
      description: [
        'Develop self-discipline and focus',
        'Improve concentration, mental clarity and mental sharpness'
      ]
    },

    {
      title: 'Widens Social Circle',
      icon: <TbUsersGroup />,
      description: [
        'Develop a strong sense of community',
        'Make new friends and build lasting bonds'
      ]
    },
    {
      title: 'Peace of Mind & Mental Health',
      icon: <MdOutlineSelfImprovement />,
      description: [
        'Relieve stress and improve mental clarity through physical activity',
        'Build resilience and find inner calm while achieving personal growth'
      ]
    }
  ]
  return (
    <section
      id='features'
      className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Benefits of Muay Thai
        </h2>
        {/* <p className='sm:text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7'>
          Muay Thai literally means “Thai Boxing.” The national sport of
          Thailand, it is respected worldwide for its dynamic and powerful
          techniques. Often referenced as the “Art of 8 Limbs,” it uses eight
          points of contact: punches, elbows, knees, and kicks. Whether
          you&apos;re looking to get fit, learn self-defense, or explore martial
          arts, Muay Thai offers something for everyone.
        </p> */}
      </div>
      <div className='mx-auto grid justify-center gap-2 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
        {trainingBenefits.map((benefit, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-lg border bg-background p-2 drop-shadow-2xl'
          >
            <div className='flex flex-col justify-center gap-3 rounded-md px-3 py-2'>
              <div className='flex items-center gap-3 px-3'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl text-black'>
                  {benefit.icon}
                </span>
                <h3 className='font-bold'>{benefit.title}</h3>
              </div>
              <div className='text-sm text-muted-foreground'>
                {Array.isArray(benefit.description) ? (
                  benefit.description.map((desc, i) => (
                    <MinimalCardDescription key={i}>
                      •{desc}
                    </MinimalCardDescription>
                  ))
                ) : (
                  <MinimalCardDescription>
                    {benefit.description}
                  </MinimalCardDescription>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// -make CTA buttons bigger
// -top scroll of page has too much space on the sides
// - boxes have hover over but don’t really expand or lead to anything else
// -make shortcuts bigger or more elongated
// -adjust class schedule names to include other techniques
// -add a social media shortcut
// -adjust tiers for pricing to include by class and private instruction
// -book a private (change to ‘private lessons’) and then make sure it links to the right page

// Private Coaching
// •	Customized training with an experienced coach
// •	Accelerate abilities and master techniques
// •	Progress faster and see real results in training

// Video Analysis
// •	Experienced coach analyzes your technique
// •	Teaches body mechanics and pinpoints areas for improvement
// •	Reinforces proper technique and helps develop better habits

// Group Training
// •	Supportive group of martial artists that train together
// •	Peak performance training involves calisthenics, drills, strength conditioning, and group spar

// Kickboxing
// •	Learn stand-up striking involving punching and kicking through Muay Thai
// •	Experience training with mitts, Thai pads, heavy bag, and sparring

// Boxing
// •	Learn the fundamentals of boxing technique like footwork, head movement, and combos
// •	Experience training with shadow boxing, mitts, and heavy bags

// Outdoor Training
// •	Outdoor sessions teach resistance and mental toughness
// •	Connect with nature and enhance your fitness in a challenging and new environment

// Health and Wellness
// •	Burn up to 1500 calories per 1-2 hour session
// •	Reduce blood pressure and increase heart strength

// Self-Defense
// •	Learn attack and defense techniques that inflict damage and protect yourself at the same time

// Confidence and Mental Toughness
// •	Persevere through rigorous training and power through fear
// •	Strengthen both your mind and your body

// Social Community
// •	Develop a strong sense of community
// •	Make new friends and build lasting bonds
