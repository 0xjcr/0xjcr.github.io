import { motion, useTransform, useScroll } from 'framer-motion';

const Skills = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.8, 0.83], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.8, 0.82, 0.87, 0.92], [0, 1, 1, 100]);
    const opacityOut = useTransform(scrollYProgress, [0.95, 1], [1, 0]);


  return (
    <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
      <motion.div
        className="mx-auto mt-40 flex justify-center items-start w-5/6 h-4/6 uppercase whitespace-nowrap font-space"
        style={{
          opacity: opacityOut,
          scale,
          transformOrigin: 'center',
        }}
    >
    <div className="flex flex-col justify-start items-center m-4">
        <div className="flex items-center justify-center text-center h-20 w-40 m-4 text-indigo-500 text-4xl"> skills</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">JavaScript</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">TypeScript</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">React</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Redux</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Angular</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">HTML 5</div>
    </div>
    <div className="flex flex-col justify-start items-center m-4">
    <div className="h-20 w-40 m-4"></div>
    <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Tailwind CSS</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">CSS</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Material UI</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Framer Motion</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">P5.js</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">UI/UX Design</div> 
    </div>
    <div className="flex flex-col justify-start items-center m-4">
    <div className="h-20 w-40 m-4"></div>
    <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Node.js</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Express</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Koa</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">SQL</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Sequelize</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">MongoDB</div>
    </div>
    <div className="flex flex-col justify-start items-center m-4">
    <div className="h-20 w-40 m-4"></div>
    <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Mongoose</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Prisma</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Git</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Jest</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Mocha</div>
        <div className="flex items-center justify-center text-center h-10 w-40 m-4  text-gray-300 rounded shadow-md shadow-indigo-300/50 hover:scale-110 transition-transform duration-300">Cypress</div>
    </div>
</motion.div>
</div>
  )
}

export default Skills