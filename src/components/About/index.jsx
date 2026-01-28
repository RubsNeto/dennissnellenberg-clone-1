"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';

export default function About() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-100px" });
    const [hoveredStat, setHoveredStat] = useState(null);

    const stats = useMemo(() => [
        { number: "100+", label: "Projetos Entregues" },
        { number: "50+", label: "Clientes Satisfeitos" },
        { number: "5+", label: "Anos de Experiência" },
        { number: "15+", label: "Prêmios Ganhos" }
    ], []);

    const titleWords = ["Criando", "experiências", "digitais", "que", "inspiram"];

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1
            }
        }
    }), []);

    const wordVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }), []);

    const textVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    }), []);

    const statVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: i * 0.08 + 0.3
            }
        })
    }), []);

    return (
        <section id="about" ref={container} className={styles.about}>
            {/* Static Background Orbs - No animation */}
            <div className={styles.backgroundOrbs}>
                <div className={styles.orb1} />
                <div className={styles.orb2} />
                <div className={styles.orb3} />
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Animated Title */}
                    <div className={styles.titleWrapper}>
                        <motion.div className={styles.titleLabel} variants={textVariants}>
                            <span className={styles.labelLine}></span>
                            <span>Sobre Nós</span>
                            <span className={styles.labelLine}></span>
                        </motion.div>

                        <h2 className={styles.title}>
                            {titleWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    variants={wordVariants}
                                    className={`${styles.word} ${word === "experiências" || word === "inspiram"
                                        ? styles.highlight
                                        : ""
                                        }`}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h2>

                    </div>

                    {/* Description Cards */}
                    <motion.div className={styles.descriptionGrid} variants={containerVariants}>
                        <motion.div className={styles.descCard} variants={textVariants}>
                            <div className={styles.descIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p>
                                Somos a <strong>RN Design</strong>, uma agência criativa especializada em transformar
                                ideias em experiências digitais excepcionais. Combinamos design inovador com
                                tecnologia de ponta.
                            </p>
                        </motion.div>

                        <motion.div className={styles.descCard} variants={textVariants}>
                            <div className={styles.descIcon}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p>
                                Nossa missão é ajudar marcas a se destacarem no ambiente digital
                                através de design estratégico e uma abordagem centrada no usuário.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div className={styles.statsSection}>
                        <motion.div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={statVariants}
                                    className={`${styles.statCard} ${hoveredStat === index ? styles.active : ''}`}
                                    onMouseEnter={() => setHoveredStat(index)}
                                    onMouseLeave={() => setHoveredStat(null)}
                                >
                                    <div className={styles.statGlow} />
                                    <div className={styles.statContent}>
                                        <h3>{stat.number}</h3>
                                        <p>{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
