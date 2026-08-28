import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { PiFilmSlateFill, PiVideoFill } from "react-icons/pi";
import { RiDraftFill } from "react-icons/ri";
import bg1 from "../assets/illustrations/bg-01.svg";
import bg2 from "../assets/illustrations/bg-02.svg";
import illustration2 from "../assets/illustrations/illustration-02.svg";
import illustration3 from "../assets/illustrations/illustration-03.svg";
import shape1 from "../assets/illustrations/shape-01.svg";
import shape2 from "../assets/illustrations/shape-02.svg";
import logoSymbol from "../assets/logos/logo-symbol.svg";
import logoWithTagline from "../assets/logos/logo-with-tagline.svg";
import logoWordmark from "../assets/logos/logo-wordmark.svg";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Container } from "../components/Container";
import { Form } from "../components/Form";

export default function Home() {
	return (
		<main>
			<AnimatedSection className="relative flex flex-col items-center justify-center sm:flex-row sm:justify-between bg-green overflow-hidden">
				<h1 className="sr-only">
					Butiá — Assessoria de Comunicação para Cinema
				</h1>
				<img
					src={illustration2}
					alt="Ilustração de plantas"
					className="absolute left-0 w-80 opacity-5 sm:opacity-100 sm:static sm:w-104"
				/>
				<div className="flex flex-col items-center h-132 z-10 justify-center">
					<img
						src={logoSymbol}
						alt="Logo Butiá"
						className="animate-logo-enter w-42 sm:w-60 mb-8 sm:mb-10"
					/>
					<img
						src={logoWithTagline}
						alt="Assessoria de comunicação para cinema"
						className="h-38 sm:h-56"
					/>
				</div>
				<img
					src={illustration3}
					alt="Vetor do filme do logo"
					className="hidden sm:block sm:w-96"
				/>
			</AnimatedSection>
			<AnimatedSection className="bg-cream">
				<Container className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-24 sm:py-20 py-12">
					<div className="flex flex-row shrink-0 gap-8 items-center">
						<img src={shape1} alt="Logo" className="h-78 sm:h-96 w-auto" />

						<h2 className="[writing-mode:vertical-rl] rotate-180  whitespace-nowrap">
							QUEM <strong>SOMOS</strong>
						</h2>
					</div>
					<div className="space-y-4">
						<p>
							A <strong>BUTIÁ</strong> nasce da necessidade de um olhar
							integrado sobre a divulgação de obras cinematográficas. Diferente
							de uma Assessoria de Imprensa tradicional, voltada
							majoritariamente à imprensa e à crítica, atuamos na
							<strong> construção da presença pública </strong>do projeto,
							desenvolvendo materiais, campanhas e estratégias de comunicação
							multiplataforma.
						</p>
						<p>
							Nosso papel é
							<strong>
								{" "}
								transformar o universo do filme em uma comunicação coerente
							</strong>
							, atraente e consistente, alinhada à identidade da obra e
							conectada tanto ao público de cinema quanto a novos espectadores
							nas redes sociais e plataformas digitais.
						</p>
						<p className="text-xl sm:text-2xl font-extrabold italic">
							Mais do que promover lançamentos, criamos narrativas, imagens e
							experiências que conectam público e obra, ampliando seu universo
							para além da tela.
						</p>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-green bg-cover bg-center flex flex-col justify-center items-center sm:py-20 py-12"
				style={{
					backgroundImage: `url(${bg1})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="px-8 text-center">
					<h2 className="text-orange">
						MOMENTOS DE <strong>ATUAÇÃO</strong>
					</h2>
					<p className="text-cream pt-4">
						A Butiá pode atuar em diferentes momentos da produção,
						<strong> adaptando estratégia, escopo e entregas</strong> conforme
						as necessidades de cada projeto.
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
						Campanha digital, imprensa, redes sociais e monitoramento
					</Card>
				</Container>
				<Button to="/servicos" variant="primary">
					Conheça nossos serviços
				</Button>
			</AnimatedSection>
			<AnimatedSection className="relative sm:py-20 py-12 bg-linear-to-b sm:bg-linear-to-r from-yellow from-45% to-cream to-45%">
				<img
					src={shape2}
					alt="Ilustração vetorial laranja"
					className="h-72 sm:h-112 w-auto absolute"
				/>
				<Container className="flex flex-col sm:flex-row justify-between gap-24 sm:gap-12">
					<Carousel />
					<div className="flex flex-col gap-6 justify-center sm:w-122">
						<h2 className="text-orange">
							COMO <strong>TRABALHAMOS</strong>
						</h2>
						<p>
							Cada obra parte de uma realidade diferente e pode já ter materiais
							produzidos, divulgações planejadas ou profissionais envolvidos em
							sua comunicação. Junto à produção, a Butiá define quais ações
							fazem sentido para cada projeto e constrói um escopo de serviços
							<strong> flexível e personalizado </strong>para suas necessidades.
						</p>
						<p>
							Desenvolvemos materiais textuais, visuais, audiovisuais e
							estratégias em uma <strong>comunicação integrada</strong>, em que
							tudo conversa entre si e constrói uma unidade para a obra.
						</p>
						<Button to="/portfolio" className="w-fit mt-2" variant="secondary">
							Veja nosso portfólio
						</Button>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-green sm:py-20 py-12"
				style={{
					backgroundImage: `url(${bg2})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Container className="flex flex-col sm:flex-row justify-between items-center gap-14 sm:gap-20">
					<div className=" text-cream sm:w-lg flex flex-col gap-4">
						<h2 className=" text-orange font-bold">FALE COM A</h2>
						<img
							src={logoWordmark}
							alt="Logo Butiá"
							className="w-sm sm:w-md mb-4"
						/>
						<div className="h-2 w-32 rounded-full bg-orange my-4"></div>
						<p className="text-xl font-extrabold italic">
							Vamos conversar sobre construir a presença pública do seu filme
							com uma assessoria focada em comunicação para cinema?
						</p>
						<p>
							Preencha o formulário ao lado para entrar em contato e contar um
							pouco mais sobre o seu projeto! Acompanhe também nosso trabalho
							pelas redes sociais.
						</p>
						<a
							className="flex flex-row items-center gap-4 mt-4 w-fit"
							href={"https://www.instagram.com/butiacinema/"}
							target="blank"
						>
							<span className="rounded-full flex items-center justify-center h-10 w-10 bg-orange cursor-pointer hover:bg-orange-dark">
								<FaInstagram size={24} />
							</span>
							<p className="font-bold">@butiacinema</p>
						</a>
						<a
							className="flex flex-row items-center gap-4 w-fit"
							href={"https://www.linkedin.com/company/butiacinema/"}
							target="blank"
						>
							<span className="rounded-full flex items-center justify-center h-10 w-10 bg-orange cursor-pointer hover:bg-orange-dark">
								<FaLinkedinIn size={22} />
							</span>
							<p className="font-bold">/butiacinema</p>
						</a>
						<a
							className="flex flex-row items-center gap-4 w-fit"
							href="mailto:butiacinema@gmail.com"
							target="blank"
						>
							<span className="rounded-full flex items-center justify-center h-10 w-10 bg-orange cursor-pointer hover:bg-orange-dark">
								<LuMail size={24} />
							</span>
							<p className="font-bold">butiacinema@gmail.com</p>
						</a>
					</div>
					<Form />
				</Container>
			</AnimatedSection>
		</main>
	);
}
