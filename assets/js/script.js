import { datalink, dropMenu, dropMenu2, dropMenu3, dropMenu4, clientsImages, PropertyCards, areaCards,agentCards,sliderCard,blogCards } from "../js/data.js";


for (let index in datalink.links) {
    
    let a = document.querySelectorAll('li a')
    a[index].innerHTML = datalink.links[index]
    
}


let dropdown = document.createElement('i')
console.log(dropdown);
dropdown.setAttribute('class', 'fa-solid fa-angle-down')
document.querySelectorAll('nav .menu-list li a')[0].appendChild(dropdown)
document.querySelectorAll('nav .menu-list li')[0].style.width = '12%'
document.querySelectorAll('nav .menu-list li a')[0].style.display = 'flex'
document.querySelectorAll('nav .menu-list li a')[0].style.width = '100%'
document.querySelectorAll('nav .menu-list li a')[0].style.justifyContent = 'space-between'


let dropdown2 = document.createElement('i')
dropdown2.setAttribute('class', 'fa-solid fa-angle-down')
const navlinks = document.querySelectorAll('nav .menu-list li')
navlinks[2].style.width = '15%'
navlinks[2].querySelector('a').style.width = '100%'
navlinks[2].querySelector('a').appendChild(dropdown2)
navlinks[2].querySelector('a').style.display = 'flex'
navlinks[2].querySelector('a').style.justifyContent = 'space-between'

let dropdown3 = document.createElement('i')
dropdown3.setAttribute('class', 'fa-solid fa-angle-down')
navlinks[3].style.width = '13%'
navlinks[3].querySelector('a').style.width = '100%'
navlinks[3].querySelector('a').appendChild(dropdown3)
navlinks[3].querySelector('a').style.display = 'flex'
navlinks[3].querySelector('a').style.justifyContent = 'space-between'

let dropdown4 = document.createElement('i')
dropdown4.setAttribute('class', 'fa-solid fa-angle-down')
navlinks[4].style.width = '12%'
navlinks[4].querySelector('a').style.width = '100%'
navlinks[4].querySelector('a').style.display = 'flex'
navlinks[4].querySelector('a').appendChild(dropdown4)
navlinks[4].querySelector('a').style.justifyContent = 'space-between'

function time() {
    let date = new Date()
    const hour = date.toLocaleTimeString('en-US')
    document.querySelector('.hour').innerHTML = hour
    document.querySelector('.hour').style.color = 'white'
    document.querySelector('.hour').style.display = 'flex'
    document.querySelector('.hour').style.height = '50px'
    document.querySelector('.hour').style.alignItems = 'center'
}
setInterval(time, 1000)
time()
let links = document.querySelectorAll('nav li')
for (let index of links) {
    index.onclick = () => {
        document.querySelector('li.active').classList.remove('active')
        index.classList.add('active')

    }
}

navlinks[0].querySelector('a').insertAdjacentHTML('beforeend', dropMenu)
navlinks[2].querySelector('a').insertAdjacentHTML('beforeend', dropMenu2)
navlinks[3].querySelector('a').insertAdjacentHTML('beforeend', dropMenu3)
navlinks[4].querySelector('a').insertAdjacentHTML('beforeend', dropMenu4)
navlinks[4].querySelector('.dropdown-menu').style.width = '100%'
navlinks[4].querySelector('.dropdown-menu').style.padding = '30px'
navlinks[4].querySelector('.dropdown-menu .container').style.display = 'flex'
navlinks[4].querySelector('.dropdown-menu .container').style.justifyContent = 'space-between'
navlinks[4].querySelector('.dropdown-menu .list1 .menu-list1').style.width = '100%'
navlinks[4].querySelector('.dropdown-menu .list1').style.width = '25%'
let link = navlinks[4].querySelectorAll('.dropdown-menu .list1 .menu-list1 .link')
let linkMain = navlinks[4].querySelectorAll('.dropdown-menu .list1 .menu-list1 .link a')
for (let index of link) {
    index.style.width = '100%'
    index.style.display = 'flex'
    index.style.flexDirection = 'row'
    index.style.justifyContent = 'space-between'
}
for (let index of linkMain) {
    index.style.width = '90%'
}
navlinks[4].querySelector('.dropdown-menu .list2').style.width = '25%'
let link2 = navlinks[4].querySelectorAll('.list2 .menu-list2 li')
for (let index of link2) {
    index.style.display = 'flex'
    index.style.flexDirection = 'row'
    index.style.justifyContent = 'space-between'

}
let linkMain2 = document.querySelectorAll('.list2 .menu-list2 li a')
for (let index of linkMain2) {
    index.style.width = '90%'
}
navlinks[4].querySelector('.list3').style.width = '25%'
let link3 = navlinks[4].querySelectorAll('.list3 .menu-list3 li')
for (let index of link3) {
    index.style.display = 'flex'
    index.style.flexDirection = 'row'
    index.style.justifyContent = 'space-between'
}
let linkMain3 = navlinks[4].querySelectorAll('.list3 .menu-list3 li a')
for (let index of linkMain3) {
    index.style.width = '90%'
}
navlinks[4].querySelector('.list4').style.width = '25%'
let links4 = navlinks[4].querySelectorAll('.list4 .menu-list4 li')
for (let index of links4) {
    index.style.display = 'flex'
    index.style.flexDirection = 'row'
    index.style.justifyContent = 'space-between'
}
let linksMain4 = navlinks[4].querySelectorAll('.list4 .menu-list4 li a')
for (let index of linksMain4) {
    index.style.width = '90%'
}

