import { motion, useTransform, useScroll } from 'framer-motion';
import AOE4 from './../assets/AOE4.svg';


const ArtofEth = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const scale = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.75, 0.8],
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
            <img className='md:scale-[200%] mt-40' src={AOE4} alt='' />
          </div>
        </div>

        <div className='w-full md:w-1/3 h-auto font-space text-gray-200 text-sm md:text-base'>
          <div className='w-40 text-gray-400 text-sm whitespace-nowrap -mt-20 md:-mt-20 sm:-mt-10'>
            {' '}
            2017{' '}
          </div>
          <h1 className='text-lg md:text-5xl'>
            <a
              className='hover:text-indigo-400'
              href='https://www.linkedin.com/pulse/crypto-art-art-cryptography-blockchains-beautiful-things-hagell/'
            >
              ArtofEthereum
            </a>
          </h1>
          <br />
          <h3 className='text-sm md:text-lg'>
            Before NFTs became popular, ArtofEthereum was a pioneering project
            connecting limited edition art prints and the Ethereum blockchain.
            Prints featured an NFC chip linking to the blockchain, confirming
            the print's edition number and providing related information upon
            scanning.
          </h3>
          <br />
          <h3 className='text-sm md:text-lg'>
            I collaborated with Chicago-based artist Justin VanGendren on this
            project, bringing my vision to life.
          </h3>
          <div className='flex justify-center items-center my-6'></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtofEth;
