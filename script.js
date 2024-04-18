const reg = document.getElementById("register")
const nameInp = document.getElementById("name")
const surnameInp = document.getElementById("surname")
const ageInp = document.getElementById("age")
const natInp = document.getElementById("nat")
const positionInp = document.getElementById("position")
const expInp = document.getElementById("exp")
users = []
reg.addEventListener("submit", (e) => {
    e.preventDefault()
    let newUser = {
        name: nameInp.value,
        surname: surnameInp.value,
        age: ageInp.value,
        nationality: natInp.value,
        position: positionInp.value,
        exp: expInp.value
    }
    users.push(newUser)
    renderUI(users)
    console.log(users)
})
const renderUI = (items) => {
    innerHTML = ""
    for (let i = 1; i < items.length; i++) {
        innerHTML += `<table class="table">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Age</th>
            <th scope="col">Nationality</th>
            <th scope="col">Position</th>
            <th scope="col">Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${[i]}</td>
            <td>${items[i].name}</td>
            <td>${items[i].surname}</td>
            <td>${items[i].age}</td>
            <td>${items[i].nationality}</td>
            <td>${items[i].position}</td>
            <td>${items[i].exp}</td>
          </tr>
        </tbody>
      </table>`
        

    }
    list.innerHTML = innerHTML
}