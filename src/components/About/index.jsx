"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-100px" });

    const stats = [
        { number: "100+", label: "Projetos Entregues" },
        { number: "50+", label: "Clientes Satisfeitos" },
        { number: "5+", label: "Anos de Experiência" },
        { number: "15+", label: "Prêmios Ganhos" }
    ];

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="about" ref={container} className={styles.about}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.h2 variants={itemVariants} className={styles.title}>
                        Criando experiências digitais que inspiram
                    </motion.h2>

                    <motion.p variants={itemVariants} className={styles.text}>
                        Somos a RN Design, uma agência criativa especializada em transformar
                        ideias em experiências digitais excepcionais. Com anos de experiência
                        no mercado, combinamos design inovador com tecnologia de ponta para
                        entregar soluções que realmente fazem a diferença.
                    </motion.p>

                    <motion.p variants={itemVariants} className={styles.text}>
                        Nossa missão é ajudar marcas a se destacarem no ambiente digital
                        através de design estratégico, desenvolvimento de alto padrão e
                        uma abordagem centrada no usuário. Cada projeto é uma oportunidade
                        de criar algo único e memorável.
                    </motion.p>

                    <motion.div
                        variants={containerVariants}
                        className={styles.stats}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={styles.statCard}
                            >
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
