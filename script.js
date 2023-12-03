const back = document.querySelector(".bg");
const text = document.querySelector(".pre");

const int = setInterval(blur, 30);

let load = 0;
function blur() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  console.log(load);
  text.textContent = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  back.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
