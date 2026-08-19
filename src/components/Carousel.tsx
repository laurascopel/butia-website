import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import image1 from "../assets/img/image11.jpg";

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
						alt=""
						className="flex-[0_0_100%] object-cover"
					></img>
					<img
						src={image1}
						alt=""
						className="flex-[0_0_100%] object-cover"
					></img>
					<img
						src={image1}
						alt=""
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
