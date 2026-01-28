import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function Index() {
	const phrase =
		"Transformando ideias em experiências digitais excepcionais. Juntos vamos criar algo único. Design premium, sempre inovador.";
	const description = useRef(null);
	const isInView = useInView(description);
	return (
		<div ref={description} className={styles.description}>
			<div className={styles.body}>
				<p>
					{phrase.split(" ").map((word, index) => {
						return (
							<span key={index} className={styles.mask}>
								<motion.span
									variants={slideUp}
									custom={index}
									animate={isInView ? "open" : "closed"}
									key={index}
								>
									{word}
								</motion.span>
							</span>
						);
					})}
				</p>
				<motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
					A combinação da nossa paixão por design, código & inovação nos
					posiciona em um lugar único no mundo do design digital.
				</motion.p>
				<div data-scroll data-scroll-speed={0.1} className={styles.buttonWrapper}>
					<Rounded className={styles.button}>
						<p>Sobre nós</p>
					</Rounded>
				</div>
			</div>
		</div>
	);
}
