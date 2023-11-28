const uri = 'http://localhost:3000/todo'

const addToDo = document.querySelector("#addToDo")
const toDoList = document.querySelector("#toDoList")
const completedList = document.querySelector("#completedList")

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => list(resp))
    .catch(err => console.error(err))

addToDo.addEventListener('submit', e => {
    e.preventDefault()

    const content = {
        description: addToDo.description.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    }

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('404')
        })
})

function list(arr) {
    arr.forEach(e => {
        const line = document.createElement('tr')
        const pDescription = document.createElement('td')
        const timestamp = document.createElement('td')
        const checkbox = document.createElement('td')

        pDescription.innerHTML = e.description
        timestamp.innerHTML = formatDate(e.date)

        const done = document.createElement('input')
        done.type = "checkbox"
        done.setAttribute('onclick', `alterarStatus('${e.id}')`)

        checkbox.appendChild(done)

        line.appendChild(pDescription).style.wordBreak = "break-all"
        line.appendChild(timestamp)

        line.appendChild(checkbox)

        toDoList.appendChild(line)

        done.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove()
        })

        if (e.status == "Done") {
            line.remove()
            done.remove()

            completedList.appendChild(line.cloneNode(true))

            completedList.style.setProperty("text-decoration", "line-through")
        }
    })
}

function formatDate(date) {
    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: "short",
        timeStyle: "short"

    }).format(new Date(date)).replace(",","");
}

function alterarStatus(i) {
    fetch(uri + '/alterar/' + i, { method: 'PUT' })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('404')
        })
}