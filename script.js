const formulario = document.querySelector("#formulario")

const nome = document.querySelector("#nome")
const numero = document.querySelector("#numero")
const email = document.querySelector("#email")

const resposta_nome = document.querySelector("#resposta_nome")
const resposta_numero = document.querySelector("#resposta_numero")
const resposta_email = document.querySelector("#resposta_email")

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()

    resposta_nome.textContent = `Nome: ${nome.value}`
    resposta_numero.textContent = `numero: ${numero.value}`
    resposta_email.textContent = `email: ${email.value}`

    const objeto_usuario = {
        name: nome.value,
        number: numero.value,
        mail: email.value
    }

    localStorage.setItem("user",JSON.stringify(objeto_usuario))
})

function buscarDados(){
   
    const dados_usuario = JSON.parse(localStorage.getItem("user"))  || {}

    resposta_nome.textContent = `Nome: ${dados_usuario.name}`
    resposta_numero.textContent = `numero: ${dados_usuario.number}`
    resposta_email.textContent = `email: ${dados_usuario.mail}`
}

buscarDados()
