
let data;
let details_button = document.querySelector(".details-button");
details_button.onclick =async () => {
    let res = await fetch("https://mysterious-sands-06936.herokuapp.com/posts")
    data = await res.json();

    append(data)
    performOperations(data);
}

function append(data)
{

    let details_div = document.querySelector(".details-wrapper");
    details_div.innerHTML=null;

    
    
    data.forEach(element => {
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
            status_name.style.backgroundColor = "coral"
            employee_div.style.border="1px solid coral";
        }
        else if(status_name.innerText == "Done")
        {
            status_name.style.backgroundColor = "green"
            employee_div.style.border="1px solid green";
        }
        else
        {
            status_name.style.backgroundColor = "crimson";
            employee_div.style.border="1px solid crimson";
        }

        let date_added = document.createElement("p");
        date_added.innerText = element.date;

        let department = document.createElement("p");
        department.innerText = element.department;

       
        employee_div.append(employee_name,task_name,status_name,department,date_added)        
        details_div.append(employee_div);
    });
}


function performOperations(data)
{
var myParent = document.body;
let array = []
data.forEach(el=>{
    let name = el.name;
    array.push(name)
})


//Create array of options to be added

//Create and append select list
var selectList = document.createElement("select");
selectList.id = "mySelect";
myParent.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
}
selectList.addEventListener("change", function(){
    showResult(selectList.value)
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

