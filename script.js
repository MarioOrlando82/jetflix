document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let inputNameValue = document.getElementById("name").value;
    let inputPasswordValue = document.getElementById("password").value;
    let inputCPasswordValue = document.getElementById("cpassword").value;
    let inputGenderValue = document.querySelector('input[name="gender"]:checked');
    let inputDOBValue = document.getElementById("dob").value;
    let inputTCValue = document.getElementById('tc').checked;

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

    if(inputCPasswordValue == ""){
        document.getElementById("cpasswordValidation").innerText = "Confirmation Password cannot be blank";
        return false;
    }else if(inputCPasswordValue != inputPasswordValue){
        document.getElementById("cpasswordValidation").innerText = "Your password and confirmation password do not match";
        return false;
    }else{
        document.getElementById("cpasswordValidation").innerText = "Valid Confirmation Password";
    }

    if(inputGenderValue == null){
        document.getElementById("genderValidation").innerText = "Please select your gender";
        return false;
    }else{
        document.getElementById("genderValidation").innerText = "Valid Gender";
    }

    if (inputDOBValue == "") {
        document.getElementById("dobValidation").innerText = "Date of Birth cannot be blank";
        return false;
    } else {
        document.getElementById("dobValidation").innerText = "Valid Date of Birth";
    }

    if (!inputTCValue) {
        document.getElementById("tcValidation").innerText = "Please accept the Terms and Conditions";
        return false;
    } else {
        document.getElementById("tcValidation").innerText = "Terms and Conditions accepted";
    }
    
    document.getElementById("nameValidation").innerText = "";
    document.getElementById("passwordValidation").innerText = "";
    document.getElementById("cpasswordValidation").innerText = "";
    document.getElementById("genderValidation").innerText = "";
    document.getElementById("dobValidation").innerText = "";
    document.getElementById("tcValidation").innerText = "";

    document.getElementById("form").reset();
    alert("Thank you for your registrasion!");
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
