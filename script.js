
const noteContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.button');
let note = document.querySelectorAll('.note');

function showNotes () {
    noteContainer.innerHTML = localStorage.getItem('note')
}
showNotes();

function updateStorage() {
    localStorage.setItem('note' , noteContainer.innerHTML)
}


// Adding Event listner to the button


createButton.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'note';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "./trash-alt-solid-24.png";
    noteContainer.appendChild(inputBox).appendChild(img);

});

// Adding deletion of the note

noteContainer.addEventListener('click', (e)=> {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P'){
         note = document.querySelectorAll('.note');
         note.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
         })
    }
})
