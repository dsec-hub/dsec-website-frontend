"use client";

import { Menu } from 'lucide-react';

//todo: needs to be cleaned up
import Image from "next/image";

export default function Navbar() {
	return (
        <div className={"flex items-center justify-between pl-[100px] pt-[30px] pr-[100px] bg-background"}>
            <Image src="/logo.png" width={76} height={48} alt="DSEC logo"/>
            {/*TODO: implement navigation, this is just a icon placeholder*/}
            <Menu width={46} height={46} />
        </div>
	);
};

