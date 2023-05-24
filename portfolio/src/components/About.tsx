import { motion, useTransform, useScroll } from 'framer-motion';


const About = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.91, 0.95], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.91 ,.95], [0, 1]);
    




  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-1 -mt-36 bg-red-400/20 z-20">
    <motion.div className="flex flex-row-reverse justify-around items-start w-5/6 h-4/6 uppercase font-space mx-auto text-4xl text-gray-400"
    style={{
        opacity,
        scale,
        transformOrigin: 'center',
      }}
    ><h3>about

<div className="!text-sm text-gray-200">
    hello
</div>

    </h3>




    </motion.div></div>
  )
}

export default About