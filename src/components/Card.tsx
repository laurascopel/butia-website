import type { IconType } from "react-icons";
import card from "../assets/illustrations/card.svg";
import { AnimatedItems } from "./AnimatedItems";

interface CardProps {
	children: React.ReactNode;
	title: string;
	icon: IconType;
}

export function Card({ children, icon, title }: CardProps) {
	const Icon = icon;
	return (
		<AnimatedItems className="relative">
			<img src={card} alt="Forma vetorial quadrada" className="w-58" />

			<div className="absolute inset-0 flex flex-col items-center justify-center p-8">
				<div className="rounded-full flex items-center justify-center h-22 w-22 bg-orange">
					<Icon className="w-14 h-14 fill-cream" />
				</div>
				<h3 className="font-bold p-2 text-lg text-orange">{title}</h3>
				<p className="text-sm text-center">{children}</p>
			</div>
		</AnimatedItems>
	);
}
