import { Position } from "./position";

export class World {

    private emptyPositions: Map<string, string>;

    constructor() {
        this.emptyPositions = new Map();
    }

    public containsPokemon(position: Position): boolean {
        return !this.emptyPositions.has(`${position.xPosition};${position.yPosition}`);
    }

    public removePokemon(position: Position) {
        this.emptyPositions.set(`${position.xPosition};${position.yPosition}`, 'empty');
    }

}