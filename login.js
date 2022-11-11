let form = document.querySelector("form")


form.addEventListener('submit',checkData)


function checkData(event) {
    event.preventDefault();
    
    
    
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value
    let user = JSON.parse(localStorage.getItem("user_details")) || []
    user.forEach((el) =>{

        if(mail == el.mail) {
            if(password == el.password_file){
                alert("Login succesfull")
            }
            else{
                alert("Wrong credential")
            }
        }
        else{
            alert("You are not Registered")

        }

    })

}

