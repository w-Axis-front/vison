// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import $ from "jquery";
import nav from './modules/nav';
import animateLine from "./modules/animateLine";
import scroll from "./modules/scroll";
import slider from "./modules/slider";
import dtime from "./modules/dtime";
import animateNumbers from "./modules/animateNumbers";

$(function() {
  objectFitImages();
  nav();
  animateLine();
  scroll();
  dtime();
  slider();
  animateNumbers();
});
