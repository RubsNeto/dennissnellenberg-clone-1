'use client';
import styles from './page.module.scss'
import { useEffect, useState, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';

// Lazy load heavy components
const Landing = lazy(() => import('../components/Landing'));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Process = lazy(() => import('../components/Process'));
const Projects = lazy(() => import('../components/Projects'));
const Description = lazy(() => import('../components/Description'));
const SlidingImages = lazy(() => import('../components/SlidingImages'));
const Contact = lazy(() => import('../components/Contact'));

// Simple loading fallback
const SectionLoader = () => (
  <div style={{ minHeight: '50vh', background: '#0a0a0a' }} />
);

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let locomotiveScroll;
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 0.8,
          }
        });

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    }
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Suspense fallback={<SectionLoader />}>
        <div id="home">
          <Landing />
        </div>
        <About />
        <Services />
        <Process />
        <div id="work">
          <Projects />
        </div>
        <Description />
        <SlidingImages />
        <Contact />
      </Suspense>
    </main>
  )
}
