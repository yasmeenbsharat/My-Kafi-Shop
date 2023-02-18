let items=Array.from(document.querySelectorAll('.citem img'));
console.log(items);
let itemContent=document.getElementById("item-content");
let closedIcon=document.getElementById("closedIcon");
let itemContentDesc=document.getElementById("item-content-desc");

console.log(items);

// {name:"Baby Clothes",imgPath:"61-PFA5GXiL._AC_UF894,1000_QL80_.jpg",price:26},
let clothing =[
    {name:"Dress",imgPath:"dress1.webp",price:50},
    {name:"Dress",imgPath:"dress.jpg",price:66},  
    {name:"Jeans",imgPath:"jeans.jpg",price:50},
    {name:"jacket Jeans",imgPath:"jacket jeans.jpg",price:70},
    {name:"Black Blazers",imgPath:"blackblazers.jpg",price:100},
    {name:"Men's jacket",imgPath:"mens jacket.jpg",price:85},
    {name:"Men's tracksuit",imgPath:"tracksuit.jpg",price:65},
    {name:"Baby Clothes",imgPath:"91AbY7YnGvL._AC_UF894,1000_QL80_.jpg",price:30},
    
    
]
let toysAndGames=[
    {name:"Wooden Toy Vehicles",imgPath:"WoodenToyVehicles.jpg",price:25},
    {name:"Animals body Toy",imgPath:"Animals body Toy .jpg",price:20},
    {name:"unicorn Doll",imgPath:"unicorndoll.jpg",price:15},
    {name:"Dinosaurs Toy",imgPath:"Dinosaurs Toy.jpg",price:20},
    {name:"Bearington Doll",imgPath:"Bearingtondoll.jpg",price:10},
    {name:"Letters & Numbers",imgPath:"Letters and Numbers .jpg",price:5},
    {name:"LED Light",imgPath:"LED Light  Toy for Kids.jpg",price:5 },
    {name:"Musical Instruments",imgPath:"Toddler Musical Instruments Toys.jpg",price:15},  
    
]
let handmade=[
    {name:"Orgonite Pyramid",imgPath:"Orgonite Pyramid.jpg",price:10},
    {name:"Bread Basket",imgPath:"Bread Basket.webp",price:20},
    {name:"Wooden Spoons",imgPath:"Wooden Spoons .jpg",price:20},
    {name:"Honey Jar",imgPath:"Honey Jar.jpg",price:10},
    {name:"Salt Shakers",imgPath:"Salt Shakers.webp",price:15},
    {name:"Glass Cups",imgPath:"Glass cup.jpg",price:10},
    {name:"Cutting Board",imgPath:"Cutting Board.jpg",price:15},  
    {name:"wool Cup Sleeve",imgPath:"wool Cup Sleeve.jpg",price:5 },
    
]


let jewelry=[
    {name:"Gold Earrings",imgPath:"goldearrings.webp",price:90},
    {name:"Coin Necklace",imgPath:"CoinNecklace.webp",price:60},
    {name:"Watch",imgPath:"BlackDialMen'sWatch.webp",price:85},
    {name:"Hand Bag",imgPath:"HandBag.jpg",price:66},
    {name:"Watch",imgPath:"SilverDialWatch.jpg",price:100},
    {name:"Sunflower Necklace",imgPath:"SilverSunflowerNecklace.jpg",price:30},
    {name:"Bracelet for Girls",imgPath:"BraceletforGirls.jpg",price:50},
    {name:"Silver Infinity Ring",imgPath:"SilverInfinityRing.jpg",price:26},
]


let electronics=[
    {name:"Gaming Mouse",imgPath:"Gaming Mouse.jpg",price:15},
    {name:"Bluetooth Headset",imgPath:"Bluetooth Headset.jpg",price:10},
    {name:"Iron",imgPath:"Iron.jpg",price:30},
    {name:"Retro-Bit",imgPath:"Retro-Bit.jpg",price:26},
    {name:"Joystick Controller",imgPath:"Joystick Controller.jpg",price:30},
    {name:"Electric Toothbrush",imgPath:"Electric Toothbrush.jpg",price:10},
    {name:"Samsung Charger",imgPath:"Samsung Superfast Charger.jpg",price:50},
    {name:"Ethernet Cable",imgPath:"Ethernet Cable.jpg",price:15},
  
]
let homeAndKitchen=[
    {name:"Chandelier",imgPath:"chandelier.jpg",price:70},
    {name:"Tea Cups",imgPath:"Tea Cups.jpg",price:15},
    {name:"Wooden Trays",imgPath:"Wooden Trays2.jpg",price:30},
    {name:"Food Containers",imgPath:"food storage containers.jpg",price:10},
    {name:"Oven Gloves",imgPath:"Oven Gloves.jpg",price:26},
    {name:"skillet",imgPath:"skillet.jpg",price:10},
    {name:"Fruit baskets",imgPath:"Fruit baskets.jpg",price:30},
    {name:"Coffee Thermos",imgPath:"Coffee Thermos.jpg",price:50},
    
  
]

