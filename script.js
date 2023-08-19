
const students = []; 
let id= 1;
let addingPossible = true;
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addStudent);
displayStudents(students,);
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
        degreeText.style.marginTop="10px"
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


const searchInput = document.getElementById('searchContainer');
searchInput.addEventListener('input',function(){
    filterData();
})

function resetData(){
    displayStudents(students);
    searchInput.value = "";
    
}
function filterData(){
    let inputValue = document.getElementById('searchContainer').value;
    const regexPattern = new RegExp(`${inputValue}`,"i");
    let filteredData = [];
    for(let i = 0;i<students.length;i++){
        const currStudentValue= students[i];
        if(regexPattern.test(currStudentValue.name) || regexPattern.test(currStudentValue.email) || regexPattern.test(currStudentValue.degree)){
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
   submitButton.innerText = "Modify Student";
   addingPossible=false;
   submitButton.addEventListener('click',function(event){
    event.preventDefault();
     modifyStudent(studentToBeEdited.ID);
     submitButton.innerText = "Add Student";
     formData.reset();
     addingPossible= true;
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
    displayStudents(students);
}