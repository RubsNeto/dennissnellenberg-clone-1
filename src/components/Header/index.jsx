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
                        <div className={styles.el}>
                            <a>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
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
