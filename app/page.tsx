import Hero from "@/components/home/hero/hero";
import About from "@/components/home/about/about";
import Ribbon from "@/components/ui/ribbon";
import {CodeXml} from "lucide-react";

export default function Home() {
    return (
        <div className={"flex flex-col relative overflow-hidden"}>
            {/* TODO: uncomment this: <PreLoader />*/}
            <Hero />
            <div className={"flex relative h-[100px]"} >
                <Ribbon
                    text={["LEARN", "BUILD", "SHIP"]}
                    className={"absolute -left-[20%] top-[50%] text-xl font-semibold py-2 bg-notification -rotate-5 z-10 text-background"}
                    icon={<CodeXml className={"w-5 h-5"}/>}
                />
                <Ribbon
                    text={["LEARN", "BUILD", "SHIP"]}
                    className={"absolute -left-[20%] top-[50%] text-xl font-semibold py-2 bg-secondary rotate-5 z-20 text-background"}
                    icon={<CodeXml className={"w-5 h-5"}/>}
                />
                <Ribbon
                    text={["LEARN", "BUILD", "SHIP"]}
                    className={"absolute -left-[20%] top-[50%] text-xl font-semibold py-2 bg-background rotate-12 z-30 text-foreground border-t border-b border-foreground"}
                    icon={<CodeXml className={"w-5 h-5"}/>}
                />
            </div>
            <About />
        </div>
    );
}
