import { Que } from "./App";

export function getFinalState(baseState: number, queue: Que[]): number {
    let finalState = baseState;

    for (let update of queue) {
        if (typeof update === "function") {
            finalState = update(finalState);
        } else {
            finalState = update;
        }
    }

    return finalState;
}
