function fetchFromStorage() {
  return localStorage.getItem("problemData") == null
    ? []
    : JSON.parse(localStorage.getItem("problemData"));
}

function updateStorage(data) {
  localStorage.setItem("problemData", JSON.stringify(data));
  location.reload();
}

function saveData(e) {
  const hero = e.currentTarget.parentElement.parentElement;
  const prblmTitleInput = hero.querySelector("#prblm-title-input");
  const data = fetchFromStorage();

  data.unshift({
    id: Math.random(),
    title: prblmTitleInput.value,
    link: "https://google.com",
  });
  prblmTitleInput.value = "";
  updateStorage(data);
}

function clearData(e) {
  localStorage.clear("problemData");
  location.reload();
}

//code this functionality
function editCard(e) {
  console.log(e.currentTarget.parentElement.parentElement);
  console.log("Edit !!");
}

function deleteCard(e) {
  const cardDIV = e.currentTarget.parentElement.parentElement;
  const divId = Number(cardDIV.getAttribute("id"));
  console.log(typeof divId, divId);
  const data = fetchFromStorage();

  let dataIdx = -1;
  data.filter((item, idx) => {
    if (item.id === divId) {
      dataIdx = idx;
    }
    return item;
  });

  data.splice(dataIdx, 1);
  updateStorage(data);
}

export {
  saveData,
  clearData,
  editCard,
  deleteCard,
  fetchFromStorage,
  updateStorage,
};
