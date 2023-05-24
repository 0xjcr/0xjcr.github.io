import { motion, useTransform, useScroll } from 'framer-motion';
import Sketch from 'react-p5';

const About = () => {

    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0.91, 0.95], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.91 ,.95], [0, 1]);
    
    interface Particle {
        x: number;
        y: number;
        xSpeed: number;
        ySpeed: number;
      }
      
      let particles: Particle[] = [];
      
      const setup = (p5: any, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight * 0.3).parent(canvasParentRef);
        p5.background(0);
      
        for (let i = 0; i < 1000; i++) {
          particles.push({
            x: Math.random() * p5.width,
            y: Math.random() * p5.height,
            xSpeed: (Math.random() - 0.5) / 2,
            ySpeed: (Math.random() - 0.5) / 2,
          });
        }
      };
      
      const draw = (p5: any) => {
        p5.background(0);
        p5.strokeWeight(3); // Change this value to adjust the size of the particle
      p5.stroke(31,41, 55); // Particle color
        
        for (let i = 0; i < particles.length; i++) {
          let particle = particles[i];
        
          // Update the position based on the speed
          particle.x += particle.xSpeed;
          particle.y += particle.ySpeed;
        
          // Wrap the particles around to the other side of the screen
          if (particle.x < 0) particle.x = p5.width;
          else if (particle.x > p5.width) particle.x = 0;
          if (particle.y < 0) particle.y = p5.height;
          else if (particle.y > p5.height) particle.y = 0;
        
          // Draw the particle
          p5.stroke(31,41, 55); // Particle color
          p5.point(particle.x, particle.y); // Draw a single point at the particle's position
        }
      };




  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-1 -mt-36 z-20">
        
    <motion.div className="flex flex-row-reverse justify-around items-start w-5/6 h-4/6 uppercase font-space mx-auto text-4xl text-indigo-500"
    style={{
        opacity,
        scale,
        transformOrigin: 'center',
      }}
    ><h3>about

<div className="!text-sm text-gray-200 mt-4">
    thank you for your visit.
    <br/>
    If youve made it this far, you've seen a few of my select previous works.
    <br/>
    Many of these products have been a collective effort, so kudos to my fellow collaborators - most notably my team at youcoder • Michael Epelboim • Idar Nigatu • Phil von koss
    <br/>
    <br/>
    the japanese concept "ikigai" has stuck with me ever since i heard about it.
    <br/>
    ikigai combines the words "iki" (生き), meaning "life," and "gai" (甲斐), meaning "value or worth."
    <br/>
    in summary, ikigai is the intersection of:
    <br/>
    • what you love doing
    <br/>
    • what the world needs
    <br/>
    • what you are good at
    <br/>
    • what you can get paid for
    <br/>
    <br/>
    I've found my ikigai in writing code. 
    <br/>
    when i'm not coding, i'm seeking growth in other areas. to name a few of my hobbies:
    <br/>
    •travelling • fashion design • motorcycle touring • nature & wildlife • climbing • scuba

    
</div>

    </h3>




    </motion.div></div>
  )
}

export default About