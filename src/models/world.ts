import { Position } from "./position";

export class World {

    private emptyPositions: Array<Position>;

    constructor() {
        this.emptyPositions = [];
    }

    public containsPokemon(position: Position): boolean {
        return this.emptyPositions.findIndex(
            value =>
                value.xPosition === position.xPosition && value.yPosition === position.yPosition
        ) === -1;
    }

    public removePokemon(position: Position) {
        const emptyPos: Position = new Position(position.xPosition, position.yPosition);
        this.emptyPositions.push(emptyPos);
    }

}