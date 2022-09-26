const fname = document.getElementById('fname')
const mname = document.getElementById('mname')
const lname = document.getElementById('lname')
const form= document.getElementById('form')
const errorElement= documet.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages=[]
    if (fname.value.length <=30 || fname.value == null){
        messages.push("Incorrect Input")
    }
    if(lname.value <=30 || lname.value == null){
messages.push("Incorect Input")
}

if (messages.length > 0){
  e.preventDefault()
}

})