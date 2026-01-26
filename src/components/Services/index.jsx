"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-100px" });

    const services = [
        {
            title: "UI/UX Design",
            description: "Interfaces intuitivas e experiências memoráveis",
            icon: "🎨"
        },
        {
            title: "Desenvolvimento Web",
            description: "Sites e aplicações web responsivas e performáticas",
            icon: "💻"
        },
        {
            title: "Branding & Identidade",
            description: "Construção de marcas fortes e identidades únicas",
            icon: "🎯"
        },
        {
            title: "Marketing Digital",
            description: "Estratégias para crescimento e engajamento online",
            icon: "📈"
        },
        {
            title: "Consultoria",
            description: "Orientação estratégica para transformação digital",
            icon: "💡"
        },
        {
            title: "Manutenção & Suporte",
            description: "Acompanhamento contínuo e evolução de projetos",
            icon: "🔧"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="services" ref={container} className={styles.services}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2>Nossos Serviços</h2>
                    <p>Soluções completas para transformar sua presença digital</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={styles.grid}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={styles.card}
                        >
                            <div className={styles.icon}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
