import { Position } from "./position";
import { World } from "./world";

export class Ash {
    private currentPosition_: Position = new Position(0, 0);
    private ownedPokemons_: number = 0;
    private world: World;

    constructor() {
        this.world = new World();
        this.catchPokemon();
        this.world.removePokemon(this.currentPosition_)
    }

    public get ownedPokemons(): number {
        return this.ownedPokemons_;
    }


    public get currentPosition(): Position {
        return this.currentPosition_;
    }


    public move(direction: string) {
        if (direction === 'N')
            this.currentPosition_.incrementY();
        else if (direction === 'S')
            this.currentPosition_.decrementY();
        else if (direction === 'O')
            this.currentPosition_.incrementX();
        else if (direction === 'E')
            this.currentPosition_.decrementX();

        if (this.world.containsPokemon(this.currentPosition_)) {
            this.catchPokemon();
            this.world.removePokemon(this.currentPosition_)
        }
    }

    private catchPokemon() {
        this.ownedPokemons_++;
    }

}