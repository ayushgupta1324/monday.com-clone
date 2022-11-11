
let form = document.querySelector("form")
form.addEventListener("submit",createPost)
const getData=async()=>{
    try{
    let res =await fetch(`https://mysterious-sands-06936.herokuapp.com/posts`)
    let data=await res.json()
    console.log(data)
    append(data)
    }catch(error){
        console.log(error)
    }
    }
    function append(data){

        data.forEach((el)=>{
         let row=document.createElement("tr")
 
         let td1=document.createElement("td")
         td1.innerText= el.id
         td2=document.createElement("td")
         td2.innerText=el.name
         td6=document.createElement("td")
         td6.innerText=el.department
         td3=document.createElement("td")
         td3.innerText=el.task
         td4=document.createElement("td")
         td4.innerText=el.status
         if(el.status=="working on it"){
            td4.style.background="coral"
         }else if(el.status=="stuck"){
            td4.style.background="crimson"
         }else{
            td4.style.background="green"
         }
         td5=document.createElement("td")
         td5.innerText=el.date
 
  row.append(td1,td2,td6,td3,td4,td5,)
  document.querySelector("tbody").append(row)
        })
     }
     getData()

    
     
async function  createPost(event){
    event.preventDefault()

    let id=document.getElementById("id").value 
    let name=document.getElementById("name").value 
    let department=document.getElementById("department").value
    let task=document.getElementById("task").value 
    let status=document.getElementById("status").value
    let date =document.getElementById("date").value

   let send_this_data={
    id,
    name,
    department,
    task,
    status,
    date
   };



   let res=  await fetch('https://mysterious-sands-06936.herokuapp.com/posts',{
    method:'POST',
    body:JSON.stringify(send_this_data),
    headers :{
        'Content-Type':'application/json',
    
    }
   })
   location. reload('index.html')
}




   