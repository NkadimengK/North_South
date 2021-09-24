const menuNavBtn = document.querySelector('.menu-nav-button');
var menu = document.querySelector(".navigation-buttons");
NavigationBar()
function NavigationBar(){
    let menuClicked = false;
    menuNavBtn.addEventListener('click',() =>{
        if(!menuClicked && menu.style.opacity==0){
            menuNavBtn.classList.add('clicked');
            menuClicked = true;
            menu.style.opacity = 1;
            //DisplayMenu()
        }else{
            menuNavBtn.classList.remove('clicked');
            menuClicked = false;
            menu.style.opacity = 0;
        }
    });
}
//Display menu

function DisplayMenu(){
    if(menu.style.opacity==0){
        menu.style.opacity = 1;
    }else{
        menu.style.opacity = 0;
    }
}