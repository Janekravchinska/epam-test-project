autocomplete(document.getElementById("myInput"), availableName);

function autocomplete(inputResult, possibleValues) {
  inputResult.addEventListener("input", function (e) {
    const { value } = inputResult;

    closeList();

    if (!value) return false;

    const a = document.createElement("div");
    a.setAttribute("id", "autocomplete-items");

    this.parentNode.appendChild(a);

    for (let possibleValue of possibleValues) {

      if (possibleValue.toLowerCase().startsWith(value.toLowerCase())) {
        const b = document.createElement("div");
        b.innerHTML += possibleValue;
        b.innerHTML += <input type=hidden value=${possibleValue}>;
        b.addEventListener("click", function (e) {
          inputResult.value = this.getElementsByTagName("input")[0].value;
          closeList();
        });
        a.appendChild(b);
      }
    }
  });
}

function closeList() {
  const list = document.getElementById("autocomplete-items");
  if (list) list.parentNode.removeChild(list);
}