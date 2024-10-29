import { FaBrave, FaHeartPulse } from 'react-icons/fa6'
import { GiShieldBash, GiStrong } from 'react-icons/gi'
import { RiMentalHealthLine } from 'react-icons/ri'
import { TbUsersGroup } from 'react-icons/tb'

export const Benefits = () => {
  const trainingBenefits = [
    {
      title: 'Calorie Burner',
      icon: <GiStrong />,
      description: `It's all about burning those extra calories and Muay Thai does a great job at it. Each Muay Thai session lasts about 1-2 hours and consists of warm-up, shadow boxing, drilling techniques, heavy bag work, padwork, with some strength & conditioning exercises. One 2-hour session can burn 1500 calories, making it an effectives and fun way to lose weight.`
    },
    {
      title: 'Self-Defense',
      icon: <GiShieldBash />,
      description:
        'Muay Thai consists of both attacking and defense techniques. As a combat art originating in military warfare, Muay Thai was designed to inflict pain to the enemy while protecting the user from physical harm. Its range of weapons like the elbow strike, knee strike and push kick can be used to disarm an attack. It is a great self-defense skill, making it ideal for everyone to learn especially kids and women.'
    },
    {
      title: 'Mental Toughness',
      icon: <RiMentalHealthLine />,
      description:
        'Training Muay Thai helps to build mental fortitude by challenging limits both physically and mentally as it takes perseverance. So Muay Thai strengthens not only the body, but also the mind. When the going gets tough, the tough gets going. Being mentally tough enables a person to succeed in the face of uncertainty and adversity.'
    },
    {
      title: 'Self-Confidence',
      icon: <FaBrave />,
      description:
        'Training Muay Thai makes one leaner and gets one into a better shape. And when a person feels good about the way he/she looks, the more confidence they exude. At the same time if one makes the effort to train Muay Thai regularly, he/she will get better at it and seeing that improvement over time has a direct effect in the growth of self-confidence..'
    },
    {
      title: 'Lowers Blood Pressure',
      icon: <FaHeartPulse />,
      description:
        'Cardiovascular illness is the number 1 cause of death globally. One of the most common heart disease is hypertension, or high blood pressure, which can lead to serious complications like stroke and heart failure. The first step to reducing the risk of developing heart diseases is to make positive changes by engaging in regular cardiovascular exercises. As a cardio-intensive sport, regular training in Muay Thai can reduce blood pressure and strengthen the heart. Being healthy isn’t a fad or a trend, it is a lifestyle and Muay Thai can help to achieve it.'
    },
    {
      title: 'Widens Social Circle',
      icon: <TbUsersGroup />,
      description:
        'There is always a strong sense of comradery at every Muay Thai gym. There is a common interest in learning Muay Thai; everyone is working towards the shared goal of self-betterment; blood and sweat are shed during training; and this is how the deepest friendships are forged. Friends who slay together, stay together.'
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
        <p className='sm:text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7'>
          Muay Thai literally means “Thai Boxing”. The national sport of
          Thailand, it is respected worldwide for its dynamic and powerful
          techniques. Often referenced as the “Art of 8 Limbs”, it uses eight
          points of contact: punches, elbows, knees, and kicks. Whether
          you&apos;re looking to get fit, learn self-defense, or explore martial
          arts, Muay Thai offers something for everyone.
        </p>
      </div>
      <div className='mx-auto grid justify-center gap-2 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
        {trainingBenefits.map((benefit, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-lg border bg-background p-2'
          >
            <div className='flex flex-col justify-center gap-3 rounded-md px-3 py-2'>
              <div className='flex items-center justify-between px-3'>
                <h3 className='font-bold'>{benefit.title}</h3>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl text-black'>
                  {benefit.icon}
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
