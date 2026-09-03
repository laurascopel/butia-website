import bg2 from "../assets/illustrations/bg-02.svg";
import bg3 from "../assets/illustrations/bg-03.svg";
import bg4 from "../assets/illustrations/bg-04.svg";
import bg5 from "../assets/illustrations/bg-05.svg";
import card2 from "../assets/illustrations/card-02.svg";
import star from "../assets/illustrations/star.svg";
import cartaz from "../assets/images/cartaz.png";
import ipad from "../assets/images/digital.png";
import news from "../assets/images/news.png";
import notebook from "../assets/images/notebook.png";
import { AnimatedItems } from "../components/AnimatedItems";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export default function Services() {
	return (
		<main>
			<AnimatedSection className="bg-green">
				<Container className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:py-16 py-12">
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-center">
						<img src={star} alt="" className="h-22" />
						<h1 className="text-cream">
							NOSSOS <strong>SERVIÇOS</strong>
						</h1>
					</div>
					<div className="flex flex-col max-w-78 sm:max-w-md">
						<p className="text-cream text-center sm:text-left">
							Atuamos em diferentes momentos da produção, adaptando estratégia,
							escopo e entregas conforme as necessidades de cada projeto.
						</p>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-orange"
				style={{
					backgroundImage: `url(${bg4})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Container className="flex flex-col sm:flex-row justify-between py-16">
					<div className="flex flex-col gap-6 justify-center text-cream max-w-lg">
						<h2 className="font-bold">ESTRATÉGIA & POSICIONAMENTO</h2>
						<p>
							Definimos o posicionamento do seu projeto a partir de sua
							identidade, público e objetivos.
						</p>
						<AnimatedItems>
							<ul
								className="space-y-2 p-10 bg-cream text-green font-medium"
								style={{
									WebkitMask: `url("${card2}") center / 100% 100% no-repeat`,
									mask: `url("${card2}") center / 100% 100% no-repeat`,
								}}
							>
								<li> ✽ Diagnóstico de perfil da obra e público-alvo</li>
								<li> ✽ Definição de posicionamento e marca</li>
								<li> ✽ Elaboração de plano de comunicação</li>
								<li> ✽ Criação de apresentações comerciais</li>
							</ul>
						</AnimatedItems>
					</div>
					<img
						src={notebook}
						alt="Notebook com apresentação da Butiá"
						className="h-auto w-xl mt-10 sm:mt-0"
					/>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-green"
				style={{
					backgroundImage: `url(${bg2})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Container className="flex flex-col sm:flex-row justify-between py-16">
					<img
						src={cartaz}
						alt="Cartaz Entre Muros"
						className="h-auto w-lg mb-10 sm:mb-0"
					/>
					<div className="flex flex-col gap-6 justify-center text-cream max-w-xl">
						<h2 className="font-bold">CRIAÇÃO & CONTEÚDO</h2>
						<p>
							Transformamos o universo do seu filme em materiais que conversam
							entre si e dão unidade à sua comunicação.
						</p>
						<AnimatedItems>
							<ul
								className="space-y-2 p-10 bg-cream text-green font-medium"
								style={{
									WebkitMask: `url("${card2}") center / 100% 100% no-repeat`,
									mask: `url("${card2}") center / 100% 100% no-repeat`,
								}}
							>
								<li>
									✽ Desenvolvimento de cartazes, pôsteres, identidade visual e
									peças gráficas
								</li>
								<li> ✽ Produção de trailers, teasers e vídeos promocionais</li>
								<li> ✽ Redação de sinopses e textos comerciais</li>
								<li>
									{" "}
									✽ Cobertura fotográfica e audiovisual (stills e bastidores)
								</li>
							</ul>
						</AnimatedItems>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-yellow"
				style={{
					backgroundImage: `url(${bg3})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Container className="flex flex-col sm:flex-row justify-between py-16">
					<div className="flex flex-col gap-6 justify-center text-green max-w-lg">
						<h2 className="font-bold">IMPRENSA</h2>
						<p>
							Ampliamos a presença da sua obra articulando imprensa, crítica e
							criadores de conteúdo digital.
						</p>
						<AnimatedItems>
							<ul
								className="space-y-2 p-10 bg-cream text-green font-medium"
								style={{
									WebkitMask: `url("${card2}") center / 100% 100% no-repeat`,
									mask: `url("${card2}") center / 100% 100% no-repeat`,
								}}
							>
								<li> ✽ Redação de releases e notas oficiais</li>
								<li> ✽ Construção e gestão de mailing segmentado</li>
								<li> ✽ Monitoramento e clipping</li>
							</ul>
						</AnimatedItems>
					</div>
					<img
						src={news}
						alt="Celular com texto da release de imprensa"
						className="h-auto w-xl mt-10 sm:mt-0"
					/>
				</Container>
			</AnimatedSection>
			<AnimatedSection
				className="bg-red"
				style={{
					backgroundImage: `url(${bg5})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<Container className="flex flex-col sm:flex-row justify-between py-16">
					<img src={ipad} alt="Logo" className="h-auto w-lg mb-10 sm:mb-0" />
					<div className="flex flex-col gap-6 justify-center text-cream max-w-xl">
						<h2 className="font-bold">MÍDIAS DIGITAIS</h2>
						<p>
							Criamos estratégias para que a sua produção se conecte com o
							público nas redes sociais.
						</p>
						<AnimatedItems>
							<ul
								className="space-y-2 p-10 bg-cream text-green font-medium"
								style={{
									WebkitMask: `url("${card2}") center / 100% 100% no-repeat`,
									mask: `url("${card2}") center / 100% 100% no-repeat`,
								}}
							>
								<li>✽ Planejamento de conteúdo multiplataforma</li>
								<li>✽ Criação de linha editorial e cronograma</li>
								<li>
									✽ Gestão e impulsionamento de campanhas nas redes sociais
								</li>
							</ul>
						</AnimatedItems>
					</div>
				</Container>
			</AnimatedSection>
			<AnimatedSection className="bg-green">
				<Container className="py-12 flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-center">
					<p className="text-cream text-lg font-bold text-center">
						Entre em contato para construirmos um pacote especial para o seu
						filme!
					</p>
					<Button to="/#form" className="w-fit" variant="primary">
						Responda nosso formulário
					</Button>
				</Container>
			</AnimatedSection>
		</main>
	);
}
