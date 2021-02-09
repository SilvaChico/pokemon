import chai from 'chai';
import { Ash } from '../models/ash';

const expect: Chai.ExpectStatic = chai.expect;


describe('Ash functionalities', () => {

    it('creates Ash', () => {
        const ash: Ash = new Ash();
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
        const ash: Ash = new Ash();
        ash.move('N');
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
        const ash: Ash = new Ash();
        ash.move('N');
        ash.move('S');
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

    it('moves Ash with the following sequence: NESSWN', () => {
        /* note that O means West */
        const ash: Ash = new Ash();
        ['N', 'E', 'S', 'S', 'W', 'N'].forEach(direction => {
            ash.move(direction);
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
        const ash: Ash = new Ash();
        new Array(10000).fill('N').concat(new Array(10000).fill('S')).forEach(direction => {
            ash.move(direction);
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
        const ash: Ash = new Ash();
        ash.move('P');
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