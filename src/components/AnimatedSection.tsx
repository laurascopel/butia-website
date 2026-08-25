import { type HTMLMotionProps, motion } from "framer-motion";

export function AnimatedSection({ ...props }: HTMLMotionProps<"section">) {
	return (
		<motion.section
			{...props}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 1, ease: "easeOut" }}
		></motion.section>
	);
}
