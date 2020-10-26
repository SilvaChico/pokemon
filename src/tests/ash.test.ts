import chai from 'chai';
import { Ash } from '../models/ash';
import { World } from '../models/world';

const expect: Chai.ExpectStatic = chai.expect;


describe('Ash functionalities', () => {
    let world: World;

    beforeEach(() => {
        world = new World();
    })

    it('creates Ash', () => {
        const ash: Ash = new Ash(world);
        expect(
            ash.ownedPokemons,
        ).to.eql(1);

        expect(
            ash.currentPosition.xPosition,
        ).to.eql(0);

        expect(
            ash.currentPosition.yPosition,
        ).to.eql(0);
    })

    it('moves Ash north', () => {
        const ash: Ash = new Ash(world);
        ash.move('N', world);
        expect(
            ash.ownedPokemons,
        ).to.eql(2);

        expect(
            ash.currentPosition.xPosition,
        ).to.eql(0);

        expect(
            ash.currentPosition.yPosition,
        ).to.eql(1);
    })

    it('moves Ash north and then south', () => {
        const ash: Ash = new Ash(world);
        ash.move('N', world);
        ash.move('S', world);
        expect(
            ash.ownedPokemons,
        ).to.eql(2);

        expect(
            ash.currentPosition.xPosition,
        ).to.eql(0);

        expect(
            ash.currentPosition.yPosition,
        ).to.eql(0);
    })

    it('moves Ash with the following sequence: NESSON', () => {
        /* note that O means West */
        const ash: Ash = new Ash(world);
        ['N', 'E', 'S', 'S', 'O', 'N'].forEach(direction => {
            ash.move(direction, world);
        })
        expect(
            ash.ownedPokemons,
        ).to.eql(6);

        expect(
            ash.currentPosition.xPosition,
        ).to.eql(0);

        expect(
            ash.currentPosition.yPosition,
        ).to.eql(0);
    })

    it('moves Ash with the following sequence: 10000 times north the 10000 times south', () => {
        /* note that O means West */
        const ash: Ash = new Ash(world);
        new Array(10000).fill('N').concat(new Array(10000).fill('S')).forEach(direction => {
            ash.move(direction, world);
        })
        expect(
            ash.ownedPokemons,
        ).to.eql(10001);

        expect(
            ash.currentPosition.xPosition,
        ).to.eql(0);

        expect(
            ash.currentPosition.yPosition,
        ).to.eql(0);
    })

    it('moves ash into an unknown direction', () => {
        const ash: Ash = new Ash(world);
        ash.move('SW', world);
        expect(
            ash.ownedPokemons,
        ).to.eql(1);

        expect(
            ash.currentPosition.xPosition,
        ).to.eql(0);

        expect(
            ash.currentPosition.yPosition,
        ).to.eql(0);
    })

});