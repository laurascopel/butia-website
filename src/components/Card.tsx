import type { IconType } from "react-icons";
import card1 from "../assets/illustrations/card-01.svg";
import { AnimatedItems } from "./AnimatedItems";

interface CardProps {
	children: React.ReactNode;
	title: string;
	icon: IconType;
}

export function Card({ children, icon, title }: CardProps) {
	const Icon = icon;
	return (
		<AnimatedItems
			className="bg-cream flex flex-col items-center justify-center p-8 w-74 h-66 sm:w-full sm:h-72"
			style={{
				WebkitMask: `url("${card1}") center / 100% 100% no-repeat`,
				mask: `url("${card1}") center / 100% 100% no-repeat`,
				filter: "drop-shadow(0 0 20px red)",
			}}
		>
			<div className="rounded-full flex items-center justify-center h-22 w-22 bg-orange">
				<Icon className="w-14 h-14 fill-cream" />
			</div>
			<h3 className="font-extrabold p-2 text-xl text-orange text-center">
				{title}
			</h3>
			<p className="text-md font-medium text-center">{children}</p>
		</AnimatedItems>
	);
}
