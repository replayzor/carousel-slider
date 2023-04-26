import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import Slider from "react-slick";
import axios from "axios";

const Carousel = () => {
	const [people, setPeople] = useState([]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		onMouseOver: true,
	};

	const fetchData = async () => {
		try {
			const response = await axios.get("https://randomuser.me/api/?results=5");
			const data = response.data.results;
			setPeople(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const renderedPeople = people.map((person) => {
		const { name, id, email, location, picture } = person;
		return (
			<article key={id.value}>
				<img src={picture.medium} className="person-img" />
				<h5 className="name">
					{name.title}. {name.first} {name.last}
				</h5>
				<p className="title">Email: {email}</p>
				<p className="text">Country: {location.country}</p>
				<p>City: {location.city}</p>
				<FaQuoteRight className="icon" />
			</article>
		);
	});

	return (
		<section className="slick-container">
			<Slider {...settings}>{renderedPeople}</Slider>
		</section>
	);
};
export default Carousel;
