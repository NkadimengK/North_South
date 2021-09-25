//Display menu
//Mobile navbar for all other pages
var mobileNavBtn = document.querySelector(".mobile-nav-button");
var mobileMenu = document.querySelector(".rest-of-nav-buttons");
MobileNavigationBar();
function MobileNavigationBar(){
    let menuClicked = false;
    mobileNavBtn.addEventListener('click',() =>{
        if(!menuClicked ){
            mobileNavBtn.classList.add('pressed');
            menuClicked = true;
            mobileMenu.style.display = "flex";
            //DisplayMenu()
        }else{
            mobileNavBtn.classList.remove('pressed');
            menuClicked = false;
            mobileMenu.style.display = "none";
        }
    });
}