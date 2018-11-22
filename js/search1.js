function autocomplete(inputResult, possibleValues) {
  /*получаем на вход значение в инпуте и список возможных результатов*/
  var currentFocus;
  /*выполняет функцию во время письма в поле инпута*/
  inputResult.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*закрываем уже сформированый список возможных значений*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      //Создаем елемент включающий воможные варианты имен.
      a = document.createElement("div");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
     
      this.parentNode.appendChild(a);
      
      for (i = 0; i < possibleValues.length; i++) {
        
        if (possibleValues[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*создаем елемент для каждого совпадения*/
          b = document.createElement("div");
          b.innerHTML = "<strong>" + possibleValues[i].substr(0, val.length) + "</strong>";
          b.innerHTML += possibleValues[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + possibleValues[i] + "'>";
          b.addEventListener("click", function(e) {
              inputResult.value = this.getElementsByTagName("input")[0].value;
        
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  
  function addActive(x) {
    if (!x) return false;
    removeActive(x);

    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);

    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inputResult) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*Масив содержащий имена для автодополнения*/
const availableName = [   
  "Екатерина", 
  "Алиса",   
  "Елизавета",  
  "Марк", 
  "Роман", 
  "Михаил", 
  "Анастасия", 
  "София", 
  "Анна", 
  "Мария", 
  "Виктория", 
  "Полина", 
  "Вероника", 
  "Ева", 
  "Злата", 
  "Милана", 
  "Соломия", 
  "Артем", 
  "Максим", 
  "Александр", 
  "Дмитрий", 
  "Владислав", 
  "Матвей", 
  "Иван", 
  "Андрей", 
  "Илья", 
  "Назар",
  "Тимофей",
  "Антон",
  "Николай",
  "Богдан", 
  "Тарас", 
  "Сергей", 
  "Вячеслав", 
  "Юлия", 
  "Евгения", 
  "Антонина", 
  "Елена", 
  "Ольга", 
  "Оксана", 
  "Яна", 
  "Кристина", 
  "Тамара", 
  "Нина", 
  "Галина", 
  "Лидия",
  "Йосиф",
  "Цветозар",
  "Йелек",
  "Уберто",
  "Шальдо",
  "Жанна",
  "Юлиан"

];


autocomplete(document.getElementById("myInput"), availableName);
