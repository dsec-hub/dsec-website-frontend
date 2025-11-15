"use client";

import { useLoader } from "@/app/loader-context";
import LoaderLogo from "./loader-logo";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin);

function PreLoader() {
	const { hasPreloaded, setHasPreloaded } = useLoader();

	const logoRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const svgElement = logoRef.current;
		if (!svgElement) return;

		const paths = svgElement.querySelectorAll("path");

		gsap.fromTo(
			paths,
			{ drawSVG: "0%" },
			{
				duration: 2,
				drawSVG: "100%",
				stagger: 0.2,
				ease: "power2.inOut",
			}
		)
	}, [setHasPreloaded]);

	return (
		<>
			<div className="fixed h-svh w-screen overflow-hidden z-50 pointer-events-auto top-0 left-0">
				<div className="bg-primary w-full h-full top-0 absolute flex justify-center items-center">
					<div className="overflow-hidden">
						<LoaderLogo ref={logoRef} />
					</div>
				</div>
			</div>
		</>
	);
}

export default PreLoader;
