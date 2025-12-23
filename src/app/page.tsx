'use client'
import React, { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { LinkPreview } from "./components/LinkPreview";

const page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Animation variants 
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

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-12">
          <a href="#work" className="text-foreground font-medium hover:font-bold transition-all">RECENT WORK</a>
          <a href="#stack" className="text-foreground font-medium hover:font-bold transition-all">STACK</a>
          <a href="#contact" className="text-foreground font-medium hover:font-bold transition-all">CONTACT</a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-foreground"
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-foreground"
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-foreground"
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-24 left-0 right-0 bg-background border-b border-foreground z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-8 py-6 space-y-4">
              <a
                href="#work"
                className="text-foreground font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                RECENT WORK
              </a>
              <a
                href="#stack"
                className="text-foreground font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                STACK
              </a>
              <a
                href="#contact"
                className="text-foreground font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

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
              url="https://bubblesapp.dev"
              imageSrc="/bubbles_site.png"
              isStatic

            ><h3 className="text-2xl font-bold  hover:text-blue-800 hover:cursor-pointer w-fit">BUBBLES SHARING IOS APP</h3></LinkPreview>
            <p className="text-lg font-light">A peer-to-peer resource sharing network app, live on IOS.</p>
            <p className="text-sm font-medium">REACT NATIVE (EXPO) • CONVEX • DIGIT • RESEND • GCP</p>
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
            <LinkPreview
              url="https://terminal-wait.vercel.app/"
              imageSrc="/terminal_wait_site.png"
              isStatic

            ><h3 className="text-2xl font-bold  hover:text-blue-800 hover:cursor-pointer w-fit">TERMINAL WAIT</h3></LinkPreview>
            <p className="text-lg font-light">Generate the probability your flight will actually arrive on time.</p>
            <p className="text-sm font-medium">NEXT.JS • TAILWIND • MUI • CONVEX • OPENAI API</p>
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
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">FRONTEND</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>REACT</li>
              <li>REACT NATIVE</li>
              <li>EXPO</li>
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
              <li>DOCKER</li>
            </ul>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">AI / ML</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>OPENAI API</li>
              <li>CLAUDE API</li>
              <li>LANGCHAIN</li>
              <li>VERCEL AI SDK</li>
            </ul>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">DESIGN</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>FIGMA</li>
              <li>STORYBOOK</li>
              <li>CANVA</li>
              <li>FRAMER</li>
            </ul>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerItem}>
            <h3 className="text-xl font-bold">DEVOPS</h3>
            <ul className="space-y-2 text-lg font-light">
              <li>GITHUB ACTIONS</li>
              <li>JEST</li>
              <li>CYPRESS</li>
              <li>GCP</li>
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
              <a
                href="mailto:hello@jordanrollins.com"
                className="text-base sm:text-lg font-light break-all sm:break-normal hover:text-blue-800 "
              >
                hello@jordanrollins.com
              </a>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">CV</h3>
              <a href="/Resume2026.pdf"
                download="Jordan_Rollins_Resume.pdf" className="text-base sm:text-lg font-light hover:text-blue-800 hover:cursor-pointer">download</a>
            </div>
          </motion.div>
          <motion.div className="space-y-6 sm:space-y-8" variants={staggerItem}>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">GITHUB</h3>
              <a
                href="https://github.com/0xjcr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-light break-all sm:break-normal hover:text-blue-800 hover:cursor-pointer"
              >
                github.com/0xjcr
              </a>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">LINKEDIN</h3>
              <a
                href="https://linkedin.com/in/jordanrollins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-light break-all sm:break-normal hover:text-blue-800 hover:cursor-pointer"
              >
                linkedin.com/in/jordanrollins
              </a>
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
