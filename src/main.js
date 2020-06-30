import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { HungryBear } from './../src/hungry-bear';

$(document).ready(function() {
  let fuzzy = new HungryBear("Fuzzy");
  fuzzy.setLevels();
  $("#countdown").show();
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

// setTimeout(function(){
//   alert("Hello friend! Maybe you should sign up for our newsletter!");
// }, 2000);
