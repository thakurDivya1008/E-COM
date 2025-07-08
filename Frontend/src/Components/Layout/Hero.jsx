import React from "react";
import heroImg from "../../assets/pexels-ron-lach-9578720.jpg";

import {Link} from "react-router-dom";
const Hero = () => {
	return (
		<section className="">
			<img
				src={heroImg}
				alt="Summer"
				className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
			/>
			<div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center pointer-events-none">
				<div className="text-center text-black p-6">
					<h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-10">
						Vacation <br /> Ready
					</h1>
					<p className="text-lg tracking-tighter md:text-lg mb-3  ">
						Explore our vacation-ready outfits with fast world wide shipping.
					</p>
					<Link
						to="#"
						className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
					>
						Shop Now
					</Link>
				    
                </div>
			    
            </div>
           
		</section>
	);
};

export default Hero;
