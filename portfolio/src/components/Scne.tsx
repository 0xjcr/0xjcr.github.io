import { motion, useTransform, useScroll } from 'framer-motion';
import SCNE1 from './../assets/SCNE1.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

const Scne = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const scale = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.6, 0.65],
    [0, 1, 1, 0]
  );

  return (
    <div className='fixed top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 -mt-48 px-6 md:px-0 md:-mt-36 z-50'>
      <motion.div
        className='flex flex-col md:flex-row-reverse justify-around items-start w-full h-4/6 uppercase font-space mx-auto relative sm:mt-10'
        style={{
          opacity,
          scale,
          transformOrigin: 'center',
        }}
      >
        <div className='flex flex-col justify-start items-center m-4 '></div>

        <div className='flex flex-col justify-start items-center mt-4'>
          <div className='h-96 w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-indigo-500 to-gray-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl shadow-indigo-500 '>
            <img className='md:scale-[200%] mt-40' src={SCNE1} alt='' />
          </div>
        </div>

        <div className='w-full md:w-1/3 h-auto font-space text-gray-200 text-sm md:text-base'>
          <div className='w-40 text-gray-400 text-sm whitespace-nowrap -mt-20 md:-mt-20 sm:-mt-10'>
            {' '}
            Recent Work
          </div>
          <h1 className='text-lg md:text-5xl'>
            <a
              className='hover:text-indigo-400'
              href='https://github.com/0xjcr/scne'
            >
              SCNE
            </a>
          </h1>
          <br />
          <h3 className='text-sm md:text-lg'>
            SCNE is a social networking app connecting local communities,
            encouraging engagement - thereby creating a vibrant local ecosystem.
          </h3>
          <br />
          <h3 className='text-sm md:text-lg'>
            As the lead developer, I worked with a team to design the UI/UX,
            built a relational database, implemented user authentication, and
            deployed an Express.js server.
          </h3>
          <div className='flex justify-center items-center my-6'>
            <a
              href='https://github.com/0xjcr/scne'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon className='scale-150 !fill-gray-200 hover:!scale-125 hover:!fill-indigo-400 ' />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Scne;
