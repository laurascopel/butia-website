import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import logoHorizontal from "../assets/logos/logo-horizontal.svg";
import { Container } from "./Container";

export function Footer() {
	return (
		<Container>
			<footer className="bg-cream flex flex-col sm:flex-row justify-between items-center sm:py-4 py-8">
				<img src={logoHorizontal} alt="Logo" className="sm:h-14 h-12" />
				<div className="flex flex-row gap-4 sm:py-0 py-4 items-center">
					<p className="text-sm mr-4">Entre em contato:</p>
					<a href={"https://www.instagram.com/butiacinema/"} target="blank">
						<FaInstagram size={24} className="hover:fill-orange" />
					</a>
					<a
						href={"https://www.linkedin.com/company/butiacinema"}
						target="blank"
					>
						<FaLinkedinIn size={24} className="hover:fill-orange" />
					</a>
					<a href="mailto:butiacinema@gmail.com" target="blank">
						<LuMail size={24} className="hover:text-orange" />
					</a>
				</div>
			</footer>
		</Container>
	);
}
