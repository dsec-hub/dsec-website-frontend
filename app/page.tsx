import Hero from "@/components/home/hero/hero";
import About from "@/components/home/about/about";
import Ribbon from "@/components/ui/ribbon";
import { CodeXml } from "lucide-react";
import { Metadata } from "next";
import PreLoader from "@/components/preloader";

export const metadata: Metadata = {
    title: "DSEC Burwood",
    description:
        "Join the Deakin Software Engineering Club at Burwood to build real software projects, attend coding workshops, and meet recruiters hiring Deakin students.",
};

export default function Home() {
    return (
        <div className={"flex flex-col relative overflow-hidden"}>
            <PreLoader />
            <Hero />
            <div className={"relative w-full"}>
                <Ribbon
                    text={["LEARN", "BUILD", "SHIP"]}
                    className={`absolute 
                -left-[5%] 
                sm:-left-[50%] 
                top-0 
                text-xl font-semibold py-2 bg-notification -rotate-5 z-10 text-background`}
                    icon={<CodeXml className={"w-5 h-5"} />}
                />
                <Ribbon
                    text={["LEARN", "BUILD", "SHIP"]}
                    className={`absolute 
                -left-[5%] 
                sm:-left-[50%] 
                top-0 
                text-xl font-semibold py-2 bg-secondary rotate-5 z-20 text-background`}
                    icon={<CodeXml className={"w-5 h-5"} />}
                />
                <Ribbon
                    text={["LEARN", "BUILD", "SHIP"]}
                    className={`absolute
                -left-[5%] 
                sm:-left-[50%] 
                top-0 
                text-xl font-semibold py-2 bg-background rotate-12 z-30 text-foreground border-t border-b border-foreground`}
                    icon={<CodeXml className={"w-5 h-5"} />}
                />
            </div>

            <About />
        </div>
    );
}
