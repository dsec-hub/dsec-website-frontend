import {ReactNode} from "react";
import { Link } from "next-view-transitions";
import {useViewTransition} from "@/hooks/useViewTransition";

export default function NavbarLink({href, children} : {
    children: ReactNode;
    href: string;
} ) {

    const {navigateWithTransition} = useViewTransition();

    return (
        <li className={"cursor-pointer flex justify-center items-center"}>
            <a onClick={(event) => {
                event.preventDefault();
                navigateWithTransition(href);
            }}>
                {children}
            </a>
        </li>
    )
}