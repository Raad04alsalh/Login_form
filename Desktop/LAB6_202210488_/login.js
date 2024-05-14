
        let attempt = 3;
        function valid_login(){
            var username = document.getElementById("_userName").value;
            var Password = document.getElementById("_password").value;
            if(username == "ra'ad128" && Password=="1234"){
                alert("Login successfully");
                window.location="sucsses.html";
                return false;
            }else{
                attempt--;
                alert("You have left " + attempt +" attempt");
                if(attempt == 0){
                    document.getElementById("_userName").disabled = true;
                    document.getElementById("_password").disabled = true;
                    return false;
                }
            }
        }