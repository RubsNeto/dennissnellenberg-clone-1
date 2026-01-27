"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Services() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-100px" });
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            title: "UI/UX Design",
            description: "Interfaces intuitivas e experiências memoráveis que encantam seus usuários",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            gradient: "linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%)"
        },
        {
            title: "Desenvolvimento Web",
            description: "Sites e aplicações web responsivas, rápidas e otimizadas para performance",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            gradient: "linear-gradient(135deg, #00BCD4 0%, #00838F 100%)"
        },
        {
            title: "Branding & Identidade",
            description: "Construção de marcas fortes e identidades visuais únicas e memoráveis",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            gradient: "linear-gradient(135deg, #7C4DFF 0%, #536DFE 100%)"
        },
        {
            title: "Marketing Digital",
            description: "Estratégias data-driven para crescimento e engajamento online",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            gradient: "linear-gradient(135deg, #FF6B6B 0%, #EE5A24 100%)"
        },
        {
            title: "Consultoria",
            description: "Orientação estratégica para sua transformação digital completa",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            gradient: "linear-gradient(135deg, #FFD93D 0%, #FF9500 100%)"
        },
        {
            title: "Manutenção & Suporte",
            description: "Acompanhamento contínuo e evolução de projetos com suporte 24/7",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
            gradient: "linear-gradient(135deg, #26DE81 0%, #20BF6B 100%)"
        }
    ];

    const titleWords = ["Nossos", "Serviços"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            rotateX: -60,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: i * 0.1
            }
        })
    };

    return (
        <section id="services" ref={container} className={styles.services}>
            {/* Background Grid */}
            <div className={styles.backgroundGrid} />

            {/* Floating Orbs */}
            <div className={styles.backgroundOrbs}>
                <motion.div
                    className={styles.orb1}
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className={styles.orb2}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className={styles.header}
                >
                    <motion.div className={styles.titleLabel} variants={wordVariants}>
                        <span className={styles.labelLine}></span>
                        <span>O que fazemos</span>
                        <span className={styles.labelLine}></span>
                    </motion.div>

                    <h2 className={styles.title}>
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className={`${styles.word} ${word === "Serviços" ? styles.highlight : ""}`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>

                    <motion.p variants={wordVariants} className={styles.subtitle}>
                        Soluções completas para transformar sua presença digital
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={styles.grid}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            className={`${styles.card} ${hoveredCard === index ? styles.active : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            whileHover={{
                                y: -15,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <div className={styles.cardGlow} style={{ background: service.gradient }} />
                            <div className={styles.cardBorder} />
                            <div className={styles.cardContent}>
                                <motion.div
                                    className={styles.iconWrapper}
                                    style={{ '--gradient': service.gradient }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className={styles.cardArrow}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
