// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
function pageAnimation(){

    let elemC = document.querySelector("#elem-container")
    let fixed = document.querySelector(".fixed-image")
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })
    
    
    let elems = document.querySelectorAll(".elem")
    console.log(elems)
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            let image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })

}

function swiperAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
      
    });
}
swiperAnimation()

pageAnimation()





// let elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     let image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// })