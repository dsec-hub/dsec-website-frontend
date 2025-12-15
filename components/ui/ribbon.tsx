import {JSX} from "react";
import {CodeXml} from "lucide-react";

function generate(text: string[], prefix: number, icon?: JSX.Element) : JSX.Element {
    return (
        <ul className={"flex gap-8"}>
            {text.map((s, index) =>
                <li key={`${prefix}-${s}-${index}`} className={"flex gap-8 items-center"}>
                    {s}
                    {icon ? icon : null}
                </li>,
            )}
        </ul>
    )
}

// infinite scrolling ribbon for slogans, can customise text and icon
// edit the rotation with the className prop, like a normal element
// DO: add z-index
export default function Ribbon({text, icon, className} : {
    text: string[];
    icon?: JSX.Element;
    className?: string;
}) {

    // generate copies of the slogan so they fill the entire width
    const copies : JSX.Element[] = []
    for (let i = 0; i < 5; i++) {
        copies.push(generate(text, i, icon))
    }

    return (
        <div className={`flex whitespace-nowrap w-max gap-8 ${className}`}>
            {copies.map((e, index) =>
                <div
                    className={"infinite-scroll-item"} // custom defined in globals.css
                    key={index}>
                    {e}
                </div>
            )}
        </div>
    )
}