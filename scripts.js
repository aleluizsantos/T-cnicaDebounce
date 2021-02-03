// Função Debounce que executará a função passada apos um determinado tempo
const debounceEvent = (fn, wait = 1000, time) => (...args) =>
  clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

const filterUsers = async (name) =>
  fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${name}`
  ).then((res) => res.json());

function handleKeyUp(event) {
  var el = document.getElementById("result");

  filterUsers(event.target.value).then((users) => {
    //console.log(users.map((user) => user.name))
    el.innerHTML = users.map((user) => `<p>${user.name}</p>`);
  });
}

document
  .querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 500));
