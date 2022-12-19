//CRIANDO PARÁGRAFOS DE ERRO
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
//forEach EM CADA UM DOS PARÁGRAFOS PARA INSERIR O ESTILO PARA CADA PARÁGRAFO
error.forEach(err => {
  err.style.color = "red"
  err.style.textAlign = "end"
  err.style.fontSize = ".7rem"
  err.style.position = "relative"
  err.style.top = "-10px"
  err.style.height = "5px"
})

//CRIANDO SPAN PARA INSERIR IMAGEM SVG DE ERRO
const imgErrorFirstName = document.createElement("span")
const imgErrorLastName = document.createElement("span")
const imgErrorEmail = document.createElement("span")
const imgErrorPassword = document.createElement("span")
const imgError = [
  imgErrorFirstName,
  imgErrorLastName,
  imgErrorEmail,
  imgErrorPassword
]

//forEach EM CADA UM DOS SPANS PARA INSERIR A IMAGEM PARA CADA SPAN
imgError.forEach(err => {
  err.style.background = "url('./images/icon-error.svg')"
  err.style.width = "24px"
  err.style.height = "24px"
  err.style.position = "absolute"
  err.style.top = "-43px"
  err.style.right = "20px"
})

//EVENTOS QUE SERÃO USADOS NA VALIDAÇÃO DO FORM
const events = ["blur", "keyup"]

//VALIDAÇÃO DO FORM
events.forEach(event => {
  /*VALIDAÇÃO DO FIRST NAME*/ 
  const firstName = document.getElementById("name")
  firstName.addEventListener(event, () => {
    if(firstName.value === "") {
      //PARÁGRAFO DE ERRO
      errorFirstName.innerText = "First Name cannot b empty"
      firstName.insertAdjacentElement("afterend", errorFirstName)

      //INSERINDO IMAGEM SVG DE ERRO
      errorFirstName.insertAdjacentElement("afterbegin", imgErrorFirstName)

      //BORDA DO INPUT VERMELHO
      firstName.style.border = "2px solid red"
    } else {
      //RETIRANDO ELEMENTOS DE ERRO
      errorFirstName.innerText = ""
      firstName.style.border = "1px solid hsl(246, 12%, 86%)"
    }
  })

  /*VALIDAÇÃO DO LAST NAME*/
  const lastName = document.getElementById("surname")
  lastName.addEventListener(event, () => {
    if(lastName.value === "") {
      //PARÁGRAFO DE ERRO
      errorLastName.innerText = "First Name cannot b empty"
      lastName.insertAdjacentElement("afterend", errorLastName)

      //INSERINDO IMAGEM SVG DE ERRO
      errorLastName.insertAdjacentElement("afterbegin", imgErrorLastName)

      //BORDA DO INPUT VERMELHO
      lastName.style.border = "2px solid red"
    } else {
      //RETIRANDO ELEMENTOS DE ERRO
      errorLastName.innerText = ""
      lastName.style.border = "1px solid hsl(246, 12%, 86%)"
      lastName.style.color = "hsl(249, 10%, 26%) "
    }
  })

  //VALIDAÇÃO DO EMAIL
  const email = document.getElementById("email")
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  email.addEventListener(event, () => {
    if(!email.value.match(emailRegex)) {
      //INSERINDO PARÁGRAFO DE ERRO
      errorEmail.innerText = "looks like this is not an email"
      email.insertAdjacentElement("afterend", errorEmail)

      //INSERINDO IMAGEM SVG DE ERRO
      errorEmail.insertAdjacentElement("afterbegin", imgErrorEmail)

      //BORDA E COLOR DO INPUT VERMELHO
      email.style.border = "2px solid red"
      email.style.color = "red"
    } else {
      //RETIRANDO ELEMENTOS DE ERRO
      errorEmail.innerText = ""
      email.style.border = "1px solid hsl(246, 12%, 86%)"
      email.style.color = "hsl(249, 10%, 26%) "
    }
  })

  /*VALIDAÇÃO DO PASSWORD*/
  const password = document.getElementById("password")
  const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  password.addEventListener(event, () => {
    if(!password.value.match(passwordRegex)) {
      //PARÁGRAFO DE ERRO
      errorPassword.innerText = "Enter a strong password"
      password.insertAdjacentElement("afterend", errorPassword)

      //INSERINDO IMAGEM SVG DE ERRO
      errorPassword.insertAdjacentElement("afterbegin", imgErrorPassword)

      //BORDA E COLOR DO INPUT VERMELHO
      password.style.border = "2px solid red"
      password.style.color = "red"
    } else {
      //RETIRANDO ELEMENTOS DE ERRO
      errorPassword.innerText = ""
      password.style.border = "1px solid hsl(246, 12%, 86%)"
      password.style.color = "hsl(249, 10%, 26%) "
    }
  })
})