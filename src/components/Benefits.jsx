import { benefits } from '../constants';
import Heading from './Heading';
import Section from './Section';
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from './design/Benefits';
import ClipPath from '../assets/svg/ClipPath';
import { staggerContainer, fadeIn } from '../utils/motion';
import { MotionDiv } from './MotionComponents';

const Benefits = () => {
  return (
    <Section id='features'>
      <MotionDiv className='container relative z-2'
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
      >
        <Heading
          className='md:max-w-md lg:max-w-2xl text-center'
          title='Chat Smarter, Not Harder with Brainwave'
          titleStyles='justify-center'
        />

        <div className='flex flex-wrap gap-10 mb-10 justify-center'>
          {
            benefits.map((item, index) => {
              return (
                <MotionDiv
                  className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  key={item.id}
                  variants={fadeIn('right', 'spring', index * 0.5, 0.55)}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                    <h5 className='h5 mb-5'>
                      {item.title}
                    </h5>

                    <p className='body-2 mb-6 text-n-3'>
                      {item.text}
                    </p>

                    <div className='flex items-center mt-auto'>
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />

                      <p className='ml-auto font-code text-xs font-bold uppercase tracking-wider'>
                        Explore More
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div className='absolute inset-0.5 bg-n-8'
                    style={{ clipPath: 'url(#benefits)' }}
                  >
                    <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={300}
                          height={300}
                          alt={item.title}
                          className='w-full h-full object-cover'
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </MotionDiv>
              )
            })
          }
        </div>
      </MotionDiv>
    </Section>
  )
}

export default Benefits