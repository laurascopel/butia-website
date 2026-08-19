import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/butia-logo.svg";
import { Container } from "./Container";

export function Header() {
	return (
		<header className="bg-cream relative">
			<Container className="flex justify-between items-center p-4">
				<img src={logo} alt="Logo" className="sm:h-14 h-12" />
				<DesktopMenu />
				<MobileMenu />
			</Container>
		</header>
	);
}

const MenuItems = [
	{ name: "Página Inicial", path: "/" },
	{ name: "Serviços", path: "/servicos" },
	{ name: "Portfólio", path: "/portfolio" },
	{ name: "Entre em contato", path: "/contato" },
];

function DesktopMenu() {
	return (
		<nav className="hidden sm:flex gap-6">
			{MenuItems.map((item) => (
				<NavLink key={item.path} to={item.path}>
					{item.name}
				</NavLink>
			))}
		</nav>
	);
}

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<IoMenu onClick={toggleMenu} className="sm:hidden h-8 w-8" />
			{isOpen && (
				<nav className="flex flex-col absolute top-full right-0 bg-white z-50 w-screen p-8 gap-4 text-right">
					{MenuItems.map((item) => (
						<NavLink key={item.path} to={item.path}>
							{item.name}
						</NavLink>
					))}
				</nav>
			)}
		</>
	);
}
