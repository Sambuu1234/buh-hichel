const containerEl = document.getElementsByClassName("felx")[0];
const button = document.getElementsByTagName("button")[0];
let number = 1;
const addBox = () => {
  const box = document.createElement("div");
  box.innerText = number;
  //box elementing classlist ru box gsn class nemey
  box.classList.add("box");
  containerEl.appendChild(box);
  number++;
};
button.addEventListener("click", addBox);
