function fetchFromStorage() {
  return localStorage.getItem("problemData") == null
    ? []
    : JSON.parse(localStorage.getItem("problemData"));
}

function updateStorage(data) {
  localStorage.setItem("problemData", JSON.stringify(data));
}
export {fetchFromStorage, updateStorage };
