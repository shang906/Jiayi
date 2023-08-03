// JS here
Parse.initialize("Fh2FardtKIx8YnLtmlMwFn92lhRME5b2bd3qew3V","BpzyHBRTHH5KVKQag4DUV8vAhHp1CFXNHL3mz7Qq"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'


const newBtn = document.getElementById("newbtn");
const editBtn = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    const results = await query.ascending('lname').find();
    console.log(results);
}

displayFriends();

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