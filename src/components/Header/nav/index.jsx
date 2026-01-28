import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Footer from "./Footer";

const navItems = [
	{ title: "Início", href: "home" },
	{ title: "Sobre Nós", href: "about" },
	{ title: "O que fazemos", href: "services" },
	{ title: "Projetos", href: "work" },
	{ title: "Contato", href: "contact" },
];

const menuVariants = {
	initial: {
		clipPath: "circle(0% at calc(100% - 40px) 40px)",
	},
	animate: {
		clipPath: "circle(150% at calc(100% - 40px) 40px)",
		transition: {
			duration: 0.6,
			ease: [0.76, 0, 0.24, 1],
		},
	},
	exit: {
		clipPath: "circle(0% at calc(100% - 40px) 40px)",
		transition: {
			duration: 0.4,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

const linkVariants = {
	initial: { opacity: 0, y: 30 },
	animate: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
			delay: 0.3 + i * 0.08,
		},
	}),
	exit: {
		opacity: 0,
		y: 20,
		transition: { duration: 0.2 },
	},
};

export default function Index() {
	const handleClick = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
	};

	return (
		<motion.div
			className={styles.menu}
			variants={menuVariants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className={styles.body}>
				<div className={styles.nav}>
					<motion.div
						className={styles.header}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						<p>Navegação</p>
					</motion.div>
					{navItems.map((data, index) => (
						<motion.div
							key={index}
							className={styles.link}
							onClick={() => handleClick(data.href)}
							variants={linkVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={index}
							whileHover={{ x: 10, transition: { duration: 0.2 } }}
						>
							{data.title}
						</motion.div>
					))}
				</div>
				<Footer />
			</div>
		</motion.div>
	);
}

