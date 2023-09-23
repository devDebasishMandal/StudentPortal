import { data } from "./data.js";
let name,id,gender,classN,marks,email,passing,found;
const table = document.querySelector(".table-body");
let don = document.querySelector(".search");

// let clicked="dom";

don.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);
    found = event.target.name.value;
   clicked="mod";
   data.forEach((element) => {
    let fn = element.first_name;
    let ln = element.last_name;
    let em = element.email;
    fn = fn.toLowerCase();
    ln = ln.toLowerCase();
    found = name.toLowerCase();
    if (name == fn || name == ln || name == em) {
      let table_row = document.createElement("tr");
      let passing = 0;
      if (element.passing == true) {
        passing = "Passed";
      } else {
        passing = "Failed";
      }
      table_row.innerHTML = `<td>${element.id}</td> <td>${element.name}</td> <td>${element.gender}</td> <td>${element.class}</td><td>${element.marks}</td><td>${passing}</td> <td>${element.email}</td>`;
      table.appendChild(table_row);
    }
  });
  });

for (let i = 0; i <= data.length; i++) {
  let table_row = document.createElement("tr");
  // if()
  for (let j = 1; j < 7; j++) {
    let fname=data[i].first_name;
    let lname=data[i].last_name;
     name = fname+" "+lname;
     id = data[i].id;
     gender = data[i].gender;
     classN = data[i].class;
     marks = data[i].marks;
     email = data[i].email;
     passing = 0;
    if (data[i].passing == true) {
      passing = "Passed";
    } else {
      passing = "Failed";
    }
    table_row.innerHTML = `<td>${id}</td> <td>${name}</td> <td>${gender}</td> <td>${classN}</td><td>${marks}</td><td>${passing}</td> <td>${email}</td>`;
  }
  table.appendChild(table_row);
}


