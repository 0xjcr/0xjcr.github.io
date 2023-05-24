import { motion, useTransform, useScroll } from 'framer-motion';
// import MMAI from './../assets/MMAI.svg';
import AOE4 from './../assets/AOE4.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

const ArtofEth = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.65, 0.70], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.65, 0.7, 0.75, .80], [0, 1, 1, 0]);
    const opacityOut = useTransform(scrollYProgress, [0.75, .80], [1, 0]);


  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-1 -mt-36 z-50">
      <motion.div
    className="flex flex-row-reverse justify-around items-start w-5/6 h-4/6 uppercase font-space mx-auto"
    style={{
      opacity,
      scale,
      transformOrigin: 'center',
    }}
>
    <div className="flex flex-col justify-start items-center m-4 ">
    {/* <div className="flex items-center justify-center text-center h-20 w-40 m-4 text-indigo-500 text-4xl"> Recent Work</div> */}
    </div>

    <div className="flex flex-col justify-start items-center mt-4">
        <div className="h-96 w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-indigo-500 to-gray-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl shadow-indigo-500" ><img className="scale-[200%] mt-40" src={AOE4} alt=""/></div>
    </div>

    <div className="w-1/3 h-auto font-space text-gray-200">
    <div className="w-40 text-gray-400 text-md whitespace-nowrap -mt-20">2017</div>
    <h1><a className="hover:text-indigo-400" href="https://www.linkedin.com/pulse/crypto-art-art-cryptography-blockchains-beautiful-things-hagell/">ArtofEthereum</a></h1>
        <br/>
        <h3>Prior to the surge in popularity of NFTs, ArtofEthereum was a pioneering venture that bridged the gap between physical, limited edition art prints and the immutable Ethereum blockchain. The prints were integrated with an NFC chip, which served as a digital link to the blockchain. Upon scanning, the chip would confirm the edition number of the print and provide pertinent information about it.</h3>
        <br/>
        <h3>In this project, I collaborated with Chicago based artist Justin VanGendren to bring my vision to life.</h3>
        <div className="flex justify-center items-center my-6">
    </div> 
    </div>
</motion.div>


</div>

  )
}

export default ArtofEth;