"use client";
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-100px" });

    const steps = [
        {
            number: "01",
            title: "Descoberta",
            description: "Entendimento profundo do negócio e objetivos. Pesquisa de mercado e análise competitiva."
        },
        {
            number: "02",
            title: "Estratégia",
            description: "Definição de personas e jornadas. Planejamento de arquitetura e fluxos."
        },
        {
            number: "03",
            title: "Design",
            description: "Wireframes e protótipos interativos. Testes de usabilidade."
        },
        {
            number: "04",
            title: "Desenvolvimento",
            description: "Código limpo e otimizado. Integração de tecnologias."
        },
        {
            number: "05",
            title: "Lançamento",
            description: "Deploy e configuração. Treinamento da equipe."
        },
        {
            number: "06",
            title: "Evolução",
            description: "Monitoramento e análise. Melhorias contínuas."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="process" ref={container} className={styles.process}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2>Nosso Processo</h2>
                    <p>Uma metodologia testada e comprovada para resultados excepcionais</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={styles.timeline}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={stepVariants}
                            className={styles.step}
                        >
                            <div className={styles.number}>{step.number}</div>
                            <div className={styles.content}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
