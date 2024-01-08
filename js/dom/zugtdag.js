const box = document.getElementsByClassName("box")[0];
// const p = document.getElementsByTagName("p")[0];
const button = document.getElementsByClassName("button")[0];
const button1 = document.getElementsByClassName("buttonn")[1];
const yes = () => {
  const max = 90;
  const min = 0;
  box.style.top = `${Math.floor(Math.random() * (max - min) + min)}%`;
  box.style.left = `${Math.floor(Math.random() * (max - min) + min)}%`;
};
const no = () => {
  alert("medsima");
};
button.addEventListener("mouseenter", yes);
button1.addEventListener("click", no);
