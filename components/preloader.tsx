"use client";

import { useLoader } from "@/app/loader-context";
import LoaderLogo from "./loader-logo";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin);

function PreLoader() {
	const { hasPreloaded, setHasPreloaded } = useLoader();

	const preloaderContainerRef = useRef<HTMLDivElement>(null);
	const logoRefContainer = useRef<HTMLDivElement>(null);
	const logoRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const svgElement = logoRef.current;
		if (!svgElement) return;

		const paths = svgElement.querySelectorAll("path");

		const tl = gsap.timeline();

		tl.to(logoRefContainer.current, {
			clipPath: "inset(0% 0% 0% 0%)",
			duration: 0,
		});
		tl.to(preloaderContainerRef.current, {
			clipPath: "inset(0% 0% 0% 0%)",
			duration: 0,
		});

		tl.fromTo(
			paths,
			{ drawSVG: "0%" },
			{
				duration: 0.1,
				drawSVG: "100%",
				stagger: 0.2,
				ease: "power2.inOut",
			}
		);

		tl.to(
			paths,
			{
				duration: 1,
				fill: (i, target) => {
					const stroke = (target as SVGPathElement).getAttribute("stroke");
					return stroke || "#000";
				},
				stagger: 0.1,
				ease: "power2.inOut",
			},
			"-=0.5"
		);

		tl.to(
			logoRefContainer.current,
			{
				clipPath: "inset(0% 0% 100% 0%)",
				duration: 0.8,
				ease: "power2.inOut",
				onComplete: () => {
					if (logoRefContainer.current)
						logoRefContainer.current.style.display = "none";
				},
			},
		);

		tl.to(
			preloaderContainerRef.current,
			{
				clipPath: "inset(0% 0% 100% 0%)",
				duration: 0.8,
				ease: "power2.inOut",
			},
			"+=0.2"
		)
	}, [setHasPreloaded]);

	return (
		<>
			<div
				className="fixed h-svh w-screen overflow-hidden z-50 pointer-events-auto top-0 left-0"
				ref={preloaderContainerRef}
			>
				<div className="bg-foreground w-full h-full top-0 absolute flex justify-center items-center">
					<div
						className="overflow-hidden"
						ref={logoRefContainer}
					>
						<LoaderLogo ref={logoRef} />
					</div>
				</div>
			</div>
		</>
	);
}

export default PreLoader;
