import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export function AnimatedTestimonialsCards() {
  const testimonials = [
    {
      id: 0,
      quote: `Cool place to train. Very beginner friendly. The coaches and fighters make you feel welcomed. You get a good workout and learn a lot about fighting. I also like that it is kept very clean in there. 5 stars!`,
      name: 'Thai L.',
      designation: 'Business owner',
      src: '/thai-yelp.jpg'
    },
    {
      id: 1,
      quote: `Coach Larry is awesome. He breaks it down in simple yet effective techniques that builds confidence. What I like most about the class are the students. No ego, friendly, and fun.`,
      name: 'Mike T.',
      designation: 'Data Analyst',
      src: '/wesmitts.png'
    },
    {
      id: 2,
      quote: `Larry's kickboxing classes at Nerds Fighting are seriously something else. He's got this way of breaking down martial arts that makes it super approachable for everyone. You walk in, and whether you're new or you've been doing this for years, you immediately feel welcome. The whole "meathead" stereotype? Yeah, that's not a thing here.

      Larry's built this space where you can geek out about technique like you're analyzing a Starcraft match, and then jump into sparring like you're Saenchai in a Muay Thai training camp. It's crazy--one minute you're talking Magic the Gathering, and the next you're trading kicks. What makes this place special is how it blends martial arts with nerd culture in a way that just works.

      Everyone, no matter their age or background, feels like they belong here. It's not just about getting in shape; it's about the community. If you want a place where you can be yourself, talk nerdy, and still train hard, Nerds Fighting is the spot. I highly recommend!`,
      name: 'Qua Rodriguez',
      designation: 'Entrepreneur',
      src: 'https://s3-media0.fl.yelpcdn.com/photo/Kow7P2I0dnugFZa93l34Jg/o.jpg'
    },

    {
      id: 3,
      quote:
        "We love it here. It's a relaxed atmosphere with a great vibe and a great coach that cares.",
      name: 'Andrea N',
      designation: 'Business Analyst',
      src: '/nerds_9-19-24_.png'
    }
  ]
  return <AnimatedTestimonials testimonials={testimonials} />
}
