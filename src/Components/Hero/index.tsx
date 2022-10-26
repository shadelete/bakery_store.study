import React from 'react';
import SearchBar from "../Elements/searchBar";

const Hero = () => {
	return (
		<section className="relative">
			<div className="container pt-40">
				<h1>Get Your Bakery Items Delivered</h1>
				<br/>
				<p>Get your favorite bakery items baked and delivered to your doorsteps at any time</p>
				<br/>
			</div>
			<SearchBar/>
		</section>
	);
};

export default Hero;