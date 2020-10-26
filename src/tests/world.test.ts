import chai from 'chai';
import { World } from '../models/world';
import { Position } from '../models/position';

const expect: Chai.ExpectStatic = chai.expect;


describe('World functionalities', () => {

    it('returns true as the position contains a pokemon', async () => {
        const world: World = new World();
        const position: Position = new Position(0, 0);
        expect(
            world.containsPokemon(position),
        ).to.eql(true);

    })

    it('returns false as the position does not contain a pokemon', async () => {
        const world: World = new World();
        const position: Position = new Position(0, 1);
        world.removePokemon(position);
        expect(
            world.containsPokemon(position),
        ).to.eql(false);

    })

});