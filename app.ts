import { Ash } from "./src/models/ash";

function main(inputs: string) {

    const ash: Ash = new Ash();

    inputs.split('').forEach((direction) => {
        ash.move(direction);
    });

    console.log(ash.ownedPokemons);
}

main(process.argv.slice(2)[0]);