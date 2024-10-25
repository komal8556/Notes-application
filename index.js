const notesTextarea = document.querySelector("#notes-textarea")
const addNotesBtn = document.querySelector(".notes-heading .add-notes-btn")
const notesList = document.querySelector(".notes_lists")
const textareaError = document.getElementById("error");
let htmlBody = document.querySelector("body")

function validateTextarea(){

    textareaError.textContent = ""

    let notesText = notesTextarea.value

    if(notesText.length === 0){
        let errorText = document.createTextNode("Please write something in input")
        textareaError.appendChild(errorText)
        setTimeout(() => { textareaError.textContent = "" }, 5000)

    } else if (notesText.length < 10){
        let errorText = document.createTextNode("note is very short add more words")
        textareaError.appendChild(errorText)
        setTimeout(() => { textareaError.textContent = "" }, 5000)
    } else{
        addNotes()
    }
    
}

// const notesText = notesTextarea.value;

function addNotes(){
    const notesText = notesTextarea.value;

    const notesDiv  = document.createElement("div")
    notesDiv.className = "note-box";

    // Solution 1
    const notesPara = document.createElement("p")
    notesPara.appendChild(document.createTextNode(`${notesText}`))

    const notesBtnDiv = document.createElement("div")
    notesBtnDiv.className = "notes-buttons"

    const notesDetailBtn = document.createElement("button")
    notesDetailBtn.appendChild(document.createTextNode("View details"))
    notesDetailBtn.className = "btn-small"

    const deleteIcon = document.createElement("i")
    deleteIcon.className = "fa-solid fa-trash"
    deleteIcon.id = "deleteNotes"

    notesBtnDiv.appendChild(notesDetailBtn)
    notesBtnDiv.appendChild(deleteIcon)

    notesDiv.appendChild(notesPara)
    notesDiv.appendChild(notesBtnDiv)
    

    //Solution 2

    /*
    notesDiv.innerHTML =  `
        <p>${notesText}</p>
        <div class="notes-buttons">
            <button class="btn-small">View details</button>
            <i class="fa-solid fa-trash"></i> 
        </div>
    `
    */


    notesList.appendChild(notesDiv)

    clearInput(notesTextarea)

    console.log("button clicked")

}

function clearInput(input){
    input.value = ""
}

function deleteNotes(e){
    if(e.target.tagName === "I"){
        let parentNode = e.target.parentNode.parentNode
        // let notesBtnDivParantnode = iconparentNode.parentNode
        if(parentNode.tagName === "DIV"){
            parentNode.remove()
        } else return
    }

    // console.log(e.target.tagName)
}

function makeModel(notesParagraphDetail){
    const modelContainer = document.createElement("div");
    modelContainer.className = "model-container";

    // solution 1
    modelContainer.innerHTML = `
        <div class="model-content">
            <p>${notesParagraphDetail}</p>
            <i id="icon-close" class="fa-solid fa-rectangle-xmark"></i>
        </div>
    `

    // Solution 2
    // const modelContent = document.createElement("div"); 
    // modelContent.className = "model-content";

    // const modelPara = document.createElement("p")

    // modelPara.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorem nesciunt voluptas voluptate nostrum, unde, optio, dolor sequi tempore numquam tempora assumenda facilis?`))

    // const closeIcon = document.createElement("i")
    // closeIcon.className = "closeIcon"
    // closeIcon.classList.add = "fa-solid fa-rectangle-xmark"

    // modelContent.appendChild(modelPara, closeIcon)

    // modelContainer.appendChild(modelContent)

    htmlBody.appendChild(modelContainer)

    console.log("we made a model");
}

function deleteModel(e){
    if(e.target.id === "icon-close"){
        let iconparentNode = e.target.parentNode
        let modelContentParentnode = iconparentNode.parentNode
        modelContentParentnode.remove()
        console.log("close icon clicked");
    }
}

function seeNotesInDetail(e){
    if(e.target.className === "btn-small"){
        let notePara = e.target.parentNode.previousElementSibling.textContent
        makeModel(`${notePara}`)
    }
}

htmlBody.addEventListener("click", deleteModel)


addNotesBtn.addEventListener("click", validateTextarea)
notesList.addEventListener("click", deleteNotes)
notesList.addEventListener("click", seeNotesInDetail)