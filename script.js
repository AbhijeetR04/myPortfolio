var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");

}

// open and close function for menu 

var sideMenu = document.getElementById("sidemenu");

function openMenu(){
    sideMenu.style.left = "0";
}
function closeMenu(){
    sideMenu.style.left = "-200px";
}

// get data from html forms to google sheets

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz74KoQ6VqSMHV4ULEIOdFDuthPejwffQzihQvnpHQlkj1hdDcbjErFmwtHQqhiKGLB/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })