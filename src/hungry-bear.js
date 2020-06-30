export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 20;
    this.hugLevel = 30;
  }

  setLevels() {
    setInterval(() => {  
      this.foodLevel--;
      this.moodLevel--;
      this.hugLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0 && this.moodLevel > 0 && this.hugLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  scratch() {
    this.moodLevel = 20;
  }

  hug() {
    this.hugLevel = 30;
  }
}
