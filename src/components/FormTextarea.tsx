import clsx from "clsx";
import type { ComponentProps } from "react";

interface FormFieldProps extends ComponentProps<"textarea"> {
	children: React.ReactNode;
}

export function FormTextarea({
	children,
	className,
	...props
}: FormFieldProps) {
	return (
		<div className={clsx("flex flex-col", className)}>
			<label className="text-sm text-cream" htmlFor={props.name}>
				{children}
			</label>
			<textarea
				id={props.name}
				className="bg-cream/20 p-2 resize-none rounded-md mt-2 sm:mb-6 h-52 sm:h-26 border border-cream text-green"
				{...props}
			/>
		</div>
	);
}
