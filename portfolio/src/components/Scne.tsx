import { motion, useTransform, useScroll } from 'framer-motion';
// import MMAI from './../assets/MMAI.svg';
import SCNE1 from './../assets/SCNE1.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.8, 0.87], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.83, 0.86, 0.96, 1], [0, 1, 1, 0]);
    // const opacityOut = useTransform(scrollYProgress, [0.95, 1], [1, 0]);


  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mt-20 z-50">
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
        <div className="h-96 w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-indigo-500 to-gray-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl shadow-indigo-500" ><img className="scale-[200%] mt-40" src={SCNE1} alt=""/></div>
    </div>

    <div className="w-1/3 h-auto font-space text-gray-200">
    <div className="w-40 text-gray-400 text-md whitespace-nowrap -mt-20"> Recent Work</div>
        <h1 className="text-6xl whitespace-nowrap text-indigo-500">SCNE</h1>
        <br/>
        <h3>SCNE is a local social networking app designed to connect communities and foster engagement within specific areas. The app provides a platform for users to interact with their neighbors, local businesses, and community organizations, creating a vibrant and connected local ecosystem.</h3>
        <br/>
        <h3>Leading the application's development, I collaborated with a team to design the UI/UX, build a relational database, implement user authentication, and deploy an Express.js server.</h3>
        <div className="flex justify-center items-center my-6"><GitHubIcon className="scale-150 !fill-gray-200 hover:!scale-125 hover:!fill-indigo-400"/></div> 
    </div>
</motion.div>


</div>

  )
}

export default Projects