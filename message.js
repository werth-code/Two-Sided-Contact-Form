const form = document.getElementById("myForm"),
      names = document.getElementById("name"),
      email = document.getElementById("email"),
      message = document.getElementById("message")
      
let para = document.getElementById("formSubmit")

function clearFields() {
    form.reset()
}

function Message(name, email, message) {
    this.name = name
    this.email = email
    this.message = message
}

form.addEventListener("submit", e => {
    e.preventDefault()
    formData = new Message(names.value, email.value, message.value)
    para.textContent = `Thanks ${names.value}! We will get back to you soon!`
    clearFields()
    console.log(formData)
})