import { type HTMLMotionProps, motion } from "framer-motion";

export function AnimatedItems({ ...props }: HTMLMotionProps<"div">) {
	return (
		<motion.div
			{...props}
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.2 }}
		></motion.div>
	);
}
