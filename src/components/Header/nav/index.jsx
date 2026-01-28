import React from "react";
import styles from "./style.module.scss";
import Footer from "./Footer";

const navItems = [
	{ title: "Início", href: "home" },
	{ title: "Sobre Nós", href: "about" },
	{ title: "O que fazemos", href: "services" },
	{ title: "Projetos", href: "work" },
	{ title: "Contato", href: "contact" },
];

export default function Index() {
	const handleClick = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
	};

	return (
		<div className={styles.menu}>
			<div className={styles.body}>
				<div className={styles.nav}>
					<div className={styles.header}>
						<p>Navegação</p>
					</div>
					{navItems.map((data, index) => (
						<div
							key={index}
							className={styles.link}
							onClick={() => handleClick(data.href)}
						>
							{data.title}
						</div>
					))}
				</div>
				<Footer />
			</div>
		</div>
	);
}
