import { gsap } from "gsap";
import {TransitionStrategy} from "@/hooks/transitions/transitionStrategy";

export class GridRevealTransition implements TransitionStrategy {

    private readonly GRID_BLOCK_SIZE = 60;

    private transitionBlocks: { element: HTMLDivElement }[] = [];
    private containerId = "transition__grid-reveal-container"

    // modify GRID_BLOCK_SIZE to change size of the blocks
    private createTransitionGrid(container: HTMLElement) {
        container.innerHTML = "";
        this.transitionBlocks = [];

        const gridWidth = container.offsetWidth || window.innerWidth;
        const gridHeight = container.offsetHeight || window.innerHeight;

        const gridColumnCount = Math.ceil(gridWidth / this.GRID_BLOCK_SIZE);
        const gridRowCount = Math.ceil(gridHeight / this.GRID_BLOCK_SIZE) + 1;

        const gridOffsetX = (gridWidth - gridColumnCount * this.GRID_BLOCK_SIZE) / 2;
        const gridOffsetY = (gridHeight - gridRowCount * this.GRID_BLOCK_SIZE) / 2;

        for (let rowIndex = 0; rowIndex < gridRowCount; rowIndex++) {
            for (let colIndex = 0; colIndex < gridColumnCount; colIndex++) {
                const blockPosX = colIndex * this.GRID_BLOCK_SIZE + gridOffsetX;
                const blockPosY = rowIndex * this.GRID_BLOCK_SIZE + gridOffsetY;
                this.createTransitionBlock(container, blockPosX, blockPosY);
            }
        }
    }

    // the styling of the "blocks"
    private createTransitionBlock(container: HTMLElement, posX: number, posY: number) {
        const block = document.createElement("div");
        block.classList.add("transition-block");
        block.style.width = `${this.GRID_BLOCK_SIZE}px`;
        block.style.height = `${this.GRID_BLOCK_SIZE}px`;
        block.style.left = `${posX}px`;
        block.style.top = `${posY}px`;
        block.style.backgroundColor = "black";
        block.style.position = "absolute";
        container.appendChild(block);
        this.transitionBlocks.push({ element: block });
    }

    // the element that shows the transiton and is placed on top of the DOM
    private createContainer(): HTMLElement {
        const container = document.createElement("div");

        container.id = this.containerId

        container.style.position = "fixed";

        container.style.top = "0";
        container.style.left = "0";
        container.style.margin = "0";
        container.style.padding = "0";

        container.style.width = "100vw";
        container.style.height = "100vh";

        container.style.zIndex = "9999";

        container.style.pointerEvents = "none"; 
        container.style.overflow = "hidden";

        document.body.appendChild(container);

        return container;
    }

    // the start of the transition
    public async start(): Promise<void> {
        return new Promise((resolve) => {

            // create the container for the transition
            const transitionGrid = this.createContainer();

            // create logical grid for blocks
            this.createTransitionGrid(transitionGrid);

            // get references to each of the individual blocks
            const blocks = this.transitionBlocks.map((block) => block.element)

            // dont let mouse events
            transitionGrid.style.pointerEvents = "auto";
            transitionGrid.style.zIndex = "1000";

            // the blocks start as clear
            gsap.set(blocks, { opacity: 0 });

            // fade blocks to black
            gsap.to(blocks, {
                opacity: 1,
                duration: 0.05, // how long fade
                ease: "power2.inOut",
                stagger: {
                    amount: 1.0, // total time for all blocks to black
                    from: "random", // choose random blocks to fade
                },
                onComplete: () => {
                    resolve();
                },
            });
        });

    }

    // grid reveal part (end of transition)
    public async end(): Promise<void> {
        return new Promise((resolve) => {
            const blocks = this.transitionBlocks.map((b) => b.element);
            const transitionGrid = document.querySelector(".transition-grid") as HTMLElement;

            if (blocks.length === 0) {
                resolve();
                return;
            }

            gsap.to(blocks, {
                opacity: 0, // fade blocks to clear
                duration: 0.05, // how long it takes for a block to clear
                ease: "power2.inOut",
                stagger: {
                    amount: 0.5, // how long for all blocks to clear
                    from: "random", // randomly choose blocks
                },
                onComplete: () => {
                    // clean up
                    if (transitionGrid) {
                        transitionGrid.remove();
                    }
                    this.transitionBlocks = [];

                    resolve();
                },
            });
        });
    }
}