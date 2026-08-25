import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import logoHorizontal from "../assets/logos/logo-horizontal.svg";
import { Container } from "./Container";

export function Footer() {
	return (
		<Container>
			<footer className="bg-cream flex flex-col sm:flex-row justify-between items-center py-4">
				<img src={logoHorizontal} alt="Logo" className="h-14" />
				<div className="flex flex-row gap-4 sm:py-0 py-4 items-center">
					<p className="text-sm mr-4">Nos siga nas redes sociais:</p>
					<a href={"https://www.instagram.com/butiacinema/"} target="blank">
						<FaInstagram size={24} className="hover:fill-orange" />
					</a>
					<a href="mailto:butiacinema@gmail.com" target="blank">
						<LuMail size={24} className="hover:text-orange" />
					</a>
				</div>
			</footer>
		</Container>
	);
}
