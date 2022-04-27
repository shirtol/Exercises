function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function () {
    if (this.a === this.b && this.d === this.c && this.a === this.c)
        return true;
    return false;
};

const mySquare = new Square(4, 4, 4, 4);
const mySquare2 = new Square(4, 4, 3, 4);

console.log(mySquare.isSquare());
console.log(mySquare2.isSquare());
