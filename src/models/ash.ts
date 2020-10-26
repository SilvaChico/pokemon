import { Position } from "./position";
import { World } from "./world";

export class Ash {
    private currentPosition_: Position = new Position(0, 0);
    private ownedPokemons_: number = 0;

    constructor(world: World) {
        if (world.containsPokemon(this.currentPosition_)) {
            this.catchPokemon();
            world.removePokemon(this.currentPosition_)
        }
    }

    public get ownedPokemons(): number {
        return this.ownedPokemons_;
    }


    public get currentPosition(): Position {
        return this.currentPosition_;
    }


    public move(direction: string, world: World) {
        if (direction === 'N')
            this.currentPosition_.incrementY();
        else if (direction === 'S')
            this.currentPosition_.decrementY();
        else if (direction === 'O')
            this.currentPosition_.incrementX();
        else if (direction === 'E')
            this.currentPosition_.decrementX();

        if (world.containsPokemon(this.currentPosition_)) {
            this.catchPokemon();
            world.removePokemon(this.currentPosition_)
        }
    }

    private catchPokemon() {
        this.ownedPokemons_++;
    }

}