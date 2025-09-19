'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { LinkPreview } from "./components/LinkPreview";

const page = () => {
  // Animation variants for different types of content
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const fadeIn: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const staggerItem: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <motion.header
        className='h-24 w-full border-b border-foreground flex items-center justify-between px-8'
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="text-foreground font-bold text-lg">JR</div>
        <nav className="flex space-x-12">
          <a href="#work" className="text-foreground font-medium hover:font-bold transition-all">RECENT WORK</a>
          <a href="#stack" className="text-foreground font-medium hover:font-bold transition-all">STACK</a>
          <a href="#contact" className="text-foreground font-medium hover:font-bold transition-all">CONTACT</a>
        </nav>
      </motion.header>

      <motion.div
        className="w-full py-24 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h1
          className="text-[clamp(1rem,14vw,15rem)] font-medium text-left leading-none whitespace-nowrap overflow-hidden pt-4"
          variants={staggerItem}
        >
          Jordan
        </motion.h1>
        <motion.h1
          className="text-[clamp(1rem,14vw,15rem)] font-medium text-left leading-none whitespace-nowrap overflow-hidden pb-4"
          variants={staggerItem}
        >
          Rollins.
        </motion.h1>
        <motion.p
          className="text-xl mt-8 max-w-md"
          variants={staggerItem}
        >
          Software Engineer & Designer
        </motion.p>
      </motion.div>

      <motion.section
        id="work"
        className="w-full px-8 py-24 border-t border-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-6xl font-foreground mb-16"
          variants={slideInLeft}
        >
          RECENT WORK
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
          variants={staggerContainer}
        >
          <motion.div className="space-y-4" variants={staggerItem}>
            <LinkPreview
              url="https://www.tromero.ai"
              imageSrc="/tromero_site.png"
              isStatic
              
            ><h3 className="text-2xl  font-bold uppercase hover:text-blue-800 hover:cursor-pointer w-fit">Tromero</h3></LinkPreview>
            <p className="text-lg font-light">Full Stack Developer · 2 years</p>
            <p className="text-sm font-medium">REACT • NEXT.JS • STRIPE • GCP • CONVEX</p>
          </motion.div>
          <motion.div className="space-y-4" variants={staggerItem}>
            <LinkPreview
              url="https://handler-eta.vercel.app/"
              imageSrc="/handler_site.png"
              isStatic

            ><h3 className="text-2xl font-bold  hover:text-blue-800 hover:cursor-pointer w-fit">HANDLER</h3></LinkPreview>
            <p className="text-lg font-light">Conceptual personal project for an agentic AI web 3 product.</p>
            <p className="text-sm font-medium">NEXT.JS • TAILWIND • OPENAI API • ONCHAINKIT</p>
          </motion.div>
          <motion.div className="space-y-4" variants={staggerItem}>
            <LinkPreview
              url="https://edit-labs.vercel.app/"
              imageSrc="/editlabs_site.png"
              isStatic

            ><h3 className="text-2xl font-bold  hover:text-blue-800 hover:cursor-pointer w-fit">EDIT LABS</h3></LinkPreview>
            <p className="text-lg font-light">Conceptual personal project for a human genetic customization interface.</p>
            <p className="text-sm font-medium">NEXT.JS • TAILWIND </p>
          </motion.div>
          <motion.div className="space-y-4" variants={staggerItem}>
            <h3 className="text-2xl font-bold  hover:text-blue-800 hover:cursor-pointer w-fit  ">TERMINAL WAIT</h3>
            <p className="text-lg font-light">Generate the probability your flight will actually arrive on time</p>
            <p className="text-sm font-medium">NEXT.JS • TAILWIND • CONVEX • OPENAI API</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="stack"
        className="w-full px-8 py-24 border-t border-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-6xl font-foreground mb-16"
          variants={slideInLeft}
        >
          STACK
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">FRONTEND</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>REACT</li>
              <li>NEXT.JS</li>
              <li>TYPESCRIPT</li>
              <li>TAILWIND</li>
            </ul>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">BACKEND</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>NODE.JS</li>
              <li>EXPRESS</li>
              <li>CONVEX</li>
              <li>POSTGRESQL</li>
            </ul>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">DESIGN</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>FIGMA</li>
              <li>SKETCH</li>
              <li>PRINCIPLE</li>
              <li>FRAMER</li>
            </ul>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">TOOLS</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>GIT</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>VERCEL</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="w-full px-4 sm:px-8 py-12 sm:py-16 lg:py-24 border-t border-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-6xl font-foreground mb-8 sm:mb-12 lg:mb-16"
          variants={slideInLeft}
        >
          CONTACT
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          variants={staggerContainer}
        >
          <motion.div className="space-y-6 sm:space-y-8" variants={staggerItem}>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">EMAIL</h3>
              <p className="text-base sm:text-lg font-light break-all sm:break-normal">hello@jordanrollins.com</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">CV</h3>
              <a href="/Resume-2025.pdf"
                download="Jordan_Rollins_Resume.pdf" className="text-base sm:text-lg font-light hover:text-blue-800 hover:cursor-pointer">download</a>
            </div>
          </motion.div>
          <motion.div className="space-y-6 sm:space-y-8" variants={staggerItem}>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">GITHUB</h3>
              <p className="text-base sm:text-lg font-light break-all sm:break-normal">github.com/0xjcr</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">LINKEDIN</h3>
              <p className="text-base sm:text-lg font-light break-all sm:break-normal">linkedin.com/in/jordanrollins</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.footer
        className="w-full px-4 sm:px-8 py-8 sm:py-12 lg:py-16 border-t border-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <p className="text-xs sm:text-sm font-light">© 2025 JORDAN ROLLINS</p>
          <p className="text-xs sm:text-sm font-light"> <span className="w-2 h-2 bg-green-400 animate-pulse rounded-full inline-block mr-1 mb-[1px] "></span>AVAILABLE FOR PROJECTS</p>
        </div>
      </motion.footer>
    </>
  )
}

export default page