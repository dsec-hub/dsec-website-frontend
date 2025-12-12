import { TransitionStrategy } from "@/hooks/transitions/transitionStrategy";
import gsap from "gsap";

export class SlideInOutTransition implements TransitionStrategy {
    private readonly overlayId = "page-transition-overlay";

    private readonly paths = {
        in: ["M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z", "M 0 0 h 43 c -60 55 140 65 0 100 H 0 V 0 Z", "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z"],
        out: ["M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z", "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z", "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z"]
    };

    private getElements() {
        let overlay = document.getElementById(this.overlayId) as HTMLDivElement;
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = this.overlayId;
            overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 9999";
            overlay.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><path vector-effect="non-scaling-stroke" d="${this.paths.in[0]}"/></svg>`;
            document.body.appendChild(overlay);
        }
        return { overlay, path: overlay.querySelector("path") as SVGPathElement };
    }

    // start the transition
    public async start(): Promise<void> {
        const { overlay, path } = this.getElements();
        overlay.style.pointerEvents = 'all';

        await gsap.timeline()
            .set(path, { attr: { d: this.paths.in[0] } })
            .to(path, { duration: 0.6, ease: "power4.in", attr: { d: this.paths.in[1] } })
            .to(path, { duration: 0.2, ease: "power1", attr: { d: this.paths.in[2] } });
    }

    // finish transitioning
    public async end(): Promise<void> {
        const { overlay, path } = this.getElements();

        await gsap.timeline()
            .set(path, { attr: { d: this.paths.out[0] } })
            .to(path, { duration: 0.15, ease: "sine.in", attr: { d: this.paths.out[1] } })
            .to(path, { duration: 1, ease: "power4", attr: { d: this.paths.out[2] } });

        overlay.remove();
    }
}