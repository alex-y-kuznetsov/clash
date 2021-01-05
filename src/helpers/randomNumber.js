export default function (rangeMin, rangeMax) {
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
}