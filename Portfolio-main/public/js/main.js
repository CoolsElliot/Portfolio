let menuIcon = document.getElementsByClassName("toggle-btn")[0];

menuIcon.addEventListener("click",hideAndShowMenu);


function hideAndShowMenu() {
    document.getElementById('sidebar').classList.toggle('active');
  }




