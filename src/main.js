import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { HungryBear } from './../src/hungry-bear';

$(document).ready(function() {
  let fuzzy = new HungryBear("Fuzzy");
  $("#countdown").show(); // setting another interval that calls fuzzy.setLevels() every second
  let counter = setInterval(timer, 1000);
  fuzzy.setLevels(); //setting an interval here that decrements by 1 every second
  function timer() {
    console.log("running interval");
    let food = fuzzy.foodLevel;
    let scratch = fuzzy.moodLevel;
    let hug = fuzzy.hugLevel;
    
    if (food <= 0 || scratch <= 0 || hug <= 0) {
      clearInterval(counter);
      return $("#countdown").text("You were eaten!");
    }
    $("#food").text(food);
    $("#scratch").text(scratch);
    $("#hug").text(hug);
  }

  $("#primary").click(function() {
    $("#food").html(fuzzy.foodLevel);
    fuzzy.feed();
  });
  
  $("#success").click(function() {
    $("#scratch").html(fuzzy.moodLevel);
    fuzzy.scratch();
  });
  
  $("#warning").click(function() {
    $("#hug").html(fuzzy.hugLevel);
    fuzzy.hug();
  });
});

