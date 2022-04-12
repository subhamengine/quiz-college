const resultBox = document.querySelector(".result-box");
resultBox.classList.add("non-display");
var submit = document.querySelector(".sub");

var roll = document.querySelector(".roll");
var batch = document.querySelector(".batch");
const res = document.querySelector(".result");
var list = localStorage.getItem("list");
if (!list) {
  var list = new Array(250);
  for (var i = 0; i < 250; i++) {
    list[i] = 0;
  }
} else {
  console.log(typeof list);
  console.log(list);
  list = list.split(",");
  for (let k = 0; k < list.length; k++) {
    list[k] = parseInt(list[k]);
  }
  console.log(typeof list);
  //  list = list.replace(/,/g, '');
  //   console.log(list);
}
console.log(list);
console.log(list[1]);
console.log(list[2]);
console.log(list[5]);
console.log(typeof list);

var batch1 = 0,
  batch2 = 0;

submit.addEventListener("click", () => {
  // alert(list.length);
  list[roll.value - 1]++;
  if (batch.value == 1) {
    batch1++;
  } else if (batch.value == 2) {
    batch2++;
  }
  roll.value = "";
  batch.value = "";

  localStorage.setItem("list", list);

  displayscore();
});

download = () => {
  download = () => {
    // const rows = [95, 95, 16, 9, 59, 52, 6, 54, 52, 65, 9, 52, 6, 9];

    let csvContent = "data:text/csv;charset=utf-8," + list.join("\n");

    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  };
};

displayscore = () => {
  let prevtable = document.querySelector("table");
  if (prevtable) {
    prevtable.remove();
  }

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  // Adding the entire table to the body tag
  document.getElementById("scoreboard").appendChild(table);

  // Creating and adding data to first row of the table
  let row_1h = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Roll _______";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Score";

  row_1h.appendChild(heading_1);
  row_1h.appendChild(heading_2);
  thead.appendChild(row_1h);

  for (let i = 0; i < list.length; i++) {
    let row_i = document.createElement("tr");
    let row_i_data_1 = document.createElement("td");
    row_i_data_1.innerHTML = i + 1;
    let row_i_data_2 = document.createElement("td");
    row_i_data_2.innerHTML = list[i];

    row_i.appendChild(row_i_data_1);
    row_i.appendChild(row_i_data_2);
    tbody.appendChild(row_i);
  }
};

const clearData = () => {
  for (var i = 0; i < 250; i++) {
    list[i] = 0;
  }
  localStorage.setItem("list", list);
  displayscore();
};


displayscore();
