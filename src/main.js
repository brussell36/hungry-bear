import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { HungryBear } from './../src/hungry-bear';

$(document).ready(function() {
  $("#buttons").click(function(event) {
    event.preventDefault();
    let fuzzy = new HungryBear("Fuzzy");
    $("#countdown").show();
    $("#food").text(fuzzy.foodLevel);
    $("#scratch").text(fuzzy.moodLevel);
    $("#hug").text(fuzzy.hugLevel);
    fuzzy.setLevels();
    
    $(".btn-primary").text();
  });
});