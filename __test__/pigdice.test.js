import { Gameplay } from "./../src/pigdice.js";

describe("Gameplay", () => {
  test("should correctly create a gameplay object with four properties, rollTotal, playerOneTotal, playerTwoTotal, playerTurn", () => {
    const gameplay = new Gameplay(0,0,0,1);
    expect(gameplay.rollTotal).toEqual(0);
    expect(gameplay.playerOneTotal).toEqual(0);
    expect(gameplay.playerTwoTotal).toEqual(0);
    expect(gameplay.playerTurn).toEqual(1);
  
    });
    test("should retern a whole integer between 1 and 6", () => {
      const gameplay = new Gameplay();
      const result = gameplay.getRandomIntInclusive();
      expect(result).toBeLessThanOrEqual(6);
      expect(result).toBeGreaterThanOrEqual(1);
    });

    test("should return and integer between 2 and 6 or return 'you rolled a one' if random integer equals 1", () => {
      const gameplay = new Gameplay();
      const result = gameplay.randomIntegerReturn();
      expect([2,3,4,5,6, "You rolled a One"]).toContain(result);
    });

    test("should return either the phrase 'Player One Wins!' or 'Player Two is the WINNR!' or 'No winner has been declared'", () => {
      const gameplay = new Gameplay();
      const result = gameplay.checkFinalScore();
      expect(["Player One Wins!", "Player Two is the WINNER", "No winner has been declared"]) 
        });
});

