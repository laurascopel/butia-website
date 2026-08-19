import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface CardProps {
	children: React.ReactNode;
	title: string;
	icon: IconType;
}

export function Card({ children, icon, title }: CardProps) {
	const Icon = icon;
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.2 }}
			className="w-80 sm:h-64 sm:w-60 p-8 rounded-3xl bg-cream flex flex-col
			items-center justify-start shadow-2xl"
		>
			<div className="rounded-full flex items-center justify-center h-22 w-22 bg-orange">
				<Icon className="w-14 h-14 fill-cream" />
			</div>
			<h3 className="font-bold p-2 text-lg text-orange">{title}</h3>
			<p className="text-sm text-center">{children}</p>
		</motion.div>
	);
}
