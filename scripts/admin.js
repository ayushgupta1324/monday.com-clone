
let data;
let details_button = document.querySelector(".details-button");
details_button.onclick =async () => {
    let res = await fetch("https://mysterious-sands-06936.herokuapp.com/posts")
    data = await res.json();

    append(data)
    person_filter(data);
    status_filter(data);
}

function append(data)
{

    let details_div = document.querySelector(".details-wrapper");
    details_div.innerHTML=null;
    data.forEach(element => {

        if(element.id!=1)
        {
        let employee_div = document.createElement("div");
        employee_div.setAttribute("class", "employee_div")

        let employee_name = document.createElement("h5");
        employee_name.innerText = element.name;

        let task_name =document.createElement("p");
        task_name.innerText = element.task;

        let status_name = document.createElement("p");
        status_name.innerText = element.status;
        status_name.style.textAlign="center";
        status_name.style.color = "white";
        if(status_name.innerText == "working on it")
        {
            status_name.style.backgroundColor = "#FDAB3D"
            employee_div.style.border="3px solid #FDAB3D";
            employee_div.style.borderRadius="8px"
        }
        else if(status_name.innerText == "Done")
        {
            status_name.style.backgroundColor = "#00C875"
            employee_div.style.border="3px solid #00C875";
            employee_div.style.borderRadius="8px"
        }
        else
        {
            status_name.style.backgroundColor = "#E2445C";
            employee_div.style.border="3px solid #E2445C";
            employee_div.style.borderRadius="8px"
        }

        let date_added = document.createElement("p");
        date_added.innerText = element.date;

        let department = document.createElement("p");
        department.innerText = element.department;

       
        employee_div.append(employee_name,task_name,status_name,department,date_added)        
        details_div.append(employee_div);
    }
    });
    
}


function person_filter(data)
{
var person_filter_append = document.getElementById("person-filter-append");
person_filter_append.innerHTML=null;
let array = [];
let dropdown_name = new Set();

data.forEach(el=>{
    let name = el.name;
    
    if(!dropdown_name.has(el.name))
    {
        dropdown_name.add(el.name)
        array.push(name)
    }
})

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    if(array[i]!=undefined)
    {
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    } 
}
person_filter_append.appendChild(selectList);

selectList.addEventListener("change", function(){
    showResult(selectList.value)
})

}

function status_filter(data)
{
    var status_filter_append = document.getElementById("status-filter-append")
    status_filter_append.innerHTML=null;

    // var myParent = document.body;
let array = [];
const dropdown_status = new Set();
data.forEach(el=>{
    let status = el.status;
    
    if(!dropdown_status.has(el.status))
    {
        dropdown_status.add(el.status)
        array.push(status);
    }
})


//Create array of options to be added

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";



//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");

    if(array[i]!=undefined)
    {
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
    
}
status_filter_append.appendChild(selectList);


selectList.addEventListener("change", function(){
    status_filter_result(selectList.value)
})

}

function showResult(data_passed)
{
    let array_data=[];
    console.log(data_passed)
    data.forEach(el=>{
        if(el.name==data_passed)
        {
            array_data.push(el)
            console.log(el); 
        }})

        append(array_data)
}

function status_filter_result(data_passed)
{
    let array_data=[];
    console.log(data_passed)
    data.forEach(el=>{
        if(el.status==data_passed)
        {
            array_data.push(el)
            console.log(el); 
        }})

        append(array_data)
}
