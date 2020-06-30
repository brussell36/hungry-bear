import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { HungryBear } from './hungry-bear';

$(document).ready(function() {
  $("#buttons").click(function(event) {
    event.preventDefault();
    let fuzzy = new HungryBear().getTime();
    fuzzy.setLevels();
    $(".countdown").text(fuzzy.foodlevel);
  });
});