//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
const boxArray = [
  {
    Title: "Read book",
    Description: "medkuee",
    Status: "To do",
    Priority: "low",
  },
  {
    Title: "haha",
    Description: "uilahne",
    Status: "In progress",
    Priority: "low",
  },
  {
    Title: "hihi",
    Description: "glg",
    Status: "Stuck",
    Priority: "low",
  },
  {
    Title: "hyhy",
    Description: "aaaaa",
    Status: "Done",
    Priority: "low",
  },
];
//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
const render = () => {
  let TodoContainer = "";
  let InprogressContainer = "";
  let StuckContainer = "";
  let DoneContainer = "";

  const filteredTodo = boxArray.filter((el, i) => el.Status === "To do");
  const filteredInprogress = boxArray.filter(
    (el, i) => el.Status === "In progress"
  );
  const filteredStuck = boxArray.filter((el, i) => el.Status === "Stuck");
  const filteredDone = boxArray.filter((el, i) => el.Status === "Done");

  filteredTodo.forEach((el, i) => {
    TodoContainer += `
            <div
              class="box2"
              draggable="true"
              ondragstart="drag(event)"
              id="box-1"
            >
                <div class="check" >
                  <i class="fa-solid fa-check"></i>
                </div>  
              <div class="between-box"   id="box-${el.Title + i}"> 
                <h3 class="h3">${el.Title}</h3>
                <h4 class="h4">${el.Description}</h4>
                <button class="low">${el.Priority}</button>
              </div> 
              <div class="check-b">
                <div class="check2">
                  <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="check2">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
              </div>
          </div>          
     `;
  });

  filteredInprogress.forEach((el, i) => {
    InprogressContainer += `
          <div
            class="box2"
            draggable="true"
            ondragstart="drag(event)"
            id="box-2"
          >
            <div class="check" >
              <i class="fa-solid fa-check"></i>
            </div> 
            <div class="between-box"  id="box-${el.Title + i}">       
              <h3 class="h3">${el.Title}</h3>
              <h4 class="h4">${el.Description}</h4>
              <button class="low">${el.Priority}</button>
            </div>
            <div class="check-b">
              <div class="check2">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="check2">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
          </div>
            `;
  });

  filteredStuck.forEach((el, i) => {
    StuckContainer += `
          <div
            class="box2"
            draggable="true"
            ondragstart="drag(event)"
            id="box-3"
          >
            <div class="check" >
              <i class="fa-solid fa-check"></i>
            </div> 
            <div class="between-box"  id="box-${el.Title + i}">
              <h3 class="h3">${el.Title}</h3>
              <h4 class="h4">${el.Description}</h4>
              <button class="low">${el.Priority}</button>
            </div>
            <div class="check-b">
              <div class="check2">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="check2">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
          </div>
             `;
  });

  filteredDone.forEach((el, i) => {
    DoneContainer += `
          <div
            class="box2"
            draggable="true"
            ondragstart="drag(event)"
            id="box-4"
          >
              <div class="check" >
                <i class="fa-solid fa-check"></i>
              </div>
            <div class="between-box"  id="box-${el.Title + i}">
              <h3 class="h3">${el.Title}</h3>
              <h4 class="h4">${el.Description}</h4>   
              <button class="low">${el.Priority}</button>
            </div>
            <div class="check-b">
              <div class="check2">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="check2">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
          </div>
            `;
  });
  document.getElementById("container-1").innerHTML = TodoContainer;
  document.getElementById("container-2").innerHTML = InprogressContainer;
  document.getElementById("container-3").innerHTML = StuckContainer;
  document.getElementById("container-4").innerHTML = DoneContainer;
};
render();
//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
function addTodo() {
  const titleInputValue = document.getElementById("title-input").value;
  const descriptionInputValue =
    document.getElementById("description-input").value;
  const statusInputValue = document.getElementById("status-input").value;
  const priorityInputValue = document.getElementById("priority-input").value;

  const inputObj = {
    Title: titleInputValue,
    Description: descriptionInputValue,
    Status: statusInputValue,
    Priority: priorityInputValue,
  };
  boxArray.push(inputObj);
  console.log(boxArray);
  render();
}
//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
  event.preventDefault();
  const boxId = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(boxId));
}
//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
function show() {
  document.getElementsByClassName("modalcontainer")[0].classList.add("show");
}
const modalcontainer = document.getElementsByClassName("modalcontainer")[0];
window.onclick = function (event) {
  console.log(event.target);
  if (event.target == modalcontainer) {
    console.log(event.target, " ", modalcontainer);
    modalcontainer.classList.remove("show");
  }
};
//🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
const checkEl = document.getElementsByClassName("check")[0];
const containerEl = document.getElementById("container-4");
const boxZu = document.getElementsByClassName("box2")[0];

const addclick = () => {
  containerEl.appendChild(boxZu);
};
checkEl.addEventListener("click", addclick);
