const MissionUtils = require("@woowacourse/mission-utils");

class BaseballComputer {
  constructor(baseballOutput, baseballValidator) {
    this.baseballNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      9,
      3
    );
    this.baseBallOutput = baseballOutput;
    this.baseballValidator = baseballValidator;
  }
  getUserNumbers() {
    const userNumbers = this.baseballOutput.getNumber();
    this.baseballValidator.checkNumericNumbers(...userNumbers);
    this.baseballValidator.checkNumbersLength(...userNumbers);
    this.baseballValidator.checkOtherNumbers(...userNumbers);
    return userNumbers;
  }
  getBallState(userNumbers) {
    return this.baseballValidator.checkBallState(
      this.baseballNumbers,
      userNumbers
    );
  }
}

export default BaseballComputer;
