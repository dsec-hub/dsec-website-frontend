"use client";

import { useTransitionRouter } from "next-view-transitions";
import {TransitionStrategy} from "@/hooks/transitions/transitionStrategy";
import {GridRevealTransition} from "@/hooks/transitions/gridRevealTransition";
import {SlideInOutTransition} from "@/hooks/transitions/slideInOutTransition";

export const useViewTransition = (
    defaultStrategy: TransitionStrategy = new GridRevealTransition() // change this to set default transition
) => {

    const router = useTransitionRouter();

	const navigateWithTransition = async (
		href: string,
		onRouteChange?: () => void,
        // pass the transition type you want in here
        // transitions found in @/hooks/transitions/
        // default is gridReveal
		transition: TransitionStrategy = defaultStrategy
	) => {


		const currentPath = window.location.pathname;

		if (currentPath === href) return;

        // start animation
        await transition.start();

        // redirect user
        router.push(href);
        if (onRouteChange) onRouteChange(); // wtf is this ill just keep it

        await new Promise((r) => setTimeout(r, 400));

        await transition.end();

	};

	return { navigateWithTransition, router };
};
