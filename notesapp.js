console.log("Varad Here");
setContent();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addLocally);
function addLocally() {
    let notesTxt = document.getElementById('noteTxt');
    // let notesTitleTxt = document.getElementById('noteTitleTxt');
    let notes = localStorage.getItem("notes");
    // let noteTitle = localStorage.getItem("noteTitle");
    if (notes == null) {
        notesObj = [];
        // notesTitleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // notesTitleObj = JSON.parse(noteTitle);
    }
    notesObj.push(notesTxt.value);
    // notesTitleObj.push(notesTitleTxt.value);
    // counter += 1;
    // console.log(counter);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // localStorage.setItem("noteTitle", JSON.stringify(notesTitleObj));
    notesTxt.value = '';
    // notesTitleTxt.value = '';
    setContent();
}

function setContent() {
    let notes = localStorage.getItem("notes");
    // let noteTitle = localStorage.getItem("noteTitle");
    if (notes == null) {
        notesObj = [];
        // notesTitleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // notesTitleObj = JSON.parse(noteTitle);
    }
    let html = '';
    // Array.from(notesTitleObj).forEach(function (element1, index) {
        Array.from(notesObj).forEach(function (element, index) {
        html += `
        <div class="card my-3 mx-2 " style="width: 18rem;">
            <div class="noteCard card-body">
            <h5 class="card-title" id="noteTitle">Note ${index + 1}</h5>
              <p class="card-text" id="noteContent">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary btn-dark">Delete Note</button>
            </div>
          </div>  
        `;
        // });
    });

    let notesElm = document.getElementById('allNotes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = html + `Nothing to show here!`
    }

}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    // let noteTitle = localStorage.getItem("noteTitle");
    if (notes == null) {
        notesObj = [];
        // notesTitleObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        // notesTitleObj = JSON.parse(noteTitle);
    }
    // notesTitleObj.splice(index, 1);
    notesObj.splice(index, 1);
    // localStorage.setItem("noteTitle", JSON.stringify(notesTitleObj));
    localStorage.setItem("notes", JSON.stringify(notesObj));
    setContent();
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function(){
        let inputVal = searchTxt.value.toLowerCase();
        let notecards = document.getElementsByClassName('noteCard');
        Array.from(notecards).forEach(function(element){
            let cardTxt = element.getElementsByTagName('p')[0].innerText;
            if(cardTxt.includes(inputVal)){
                element.style.display = 'block';
            }
            else{
                element.style.display = 'none';
            }
        })
})