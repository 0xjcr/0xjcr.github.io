import { motion, useTransform, useScroll } from 'framer-motion';

const About = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.91, 0.95], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.91, 0.95], [0, 1]);

    return (
        <div className="fixed top-1/4 sm:top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-5/6 h-1 mt-12 md:-mt-36 z-20">

            <motion.div className="flex flex-col justify-around items-start w-full md:w-5/6 h-4/6 uppercase font-space mx-auto text-2xl md:text-4xl text-indigo-500 p-4"
                style={{
                    opacity,
                    scale,
                    transformOrigin: 'center',
                }}
            >
                <h3>about</h3>

                <div className="text-xs md:!text-sm text-gray-200 mt-4">
                    thank you for your visit.
                    <br />
                    If you've made it this far, you've seen a few of my select previous works.
                    <br />
                    Many of these products have been a collective effort, so kudos to my fellow collaborators - most notably my team at youcoder • Michael Epelboim • Idar Nigatu • Phil von koss
                    <br />
                    <br />
                    the Japanese concept "ikigai" has stuck with me ever since I heard about it.
                    <br />
                    ikigai combines the words "iki" (生き), meaning "life," and "gai" (甲斐), meaning "value or worth."
                    <br />
                    in summary, ikigai is the intersection of:
                    <br />
                    • what you love doing
                    <br />
                    • what the world needs
                    <br />
                    • what you are good at
                    <br />
                    • what you can get paid for
                    <br />
                    <br />
                    I've found my ikigai in writing code.
                    <br />
                    <br />
                    when i'm not coding, i'm seeking growth in other areas. to name a few of my hobbies:
                    <br />
                    •travelling • fashion design • motorcycle touring • nature & wildlife • climbing • scuba
                </div>
            </motion.div>
        </div>
    )
}

export default About
