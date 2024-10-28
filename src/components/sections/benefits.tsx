import { GiStrong } from 'react-icons/gi'

export const Benefits = () => {
  const trainingBenefits = [
    {
      title: 'Calorie Burner',
      icon: <GiStrong />,
      description:
        'Training Muay Thai helps to build mental fortitude by challenging limits both physically and mentally as it takes perseverance. So Muay Thai strengthens not only the body, but also the mind. When the going gets tough, the tough gets going. Being mentally tough enables a person to succeed in the face of uncertainty and adversity.'
    },
    {
      title: 'Self-Defense',
      description:
        'Muay Thai consists of both attacking and defense techniques. As a combat art originating in military warfare, Muay Thai was designed to inflict pain to the enemy while protecting the user from physical harm. Its range of weapons like the elbow strike, knee strike and push kick can be used to disarm an attack. It is a great self-defense skill, making it ideal for everyone to learn especially kids and women'
    },
    {
      title: 'Mental Toughness',
      description:
        'Training Muay Thai helps to build mental fortitude by challenging limits both physically and mentally as it takes perseverance. So Muay Thai strengthens not only the body, but also the mind. When the going gets tough, the tough gets going. Being mentally tough enables a person to succeed in the face of uncertainty and adversity.'
    },
    {
      title: 'Self-Confidence',
      description:
        'Training Muay Thai makes one leaner and gets one into a better shape. And when a person feels good about the way he/she looks, the more confidence they exude. At the same time if one makes the effort to train Muay Thai regularly, he/she will get better at it and seeing that improvement over time has a direct effect in the growth of self-confidence..'
    },
    {
      title: 'Lowers Blood Pressure',
      description:
        'Cardiovascular illness is the number 1 cause of death globally. One of the most common heart disease is hypertension, or high blood pressure, which can lead to serious complications like stroke and heart failure. The first step to reducing the risk of developing heart diseases is to make positive changes by engaging in regular cardiovascular exercises. As a cardio-intensive sport, regular training in Muay Thai can reduce blood pressure and strengthen the heart. Being healthy isn’t a fad or a trend, it is a lifestyle and Muay Thai can help to achieve it.'
    },
    {
      title: 'Widens Social Circle',
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
          techniques. It’s often referenced as the “Art of 8 Limbs” because it
          uses eight points of contact: punches, elbows, knees, and kicks.
          Whether you’re looking to get fit, learn self-defense, or explore
          martial arts, Muay Thai offers something for everyone.
        </p>
      </div>
      <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
        {trainingBenefits.map((benefit, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-lg border bg-background p-2'
          >
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z' />
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>{benefit.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
