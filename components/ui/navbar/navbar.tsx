"use client";

import { Menu } from "lucide-react";

import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import NavbarLink from "@/components/ui/navbar/NavbarLink";

//todo: add actual animated links
//todo: add proper styling for the links

type NavigationLink = {
    label: string;
    href: string;
}

export default function Navbar() {

    const navigationLinks: NavigationLink[] = [
        {label: "Home", href: "/"},
        {label: "About Us", href: "/about"},
        {label: "Projects", href: "/projects"},
        {label: "Events", href: "/events"},
        {label: "Contact Us", href: "/contact"},
    ]

	return (
		<div className={"w-full flex bg-background h-20 border-b border-white/20"}>
			<div className="max-w-7xl px-4 md:px-8 lg:px-0 w-full flex items-center justify-between mx-auto">

                {/*logo is clickable and redirects to home*/}
                <NavbarLink href={"/"}>
                    <Image
                        className="md:h-[47.33px] md:w-19"
                        width={64.23}
                        height={40}
                        src="/logo.png"
                        alt="DSEC logo"
                    />
                </NavbarLink>



				{/*this is shown if the screen is large enough else hidden */}
				<ul className="gap-8 items-center hidden lg:flex w-fit font-sans rounded-2xl">
                    {navigationLinks.map(nav =>
                        <NavbarLink key={nav.label} href={nav.href}>{nav.label}</NavbarLink>
                    )}
				</ul>

				<ul className="gap-8 items-center hidden lg:flex w-fit font-sans rounded-2xl">
					<li className="flex items-center"><AnimatedThemeToggler /></li>
					<li><a href="/join-us" className="bg-primary rounded-full px-4 py-2">Join Now</a></li>
				</ul>

				{/*hamburger for phones / small screens :)*/}
				<Menu className={"lg:hidden cursor-pointer"} size="32" />
			</div>
		</div>
	);
}
