// JS here
const newBtn = document.getElementById("newbtn");
const editBtn = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");

newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
})

newBtn.addEventListener("submit", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-offscreen";
})

for( let i=0; i<editBtn.length; i++){
    editBtn[i].addEventListener("click", function(event){
        event.preventDefault();
        editFriendForm.className = "edit-friend-onscreen";
    })
}

editFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    editFriendForm.className = "edit-friend-offscreen";
})