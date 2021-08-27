import {useState, useEffect} from 'react'
import Slider from "react-slick";
import Banners from 'api/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from '@react-hook/window-size'

function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

function Campaigns() {
	const [banners, setBanners] = useState(() => Banners || []);


	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};

	return (
		<div className="container mx-auto">
			<h3 className="font-semibold text-sm mb-3">Kampanyalar</h3>
			<Slider className="-mx-2 relative" {...settings}>
				{banners.length && banners.map(banner => (
					<div key={banner.id} className="px-2">
						<img src={banner.image} className="w-full rounded-lg" />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Campaigns
