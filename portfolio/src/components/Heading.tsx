import { motion, useTransform, useScroll } from 'framer-motion';
import Sketch from 'react-p5';

const Heading = () => {

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
    
      // Get the scroll y progress (0-1)
      const { scrollYProgress } = useScroll();
    
      // Create a variable that scales from 1 to 1.5 as scrollYProgress goes from 0 to 1
      const scale = useTransform(scrollYProgress, [0, 0.3], [1, 300]);


  return (
    <>
   
   <div style={{height: '40vh', width: '100vw'}}>
    <Sketch setup={setup} draw={draw} style={{position: 'fixed', zIndex: 0}} />
    </div>
      <div className="w-screen h-full flex items-center">
        <div className="fixed top-1/3 left-1/2 mx-auto flex flex-col justify-between items-start transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-96">
          <div className="p5-sketch" style={{position: 'relative'}}>
            
            <div style={{position: 'relative', zIndex: 2}}>
              <div className="h-64 w-96">
              <h1 className="font-space text-transparent font-bold text-9xl bg-gradient-to-r from-gray-100 to-gray-800 bg-clip-text inline-block">
  hello
</h1>
                <motion.div className="h-4 w-4 rounded-full bg-gray-800 inline-block" style={{ scale }}></motion.div>
                <h3 className="font-space whitespace-nowrap text-2xl text-indigo-500 mt-6  ml-4 font-bold">I'm Jordan Rollins.</h3>
                <h4 className="font-space whitespace-nowrap text-xl text-indigo-500 mt-6  ml-4 font-bold">A Software Engineer specialized in Front-End development</h4>
                <h3 className="font-space whitespace-nowrap text-md text-gray-100 mt-6 uppercase ml-4">Scroll to learn more.</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            {/* <KeyboardDoubleArrowUpIcon className=" !fill-white animate-bounce"/> */}
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Heading