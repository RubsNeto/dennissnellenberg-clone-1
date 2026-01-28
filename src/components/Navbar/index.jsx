"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'auto',
                block: 'start'
            });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.logo} onClick={() => scrollToSection('home')}>
                    <Image
                        src="/images/Logo_RN.png"
                        alt="RN Design"
                        width={120}
                        height={40}
                        priority
                    />
                </div>

                <div className={styles.menu}>
                    <button onClick={() => scrollToSection('work')} className={styles.link}>
                        Work
                    </button>
                    <button onClick={() => scrollToSection('about')} className={styles.link}>
                        Sobre
                    </button>
                    <button onClick={() => scrollToSection('services')} className={styles.link}>
                        Serviços
                    </button>
                    <button onClick={() => scrollToSection('contact')} className={styles.link}>
                        Contato
                    </button>
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
        </motion.nav>
    );
}
