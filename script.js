function emailVerification() {
    let email = document.forms["emailForm"]["email"].value;
    alert(email)

    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.match(emailRegex)) {
        alert("You've matched our email criteria")
    } else {
        alert("Please enter a valid email")
    }
}


// /^([^0-9]*)$/  - Doe not allow numbers
// /^[a-z]*$/ - lowercase only

// In the format of <f>.<last>@<org_name>.email where <f> is the first letter of the first name.
// No numbers allowed
// No uppercase letters allowed
// No symbols allowed (except one @)
