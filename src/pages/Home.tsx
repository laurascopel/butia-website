import { BsFillMegaphoneFill } from "react-icons/bs";
import { PiFilmSlateFill, PiVideoFill } from "react-icons/pi";
import { RiDraftFill } from "react-icons/ri";
import animatedLogo from "../assets/logos/animated-logo.gif";
import logoSlogan from "../assets/logos/logoSlogan.svg";
import logoName from "../assets/logos/name.svg";
import bg from "../assets/vectors/bg_form.svg";
import formSquare from "../assets/vectors/form-1.svg";
import formLogo from "../assets/vectors/form-2.svg";
import formRed from "../assets/vectors/form-3.svg";
import formFilm from "../assets/vectors/form-4.svg";
import plantsBg from "../assets/vectors/plants-bg.svg";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Container } from "../components/Container";

export default function Home() {
	return (
		<main>
			<AnimatedSection className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-between bg-green overflow-hidden">
				<h1 className="sr-only">
					Butiá — Assessoria de Comunicação para Cinema
				</h1>
				<img
					src={plantsBg}
					alt="Ilustração de plantas"
					className="absolute left-0 w-80 opacity-5 sm:opacity-100 sm:static sm:w-104"
				/>
				<div className="flex flex-col items-center z-10">
					<img src={animatedLogo} alt="Logo Butiá" className="w-70 sm:w-md" />
					<img
						src={logoSlogan}
						alt="Assessoria de comunicação para cinema"
						className="h-38 sm:h-72 sm:-mt-14 -mt-8 mb-12 sm:pb-20"
					/>
				</div>
				<img
					src={formLogo}
					alt="Vetor do filme do logo"
					className="hidden sm:block sm:w-96"
				/>
			</AnimatedSection>
			<AnimatedSection className="bg-cream">
				<Container className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-24 sm:py-20 py-12">
					<div className="flex flex-row shrink-0 gap-8 items-center">
						<img src={formSquare} alt="Logo" className="h-78 sm:h-96 w-auto" />

						<h2 className="[writing-mode:vertical-rl] rotate-180  whitespace-nowrap">
							QUEM <strong>SOMOS</strong>
						</h2>
					</div>
					<div className="space-y-4">
						<p>
							A <strong>BUTIÁ</strong> nasce da necessidade de um olhar
							integrado sobre a divulgação de obras cinematográficas. Diferente
							de uma Assessoria de Imprensa tradicional, voltada
							majoritariamente à imprensa e crítica, nossa proposta atua na{" "}
							<strong>construção da presença pública da obra</strong>,
							desenvolvendo materiais, campanhas e estratégias de comunicação
							multiplataforma.
						</p>
						<p>
							Nosso papel é transformar o universo do filme em uma{" "}
							<strong>
								narrativa de comunicação coerente, atraente e consistente
							</strong>
							, dialogando tanto com o público de cinema quanto com novos
							espectadores nas redes sociais e plataformas digitais.
						</p>
						<p className="text-xl font-extrabold italic">
							“A BUTIÁ nasce da necessidade de um olhar integrado sobre a
							divulgação de obras cinematográficas. Diferente de uma Assessoria
							de Imprensa tradicional.”
						</p>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-green bg-cover bg-center flex flex-col justify-center items-center sm:py-20 py-12"
				style={{ backgroundImage: `url(${bg})` }}
			>
				<div className="px-8 text-center">
					<h2 className="text-orange">
						MOMENTOS DE <strong>ATUAÇÃO</strong>
					</h2>
					<p className="text-cream pt-4">
						A Butiá pode atuar em diferentes momentos da produção, adaptando
						estratégia, escopo e entregas conforme as necessidades de cada
						projeto.
					</p>
				</div>
				<Container className="flex flex-col sm:flex-row gap-8 justify-center py-12">
					<Card icon={RiDraftFill} title="PRÉ-PRODUÇÃO">
						Identidade visual, posicionamento e materiais de pitching
					</Card>
					<Card icon={PiFilmSlateFill} title="PRODUÇÃO">
						Bastidores, making of, coberturas e teasers para redes sociais
					</Card>
					<Card icon={PiVideoFill} title="PÓS-PRODUÇÃO">
						Trailers, teasers, cartazes, press kit e plano de lançamento
					</Card>
					<Card icon={BsFillMegaphoneFill} title="DISTRIBUIÇÃO">
						Campanha digital, imprensa, eventos e monitoramento
					</Card>
				</Container>
				<Button to="/servicos" variant="primary">
					Conheça nossos serviços
				</Button>
			</AnimatedSection>
			<AnimatedSection className="relative sm:py-20 py-12 bg-linear-to-b sm:bg-linear-to-r from-yellow from-45% to-cream to-45%">
				<img
					src={formRed}
					alt="Ilustração vetorial vermelha"
					className="h-72 sm:h-112 w-auto absolute left-0"
				/>
				<Container className="flex flex-col sm:flex-row justify-between gap-16 sm:gap-12">
					<Carousel />
					<div className="flex flex-col gap-6 justify-center sm:max-w-md sm:pb-10">
						<h2 className="text-orange">
							NOSSOS <strong>DIFERENCIAIS</strong>
						</h2>
						<ul className="space-y-2 font-medium list-['✦_'] list-outside pl-5">
							<li>
								<span>Equipe especializada em cinema e comunicação</span>
							</li>
							<li>
								Repertório estético e narrativo de quem ama cinema brasileiro
							</li>
							<li>
								Olhar atual conectado ao digital e aos novos comportamentos de
								consumo
							</li>
							<li>
								Atuação integrada com diretores e distribuidores, alinhada à
								identidade artística
							</li>
							<li>
								Soluções personalizadas, adaptadas ao porte e à fase de cada
								produção
							</li>
						</ul>
						<Button to="/portfolio" className="w-fit" variant="secondary">
							Veja nosso portfólio
						</Button>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection className="bg-green sm:py-20 py-12">
				<Container className="flex flex-col sm:flex-row justify-between items-center sm:gap-24">
					<div className=" text-cream sm:w-lg flex flex-col gap-6">
						<h2 className=" text-orange font-bold">FALE COM A</h2>
						<img
							src={logoName}
							alt="Logo Butiá"
							className="w-sm sm:w-md mb-6"
						/>
						<p className="text-xl font-extrabold italic">
							Vamos conversar sobre construir a presença pública do seu filme
							com uma assessoria focada em comunicação para cinema?
						</p>
						<p>
							Mais do que promover lançamentos, criamos narrativas, imagens e
							experiências que conectam público e obra, ampliando seu universo
							para além da tela.
						</p>
						<Button
							to="/contact"
							variant="primary"
							className="w-fit mt-4 mb-8 sm:mb-0"
						>
							Entre em contato
						</Button>
					</div>
					<img
						src={formFilm}
						alt="Ilustração vetorial com claquete"
						className="-mt-10 sm:mt-0 sm:h-132 w-auto"
					/>
				</Container>
			</AnimatedSection>
		</main>
	);
}
