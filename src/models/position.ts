export class Position {
    private xPosition_: number;
    private yPosition_: number;

    constructor(xPosition: number, yPosition: number) {
        this.xPosition_ = xPosition;
        this.yPosition_ = yPosition;
    }

    public get xPosition(): number {
        return this.xPosition_;
    }

    public get yPosition(): number {
        return this.yPosition_;
    }

    public set xPosition(xPosition: number) {
        this.xPosition_ = xPosition;
    }

    public set yPosition(yPosition: number) {
        this.yPosition_ = yPosition;
    }

    public incrementX() {
        this.xPosition_++;
    }

    public incrementY() {
        this.yPosition_++;
    }

    public decrementX() {
        this.xPosition_--;
    }

    public decrementY() {
        this.yPosition_--;
    }
}