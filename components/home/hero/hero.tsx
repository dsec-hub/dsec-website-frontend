import PixelBlast from "@/components/home/hero/PixelBlast"
import GradientText from "@/components/ui/gradientText";
import Button from "@/components/button";

export default function Hero() {
    return (
        <section className={"h-screen w-full flex flex-col justify-center items-start relative"}>

{/*            <div className={"w-full h-full absolute z-0 left-0 top-0"}>
                <PixelBlast
                    variant="circle"
                    pixelSize={6}
                    color="#D63384"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0}
                    liquidRadius={0}
                    liquidWobbleSpeed={0}
                    speed={0.6}
                    edgeFade={0.05}
                    transparent
                />
            </div>*/}

            <div className={"flex flex-col relative h-full justify-around max-h-[50vh] sm:max-h-[60vh] px-[20px] md:px-[80px] lg:px-[160px] z-50"}>
                <div className={"flex flex-col "}>
                    <GradientText className={"text-sm md:text-base font-semibold font-sans"}>JOIN US FOR T1 STALL</GradientText>
                    <h1 className={"text-4xl sm:5xl md:text-6xl lg:text-8xl max-w-[80vw]"}>Deakin's Home for Software Engineers</h1>
                </div>
                <p className={"text-base lg:text-xl max-w-[70vw]"}>
                    Join the Deakin Software Engineering Club at Burwood to design,
                    build, and ship real software with other students.
                </p>
                <div className={"flex gap-4"}>
                    <Button type={"primary"}>Join Now</Button>
                    <Button  type={"outline"}>Learn More</Button>
                </div>
            </div>
        </section>
    );
}