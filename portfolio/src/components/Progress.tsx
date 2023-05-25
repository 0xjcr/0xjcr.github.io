import { useScroll, useTransform, motion } from 'framer-motion';
import Contact from './Contact';

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const circumference = 2 * Math.PI * 25;
  const progressToOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  return (
    <div className='-mb-10 md:-mb-0 fixed bottom-0 left-0 h-96 w-96 flex items-center justify-center z-10'>
      <Contact/>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg style={{ width: '200px', height: '200px' }} viewBox='0 0 60 60'>
          <circle
            style={{
              fill: 'none',
              stroke: '#D1D5DB',
              strokeWidth: '0.5',
              opacity: '0.2',
            }}
            cx='30'
            cy='30'
            r='25'
          />
          <motion.circle
            style={{
              fill: 'none',
              stroke: 'url(#gradient)',
              strokeWidth: '1',
              strokeDasharray: `${circumference}`,
              strokeDashoffset: progressToOffset,
              strokeLinecap: 'round',
            }}
            cx='30'
            cy='30'
            r='25'
            pathLength={circumference}
          />
          <defs>
            <linearGradient id='gradient' gradientTransform='rotate(90)'>
              <stop offset='0%' stopColor='#C7D2FE' />
              <stop offset='100%' stopColor='#4F46E5' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
