const uri = "http://localhost:3000/todo"

const dado = JSON.parse(window.localStorage.getItem("dados")) || null

const nomeUsuario = document.querySelector("#nomeUsuario")

if (dado !== null) {
  nomeUsuario.innerHTML = dado.nome
  nomeUsuario.style.setProperty("letter-spacing", ".3rem")
} else {
  alert("Usuário não encontrado")
}

const addToDo = document.querySelector("#addToDo")

fetch(uri + "/user/" + dado.id, { method: "GET" })
  .then((resp) => resp.json(dado.id))
  .then((resp) => listarToDo(resp))
  .catch((err) => console.error(err))

addToDo.addEventListener("submit", (e) => {
  e.preventDefault()

  const content = {
    usuarioid: dado.id,
    description: addToDo.description.value,
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  }

  fetch(uri, options)
    .then((resp) => resp.status)
    .then((resp) => {
      if (resp == 201) window.location.reload()
      else alert("404")
    })
    .catch((err) => console.error(err))
})

function listarToDo(arr) {
  const divList = document.querySelector(".list")
  const divListFooter = document.querySelector(".list-footer")
  const counter = document.querySelector("#counter")

  divList.innerHTML = ""

  const itemsWithStatus1 = arr.filter((e) => e.status === 1);
  const itemsWithStatus0 = arr.filter((e) => e.status === 0);

  arr.forEach((e) => {
    const content = document.createElement("div")
    content.classList.add("todo-content")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "todo-checkbox"
    checkbox.setAttribute("onclick", `alterarStatus('${e.id}')`)

    const descriptionP = document.createElement("p")
    descriptionP.id = "todo-p"
    descriptionP.textContent = e.description

    if (e.status == 0) {
      checkbox.checked = true
      descriptionP.style.setProperty("text-decoration", "line-through")
    }

    content.appendChild(checkbox)
    content.appendChild(descriptionP)

    divList.appendChild(content)
  })

  counter.innerHTML = `${itemsWithStatus1.length} items left`;

  divList.appendChild(divListFooter)
}

function alterarStatus(i) {
  fetch(uri + "/" + i, { method: "PUT" }).then((resp) => resp.status)
  .then((resp) => {
    if (resp == 201) window.location.reload()
    else alert("404")
  })
}
