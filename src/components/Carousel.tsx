import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";

export function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 4000 }),
	]);
	const nextSlide = () => {
		emblaApi?.scrollNext();
	};
	const prevSlide = () => {
		emblaApi?.scrollPrev();
	};

	return (
		<div className="flex flex-col sm:w-2xl w-full">
			<div className="overflow-hidden shadow-2xl" ref={emblaRef}>
				<div className="flex touch-pan-y touch-pinch-zoom sm:h-112 h-80">
					<img
						src={image1}
						alt="Pessoas com câmera de filmagem"
						className="flex-[0_0_100%] object-cover"
					></img>
					<img
						src={image2}
						alt="Pessoas com câmera de filmagem"
						className="flex-[0_0_100%] object-cover"
					></img>
					<img
						src={image3}
						alt="Diretor em filmagem"
						className="flex-[0_0_100%] object-cover "
					></img>
					<img
						src={image4}
						alt="Pessoas caminhando segurando equipamentos de filmagem"
						className="flex-[0_0_100%] object-cover "
					></img>
				</div>
			</div>
			<div className="flex items-center justify-center mt-4 gap-2">
				<button aria-label="Próximo slide" type="button" onClick={prevSlide}>
					<IoIosArrowDropleft className="w-6 h-6 hover:fill-cream transition-colors cursor-pointer" />
				</button>
				<button aria-label="Próximo slide" type="button" onClick={nextSlide}>
					<IoIosArrowDropright className="w-6 h-6 hover:fill-cream transition-colors cursor-pointer" />
				</button>
			</div>
		</div>
	);
}
