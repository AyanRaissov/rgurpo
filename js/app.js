
$(function() {


    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });



    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    

    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    


});

// -------------------------------------
AOS.init();


// /---------------------------------/

const btn_all_filials = document.querySelector('.btn_all_filials')
const sectFilial = document.querySelector('.reviews .container section')
const filial = document.querySelector('.filial')

let sectFilialDefHeight = 350

let countClick = 0


btn_all_filials.addEventListener('click', ()=>{
    if(countClick % 2 == 0){
		const filialStyles = getComputedStyle(filial)
		const filialHeight = filialStyles.height
		sectFilial.style.height = filialHeight
	}
	else{
		sectFilial.style.height =  sectFilialDefHeight + 'px'
	}
	countClick++
})

// --------------------------------------

document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})



 
// ---------------------- yandex maps ---------------------------

ymaps.ready(function () {
    var myMap = new ymaps.Map("YMapsID", {
      center: [51.20788295267876,71.35406355753322],
      zoom: 16
    });
     
  var myPlacemark = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [51.20788295267876,71.35406355753322]
    }    
    
});
myMap.geoObjects.add(myPlacemark);
});



//   const openModal = document.querySelectorAll('.open_modal')
// const clsModal = document.querySelector('.cls_modal')
// const modalWindow = document.querySelector('.modal_window')

// openModal.forEach((item)=>{
//     item.onclick = ()=>{
// 	modalWindow.style.display = 'flex'
// 	setTimeout(()=>{
// 		modalWindow.style.opacity = 1
// 	}, 300)
// }})

// clsModal.addEventListener('click', ()=>{
// 	modalWindow.style.opacity = 0
// 	setTimeout(()=>{
// 		modalWindow.style.display = 'none'
// 	}, 300)
// })

// window.onclick = function(event) {
//     if (event.target == modalWindow) {
//         modalWindow.style.display = "none";
//     }
//   }