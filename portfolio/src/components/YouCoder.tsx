import { motion, useTransform, useScroll } from 'framer-motion';
import YC2 from './../assets/YC2.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

const YouCoder = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.05, 0.10], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.03, 0.10, 0.15, 0.25], [0, 1, 1, 0]);

    return (
        <div className="fixed top-1/2 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 -mt-48 px-6 md:px-0 md:-mt-36 z-50">
            <motion.div
                className="flex flex-col md:flex-row-reverse justify-around items-start w-full h-4/6 uppercase font-space mx-auto relative sm:mt-10"
                style={{
                    opacity,
                    scale,
                    transformOrigin: 'center',
                }}
            >
                <div className="flex flex-col justify-start items-center m-4 ">

                </div>

                <div className="flex flex-col justify-start items-center mt-4">
                    <div className="h-96 w-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-indigo-500 to-gray-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl shadow-indigo-500 " ><img className="md:scale-[200%] mt-40" src={YC2} alt=""/></div>
                </div>

                <div className="w-full md:w-1/3 h-auto font-space text-gray-200 text-sm md:text-base">
                    <div className="w-40 text-gray-400 text-sm whitespace-nowrap -mt-20 md:-mt-20 "> Recent Work</div>
                    <h1 className="text-lg md:text-xl"><a className="hover:text-indigo-400 z-50" href="https://www.youcoder.io">youcoder.io</a></h1>
                    <br/>
                    <h3 className="text-sm md:text-lg">Empowering seamless coding collaboration and accelerated learning through interactive keystroke capture and exchange.</h3>
                    <br/>
                    <h3 className="text-sm md:text-lg">I contributed to the front-end development team, focusing on designing the user interface, and integrating dynamic logic and animations.</h3>
                    <div className="flex justify-center items-center my-6 z-50">
                        <a href="https://github.com/phpmvk/YouCoder" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="scale-150 !fill-gray-200 hover:!scale-125 hover:!fill-indigo-400"/></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default YouCoder
