import clsx from "clsx";
import { Link, type LinkProps } from "react-router-dom";
import { AnimatedItems } from "./AnimatedItems";

interface ButtonProps extends LinkProps {
	className?: string;
	variant: "primary" | "secondary";
}

const buttonVariants = {
	primary: "bg-orange text-cream hover:bg-orange-dark",
	secondary: "bg-green text-cream hover:bg-green-dark",
};

export function Button({ children, className, variant, ...rest }: ButtonProps) {
	const variants = buttonVariants[variant];
	return (
		<AnimatedItems>
			<Link
				className={clsx(
					"h-10 px-8 flex items-center justify-center rounded-3xl",
					className,
					variants,
				)}
				{...rest}
			>
				{children}
			</Link>
		</AnimatedItems>
	);
}
