import { motion, useTransform, useScroll } from 'framer-motion';
import MMAI from './../assets/MMAI.svg'

const Projects = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.03, 0.4, 0.4, 0.45], [0, 1, 1, 1]);
    // const opacityOut = useTransform(scrollYProgress, [0.95, 1], [1, 0]);


  return (
    <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="mx-auto flex justify-center items-start w-5/6 h-4/6 uppercase whitespace-nowrap font-space"
        style={{
          opacity,
          scale,
          transformOrigin: 'center',
        }}
    >
    <div className="flex flex-col justify-start items-center m-4 ">
    <div className="flex items-center justify-center text-center h-20 w-40 m-4 text-indigo-500 text-4xl"> Recent Work</div>
    <div className="h-64 w-64 bg-red-400 rounded-full hover:scale-110 transition-transform duration-300" ><img className="scale-150 mt-40" src={MMAI} alt=""/></div>
    </div>

    <div className="flex flex-col justify-start items-center mt-4">
    <div className="h-96 w-96 bg-green-400 rounded-full" ><img className="scale-150 mt-40" src={MMAI} alt=""/></div>
    </div>

    <div className="flex flex-col justify-start items-center m-4">
    <div className="h-64 w-64 bg-blue-400 rounded-full" ><img className="scale-150 mt-40" src={MMAI} alt=""/></div>
    </div>
</motion.div>
</div>
  )
}

export default Projects