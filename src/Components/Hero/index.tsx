import React from 'react';
import SearchBar from "../Elements/searchBar";

const Hero = () => {
	return (
		<section className="relative bg-hero bg-cover">
			<div className="container py-40">
				<h1 className="font-bold">Get Your Bakery Items Delivered</h1>
				<br/>
				<p className="text-gray-500 font-normal">Get your favorite bakery items baked and delivered to your doorsteps at any time</p>
				<br/>
				<SearchBar/>
			</div>
		</section>
	);
};

export default Hero;