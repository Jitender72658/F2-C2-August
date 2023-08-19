
const students = []; 
let id= 1;
let addingPossible = true;
displayStudents(students);
function addStudent(){
    if(!addingPossible){
         displayStudents(students);
         return;
    }
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
        degreeText.style.marginTop="9px"
        degreeText.innerText=currStudentData.degree;

        let modificationButtonDiv = document.createElement("div");
        modificationButtonDiv.innerHTML=
               `<button class="delete-button"><img src="./Images/editLogo.svg" height="16" onclick="editStudent(${currStudentData.ID})"></img></button>
                <button class="delete-button"><img src="./Images/trashLogo.svg" height="16" onclick="deleteStudent(${currStudentData.ID})"></img></button>`;
         degreeDiv.appendChild(degreeText);
         degreeDiv.appendChild(modificationButtonDiv);
         tableDataDegree.appendChild(degreeDiv);
         degreeDiv.style.display="flex";
         degreeDiv.style.justifyContent="space-between";
         degreeDiv.style.alignItems="center";


         tableRow.appendChild(tableDataId);
         tableRow.appendChild(tableDataName);
         tableRow.appendChild(tableDataEmail);
         tableRow.appendChild(tableDataAge);
         tableRow.appendChild(tableDataGpa);
         tableRow.appendChild(tableDataDegree);
         tableBody.appendChild(tableRow);
    }

}

function resetData(){
    console.log("data reseted successfully");
    displayStudents(students);
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('keydown',function(){
    filterData();
})
function filterData(){
    let searchValue = document.getElementById('search').value.toLowerCase();
    let filteredData = [];
    for(let i = 0;i<students.length;i++){
        const currStudentValue= students[i];
        if(currStudentValue.name.toLowerCase()==searchValue || currStudentValue.degree.toLowerCase()==searchValue || currStudentValue.email.toLowerCase()== searchValue){
            filteredData.push(currStudentValue);
        }
    }
    displayStudents(filteredData);
}

function deleteStudent(deleteId){
    for(let i = 0;i<students.length;i++){
        const currStudentValue = students[i];
        if(currStudentValue.ID==deleteId){
            students.splice(i,1);
            break;
        }
    }
    displayStudents(students);
}

function editStudent(editId){
    let studentToBeEdited;
    for(let i = 0;i<students.length;i++){
        const currStudentValue = students[i];
        if(currStudentValue.ID==editId){
            studentToBeEdited = currStudentValue;
            break;
        }
    }
   let formData = document.getElementById("form");
   document.getElementById('name').value = studentToBeEdited.name;
   document.getElementById('email').value = studentToBeEdited.email;
   document.getElementById('age').value = studentToBeEdited.age;
   document.getElementById('gpa').value = studentToBeEdited.grade;
   document.getElementById('degree').value = studentToBeEdited.degree;  
   const submitButton = document.getElementById('submitButton');
   submitButton.innerText = "Modify Student";
   addingPossible=false;
   submitButton.addEventListener('onclick',function(){
     modifyStudent(studentToBeEdited.ID);
     submitButton.innerText = "Add Student";
     addingPossible= true;
     displayStudents(students);
   })
}

function modifyStudent(modifyId){
    let modifiedStudent;
    for(let i = 0;i<students.length;i++){
        const currStudentValue = students[i];
        if(currStudentValue.ID==modifyId){
            modifiedStudent = currStudentValue;
            break;
        }
    }
    modifiedStudent["ID"] = modifyId;
    modifiedStudent["name"] = document.getElementById('name').value;
    modifiedStudent["email"] = document.getElementById('email').value;
    modifiedStudent["age"] = document.getElementById('age').value;
    modifiedStudent["grade"] = document.getElementById('gpa').value;
    modifiedStudent["degree"] =document.getElementById('degree').value;
    console.log(modifiedStudent);
}