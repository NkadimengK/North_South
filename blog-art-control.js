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
//Images
var allImages = ["images/unequal-sa.jpg","images/unequal-sa2.jpg","images/unequal-sa3.jpg","images/unequal-sa4.jpg"]
//Change South Images

var SouthImg = document.querySelector(".South-images img");
//var NextSouthImage = document.querySelector(".South-next-button");
//var PrevSouthImage = document.querySelector(".South-back-button");
var workingInTheSouth = document.querySelector(".South-Work-button .South-W-btn")
var buyDataInTheSouth = document.querySelector(".South-Recharge-button .South-D-btn")
var southBalanceUpdate = document.querySelector(".South-Data-Balance");
var southWalletUpdate = document.querySelector(".South-Wallet")
var SouthContent = document.querySelector(".South-images .South-blogs")
var SouthRead = document.querySelector(".South-Read-button .South-Read-btn")



var southWorkPay = 100;
var southDataCost = 50;
var southBallance = 0;
var southWallet = 0;

//Increase South Visibility
SouthRead.addEventListener("click",IncreaseSouthOpacity);

//South Work and Recharcge
workingInTheSouth.addEventListener("click",SouthWork);
buyDataInTheSouth.addEventListener("click",SouthRecharge);
//
//North variables
var NorthImg = document.querySelector(".North-images img");
//var NextNorthImage = document.querySelector(".next-button");
//var PrevNorthImage = document.querySelector(".back-button");
var workingInTheNorth = document.querySelector(".Work-button .W-btn")
var buyDataInTheNorth = document.querySelector(".Recharge-button .D-btn")
var northBalanceUpdate = document.querySelector(".Data-Balance");
var northWalletUpdate = document.querySelector(".Wallet")
var NorthContent = document.querySelector(".North-images .North-blogs")
var Read = document.querySelector(".Read-button .Read-btn")


 //

var northWorkPay = 400;
var northDataCost = 10;
var northBallance = 0;
var northWallet = 0;

northImageIndex = 0;


Read.addEventListener("click",IncreaseNorthOpacity);

workingInTheNorth.addEventListener("click",NorthWork);
buyDataInTheNorth.addEventListener("click",NorthRecharge);

//******************************************** */
//South Functions
var southImageIndex = 0;



var maxImages = 3;
function ChangeUpSouthImage(){
    if(southBallance>0){
        if(southImageIndex < maxImages-1){
            southImageIndex ++;

        }else{
            southImageIndex = maxImages;
        } 
        SouthImg.src = allImages[southImageIndex];
        southBallance--;;
        southBalanceUpdate.textContent = "Balance: "+southBallance+"GB";
    }
 
}

function IncreaseSouthOpacity(){
    
    if(southBallance>0){
        SouthContent.style.opacity = 1;
        southBallance--;
        southBalanceUpdate.textContent = "Balance: "+southBallance+"GB";;
    }    
}
function DecreaseSouthOpacity(){
    var decrement = 0.01;
    SouthContent.style.opacity = 1;
    var decrease = window.setInterval(function(){
     SouthContent.style.opacity-= decrement;
     if(SouthContent.style.opacity<=0){
         opacity = 0;
         //window.clearInterval(decrease);
         return;
     }       
    },100)
}
DecreaseSouthOpacity();

function ChangeDownSouthImage(){
    
    if(southBallance>0){
        if(southImageIndex > 0){
            southImageIndex --;
            
        }else if(southImageIndex<=0){
            southImageIndex = 0;
        }
        SouthImg.src = allImages[southImageIndex];
        southBallance--;;
        southBalanceUpdate.textContent = "Balance: "+southBallance+"GB";
    }
}
//South Data and Work

function SouthRecharge(){
    
    if(southWallet>=southDataCost){
        southBallance+=5;
        southWallet-=southDataCost;
    }
    southBalanceUpdate.textContent = "Balance: "+southBallance+"GB"
    southWalletUpdate.textContent ="Wallet: R" + southWallet.toString();
}
function SouthWork(){
    southWallet+=southWorkPay;
    southWalletUpdate.textContent ="Wallet: R" + southWallet.toString();
}
//******************************************************/
//******North Images********/

function DecreaseNorthOpacity(){
       var decrement = 0.01;
       NorthContent.style.opacity = 1;
       var decrease = window.setInterval(function(){
        NorthContent.style.opacity-= decrement;
        if(NorthContent.style.opacity<=0){
            opacity = 0;
            //window.clearInterval(decrease);
            return;
        }       
       },200)

}
DecreaseNorthOpacity();
function IncreaseNorthOpacity(){
    
    if(northBallance>0){
        NorthContent.style.opacity = 1;
        northBallance--;
        northBalanceUpdate.textContent = "Balance: "+northBallance+"GB";
    }    
}
 

function ChangeDownNorthImage(){
    
    if(northBallance>0){
        if(northImageIndex > 0){
            northImageIndex --;
            
        }else if(northImageIndex<=0){
            northImageIndex = 0;
        }
        NorthImg.src = allImages[northImageIndex];
        northBallance--;;
        northBalanceUpdate.textContent = "Balance: "+northBallance+"GB";
    }
}
//North Data and Work

function NorthRecharge(){
    
    if(northWallet>=northDataCost){
        northBallance+=5;
        northWallet-=northDataCost;
    }
    northBalanceUpdate.textContent = "Balance: "+northBallance+"GB"
    northWalletUpdate.textContent ="Wallet: R" + northWallet.toString();
}
function NorthWork(){
    northWallet+=northWorkPay;
    northWalletUpdate.textContent ="Wallet: R" + northWallet.toString();
}