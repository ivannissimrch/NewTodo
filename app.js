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
  const itemId = event.target.id.slice(3);
  const itemToMark = document.getElementById(itemId);
  itemToMark.classList.add("completed");
};

const deleteToDo = (event) => {
  const itemId = event.target.id.slice(3);
  console.log(itemId);
  const itemToDelete = document.getElementById(`container${itemId}`);
  itemToDelete.remove();
};

const editToDo = (event) => {
  const itemId = event.target.id.slice(4);
  const itemToEdit = document.getElementById(itemId);
  itemToEdit.readOnly = false;
  itemToEdit.focus();
  itemToEdit.classList.remove("completed");
};

const createToDo = (event) => {
  event.preventDefault();
  const results = document.getElementsByClassName("results-container")[0];
  let inputValue = document.getElementById("create-input");
  results.innerHTML += `<div class="toDoListContainer" id=container${inputValue.value}>
        <input type="text" class="todoLabel" readonly  id=${inputValue.value} value=${inputValue.value}></input>
        <button class="del-btn" id=del${inputValue.value}>del</button>
         <button class="edit-btn" id=edit${inputValue.value}>edit</button>
          <button class="compl-btn" id=btn${inputValue.value}>compl</button>

    </div>`;

  let completedBtnList = document.getElementsByClassName("compl-btn");
  completedBtnList = Array.from(completedBtnList);
  completedBtnList.forEach((btn) => {
    btn.addEventListener("click", markCompleted);
  });

  let deleteBtnList = document.getElementsByClassName("del-btn");
  deleteBtnList = Array.from(deleteBtnList);
  deleteBtnList.forEach((btn) => {
    btn.addEventListener("click", deleteToDo);
  });

  let editBtnList = document.getElementsByClassName("edit-btn");
  editBtnList = Array.from(editBtnList);
  editBtnList.forEach((btn) => {
    btn.addEventListener("click", editToDo);
  });

  inputValue.value = "";
  inputValue.focus();
};

const root = document.getElementById("root");
root.innerHTML = createApp();

const createToDoBtn = document.getElementById("create-btn");
createToDoBtn.addEventListener("click", createToDo);
