const inp = document.getElementById("inp")
const addTodoBtn = document.getElementById("addTodo")
const list = document.getElementById("list")

let counter = 1
addTodoBtn.addEventListener('click', (e)=> {
    let newLi = document.createElement("li")
    let doneBtn = document.createElement("button")
    let newP = document.createElement("p")
    let delBtn = document.createElement("button")
    doneBtn.id = `Done Button ${counter}`
    delBtn.id = `DelBtn ${counter}`
    doneBtn.innerHTML = "Done"
    doneBtn.addEventListener("click", e=>{
        e.target.parentElement.secondElementChild.disabled = true
    })
    newP.innerHTML = inp.value
    delBtn.innerHTML = "X"
    delBtn.addEventListener("click", e=>{
        e.target.parentElement.style.display = "none"
    })
    newLi.append(doneBtn,newP,delBtn)
    list.appendChild(newLi)
    inp.value = ""
    counter++
})