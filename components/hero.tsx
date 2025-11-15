"use client";

import ColorBends from './ColorBends';

const Hero = () => {
  return (
		<section className="mx-4 my-4 bg-card rounded-4xl overflow-hidden h-[70vh]">
			<ColorBends
				// colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
				rotation={160}
				speed={0.3}
				scale={1.4}
				frequency={1}
				warpStrength={1}
				mouseInfluence={0.8}
				parallax={0.6}
				noise={0.08}
				transparent
			/>
		</section>
	);
}

export default Hero