const headerBodyBtn = document.querySelectorAll('header .body .butons button')
for (let index of headerBodyBtn) {
    index.onclick = () => {
        document.querySelector('header .body .butons button.active').classList.remove("active")
        index.classList.add("active")
    }
}
let images = document.querySelector('.clients .images')
function displayClientsImg() {
    for (let index of clientsImages) {

        let img = `<img src="${index.src}" alt="">`

        images.insertAdjacentHTML('beforeend', img)
    }
}
displayClientsImg()

window.onscroll = navbarScroll

const navbar = document.querySelector('.header1')
const navContainer = document.querySelector('.header1 .container-fluid')
function navbarScroll() {
    if (document.documentElement.scrollTop >20) {
        navbar.style.position = 'fixed'
        navbar.style.background = '#0E2E50'
        navbar.style.height = '80px'
        navContainer.style.width = '88%'
        document.querySelector(".angle-double i").style.position = 'fixed'
        document.querySelector(".angle-double i").style.display = 'block'
       

    } else {
        navbar.style.position = 'relative'
        navbar.style.background = 'transparent'
        navbar.style.height = '80px'
        navContainer.style.width = '90%'
        document.querySelector(".angle-double i").style.display = 'none'



    }
}
     

    

const PropertyBtns = document.querySelectorAll('.properties .butons button ')
for (let index of PropertyBtns) {
    index.addEventListener('click', function () {
        document.querySelector('.properties .butons button.active').classList.remove('active')
        index.classList.add('active')
    })
}
const cardsParent = document.querySelector('.properties .cards-properties')
function propertyCardsDisplay() {
    for (let index of PropertyCards) {
        let cards = `<div  class="card p-0" data-aos="fade-up" data-aos-anchor-placement="top-bottom"  data-aos-easing="ease-in-sine" style="width: 24rem;">
        <div class="image">
        <div class="text">
         <div class="container-fluid">
         <div class="bag">
         <img src="assets/img/listing-label.svg"></img>
         <div class="bag-body">
         <div class="bag-circle"></div>
         ${index.bagbody} 
         </div>
         </div>
         <div class="cost-info">
         <div class="cost">${index.cost}</div>
         <div class=fav-comp>
         <div class="favorite">
         <div class="box-text">Favorites</div>
         <i class="bi bi-heart"></i>
         </div>
         <div class="compare">
         <div class="box-text">Compare</div>
         <i class="bi bi-arrow-left-right"></i>
         </div>
         </div>
         </div>
         </div>
        </div>
        <img src="${index.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body p-4">
        <div class="type-box">${index.typeboxtext}</div>
          <h5 class="card-title">${index.title}</h5>
          <p class="card-text">${index.body}</p>
         <div class="end-part">
         <div class="bed">${index.footerbed}</div>
         <div class="bath">${index.footerbath}</div>
        </div>
      </div>`
        cardsParent.insertAdjacentHTML('beforeend', cards)

    }

}
propertyCardsDisplay()

