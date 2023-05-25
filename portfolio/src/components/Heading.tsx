import { useRef, useState, useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Sketch from 'react-p5';

const Heading = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const containerRef = useRef<HTMLDivElement | null>(null);

  interface Particle {
    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
  }

  let particles: Particle[] = [];

  const setup = (p5: any, canvasParentRef: Element) => {
    let containerWidth = containerRef.current!.offsetWidth;
    let containerHeight = containerRef.current!.offsetHeight;
    p5.createCanvas(containerWidth, containerHeight).parent(canvasParentRef);
  
    for (let i = 0; i < 1000; i++) {
      particles.push({
        x: Math.random() * p5.width,
        y: Math.random() * p5.height,
        xSpeed: (Math.random() - 0.5) / 2,
        ySpeed: (Math.random() - 0.5) / 2,
      });
    }
  };

  const draw = (p5:any) => {
    p5.background(0);
    p5.strokeWeight(3); 
    p5.stroke(31, 41, 55); 

    for (let i = 0; i < particles.length; i++) {
      let particle = particles[i];

      particle.x += particle.xSpeed;
      particle.y += particle.ySpeed;

      if (particle.x < 0) particle.x = p5.width;
      else if (particle.x > p5.width) particle.x = 0;
      if (particle.y < 0) particle.y = p5.height;
      else if (particle.y > p5.height) particle.y = 0;

      p5.stroke(31, 41, 55); 
      p5.point(particle.x, particle.y); 
    }
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 300]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= 520 && (
        <div ref={containerRef} style={{ height: '60vh', width: '100vw' }}>
          <Sketch
            setup={setup}
            draw={draw}
            style={{ position: 'fixed', zIndex: 0, height: 'auto' }}
          />
        </div>
      )}

{windowWidth <= 520 && (
        <div className="h-[80vh] w-[80vh] -ml-20 -mt-20 rounded-b-full bg-gray-950" >
          
        </div>
      )}


      <div className='w-screen h-full flex items-center overscroll-none'>
        <div className='fixed top-1/3 left-1/2 mx-auto flex flex-col justify-between items-start transform -translate-x-1/2 -translate-y-1/2 w-4/6 h-96'>
          <div className='p5-sketch' style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className='h-64 w-96'>
                <h1 className='font-space text-transparent font-bold text-8xl md:m-0 ml-4 md:text-9xl bg-gradient-to-r from-gray-100 to-gray-800 bg-clip-text inline-block'>
                  hello
                </h1>
                <motion.div
                  className='h-2 w-2 md:h-4 md:w-4 rounded-full bg-gray-800 inline-block'
                  style={{ scale }}
                ></motion.div>
                <h3 className='font-space whitespace-nowrap text-3xl text-indigo-500 mt-6  ml-4 font-bold'>
                  I'm Jordan Rollins.
                </h3>
                <h4 className='font-space whitespace-nowrap text-2xl text-indigo-500 mt-2  ml-4 font-bold'>
                  Software Engineer
                </h4>
                <h3 className='font-space whitespace-nowrap text-md text-gray-100 mt-8 uppercase ml-4'>
                  Scroll to learn more.
                </h3>
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full'>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;

