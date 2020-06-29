export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 20;
    this.hugLevel = 30;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000); 
  }

  setHug() {
    setInterval(() => {
      this.hugLevel--;
    },1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0 && this.moodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
  
  happy() {
    
  }
}
