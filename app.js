// init Github
const github = new Github;
// init UI
const ui = new UI;
//  SearchInput
const searchUser = document.getElementById("searchUser");

// Searchinput input event listener
searchUser.addEventListener("keyup", (e) => {
 // get input text
 const userText = e.target.value;

 if(userText !== '') {
     github.getUser(userText)
     .then(data => {
         if(data.profile.message === 'Not Found') {
             // Show alert
         ui.showAlert("Use not found", "alert alert-danger");
         } else {
           // Show Profile
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
         }
     })
 } else {
     // Clear profile 
     ui.clearProfile();
 }
});