const cardsProperty = document.querySelectorAll('.properties .card')
document.querySelectorAll('.properties .butons button')[0].onclick = () => {
    for (let index of cardsProperty) {
        index.style.display = 'block'
    }
    cardsProperty[0].style.gridRow = '1'
    cardsProperty[0].style.gridColumn = '1'
    cardsProperty[1].style.gridRow = '1'
    cardsProperty[1].style.gridColumn = '2'
    cardsProperty[2].style.gridRow = '1'
    cardsProperty[2].style.gridColumn = '3'
    cardsProperty[3].style.gridRow = '2'
    cardsProperty[3].style.gridColumn = '1'
    cardsProperty[4].style.gridRow = '2'
    cardsProperty[4].style.gridColumn = '2'
    cardsProperty[5].style.gridRow = '2'
    cardsProperty[5].style.gridColumn = '3'
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
            document.querySelector('.properties').style.height='3100px'
            document.querySelector('.properties .container-fluid').style.height='3000px'
            
        }else{
            document.querySelector('.properties').style.height = '1100px'

        }
        
      }
      
      var x = window.matchMedia("(max-width: 576px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

    
  
}

document.querySelectorAll('.properties .butons button')[1].onclick = () => {
    cardsProperty[0].style.display = 'block'
    cardsProperty[0].style.gridColumn = '1'
    cardsProperty[0].style.gridRow = '1'
    cardsProperty[2].style.display = 'block'
    cardsProperty[2].style.gridColumn = '2'
    cardsProperty[2].style.gridRow = '1'
    cardsProperty[4].style.display = 'block'
    cardsProperty[4].style.gridRow = '1'
    cardsProperty[4].style.gridColumn = '3'
    cardsProperty[1].style.display = 'none'
    cardsProperty[3].style.display = 'none'
    cardsProperty[5].style.display = 'none'


    document.querySelector('.properties').style.height = '700px'
    
    function myFunction(x) {
        if (x.matches) { // If media query matches
          document.querySelector('.properties').style.height='1660px'
          document.querySelector('.properties .container-fluid').style.height='1550px'

        }else{
          document.querySelector('.properties').style.height='700px'

        }
        
      }

      
      
      var x = window.matchMedia("(max-width: 576px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      

}


document.querySelectorAll('.properties .butons button')[2].onclick = () => {
    cardsProperty[0].style.display = 'none'
    cardsProperty[1].style.display = 'block'
    cardsProperty[1].style.gridColumn = '1'
    cardsProperty[1].style.gridRow = '1'
    cardsProperty[2].style.display = 'none'
    cardsProperty[3].style.display = 'block'
    cardsProperty[3].style.gridColumn = '2'
    cardsProperty[3].style.gridRow = '1'
    cardsProperty[4].style.display = 'none'
    cardsProperty[5].style.display = 'block'
    cardsProperty[5].style.gridRow = '1'
    cardsProperty[5].style.gridColumn = '3'
    document.querySelector('.properties').style.height = '700px'
    function myFunction(x) {
        if (x.matches) { // If media query matches
          document.querySelector('.properties').style.height='1660px'
          document.querySelector('.properties .container-fluid').style.height='1550px'

        }else{
          document.querySelector('.properties').style.height='700px'

        }
    }
    var x = window.matchMedia("(max-width: 576px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

}



let iframeVideo = `  <iframe width="900" height="506" src="https://www.youtube.com/embed/1iIZeIy7TqM" title="Envato Logo Reveal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
document.querySelector('.play-buton button').onclick = () => {
    document.querySelector('.property-experts .video').style.display = 'block'
    document.querySelector('.property-experts .video').insertAdjacentHTML('beforeend', iframeVideo)

}
document.querySelector('.property-experts .video button').onclick = () => {
    document.querySelector('.property-experts .video').style.display = 'none'
    document.querySelector('.property-experts iframe').remove()

}

document.querySelector('.property-experts .video').onclick = () => {
    document.querySelector('.property-experts .video').style.display = 'none'
    document.querySelector('.property-experts iframe').remove()
}

function areaCardsDisplay() {
    let cardsbox = document.querySelector('.area-sec .area-cards')
    for (let index of areaCards) {
        let cards = ` <div class="card" data-aos="zoom-out" style="width: 17.5rem;">
    <div class="image">
     <div class="hoverbox"></div>
    <img src="${index.image}" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
       <div class="text">
        <h5 class="card-title">${index.title}</h5>
        <a href="#">${index.link}</a>
       </div>
        <div class="arrow-button">
            <a href="#" class="btn"><i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
  </div>`
        cardsbox.insertAdjacentHTML('beforeend', cards)
    }
}
areaCardsDisplay()
document.querySelector('header').classList.add('hide')
let sections = document.querySelectorAll('section')
for (let index of sections) {
    index.classList.add('hide')
}
document.querySelector('.header2').style.display='none'
document.querySelector('footer').classList.add('hide')
document.querySelector('.end-page2').classList.add('hide')
document.querySelector('.clients').classList.add('hide')
function loading() {
    document.querySelector('header').classList.remove('hide')
    for (let index of sections) {
        index.classList.remove('hide')
    }
    document.querySelector('.loading').classList.add('hide')
    document.querySelector('.clients').classList.remove('hide')
    document.querySelector('footer').classList.remove('hide')
    document.querySelector('.end-page2').classList.remove('hide')
    function myFunction(x) {
        if (x.matches) { // If media query matches
   
          document.querySelector('.header2').style.display='block'
        }else{
          document.querySelector('.header2').style.display='none'
            
        }
    }
    var x = window.matchMedia("(max-width: 576px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
   

    

}
setTimeout(loading, 2000)

  const iframevideo=`<iframe width="900" height="506" src="https://www.youtube.com/embed/1iIZeIy7TqM" title="Envato Logo Reveal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
 $('.property-all .play-btn .btn').click(function () {
    $('.iframe-video').css({display:'block'})
    document.querySelector('.iframe-video').insertAdjacentHTML('beforeend',iframevideo)
 })
 $('.iframe-video button').click(function() {
    $('.iframe-video').css({display:'none'})
    $('.iframe-video iframe').remove()
 })
 $('.iframe-video').click(function () {
    $('.iframe-video').css({display:'none'})
    $('.iframe-video iframe').remove()

 })

  
function agentCardsDisplay() {
    agentCards.forEach(function (info) {
        let agentCard=`<div class="card p-3" data-aos="zoom-in"  style="width: 18rem;">
        <div class="image">
            <div class="overlay-box">
                <div class="share-btns">
                    <div class="btns">
                    <a href="#" class="btn share"><i class="fa-solid fa-share-nodes"></i></a>
                    <a href="#" class="btn fb"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="btn tw"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn ln"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="listing-btn">
                    <a href="#" class="btn">
                        <div class="circle"></div>
                        ${info.button}
                    </a>
                </div>
            </div>
            <img src="${info.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title"><a href="#">${info.title}</a></h5>
          <p class="card-text"><a href="#">${info.text}</a></p>
          <p class="card-text"><i class="bi bi-telephone-fill"></i> Call: +123 699 7700</p>
        </div>
      </div>`
      document.querySelector('.agent-cards').insertAdjacentHTML('beforeend',agentCard)
    })
}
agentCardsDisplay()
$('.agent-cards .fb').css({opacity:'0'})
$('.agent-cards .tw').css({opacity:'0'})
$('.agent-cards .ln').css({opacity:'0'})
$('.agent-cards .share').mouseenter(function () {
 
  $('.agent-cards .fb').css({opacity:'1'})
  $('.agent-cards .tw').css({opacity:'1'})
  $('.agent-cards .ln').css({opacity:'1'})
})
$('.agent-cards .share-btns .btns').mouseleave(function () {
    
   $('.agent-cards .fb').css({opacity:'0'})
   $('.agent-cards .tw').css({opacity:'0'})
   $('.agent-cards .ln').css({opacity:'0'})
 })

 $('.agent-cards .card:nth-child(1)').mouseenter(function () {
    $('.agent-cards .card:nth-child(1) .btns').css({opacity:'1'})
 })
 $('.agent-cards .card:nth-child(1)').mouseleave(function () {
    $('.agent-cards .card:nth-child(1) .btns').css({opacity:'0'})
 })

 $('.agent-cards .card:nth-child(2)').mouseenter(function () {
    $('.agent-cards .card:nth-child(2) .btns').css({opacity:'1'})
 })
 $('.agent-cards .card:nth-child(2)').mouseleave(function () {
    $('.agent-cards .card:nth-child(2) .btns').css({opacity:'0'})
 })

 $('.agent-cards .card:nth-child(3)').mouseenter(function () {
    $('.agent-cards .card:nth-child(3) .btns').css({opacity:'1'})
 })
 $('.agent-cards .card:nth-child(3)').mouseleave(function () {
    $('.agent-cards .card:nth-child(3) .btns').css({opacity:'0'})
 })

 $('.agent-cards .card:nth-child(4)').mouseenter(function () {
    $('.agent-cards .card:nth-child(4) .btns').css({opacity:'1'})
 })
 $('.agent-cards .card:nth-child(4)').mouseleave(function () {
    $('.agent-cards .card:nth-child(4) .btns').css({opacity:'0'})
 })


 function animateAos() {
    AOS.init(
        {
            once:'true',
            duration:1000,
            // mirror:true,
           
        },
        
        
        )
        
        
    }
    setTimeout(animateAos,3000)
    
    


  
   
    let count=0
    let timer=setInterval(counter1,100)
    
    function counter1() {
       let counter=document.querySelector('.counterr .counter1 .box2').innerHTML=count+" %"
       
       counter=count++
       if (counter===80) {
           clearInterval(timer)
       }
       
   }
   
   
   
    
  



    let count1=0
    let timer1=setInterval(counter2,100)
 function counter2() {
    let counter=document.querySelector('.counterr .counter2 .box2').innerHTML=count1+" %"
    counter=count1++
    if (counter===27) {
        clearInterval(timer1)
    }
    
 }




 let count2=0
 let timer2=setInterval(counter3,100)
 function counter3() {
    let counter=document.querySelector('.counterr .counter3 .box2').innerHTML=count2+" %"
    counter=count2++
    if (counter===99) {
         clearInterval(timer2)
    }
 }

 let count3=0
 let timer3=setInterval(counter4,100)
 function counter4() {
    let counter=document.querySelector('.counterr .counter4 .box2').innerHTML=count3+" %"
    counter=count3++
    if (counter===55) {
        clearInterval(timer3)
    }
 }

function sliderCardsDisplay() {
    sliderCard.forEach(function (info) {
        let sliderCard=`<div class="card">
        <div class="image">
            <img src="${info.src}" alt="">
        </div>
       
        <div class="card-inside">
             <div class="container">
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div class="text">
                <p>
       <i class="bi bi-quote"></i>
       Engage with our
       professional real estate agents sell Following
       buy or rent your home.Get emails directly to your area reach
       inbox and manage the lead with 
       <i class="bi bi-quote"></i>
       
       
                </p>
            </div>
            <div class="name">
                <h1>
                    Maria Zokkatti
                </h1>
                <h6>
                    <div class="circle"></div>
                    CEO,PSDBOSS
                </h6>
            </div>
        </div>
        </div>
       </div>`
       document.querySelector('.slider-cards').insertAdjacentHTML('beforeend',sliderCard)
     })
}
sliderCardsDisplay()
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000
        
       
        
    });

  

  });

