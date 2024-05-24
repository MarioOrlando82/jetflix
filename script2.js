document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let inputNameValue = document.getElementById("name").value;
    let inputPasswordValue = document.getElementById("password").value;

    if(inputNameValue == ""){
        document.getElementById("nameValidation").innerText = "Name cannot be blank";
        return false;
    }else if(inputNameValue.length < 4){
        document.getElementById("nameValidation").innerText = "Name must contain more than 3 characters";
        return false;
    }else{
        document.getElementById("nameValidation").innerText = "Valid Name";
    }

    if (inputPasswordValue == "") {
        document.getElementById("passwordValidation").innerText = "Password cannot be blank";
        return false;
    } else if (inputPasswordValue.length < 9) {
        document.getElementById("passwordValidation").innerText = "Password must contain more than 8 characters";
        return false;
    } else if (!validatePassword(inputPasswordValue)) {
        document.getElementById("passwordValidation").innerText = "Password must have 1 uppercase, 1 lowercase, and 1 digit";
        return false;
    } else {
        document.getElementById("passwordValidation").innerText = "Valid Password";
    }
    
    document.getElementById("nameValidation").innerText = "";
    document.getElementById("passwordValidation").innerText = "";

    document.getElementById("form").reset();
    alert("You are logged in!");
    window.location.href = "movies.html";
    return true;
});

function validatePassword(password){
    let upperCase = false;
    let lowerCase = false;
    let digit = false;
    for(let i = 0; i < password.length; i++){
        let pass = password.charAt(i);
        if(pass >= "A" && pass <= "Z"){
            upperCase = true;
        }else if (pass >= "a" && pass <= "z"){
            lowerCase = true;
        }else if (pass >= "0" && pass <= "9"){
            digit = true;
        }
    }
    return upperCase && lowerCase && digit;
}
