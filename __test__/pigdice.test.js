import { Gameplay } from "./../src/pigdice.js";

describe("Gameplay", () => {
  test("should correctly create a gameplay object with four properties, rollTotal, playerOneTotal, playerTwoTotal, playerTurn", () => {
    const gameplay = new Gameplay(0,0,0,1);
    expect(gameplay.rollTotal).toEqual(0);
    expect(gameplay.playerOneTotal).toEqual(0);
    expect(gameplay.playerTwoTotal).toEqual(0);
    expect(gameplay.playerTurn).toEqual(1);
  
    });
    test("should retern a whole integer between 1 and 6")
});

descripe("Gameplay.prototype.getRandomIntInclusive, (1,6) => (min, max) {