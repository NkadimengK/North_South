
//Home page navbar
const menuNavBtn = document.querySelector('.menu-nav-button');
var menu = document.querySelector(".navigation-buttons");

NavigationBar(menuNavBtn,menu)
MobileNavigationBar()
function NavigationBar(navButton,menu){
    let menuClicked = false;
    menuNavBtn.addEventListener('click',() =>{
        if(!menuClicked && menu.style.opacity==0){
            navButton.classList.add('clicked');
            menuClicked = true;
            menu.style.opacity = 1;
            //DisplayMenu()
        }else{
            navButton.classList.remove('clicked');
            menuClicked = false;
            menu.style.opacity = 0;
        }
    });
}




function DisplayMenu(){
    if(menu.style.opacity==0){
        menu.style.opacity = 1;
    }else{
        menu.style.opacity = 0;
    }
}