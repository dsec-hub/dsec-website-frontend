// use this interface when creating new transitions for the useViewTransition
export interface TransitionStrategy {
    start(): Promise<void>; // use to start transition
    end(): Promise<void>; // use to end transition (usually after router push)
}