closedIcon.addEventListener("click",function(){
    itemContent.style.opacity='0';
    itemContent.style.visibility= "hidden";

});
items.forEach(item => {
    console.log("yasmeen");
    item.addEventListener("click",function(e){
        e.preventDefault();
        itemContent.style.opacity='1';
        itemContent.style.visibility= "visible";
        let cateValue=e.target.attributes.id.value;

       if(cateValue=='clothing'){
        displayData(clothing,'clothing');
       }
       else if (cateValue =='jewelry'){
            displayData(jewelry,'Jewelry');
           }
        else if (cateValue =='toys'){
            displayData(toysAndGames,'Toys And Games');
           }
        else if (cateValue =='handmade'){
            displayData(handmade,'Handmade');
           }
        else if (cateValue =='electronics'){
            displayData(electronics,'electronics');
           }
        else if (cateValue =='home'){
            displayData(homeAndKitchen,'home and kitchen');
           }   
        
           
      
       
    })
    
});

function displayData(data ,path){
let result=`<h3 class="text-uppercase mb-3"> Kafi ${path}</h3>`;
data.forEach(item => {
    result +=`   
    <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="item-card position-relative mb-5">
                    <i class="fa-regular fa-heart"></i>
                    <img src="assets/images/${path}/${item.imgPath}" alt="" class="w-100">
                        <div class="card-desc text-white position-absolute py-3 py-md-2 w-100  d-flex justify-content-evenly  align-items-center">
                            <h4>${item.name}</h4>
                            <span>${item.price}$</span> 
                           
                
                        </div>
                    </div>
                    
                
                </div>
                

    
    `
    itemContentDesc.innerHTML=result;

}
    
    )


};

let navbar=document.getElementById("navbar");
let navImg=document.getElementById('navImg');
window.addEventListener('scroll',function () {
    if(window.scrollY>50){
        navImg.style.width='100%';
        navImg.style.marginTop="-17px";
        navbar.classList.add("shadow");
    }
    else{
        navImg.style.marginTop="-30px";
        navImg.style.width='170%';
        navbar.classList.remove("shadow");
    }
});

//Mop to top

// let moveTop=document.getElementById("mov-to-top");
// window.addEventListener("scroll",function(){
     
//     let sectionPosition=this.document.getElementById('services').offsetTop;
//     if( this.window.scrollY>sectionPosition){
//         moveTop.style.opacity='1';
//     }else{
//         moveTop.style.opacity='0'; 
//     }



// });
let movToTop=document.getElementById('movToTop');
window.addEventListener("scroll",function(){
let sectionPosition=this.document.getElementById("header").offsetTop;
if(this.window.scrollY>sectionPosition){
   movToTop.style.opacity='1';
//    this.document.querySelector('section.about .about-content').classList.add('contentleft');
}
else{
    movToTop.style.opacity='0';
}
}
);
movToTop.addEventListener("click",function(){
  window.scroll ({
    top:0,
    behavior:'smooth'
}
  )
})

// smooth scroll
let links =document.querySelectorAll('nav .nav-link');
links.forEach(link =>{
    link.addEventListener("click",function(e){
    let currentId=e.target.attributes.href.value;
    let sectionPosition= document.querySelector(currentId).offsetTop;
   window.scroll({
    top:sectionPosition,
    behavior:'smooth'
    })
    })
    
})
//loading screen

let body=document.body
body.style.overflow='hidden';
let loading=document.querySelector
('.loading');
loading.style.opacity='1';
loading.style.visibility='visible';
loading.style.transition='1s';

window.addEventListener("load",function(){
    setTimeout(function(){
       loading.style.opacity='0';
       loading.style.visibility='hidden';
       loading.style.transition='1s';
       body.style.overflow='auto';
    },2000);
});

$(document).ready(function(){
    
    $('.carousel_01').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});