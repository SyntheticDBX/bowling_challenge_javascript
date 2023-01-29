const Game = require('./bowling_challenge.js');

describe('Game', function() {
    let game;
    beforeEach(function() {
        game = new Game();
    });
    // this is the test suite for the roll method
    describe('roll', function() {
        // this is the test case for a gutter game
        it('should return 0 for a gutter game', function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
        });
        // this is the test case for all ones
        it('should return 20 for all ones', function() {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
        });
        // this is the test case for a spare followed by a 3
        it('should return 16 for a spare followed by a 3', function() {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
        });
        // this is the test case for a strike followed by a 3 and a 4
        it('should return 24 for a strike followed by a 3 and a 4', function() {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toEqual(24);
        });
        // this is the test case for a perfect game
        it('should return 300 for a perfect game', function() {
        rollMany(12, 10);
        expect(game.score()).toEqual(300);
        });
    });
    // this is the test suite for the score method
    describe('score', function() {
        // this is the test case for a gutter game
        it('should return 0 for a gutter game', function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
        });
        // this is the test case for all ones
        it('should return 20 for all ones', function() {
        rollMany(20, 1);
        expect(game.score()).toEqual(20);
        });
        // this is the test case for a spare followed by a 3
        it('should return 16 for a spare followed by a 3', function() {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toEqual(16);
        });
        // this is the test case for a strike followed by a 3 and a 4
        it('should return 24 for a strike followed by a 3 and a 4', function() {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        expect(game.score()).toEqual(24);
        });
        // this is the test case for a perfect game
        it('should return 300 for a perfect game', function() {
        rollMany(12, 10);
        expect(game.score()).toEqual(300);
        });
    });
    // this is the test suite for the isStrike method
    describe('isStrike', function() {
        // this is the test case for a strike
        it('should return true for a strike', function() {
        game.roll(10);
        expect(game.isStrike(0)).toEqual(true);
        });
        // this is the test case for a non-strike
        it('should return false for a non-strike', function() {
        game.roll(9);
        expect(game.isStrike(0)).toEqual(false);
        });
    });
    // this is the test suite for the isSpare method
    describe('isSpare', function() {
        // this is the test case for a spare
        it('should return true for a spare', function() {
        game.roll(5);
        game.roll(5);
        expect(game.isSpare(0)).toEqual(true);
        });
        // this is the test case for a non-spare
        it('should return false for a non-spare', function() {
        game.roll(5);
        game.roll(4);
        expect(game.isSpare(0)).toEqual(false);
        });
    });
    // this is the test suite for the sumOfBallsInFrame method
    describe('sumOfBallsInFrame', function() {
        // this is the test case for a sum of balls in a frame
        it('should return the sum of balls in a frame', function() {
        game.roll(5);
        game.roll(4);
        expect(game.sumOfBallsInFrame(0)).toEqual(9);
        });
    });
    // this is the test suite for the spareBonus method
    describe('spareBonus', function() {
        // this is the test case for a spare bonus
        it('should return the spare bonus', function() {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        expect(game.spareBonus(0)).toEqual(3);
        });
    });
    // this is the test suite for the strikeBonus method
    describe('strikeBonus', function() {
        // this is the test case for a strike bonus
        it('should return the strike bonus', function() {
        game.roll(10);
        game.roll(3);
        game.roll(4);
        expect(game.strikeBonus(0)).toEqual(7);
        });
    });
    // this is the helper function for rolling many times
    function rollMany(n, pins) {
        for (let i = 0; i < n; i++) {
        game.roll(pins);
        }
    }
    // this is the helper function for rolling a spare
    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }
    // this is the helper function for rolling a strike
    function rollStrike() {
        game.roll(10);
    }
});