const errorFirstName = document.createElement("p")
const errorLastName = document.createElement("p")
const errorEmail = document.createElement("p")
const errorPassword = document.createElement("p")
const error = [
  errorFirstName,
  errorLastName, 
  errorEmail, 
  errorPassword
]

error.forEach(err => {
  err.style.color = "red"
  err.style.textAlign = "end"
  err.style.fontSize = ".7rem"
  err.style.position = "relative"
  err.style.top = "-10px"
  err.style.height = "5px"
})

const events = ["blur", "keyup"]
events.forEach(event => {
  /*VALIDAÇÃO DO FIRST NAME*/ 
  const firstName = document.getElementById("name")
  firstName.addEventListener(event, () => {
    if(firstName.value === "") {
      errorFirstName.innerText = "First Name cannot b empty"
      firstName.insertAdjacentElement("afterend", errorFirstName)
    } else {
      errorFirstName.innerText = ""
    }
  })

  /*VALIDAÇÃO DO LAST NAME*/
  const lastName = document.getElementById("surname")
  lastName.addEventListener(event, () => {
    if(lastName.value === "") {
      errorLastName.innerText = "First Name cannot b empty"
      lastName.insertAdjacentElement("afterend", errorLastName)
    } else {
      errorLastName.innerText = ""
    }
  })

  const email = document.getElementById("email")
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  email.addEventListener(event, () => {
    if(!email.value.match(emailRegex)) {
      errorEmail.innerText = "looks like this is not an email"
      email.insertAdjacentElement("afterend", errorEmail)
    } else {
      errorEmail.innerText = ""
    }
  })

  /*VALIDAÇÃO DO PASSWORD*/
  const password = document.getElementById("password")
  const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  password.addEventListener(event, () => {
    if(!password.value.match(passwordRegex)) {
      errorPassword.innerText = "Enter a strong password"
      password.insertAdjacentElement("afterend", errorPassword)
    } else {
      errorPassword.innerText = ""
    }
  })
})