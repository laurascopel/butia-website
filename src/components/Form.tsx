import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FormInput } from "./FormInput";
import { FormPhone, formatTelephone } from "./FormPhone";
import { FormTextarea } from "./FormTextarea";

export function Form() {
	const [state, handleSubmit, reset] = useForm("xppanqda");

	const successMessage = state.succeeded
		? "Obrigado! Em breve entraremos em contato."
		: null;

	const [telephone, setTelephone] = useState("");

	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state.succeeded) {
			formRef.current?.reset();
			setTelephone("");
			setTimeout(() => reset(), 5000);
		}
	}, [state.succeeded, reset]);

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className="bg-orange rounded-4xl flex flex-col p-8 sm:p-12 w-sm sm:w-3xl sm:h-162 gap-4 shadow-2xl justify-center"
		>
			<input type="hidden" name="_language" value="pt-BR" />
			<h3 className="text-4xl text-cream tracking-wide text-center mb-4">
				FORMULÁRIO <strong>DE CONTATO</strong>
			</h3>
			<FormInput name="name" type="text" placeholder="Digite seu nome" required>
				Nome*
			</FormInput>
			<div className="flex flex-col sm:flex-row gap-4">
				<FormInput
					className="flex-1"
					name="email"
					type="email"
					placeholder="Digite seu e-mail"
					required
				>
					E-mail*
				</FormInput>
				<FormPhone
					value={telephone}
					onChange={(e) => setTelephone(formatTelephone(e.target.value))}
					className="flex-1"
					name="telephone"
					type="tel"
					placeholder="Digite seu número"
				>
					Telefone
				</FormPhone>
			</div>
			<FormInput
				name="project"
				type="text"
				placeholder="Digite o nome do projeto"
			>
				Nome do projeto
			</FormInput>
			<FormTextarea name="message" placeholder="Diga mais sobre projeto">
				Mensagem
			</FormTextarea>
			<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
				<p className="mb-6 sm:mb-0 text-center text-sm font-bold text-cream">
					{successMessage}
				</p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					type="submit"
					className="h-10 px-8 w-48 rounded-3xl bg-green text-cream hover:bg-green-dark cursor-pointer"
				>
					Envie
				</motion.button>
			</div>
		</form>
	);
}
