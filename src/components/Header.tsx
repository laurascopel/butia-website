import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logoHorizontal from "../assets/logos/logo-horizontal.svg";
import { Container } from "./Container";

export function Header() {
	return (
		<header className="bg-cream relative">
			<Container className="flex justify-between items-center p-4">
				<img src={logoHorizontal} alt="Logo" className="sm:h-14 h-12" />
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
];

function DesktopMenu() {
	return (
		<nav className="hidden sm:flex gap-10">
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
				<nav className="flex flex-col absolute top-full right-0 bg-cream z-50 w-screen p-8 gap-4 text-right">
					{MenuItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className="border-t border-[#f9e6c0] pt-4"
						>
							{item.name}
						</NavLink>
					))}
				</nav>
			)}
		</>
	);
}
