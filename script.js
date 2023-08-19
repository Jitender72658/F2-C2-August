
const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree:'Arts',
      email: 'charlie@example.com'
    }
  ]; 
displayStudents(students);
let id= 4;
function addStudent(){
    console.log("hello");
    let formData = document.getElementById("form");
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let gpa = document.getElementById('gpa').value;
    let degree = document.getElementById('degree').value;

    let currStudent= {};
    currStudent["ID"] = id;
    currStudent["name"] = name;
    currStudent["email"] = email;
    currStudent["age"] = age;
    currStudent["grade"] = gpa;
    currStudent["degree"] = degree;
    students.push(currStudent);
    id++;
    formData.reset();
    displayStudents(students);
}
function displayStudents(studentData){
    const tableValues = document.getElementById("table");
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    for(let i = 0;i<studentData.length;i++){
        let currStudentData = studentData[i];

        let tableRow = document.createElement("tr");
        let tableDataId= document.createElement('td');
        tableDataId.innerText=currStudentData.ID;
        let tableDataName= document.createElement('td');
        tableDataName.innerText=currStudentData.name;
        let tableDataEmail= document.createElement('td');
        tableDataEmail.innerText=currStudentData.email;
        let tableDataAge= document.createElement('td');
        tableDataAge.innerText=currStudentData.age;
        let tableDataGpa= document.createElement('td');
        tableDataGpa.innerText=currStudentData.grade;

        let tableDataDegree = document.createElement('td');
        let degreeDiv = document.createElement('div');
        let degreeText= document.createElement('p');
        degreeText.innerText=currStudentData.degree;
        let editbutton = document.createElement('button');
        //editbutton.innerHTML="&#9998";
        editbutton.style.background="yellow";
        editbutton.style.color="green";
        editbutton.style.border="none";

         let editButtonLogo = "./Images/editButton";
         editbutton.style.backgroundImage=`url('${editButtonLogo}')`;
         let deleteButton = document.createElement("button");
         deleteButton.innerHTML="&#9998";
         degreeDiv.appendChild(degreeText);
         degreeDiv.appendChild(editbutton);
         degreeDiv.appendChild(deleteButton);
         tableDataDegree.appendChild(degreeDiv);
         degreeDiv.style.display="flex";
         degreeDiv.style.justifyContent="space-around"


         tableRow.appendChild(tableDataId);
         tableRow.appendChild(tableDataName);
         tableRow.appendChild(tableDataEmail);
         tableRow.appendChild(tableDataAge);
         tableRow.appendChild(tableDataGpa);
         tableRow.appendChild(tableDataDegree);
         tableBody.appendChild(tableRow);
    }

}