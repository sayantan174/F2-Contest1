let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const result = arr.filter((e) => {
    return e.profession == "developer";
  });
  console.log(
    result.map((e) => {
      return e.name;
    })
  );
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e) => {
    if (e.profession == "developer") console.log(e.name);
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  arr.forEach((e) => {
    console.log(e.name);
  });
}

function removeAdmin() {
  //Write your code here, just console.log
  console.log(
    arr.filter((e) => {
      return e.profession != "admin";
    })
  );
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "raj", age: "34", profession: "manager" },
    { id: 5, name: "raju", age: "36", profession: "executive" },
    { id: 6, name: "ram", age: "45", profession: "teacher" },
  ];
  const result = arr.concat(arr2);
  console.log(result);
}
