import { motion, useTransform, useScroll } from 'framer-motion';
import MMAI from './../assets/MMAI.svg';

import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.22, 0.35], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.22, 0.35, 0.40, 0.45], [0, 1, 1, 0]);
    // const opacityOut = useTransform(scrollYProgress, [0.95, 1], [1, 0]);


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
        <div className="h-96 w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-indigo-500 to-gray-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl shadow-indigo-500" ><img className="scale-[200%] mt-40" src={MMAI} alt=""/></div>
    </div>

    <div className="w-1/3 h-auto font-space text-gray-200">
    <div className="w-40 text-gray-400 text-md whitespace-nowrap -mt-20"> Recent Work</div>
    <h1><a className="hover:text-indigo-400 whitespace-nowrap" href="https://github.com/0xjcr/MealMasterAI">MealMaster AI</a></h1>
        <br/>
        <h3>By analysing your input on dietary habits, fitness goals, lifestyle, and health conditions, our sophisticated AI constructs a comprehensive, balanced, and delicious meal plan just for you.</h3>
        <br/>
        <h3>As a full-stack contributor to this project, I streamlined the codebase through refactoring to TypeScript, introduced unit testing for improved reliability, and optimized the user interface and user experience.</h3>
        <div className="flex justify-center items-center my-6"><a href="https://github.com/0xjcr/MealMasterAI" target="_blank" rel="noopener noreferrer">
    <GitHubIcon className="scale-150 !fill-gray-200 hover:!scale-125 hover:!fill-indigo-400 "/></a></div>  
    </div>
</motion.div>


</div>

  )
}

export default Projects