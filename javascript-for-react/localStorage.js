// localStorage.js

const handleAddToStorage = () => {
  const name = document.getElementById("name").value;
  //   const email = document.getElementById("email").value;
  const id = document.getElementById("id").value;

  //   console.log(name);

  localStorage.setItem("name", name);
  //   localStorage.setItem("email", email);
  localStorage.setItem("id", id);

  const data = { id, name };
  localStorage.setItem(id, JSON.stringify(data));
};

const getFromStorage = localStorage.getItem("id");
console.log(getFromStorage);
const data = JSON.parse(localStorage.getItem(getFromStorage));
console.log(data);


// clear local storage
const clearLocalStorage = () => {
  localStorage.clear();
};
