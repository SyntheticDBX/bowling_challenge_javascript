class Game
{
  // this is the constructor for the Game class
  constructor()
  {
    // this is the array of rolls
    this.rolls = [];
  }
  roll(pins)
  {
    // this is the method for rolling the ball
    // it works by pushing the number of pins knocked down into the rolls array
    this.rolls.push(pins);
  }
  score()
  {
    let score = 0;
    // this is the variable for the current roll index
    // it works by starting at 0 and incrementing by 2 for each frame
    // it is used to determine if a frame is a strike or a spare
    let rollIndex = 0;
    // this is the loop that iterates through the rolls array
    // it adds the score for each frame to the total score
    // it also increments the roll index by 2 if the frame is not a strike
    for (let frameIndex = 0; frameIndex < 10; frameIndex++)
    {
      if (this.isStrike(rollIndex))
      {
        score += 10 + this.strikeBonus(rollIndex);
        rollIndex++;
      }
      else if (this.isSpare(rollIndex))
      {
        score += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      }
      else
      {
        score += this.sumOfBallsInFrame(rollIndex);
        rollIndex += 2;
      }
    }
    return score;
  }
  // this is the method for determining if a frame is a strike
  isStrike(rollIndex)
  {
    return this.rolls[rollIndex] === 10;
  }
  // this is the method for determining if a frame is a spare
  isSpare(rollIndex)
  {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }
  // this is the method for determining the sum of balls in a frame
  sumOfBallsInFrame(rollIndex)
  {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
  // this is the method for determining the spare bonus
  // it works by adding the next roll after the spare
  spareBonus(rollIndex)
  {
    return this.rolls[rollIndex + 2];
  }
  // this is the method for determining the strike bonus
  // it works by adding the next two rolls after the strike
  strikeBonus(rollIndex)
  {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
}

module.exports = Game;