function blogCardsDisplay() {
    blogCards.forEach(function (info) {
        let blogCard=` <div class="card p-4" data-aos="zoom-in-up" style="width: 24rem;">
        <div class="date">
               <span>
                13
               </span>
               <span>
                AUG
               </span>
            </div>
        <div class="image">
          <div class="hoverbox">
            
          </div>
        <img src="${info.image}" class="card-img-top" alt="...">
        </div>
        <div class="card-body ">
           <div class="titles">
            <h6>
                <div class="circle"></div>
                <a href="#">${info.title1}</a>
            </h6>
            <h6>
              <div class="circle"></div>
              <a href="#">${info.title2}</a>
            </h6>
           </div>
          <p class="card-text"><a href="#">${info.text}</a></p>
          <a href="#" class="link">Read More <i class="fa-solid fa-arrow-right"></i> </a>
        </div>
      </div>`
      document.querySelector('.blog-cards').insertAdjacentHTML('beforeend',blogCard)
    })

}
blogCardsDisplay()
$('.blog-cards .card:nth-child(3) .titles').css({width:'75%'})
$('.blog-cards .card:nth-child(2) .titles').css({width:'60%'})

$('.angle-double').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000)
})


let menubtn=document.querySelector('.header2 .menu')

menubtn.onclick=()=>{
   if ( menubtn.innerHTML =='<i class="fa-solid fa-bars"></i>') {
       document.querySelector('.header2 .list-items').style.height='200px'
       document.querySelector('.header2 .list-items ul').style.height='200px'
       document.querySelector('.header2 .list-items ul').style.opacity='1'
       let buttons=document.querySelectorAll('.header2 .list-items ul button')
       for (let index of buttons) {
         index.style.display='block'
       }
       menubtn.innerHTML='<i class="fa-solid fa-x"></i>'
    
   }else{
    document.querySelector('.header2 .list-items').style.height='0px'
    document.querySelector('.header2 .list-items ul').style.height='0px'
    let buttons=document.querySelectorAll('.header2 .list-items ul button')
       for (let index of buttons) {
         index.style.display='none'
       }
    document.querySelector('.header2 .list-items ul').style.opacity='0'
    document.querySelector('.header2 .list-items ul button').style.display='none'
    menubtn.innerHTML='<i class="fa-solid fa-bars"></i>'
   }

    
    
}


 