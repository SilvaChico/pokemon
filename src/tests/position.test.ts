import chai from 'chai';
import { Position } from '../models/position';

const expect: Chai.ExpectStatic = chai.expect;


describe('Position functionalities', () => {

    it('gets x coordinate', async () => {
        const position: Position = new Position(0, 1);
        expect(
            position.xPosition,
        ).to.eql(0);

    })

    it('gets y coordinate', async () => {
        const position: Position = new Position(0, 1);
        expect(
            position.yPosition,
        ).to.eql(1);

    })

    it('sets x coordinate', async () => {
        const position: Position = new Position(0, 0);
        position.xPosition = 3;
        expect(
            position.xPosition,
        ).to.eql(3);

    })

    it('sets y coordinate', async () => {
        const position: Position = new Position(0, 0);
        position.yPosition = 3;
        expect(
            position.yPosition,
        ).to.eql(3);

    })

    it('decrements y coordinate', async () => {
        const position: Position = new Position(0, 0);
        position.decrementY();
        expect(
            position.yPosition,
        ).to.eql(-1);

    })

    it('increments y coordinate', async () => {
        const position: Position = new Position(0, 0);
        position.incrementY();
        expect(
            position.yPosition,
        ).to.eql(1);

    })
    it('decrements x coordinate', async () => {
        const position: Position = new Position(0, 0);
        position.decrementX();
        expect(
            position.xPosition,
        ).to.eql(-1);

    })
    it('increment x coordinate', async () => {
        const position: Position = new Position(0, 0);
        position.incrementX();
        expect(
            position.xPosition,
        ).to.eql(1);

    })

});