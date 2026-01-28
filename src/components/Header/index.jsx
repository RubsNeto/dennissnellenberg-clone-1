'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Image from 'next/image';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false)
    }, [isActive])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }, setIsActive(false)) }
            }
        })
    }, [])

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/Logo_RN.png"
                            alt="RN Design"
                            width={120}
                            height={60}
                            priority
                            className={styles.logoImage}
                        />
                        <div className={styles.logoText}>
                            <p className={styles.copyright}>©</p>
                            <p className={styles.designBy}>Design by RN</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'auto' })}>
                            <a>Sobre Nós</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'auto' })}>
                            <a>O que fazemos</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'auto' })}>
                            <a>Projetos</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'auto' })}>
                            <a>Contato</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <a
                        href="https://wa.me/5562999299020?text=Vim%20do%20site%20e%20gostaria%20de%20saber%20mais"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Entre em contato
                    </a>
                </div>
            </div>
            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded onClick={() => { setIsActive(!isActive) }} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}
