import logo from "../assets/logos/butia-logo.svg";

export function Footer() {
	return (
		<footer className="bg-cream flex relative justify-center items-center p-4 gap-4 ">
			<img src={logo} alt="Logo" className="h-14" />
		</footer>
	);
}
