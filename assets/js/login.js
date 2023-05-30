let cancel = document.getElementById('cancel');
let login_container = document.getElementById('login-template');

cancel.addEventListener('click', function() {
       login_container.style.display = "none";
});


let login_btn = document.getElementById('login-btn');

login_btn.addEventListener('click', function(){
  if( login_container.style.display == "none"){
    login_container.style.display = "block";
  }
  else{
    login_container.style.display = "none";
  }
});