const store = [];

const createApp = () => {
  return `<div class="main-container">
      <form action="">
        <input id="create-input" type="text" placeholder="enter todo" value="" />
        <button id="create-btn">create Todo</button>
      </form>
      <div class="results-container"></div>
    </div>`;
};

const markCompleted = (event) => {
  console.log(event.target.id);
};

const createToDo = (event) => {
  event.preventDefault();
  const results = document.getElementsByClassName("results-container")[0];
  let inputValue = document.getElementById("create-input");
  results.innerHTML += `<div class="toDoListContainer">
        <input type="text" class="todoLabel" readonly  id=${inputValue.value} value=${inputValue.value}></input>
        <button class="del-btn">del</button>
         <button class="edit-btn">edit</button>
          <button class="compl-btn" id=${inputValue.value}>compl</button>

    </div>`;

  let completedBtnList = document.getElementsByClassName("compl-btn");
  completedBtnList = Array.from(completedBtnList);
  completedBtnList.forEach((btn) => {
    btn.addEventListener("click", markCompleted);
  });
  inputValue.value = "";
  inputValue.focus();
};

const root = document.getElementById("root");
root.innerHTML = createApp();

const createToDoBtn = document.getElementById("create-btn");
createToDoBtn.addEventListener("click", createToDo);
