import clsx from "clsx";
import type { ComponentProps } from "react";

interface FormFieldProps extends ComponentProps<"input"> {
	children: React.ReactNode;
}

export function FormInput({ children, className, ...props }: FormFieldProps) {
	return (
		<div className={clsx("flex flex-col", className)}>
			<label className="text-sm text-cream" htmlFor={props.name}>
				{children}
			</label>
			<input
				id={props.name}
				className="bg-cream/20 h-10 mt-2 p-2 rounded-lg border-cream border text-green"
				{...props}
			/>
		</div>
	);
}
