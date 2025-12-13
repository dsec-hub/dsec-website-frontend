const Hero = () => {
  return (
		<section className={"h-screen relative"}>
            {/*pointer events none so we can click through and interact with background*/}
            <div className={"h-full flex flex-col justify-start gap-8 relative z-20 pointer-events-none pt-[3vh] max-w-[1250px]"}>
                <div className={"flex flex-col"}>
                    <p className={"font-semibold text-sm font-cta"}>JOIN US FOR T1 STALL</p>
                    <h1 className={"text-4xl md:text-6xl lg:text-9xl"}>Deakin's Home for Software Engineers</h1>
                </div>
                <p className={"text-xs sm:text-base lg:text-xl"}>Join the Deakin Software Engineering Club at Burwood to design,
                    build, and ship real software with other students. Learn modern
                    tools, work in agile teams, and leave uni with a portfolio that
                    gets you noticed by recruiters.</p>
                <div>

                </div>
            </div>


		</section>
	);
}

export default Hero