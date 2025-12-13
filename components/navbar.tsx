"use client";

import { Menu } from 'lucide-react';

//todo: needs to be cleaned up
import Image from "next/image";

export default function Navbar() {
	return (
        // TODO: maybe put padding bottom
        <div className={"w-full h-[48px] md:h-[72px] pt-2 flex items-center justify-between bg-background"}>
            <Image className={"w-[42px] md:w-[64px] cursor-pointer"} width={983} height={612}  src="/logo.png" alt="DSEC logo"/>

            <ul className={"gap-8 items-center hidden lg:flex w-fit p-1 px-6 bg-primary rounded-2xl"}>
                <li>Home</li>
                <li>About Us</li>
                <li>Membership</li>
                <li>Recruitment</li>
                <li>Contact Us</li>
            </ul>

            {/*hamburger for phones / small screens :)*/}
            <Menu className={"max-w-[42px] lg:hidden cursor-pointer"} />
        </div>
	);
};

