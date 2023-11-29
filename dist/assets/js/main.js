$(document).ready(function(){
  const swiper = new Swiper('.swiper', {
   
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 400,
     
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1.4,
        autoplay:true,
        loop: true,
        speed: 200,
        centeredSlides: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.2,
        autoplay:true,
    loop: true,
      },
      576: {
        slidesPerView:1,
        autoplay:true,
        loop: true,
      },
      767: {
        slidesPerView:1.2,
        autoplay:true,
        loop: true,
      },
      1023: {
        slidesPerView:1.5,
        autoplay:true,
        loop: true,
    
      }
    },
  });

  });
  $(document).ready(function(){
    const swiper = new Swiper('.swiper-res1', {
     
      spaceBetween: 20,
 
      breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1.4,
          autoplay:true,
          loop:true,
          speed: 200,
          centeredSlides: true,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          autoplay:true,
      
        },
        576: {
          slidesPerView:0,
          autoplay:true,
        
        },
     
      },
    });
  
    });
    $(document).ready(function(){
      const swiper = new Swiper('.swiper-res2', {
       
        
        navigation: {
          nextEl: '.swiper-button-next-w',
          prevEl: '.swiper-button-prev-w',
        },
        breakpoints: {
          // when window width is >= 320px
          280: {
            slidesPerView: 1.2,
            centeredSlides: true,
            autoplay:true,
            loop:true,
            speed: 200,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.2,
            autoplay:true,
            centeredSlides: false,
            spaceBetween: 20,
          },
          576: {
            slidesPerView:1.2,
            autoplay:true,
            centeredSlides: false,
            spaceBetween: 20,
          },
       
        },
      });
    
      });

      $(document).ready(function(){
        const swiper = new Swiper('.swiper-res3', {
         
          spaceBetween: 20,
          loop:true,
          navigation: {
            nextEl: '.swiper-button-next-t',
            prevEl: '.swiper-button-prev-t',
          },
          breakpoints: {
            // when window width is >= 320px
            280: {
              slidesPerView: 1.2,
              autoplay:true,
              loop:true,
              speed: 200,
              centeredSlides: true,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              autoplay:true,
          
            },
            576: {
              slidesPerView:2,
              autoplay:true,
            
            },
            767: {
              slidesPerView:2,
              autoplay:true,
            
            },
            1023: {
              slidesPerView:0,
              autoplay:true,
            
            },
          },
        });
      
        });

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

/***tab */
let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

console.log(tabTogglers);

tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      
       tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
      
    }
    
  });
});
