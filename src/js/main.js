// Main JS module
// objectFitImages polyfill
import objectFitImages from "object-fit-images";
import $ from "jquery";
import nav from './modules/nav';
import animateLine from "./modules/animateLine";

$(function() {
  objectFitImages();
  nav();
  animateLine();
});
