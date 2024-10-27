(function ($) {
  "user strict";

  // preloader
  $(".preloader").delay(800).animate({
    "opacity": "0"
  }, 800, function () {
      $(".preloader").css("display", "none");
  });

  $("select").niceSelect(),

// aos
AOS.init();


// $('.video-icon').lightcase();

$('.package-video > a').lightcase();

//Create Background Image
(function background() {
  let img = $('.bg_img');
  img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
  });
})();

// navbar-click
// $(".menu_has_children a").on("mouseover", function () {
//   var element = $(this).parent("li");
//   if (element.hasClass("show")) {
//     element.removeClass("show");
//     element.find("li").removeClass("show");
//   }
//   else {
//     element.addClass("show");
//     element.siblings("li").removeClass("show");
//     element.siblings("li").find("li").removeClass("show");
//   }
// });

// $(".has-sub > a").on("click", function () {
//   var element = $(this).parent("li");
//   if (element.hasClass("active")) {
//     element.removeClass("active");
//     element.children("ul").slideUp(500);
//   }
//   else {
//     element.siblings("li").removeClass('active');
//     element.addClass("active");
//     element.siblings("li").find("ul").slideUp(500);
//     element.children('ul').slideDown(500);
//   }
// });

// navbar-click
$(".navbar li a").on("click", function () {
  var element = $(this).parent("li");
  if (element.hasClass("show")) {
    element.removeClass("show");
    element.find("li").removeClass("show");
  }
  else {
    element.addClass("show");
    element.siblings("li").removeClass("show");
    element.siblings("li").find("li").removeClass("show");
  }
});

// scroll-to-top
var ScrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 100) {
      ScrollTop.removeClass("active");
  } else {
      ScrollTop.addClass("active");
  }
});

//Odometer
if ($(".statistics-item").length) {
  $(".statistics-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
}

//Search
$(".search-bar a").on('click', function() {
  $('.header-top-search-area').toggleClass('active');
});

// faq
$('.faq-wrapper .faq-title').on('click', function (e) {
  var element = $(this).parent('.faq-item');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('.faq-content').removeClass('open');
    element.find('.faq-content').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('.faq-content').slideDown(300, "swing");
    element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
    element.siblings('.faq-item').removeClass('open');
    element.siblings('.faq-item').find('.faq-title').removeClass('open');
    element.siblings('.taq-item').find('.faq-content').slideUp(300, "swing");
  }
});

// slider
var swiper = new Swiper('.feature-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.course-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.charter-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.package-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.client-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.client-slider-two', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    1240: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.gallery-slider', {
  slidesPerView: 2,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.gallery-slider-two', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.team-slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.blog-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.brand-slider', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    speeds: 2000,
    delay: 4000,
  },
  speed: 1000,
  breakpoints: {
    991: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 2,
    },
  }
});

//sidebar Menu
$(document).on('click', '.header-toggle-area', function () {
  $('.page-wrapper').toggleClass('show');
});

//Cross Menu
$('.nav-menu-close').on('click', function () {
  $('.page-wrapper').removeClass('show');
});

//Call Widget
$('.call-widget-btn').on('click', function(){
  $('.call-widget-wrapper').toggleClass('open');
});

// book + - start here
$(function () {
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() === "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    } 
    $button.parent().find("input").val(newVal);
  });
});

// skill circle progress bar
var skillLevel1 = $(".skill-item .first").data("skill-level");
var skillLevel2 = $(".skill-item .second").data("skill-level");
var skillLevel3 = $(".skill-item .third").data("skill-level");
var skillLevel4 = $(".skill-item .fourth").data("skill-level");
//first.circle
$(".first.circle").circleProgress({
  value: "0." + skillLevel1,
  size: 110,
  strokeWidth: 10,
  duration: 1400,
  delay: 2500,
  trailWidth: 10,
  emptyFill: "transparent",
  fill: {
    color: "#dcbb87"
  }
}).on("circle-animation-progress", function(event, progress) {
  $(this).find("strong").html(Math.round(96 * progress) + "<span>%</span>");
});

//second.circle
$(".second.circle").circleProgress({
  value: "0." + skillLevel2,
  size: 110,
  emptyFill: "transparent",
  fill: {
    color: "#dcbb87"
  }
}).on("circle-animation-progress", function(event, progress) {
  $(this).find("strong").html(Math.round(skillLevel2 * progress) + "<i>%</i>");
});

//third.circle
$(".third.circle").circleProgress({
  value: "0." + skillLevel3,
  size: 110,
  emptyFill: "transparent",
  fill: {
    color: "#dcbb87"
  }
}).on("circle-animation-progress", function(event, progress) {
  $(this).find("strong").html(Math.round(70 * progress) + "<span>%</span>");
});

//fourth.circle
$(".fourth.circle").circleProgress({
  value: "0." + skillLevel4,
  size: 110,
  emptyFill: "transparent",
  fill: {
    color: "#dcbb87"
  }
}).on("circle-animation-progress", function(event, progress) {
  $(this).find("strong").html(Math.round(90 * progress) + "<span>%</span>");
});

// progress bar
$(".progressbar").each(function(){
  $(this).find(".bar").animate({
    "width": $(this).attr("data-perc")
  },8000);
  $(this).find(".label").animate({
    "left": $(this).attr("data-perc")
  },8000);
});

// ratings form
$('.ratings-form-text').on('click', function(){
  $('.ratings-form').toggleClass('open');
});
  

})(jQuery);





// js particals 


    document.addEventListener("DOMContentLoaded", function () {
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "image",
                    image: {
                        src: "assets/images/gallery/planemoving.png",  // Use the icon image after rendering
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.7
                },
                size: {
                    value: 9
                },
                move: {
                    enable: true,
                    speed: 2, // Increase the speed for faster movement
                    direction: "right", // Set the direction to right (you can also use 'left', 'top', 'bottom')
                    out_mode: "out" // Particles disappear and re-enter when they move out of the canvas
                }
            },
            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    }
                }
            },
            detectRetina: true
        });
    });




    const form = document.getElementById('form');
    const result = document.getElementById('formresult');
    const submitbtn = document.getElementById('formsubmitbtn');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result.innerHTML = "Please wait..."
      submitbtn.style.display = 'none'; 
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;


                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });




    const form2 = document.getElementById('form2');
    const result2 = document.getElementById('formresult2');
    const submitbtn2 = document.getElementById('formsubmitbtn2');
    
    form2.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form2);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      result2.innerHTML = "Please wait..."
      submitbtn2.style.display = 'none'; 
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result2.innerHTML = json.message;


                } else {
                    console.log(response);
                    result2.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result2.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form2.reset();
                setTimeout(() => {
                    result2.style.display = "none";
                }, 3000);
            });
    });






// language translator code 
const translations = {
  en: {
      home: "Home",
      about: "About Us",
      pages: "Products",
      faq: "Certifications",
      contact: "Contact Us",
      title: "Global Import & Export Solutions",
      subtitle1: "Global",
      subtitle2: "Trade",
      description: "Hemroc Trading (Pvt.) Ltd. delivers excellence in import and export across industries, including hospitality, fresh produce, heavy machinery, and infrastructure. We ensure top-quality services tailored to your needs.",
      typedStrings: ["Via Air Freight", "Via Cargo Ships", "Via Land Transport"],



      // overview sectin 
      overviewtitle: "Tailored Solutions for Global Trading",
      overviewsubtitle: "Global Trading Experts",
      tab1: "Warehousing & Supply Chain",
      tab2: "Fresh Produce Supply Chain",
      tab3: "Heavy Machinery Logistics",
      tab4: "Hospitality Solutions",
      description1: "Hemroc Trading (Pvt.) Ltd. offers comprehensive warehousing and supply chain solutions to optimize your logistics process. With our state-of-the-art storage facilities.",
      description2: "Our fresh produce logistics ensure timely delivery and top-quality fruits, vegetables, and more, from farm to market across global destinations.",
      description3: "We specialize in the transport and logistics of heavy machinery, ensuring secure and efficient delivery for industrial and infrastructure projects.",
      description4: "Delivering premium import/export solutions to elevate your hospitality business. From luxury goods to essential supplies, we provide seamless, customized logistics for the hospitality industry.",



      // about section 
      aboutSubtitle1: "About ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Streamlining Global Import & Export Solutions for Diverse Industries",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. delivers unparalleled import/export services across industries such as hospitality, fresh produce , supply food chain and heavy machinery. With strategic offices in Qatar, Pakistan, Turkey and Italy, we ensure seamless logistics and tailored solutions that meet the specific needs of your business, enhancing efficiency and success in global trade.",
      callTitle: "Call for inquiries or place an order",

      // products section 
      productsubtitle: "Explore Hemroc Products",
      producttitle: "Premium Solutions for Your Business Needs",
      products1: "Fresh Fruits",
      products2: "Fresh Vegetables",
      products3: "Natural Honey",
      products4: "Premium Rice",
      products5: "Crafted Elegance",
      products6: "Kitchen Utensils",
      products7: "Fresh DryFruits",
      products8: "Himalayan Pink Salt",
      products9: "Harvest hub foods",



      // contact section 
      contactTitle: "Get in Touch with Hemroc: Let's Connect",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      messageLabel: "Message",
      submitBtn: "Send Message",


      // gallery section 
      sectionTitle: "Hemroc's Trusted Global Transportation & Logistics",
      package1Title1: "Fresh Fruits",
      package1Title2: "Fresh Mandarin",
      package1Title3: "Fresh vegetables",
      package1Title4: "Handicrafts",
      package1Title5: "Pure Natural Honey",
      package1Title6: "Fresh Mangoes",
      package1Title7: "Heavy Machinery",
      package1Title8: "Premium Rice",

      package1Destination1: "Destination: Qatar / UAE",
      package1Destination2: "Destination : Qatar / UAE",
      package1Destination3: "Destination : Qatar / UAE / Italy",
      package1Destination4: "Destination : Qatar / Turkey",
      package1Destination5: "Destination : Qatar / Kuwait",
      package1Destination6: "Destination : Qatar / Kuwait / EU",
      package1Destination7: "Destination : Qatar / KSA",
      package1Destination8: "Destination : Qatar / KSA",


      // certificate section 

      certificationTitle: "Hemroc Certifications",
      certificationDescription: "Through globally recognized certifications, we bring you the confidence of quality, reliability, and adherence to international standards.",


      // client section 
      clientTitle: "Our Valued Clients",
      clientDescription: "Trusted by Leading Brands Around the Globe",


      companyDescription: "Hemroc was founded in 2014 by a group of safety-focused professionals who delivers unparalleled trading services across different industries.",
      airFreight: "Our tailored air solutions meet the demands of fast-moving industries, ensuring your cargo reaches its destination swiftly.",
      cargoShips: "Our expansive fleet navigates key global trade routes, ensuring your bulk shipments arrive safely and on time.",
      landTransport: "Our extensive network of trucks and distribution channels guarantees fast, dependable transport for your overland needs."



  },
  fr: {
      home: "Accueil",
      about: "À propos",
      pages: "Produits",
      faq: "Certifications",
      contact: "Contactez",
      title: "Solutions de trading mondiales",
      subtitle1: "Commerce",
      subtitle2: "Mondial",
      description: "Hemroc Trading (Pvt.) Ltd. offre l'excellence dans l'importation et l'exportation à travers les industries, y compris l'hôtellerie, les produits frais, les machines lourdes et l'infrastructure. Nous garantissons des services de haute qualité adaptés à vos besoins.",
      typedStrings: ["Par Fret Aérien", "Cargos Maritimes", "Transport Terrestre"],


      // overview sectin 
      overviewtitle: "Solutions sur mesure pour le commerce mondial",
      overviewsubtitle: "Experts en commerce mondial",
      tab1: "Entrepôts & Chaîne logistique",
      tab2: "Chaîne logistique des produits frais",
      tab3: "Logistique des machines lourdes",
      tab4: "Solutions hôtelières",
      description1: "Hemroc Trading (Pvt.) Ltd. propose des solutions complètes d'entreposage et de chaîne logistique pour optimiser votre processus logistique. Avec nos installations de stockage ultramodernes.",
      description2: "Notre logistique des produits frais garantit la livraison rapide et de qualité de fruits, légumes, et plus encore, du champ au marché à travers des destinations mondiales.",
      description3: "Nous sommes spécialisés dans le transport et la logistique de machines lourdes, assurant une livraison sécurisée et efficace pour les projets industriels et d'infrastructure.",
      description4: "Fournissant des solutions premium d'import/export pour élever votre activité hôtelière. Des produits de luxe aux fournitures essentielles, nous offrons une logistique sur mesure et fluide pour l'industrie hôtelière.",


      // about section 
      aboutSubtitle1: "À propos ",
      aboutSubtitle2: "de Hemroc Trading",
      aboutTitle: "Rationalisation des solutions mondiales d'import et d'export pour diverses industries",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. offre des services d'import/export inégalés dans des secteurs tels que l'hôtellerie, les produits frais, la chaîne d'approvisionnement alimentaire et les machines lourdes. Avec des bureaux stratégiques au Qatar, au Pakistan, en Turquie et en Italie, nous assurons une logistique fluide et des solutions sur mesure répondant aux besoins spécifiques de votre entreprise, améliorant ainsi l'efficacité et le succès dans le commerce mondial.",
      callTitle: "Appelez pour toute demande ou commande",

      // protuct section 
      productsubtitle: "Découvrez les Produits Hemroc",
      producttitle: "Solutions Premium pour Vos Besoins Professionnels",
      products1: "Fruits Frais",
      products2: "Légumes Frais",
      products3: "Miel Naturel",
      products4: "Riz Premium",
      products5: "Élégance Artisanale",
      products6: "Ustensiles de Cuisine",
      products7: "Fruits Secs Frais",
      products8: "Sel Rose de l'Himalaya",
      products9: "Produits Harvest Hub",


      // contact section 
      contactTitle: "Contactez Hemroc: Connectons-nous",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      messageLabel: "Message",
      submitBtn: "Envoyer un message",


      // gallery section 
      sectionTitle: "Transport et Logistique Globale de Confiance d'Hemroc",
      package1Title1: "Fruits Frais",
      package1Title2: "Mandarines Fraîches",
      package1Title3: "Légumes Frais",
      package1Title4: "Artisanat",
      package1Title5: "Miel Pur Naturel",
      package1Title6: "Mangues Fraîches",
      package1Title7: "Machines Lourdes",
      package1Title8: "Riz Premium",

      package1Destination1: "Destination : Qatar / EAU",
      package1Destination2: "Destination : Qatar / EAU",
      package1Destination3: "Destination : Qatar / EAU / Italie",
      package1Destination4: "Destination : Qatar / Turquie",
      package1Destination5: "Destination : Qatar / Koweït",
      package1Destination6: "Destination : Qatar / Koweït / UE",
      package1Destination7: "Destination : Qatar / AS",
      package1Destination8: "Destination : Qatar / AS",


      // certificate section 


      certificationTitle: "Certifications Hemroc",
      certificationDescription: "À travers des certifications reconnues mondialement, nous vous apportons la confiance en la qualité, la fiabilité et le respect des normes internationales.",


      clientTitle: "Nos Clients Précieux",
      clientDescription: "De Grandes Marques Nous Font Confiance",


      companyDescription: "Hemroc a été fondée en 2014 par un groupe de professionnels axés sur la sécurité qui offre des services de trading inégalés dans différentes industries.",
      airFreight: "Nos solutions aériennes sur mesure répondent aux besoins des industries à rythme rapide, garantissant que votre cargaison atteint sa destination rapidement.",
      cargoShips: "Notre vaste flotte navigue sur les principales routes commerciales mondiales, garantissant l'arrivée en toute sécurité de vos expéditions en vrac.",
      landTransport: "Notre vaste réseau de camions et de canaux de distribution garantit un transport rapide et fiable pour vos besoins terrestres."

  },
  ar: {
      home: "الرئيسية",
      about: "معلومات ",
      pages: "منتجات",

      faq: "الشهادات",
      contact: "اتصل",
      title: "حلول واستراتيجيات الاستيراد والتصدير العالمية",
      subtitle1: " العالمية",
      subtitle2: "التجارة",
      typedStrings: ["عبر الشحن الجوي", "عبر السفن الشاحنة", "عبر النقل البري"],
      description: "توفر شركة Hemroc Trading (Pvt.) Ltd. التميز في الاستيراد والتصدير عبر الصناعات، بما في ذلك الضيافة والمنتجات الطازجة والآلات الثقيلة ومواد البناء والإلكترونيات والبنية التحتية. نحن نضمن خدمات لوجستية وسلسلة توريد عالية الجودة مصممة خصيصًا لتلبية احتياجاتك. ",


      // overview sectin 
      overviewtitle: "حلول مخصصة للتجارة العالمية",
      overviewsubtitle: "خبراء التجارة العالمية",
      tab1: "التخزين وسلسلة التوريد",
      tab2: "سلسلة توريد المنتجات الطازجة",
      tab3: "لوجستيات المعدات الثقيلة",
      tab4: "حلول الضيافة",
      description1: "تقدم Hemroc Trading (Pvt.) Ltd. حلول تخزين وسلسلة توريد شاملة لتحسين عملية لوجستياتك. مع مرافق التخزين المتطورة لدينا.",
      description2: "تضمن لوجستياتنا للمنتجات الطازجة التسليم في الوقت المناسب وجودة عالية للفواكه والخضروات وغيرها، من المزرعة إلى السوق عبر الوجهات العالمية.",
      description3: "نحن متخصصون في نقل ولوجستيات المعدات الثقيلة، مما يضمن تسليم آمن وفعال للمشاريع الصناعية والبنية التحتية.",
      description4: "تقديم حلول استيراد وتصدير متميزة لرفع مستوى عملك في مجال الضيافة. من السلع الفاخرة إلى المستلزمات الأساسية، نوفر لوجستيات مخصصة وسلسة لصناعة الضيافة.",


      // about section starts 
      aboutSubtitle1: "حول ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "توفير حلول عالمية متكاملة للاستيراد والتصدير عبر مختلف الصناعات",
      aboutDescription: "تقدم Hemroc Trading (Pvt.) Ltd. خدمات استيراد وتصدير لا مثيل لها في قطاعات مثل الضيافة، المنتجات الطازجة، سلسلة التوريد الغذائية والآلات الثقيلة. من خلال مكاتب استراتيجية في قطر، باكستان، تركيا وإيطاليا، نضمن لوجستيات سلسة وحلول مخصصة تلبي الاحتياجات الخاصة لشركتك، مما يعزز الكفاءة والنجاح في التجارة العالمية.",
      callTitle: "اتصل للاستفسار أو لطلب عرض أسعار",


      // product section 
      productsubtitle: "استكشاف منتجات هيمروك",
      producttitle: "حلول مميزة لتلبية احتياجات عملك",
      products1: "الفواكه الطازجة",
      products2: "الخضروات الطازجة",
      products3: "العسل الطبيعي",
      products4: "أرز فاخر",
      products5: "أناقة مصنوعة يدويًا",
      products6: "أدوات المطبخ",
      products7: "الفواكه المجففة الطازجة",
      products8: "ملح الهيمالايا الوردي",
      products9: "منتجات هارفست هب",



      // contact section 
      contactTitle: "تواصل مع Hemroc: دعنا نتواصل",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      messageLabel: "رسالة",
      submitBtn: "إرسال الرسالة",



      // gallery section 
      sectionTitle: "نقل Hemroc العالمي واللوجستيات الموثوقة",
      package1Title1: "فواكه طازجة",
      package1Title2: "يوسفي طازج",
      package1Title3: "خضروات طازجة",
      package1Title4: "الحرف اليدوية",
      package1Title5: "عسل طبيعي نقي",
      package1Title6: "مانجو طازجة",
      package1Title7: "آلات ثقيلة",
      package1Title8: "أرز ممتاز",

      package1Destination1: "الوجهة: قطر / الإمارات",
      package1Destination2: "الوجهة: قطر / الإمارات",
      package1Destination3: "الوجهة: قطر / الإمارات / إيطاليا",
      package1Destination4: "الوجهة: قطر / تركيا",
      package1Destination5: "الوجهة: قطر / الكويت",
      package1Destination6: "الوجهة: قطر / الكويت / الاتحاد الأوروبي",
      package1Destination7: "الوجهة: قطر / السعودية",
      package1Destination8: "الوجهة: قطر / السعودية",


      // certificate section 

      certificationTitle: "شهادات Hemroc",
      certificationDescription: "من خلال الشهادات المعترف بها عالميًا، نقدم لك الثقة في الجودة والموثوقية والالتزام بالمعايير الدولية.",


      clientTitle: "عملاؤنا المميزون",
      clientDescription: "موثوق من العلامات التجارية الرائدة عالميًا",



      companyDescription: "تأسست Hemroc في عام2014 من قبل مجموعة من المحترفين الذين يركزون على السلامة ويقدمون خدمات تداول لا مثيل لها عبر صناعات مختلفة.",
      airFreight: "تلبي حلولنا الجوية المخصصة احتياجات الصناعات سريعة الحركة، مما يضمن وصول شحنتك إلى وجهتها بسرعة.",
      cargoShips: "تتنقل أسطولنا الواسع في الطرق التجارية العالمية الرئيسية، مما يضمن وصول شحناتك بكميات كبيرة بأمان وفي الوقت المحدد.",
      landTransport: "شبكتنا الواسعة من الشاحنات وقنوات التوزيع تضمن النقل السريع والموثوق لاحتياجاتك البرية."


  },
  spanish: {
      home: "Inicio",
      about: "Sobre ",
      pages: "Productos",

      faq: "Certificaciones",
      contact: "Contáctenos",
      title: "Estrategias globales de comercio",
      subtitle1: "Comercio",
      subtitle2: "Global",
      typedStrings: ["Transporte Aéreo", "Buques Carga", "Transporte Terrestre"],
      description: "Hemroc Trading (Pvt.) Ltd. ofrece excelencia en la importación y exportación en diversas industrias, incluyendo hospitalidad, productos frescos, maquinaria pesada e infraestructura. Garantizamos servicios de la más alta calidad adaptados a sus necesidades.",



      // overview sectin 
      overviewtitle: "Soluciones para el Comercio Global",
      overviewsubtitle: "Expertos en Comercio Global",
      tab1: "Almacenamiento y Suministro",
      tab2: "Cadena de Productos Frescos",
      tab3: "Logística de Maquinaria Pesada",
      tab4: "Soluciones en Hostelería",
      description1: "Hemroc Trading (Pvt.) Ltd. ofrece soluciones integrales para optimizar su logística. Con instalaciones de almacenamiento de vanguardia.",
      description2: "Nuestra logística de productos frescos garantiza entrega puntual y frutas, verduras de calidad, del campo al mercado global.",
      description3: "Nos especializamos en transporte de maquinaria pesada, asegurando entrega segura y eficiente para proyectos industriales.",
      description4: "Ofrecemos soluciones de importación/exportación para su negocio de hostelería. Desde productos de lujo hasta suministros esenciales, brindamos logística sin problemas.",

      //    about section satart 
      aboutSubtitle1: "Acerca de ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Soluciones Globales de Importación y Exportación para Diversas Industrias",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. ofrece servicios incomparables de importación/exportación en sectores como la hospitalidad, productos frescos, cadena de suministro de alimentos y maquinaria pesada. Con oficinas estratégicas en Qatar, Pakistán, Turquía e Italia, garantizamos una logística fluida y soluciones personalizadas que cumplen con las necesidades específicas de su empresa, mejorando la eficiencia y el éxito en el comercio global.",
      callTitle: "Llamar para consultas o realizar un pedido",


      // products section 
      productsubtitle: "Explora los Productos de Hemroc",
      producttitle: "Soluciones Premium para tus Necesidades Empresariales",
      products1: "Frutas Frescas",
      products2: "Vegetales Frescos",
      products3: "Miel Natural",
      products4: "Arroz Premium",
      products5: "Elegancia Artesanal",
      products6: "Utensilios de Cocina",
      products7: "Frutos Secos Frescos",
      products8: "Sal Rosa del Himalaya",
      products9: "Alimentos Harvest Hub",

      // contact section 
      contactTitle: "Póngase en contacto con Hemroc: Conectémonos",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      messageLabel: "Mensaje",
      submitBtn: "Enviar mensaje",


      // gallery section 
      sectionTitle: "Transporte y Logística Global Confiable de Hemroc",
      package1Title1: "Frutas Frescas",
      package1Title2: "Mandarinas Frescas",
      package1Title3: "Verduras Frescas",
      package1Title4: "Artesanías",
      package1Title5: "Miel Pura Natural",
      package1Title6: "Mangos Frescos",
      package1Title7: "Maquinaria Pesada",
      package1Title8: "Arroz Premium",

      package1Destination1: "Destino: Catar / EAU",
      package1Destination2: "Destino: Catar / EAU",
      package1Destination3: "Destino: Catar / EAU / Italia",
      package1Destination4: "Destino: Catar / Turquía",
      package1Destination5: "Destino: Catar / Kuwait",
      package1Destination6: "Destino: Catar / Kuwait / UE",
      package1Destination7: "Destino: Catar / AS",
      package1Destination8: "Destino: Catar / AS",

      // certificate section 


      certificationTitle: "Certificaciones de Hemroc",
      certificationDescription: "A través de certificaciones reconocidas globalmente, le brindamos la confianza de calidad, fiabilidad y cumplimiento de normas internacionales.",



      clientTitle: "Nuestros Clientes Valiosos",
      clientDescription: "Confiado por Marcas Líderes en Todo el Mundo",



      companyDescription: "Hemroc fue fundada en 2014 por un grupo de profesionales enfocados en la seguridad que brindan servicios de comercio inigualables en diversas industrias.",
      airFreight: "Nuestras soluciones aéreas personalizadas satisfacen las demandas de industrias de rápido movimiento, asegurando que su carga llegue a su destino rápidamente.",
      cargoShips: "Nuestra extensa flota navega por las principales rutas comerciales globales, asegurando que sus envíos a granel lleguen de manera segura y a tiempo.",
      landTransport: "Nuestra extensa red de camiones y canales de distribución garantiza un transporte rápido y confiable para sus necesidades terrestres."

  },
  turkish: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      pages: "Ürünler",

      faq: "Sertifikalar",
      contact: "İletişim",
      title: "Küresel İthalat ve İhracat Çözümleri",
      subtitle1: "Küresel",
      subtitle2: "Ticaret",
      description: "Hemroc Trading (Pvt.) Ltd., konaklama, taze ürünler, ağır makineler ve altyapı dahil olmak üzere sektörlerde mükemmellik sunar. İhtiyaçlarınıza göre uyarlanmış en kaliteli hizmetleri garanti ediyoruz.",
      typedStrings: ["Hava Kargo ile", "Gemi ile", "Kara Taşımacılığı ile"],



      // overview sectin 
      overviewtitle: "Küresel Ticaret için Özel Çözümler",
      overviewsubtitle: "Küresel Ticaret Uzmanları",
      tab1: "Depolama ve Tedarik Zinciri",
      tab2: "Taze Ürün Tedarik Zinciri",
      tab3: "Ağır Makine Lojistiği",
      tab4: "Otelcilik Çözümleri",
      description1: "Hemroc Trading (Pvt.) Ltd., lojistik sürecinizi optimize etmek için kapsamlı depolama ve tedarik zinciri çözümleri sunar. En modern depolama tesislerimiz ile.",
      description2: "Taze ürün lojistiğimiz, çiftlikten pazara küresel destinasyonlara kadar zamanında teslimat ve en kaliteli meyve, sebze ve daha fazlasını sağlar.",
      description3: "Ağır makine taşımacılığı ve lojistiğinde uzmanız ve sanayi ve altyapı projeleri için güvenli ve verimli teslimat sağlıyoruz.",
      description4: "Otelcilik işinizi yükseltmek için üstün ithalat/ihracat çözümleri sunuyoruz. Lüks ürünlerden temel ihtiyaçlara kadar, otelcilik sektörü için sorunsuz, kişiye özel lojistik hizmeti sağlıyoruz.",

      //   about section 
      aboutSubtitle1: "Hakkında ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Çeşitli Sektörler için Küresel İthalat & İhracat Çözümleri",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. konaklama, taze ürünler, gıda tedarik zinciri ve ağır makineler gibi sektörlerde eşsiz ithalat/ihracat hizmetleri sunmaktadır. Katar, Pakistan, Türkiye ve İtalya'daki stratejik ofislerimizle, işinizin özel ihtiyaçlarını karşılayan, verimliliği ve küresel ticarette başarıyı artıran sorunsuz lojistik ve özel çözümler sağlıyoruz.",
      callTitle: "Sorular için veya sipariş vermek için arayın",


      // product section 
      productsubtitle: "Hemroc Ürünlerini Keşfedin",
      producttitle: "İşiniz İçin Premium Çözümler",
      products1: "Taze Meyveler",
      products2: "Taze Sebzeler",
      products3: "Doğal Bal",
      products4: "Premium Pirinç",
      products5: "Zarif El Sanatları",
      products6: "Mutfak Gereçleri",
      products7: "Taze Kuru Meyveler",
      products8: "Himalaya Pembe Tuzu",
      products9: "Harvest Hub Gıdaları",

      // contact section 
      contactTitle: "Hemroc ile İletişime Geçin: Bağlanalım",
      nameLabel: "İsim",
      emailLabel: "E-posta",
      phoneLabel: "Telefon",
      messageLabel: "Mesaj",
      submitBtn: "Mesaj Gönder",


      // gallery section 
      sectionTitle: "Hemroc'un Güvenilir Küresel Taşımacılığı ve Lojistiği",
      package1Title1: "Taze Meyveler",
      package1Title2: "Taze Mandalina",
      package1Title3: "Taze Sebzeler",
      package1Title4: "El Sanatları",
      package1Title5: "Saf Doğal Bal",
      package1Title6: "Taze Mangolar",
      package1Title7: "Ağır Makineler",
      package1Title8: "Premium Pirinç",

      package1Destination1: "Varış: Katar / BAE",
      package1Destination2: "Varış: Katar / BAE",
      package1Destination3: "Varış: Katar / BAE / İtalya",
      package1Destination4: "Varış: Katar / Türkiye",
      package1Destination5: "Varış: Katar / Kuveyt",
      package1Destination6: "Varış: Katar / Kuveyt / AB",
      package1Destination7: "Varış: Katar / Suudi Arabistan",
      package1Destination8: "Varış: Katar / Suudi Arabistan",


      // certificate section 

      certificationTitle: "Hemroc Sertifikaları",
      certificationDescription: "Dünya çapında tanınan sertifikalarla, size kalite, güvenilirlik ve uluslararası standartlara uygunluk güvencesi sunuyoruz.",


      clientTitle: "Değerli Müşterilerimiz",
      clientDescription: "Dünyanın Önde Gelen Markaları Tarafından Güveniliyor",


      companyDescription: "Hemroc, 2014 yılında farklı endüstrilerde rakipsiz ticaret hizmetleri sunan, güvenlik odaklı profesyoneller tarafından kuruldu.",
      airFreight: "Özel hava çözümlerimiz, hızlı hareket eden endüstrilerin taleplerini karşılar, kargonuzun hızlıca hedefine ulaşmasını sağlar.",
      cargoShips: "Geniş filomuz, küresel ticaret yollarında hareket ederek toplu sevkiyatlarınızın güvenli ve zamanında varmasını sağlar.",
      landTransport: "Kapsamlı kamyon ağımız ve dağıtım kanallarımız, kara taşımacılığı ihtiyaçlarınız için hızlı ve güvenilir taşıma hizmeti sunar."

  },
  Swedish: {
      home: "Hem",
      about: "Om oss",
      pages: "Produkter",

      faq: "Certifieringar",
      contact: "Kontakta oss",
      title: "Globala Import- Och Exportlösningar",
      subtitle1: "Global",
      subtitle2: "Handel",
      description: "Hemroc Trading (Pvt.) Ltd. levererar excellens inom import och export över industrier, inklusive gästfrihet, färska produkter, tunga maskiner och infrastruktur. Vi säkerställer toppkvalitetstjänster anpassade efter dina behov.",
      typedStrings: ["Via Flygfrakt", "Via Fraktskepp", "Via Landtransporter"],



      // overview sectin 
      overviewtitle: "Skräddarsydda lösningar för global handel",
      overviewsubtitle: "Experter på global handel",
      tab1: "Lagerhållning & Leveranskedja",
      tab2: "Leveranskedja för färska produkter",
      tab3: "Tungmaskinlogistik",
      tab4: "Lösningar för hotellbranschen",
      description1: "Hemroc Trading (Pvt.) Ltd. erbjuder omfattande lager- och leveranskedjelösningar för att optimera din logistikprocess. Med våra toppmoderna lagringsanläggningar.",
      description2: "Vår logistik för färska produkter säkerställer snabb leverans och högkvalitativa frukter, grönsaker och mer, från gård till marknad över globala destinationer.",
      description3: "Vi är specialiserade på transport och logistik av tunga maskiner och säkerställer säker och effektiv leverans för industri- och infrastrukturprojekt.",
      description4: "Vi levererar premium import/export-lösningar för att höja din hotellverksamhet. Från lyxvaror till nödvändiga leveranser, vi erbjuder sömlös, skräddarsydd logistik för hotellbranschen.",

      // about section 
      aboutSubtitle1: "Om ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Skräddarsydda Globala Lösningar för Import och Export inom Olika Branscher",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. levererar oöverträffade import/exporttjänster inom branscher som hotell, färskvaror, livsmedelskedjan och tunga maskiner. Med strategiska kontor i Qatar, Pakistan, Turkiet och Italien, säkerställer vi smidig logistik och skräddarsydda lösningar som möter ditt företags specifika behov, vilket ökar effektiviteten och framgången i global handel.",
      callTitle: "Ring för frågor eller beställ",

      // product section 
      productsubtitle: "Utforska Hemroc Produkter",
      producttitle: "Premiumlösningar för Dina Affärsbehov",
      products1: "Färska Frukter",
      products2: "Färska Grönsaker",
      products3: "Naturlig Honung",
      products4: "Premiumris",
      products5: "Handgjord Elegans",
      products6: "Köksredskap",
      products7: "Färska Torkade Frukter",
      products8: "Himalaya Pink Salt",
      products9: "Harvest Hub Matvaror",

      // contact section 
      contactTitle: "Kom i kontakt med Hemroc: Låt oss ansluta",
      nameLabel: "Namn",
      emailLabel: "E-post",
      phoneLabel: "Telefon",
      messageLabel: "Meddelande",
      submitBtn: "Skicka meddelande",


      // gallery section 
      sectionTitle: "Hemrocs Pålitliga Globala Transport och Logistik",
      package1Title1: "Färska Frukter",
      package1Title2: "Färsk Mandarin",
      package1Title3: "Färska Grönsaker",
      package1Title4: "Handarbete",
      package1Title5: "Ren Naturlig Honung",
      package1Title6: "Färska Mangor",
      package1Title7: "Tunga Maskiner",
      package1Title8: "Premium Ris",

      package1Destination1: "Destination: Qatar / Förenade Arabemiraten",
      package1Destination2: "Destination: Qatar / Förenade Arabemiraten",
      package1Destination3: "Destination: Qatar / Förenade Arabemiraten / Italien",
      package1Destination4: "Destination: Qatar / Turkiet",
      package1Destination5: "Destination: Qatar / Kuwait",
      package1Destination6: "Destination: Qatar / Kuwait / EU",
      package1Destination7: "Destination: Qatar / Saudiarabien",
      package1Destination8: "Destination: Qatar / Saudiarabien",

      // certificate 

      certificationTitle: "Hemroc Certifieringar",
      certificationDescription: "Genom globalt erkända certifieringar ger vi dig tryggheten av kvalitet, tillförlitlighet och efterlevnad av internationella standarder.",


      clientTitle: "Våra Värderade Kunder",
      clientDescription: "Betrodd av ledande varumärken runt om i världen",


      companyDescription: "Hemroc grundades 2014 av en grupp säkerhetsinriktade yrkesmän som levererar oöverträffade handelstjänster över olika branscher.",
      airFreight: "Våra skräddarsydda luftlösningar möter behoven från snabbflytande industrier och ser till att ditt gods når sin destination snabbt.",
      cargoShips: "Vår omfattande flotta navigerar på viktiga globala handelsvägar och säkerställer att dina bulkleveranser anländer säkert och i tid.",
      landTransport: "Vårt omfattande nätverk av lastbilar och distributionskanaler garanterar snabb och pålitlig transport för dina landbehov."




  },
  Italian: {
      home: "Home",
      about: "Chi siamo",
      pages: "Prodotti",

      faq: "Certificazioni",
      contact: "Contatti",
      title: "Soluzioni Commerciali Globali",
      subtitle1: "Commercio",
      subtitle2: "Globale",
      description: "Hemroc Trading (Pvt.) Ltd. offre eccellenza nell'importazione ed esportazione in vari settori, tra cui ospitalità, prodotti freschi, macchinari pesanti e infrastrutture. Garantiamo servizi di alta qualità adattati alle vostre esigenze.",
      typedStrings: ["Via Trasporto Aereo", "Via Navi da Carico", "Via Trasporto Terrestre"],



      // overview sectin 
      overviewtitle: "Soluzioni su misura per il commercio globale",
      overviewsubtitle: "Esperti di commercio globale",
      tab1: "Magazzinaggio e Catena di Fornitura",
      tab2: "Catena di Fornitura di Prodotti Freschi",
      tab3: "Logistica di Macchinari Pesanti",
      tab4: "Soluzioni per l'Ospitalità",
      description1: "Hemroc Trading (Pvt.) Ltd. offre soluzioni complete di magazzinaggio e catena di fornitura per ottimizzare il tuo processo logistico. Con le nostre strutture di stoccaggio all'avanguardia.",
      description2: "La nostra logistica per i prodotti freschi garantisce consegne puntuali e frutta, verdura e altro di alta qualità, dal campo al mercato in destinazioni globali.",
      description3: "Siamo specializzati nel trasporto e nella logistica di macchinari pesanti, garantendo consegne sicure ed efficienti per progetti industriali e infrastrutturali.",
      description4: "Offriamo soluzioni premium di import/export per far crescere il tuo business nell'ospitalità. Dai beni di lusso alle forniture essenziali, forniamo logistica personalizzata e senza intoppi per il settore dell'ospitalità.",
      //   about section 
      aboutSubtitle1: "Su ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Soluzioni Globali su Misura per l'Import & Export per Settori Diversi",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. fornisce servizi di import/export senza pari in settori come l'ospitalità, prodotti freschi, catena di approvvigionamento alimentare e macchinari pesanti. Con uffici strategici in Qatar, Pakistan, Turchia e Italia, garantiamo una logistica fluida e soluzioni personalizzate che soddisfano le specifiche esigenze della tua azienda, migliorando l'efficienza e il successo nel commercio globale.",
      callTitle: "Chiama per informazioni o ordini",


      // product section 
      productsubtitle: "Esplora i Prodotti Hemroc",
      producttitle: "Soluzioni Premium per le Tue Esigenze Aziendali",
      products1: "Frutta Fresca",
      products2: "Verdura Fresca",
      products3: "Miele Naturale",
      products4: "Riso Premium",
      products5: "Eleganza Artigianale",
      products6: "Utensili da Cucina",
      products7: "Frutta Secca Fresca",
      products8: "Sale Rosa Himalayano",
      products9: "Prodotti Harvest Hub",


      // contact section 
      contactTitle: "Mettiti in contatto con Hemroc: Connettiamoci",
      nameLabel: "Nome",
      emailLabel: "Email",
      phoneLabel: "Telefono",
      messageLabel: "Messaggio",
      submitBtn: "Invia Messaggio",


      // gallery section 
      sectionTitle: "Trasporto e Logistica Globale Affidabile di Hemroc",
      package1Title1: "Frutta Fresca",
      package1Title2: "Mandarino Fresco",
      package1Title3: "Verdure Fresche",
      package1Title4: "Artigianato",
      package1Title5: "Miele Naturale Puro",
      package1Title6: "Mango Freschi",
      package1Title7: "Macchinari Pesanti",
      package1Title8: "Riso Premium",

      package1Destination1: "Destinazione: Qatar / EAU",
      package1Destination2: "Destinazione: Qatar / EAU",
      package1Destination3: "Destinazione: Qatar / EAU / Italia",
      package1Destination4: "Destinazione: Qatar / Turchia",
      package1Destination5: "Destinazione: Qatar / Kuwait",
      package1Destination6: "Destinazione: Qatar / Kuwait / UE",
      package1Destination7: "Destinazione: Qatar / AS",
      package1Destination8: "Destinazione: Qatar / AS",


      // certificate 

      certificationTitle: "Certificazioni Hemroc",
      certificationDescription: "Attraverso certificazioni riconosciute a livello globale, ti offriamo la sicurezza di qualità, affidabilità e conformità agli standard internazionali.",

      clientTitle: "I Nostri Clienti Valorizzati",
      clientDescription: "Fiducia dei marchi leader in tutto il mondo",


      companyDescription: "Hemroc è stata fondata nel 2014 da un gruppo di professionisti orientati alla sicurezza che offrono servizi di trading senza pari in vari settori.",
      airFreight: "Le nostre soluzioni aeree su misura soddisfano le esigenze di industrie in rapido movimento, assicurando che il tuo carico arrivi a destinazione rapidamente.",
      cargoShips: "La nostra flotta espansiva naviga sulle principali rotte commerciali globali, garantendo che le tue spedizioni di massa arrivino in sicurezza e puntuali.",
      landTransport: "La nostra vasta rete di camion e canali di distribuzione garantisce trasporti veloci e affidabili per le tue esigenze di trasporto via terra."



  },
  jp: {
      home: "ホーム",
      about: "会社概要",
      pages: "製品",
      faq: "認証",
      contact: "お問い合わせ",
      title: "グローバル輸出入ソリューション",
      subtitle1: "グローバル",
      subtitle2: "トレード",
      description: "Hemroc Trading (Pvt.) Ltd.は、ホスピタリティ、農産物、重機、インフラを含む各業界において、輸出入における卓越したサービスを提供します。お客様のニーズに合わせた高品質なサービスを確保します。",
      typedStrings: ["空輸", "貨物船", "陸上輸送"],


      // overview section 
      overviewtitle: "グローバル取引向けのカスタムソリューション",
      overviewsubtitle: "グローバル取引の専門家",
      tab1: "倉庫保管とサプライチェーン",
      tab2: "生鮮品のサプライチェーン",
      tab3: "重機物流",
      tab4: "ホスピタリティソリューション",
      description1: "Hemroc Trading (Pvt.) Ltd.は、ロジスティクスプロセスを最適化するための包括的な倉庫保管およびサプライチェーンソリューションを提供します。最新の保管施設を備えています。",
      description2: "当社の生鮮品物流は、農場から市場までのタイムリーな配達と高品質の果物や野菜などを世界中の目的地にお届けします。",
      description3: "私たちは重機の輸送と物流を専門としており、産業およびインフラプロジェクトのための安全で効率的な配送を保証します。",
      description4: "ホスピタリティビジネスを向上させるためのプレミアムな輸出入ソリューションを提供しています。高級品から必需品まで、ホスピタリティ業界向けにシームレスでカスタマイズされた物流を提供します。",
      //  about section 
      aboutSubtitle1: "概要 ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "多様な産業向けグローバル輸出入ソリューションの効率化",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. は、ホスピタリティ、生鮮食品、食品供給チェーン、重機などの産業において比類のない輸出入サービスを提供します。カタール、パキスタン、トルコ、イタリアの戦略的なオフィスを通じて、スムーズな物流と、ビジネスの特定のニーズに応じたカスタマイズされたソリューションを確実に提供し、グローバル貿易における効率と成功を向上させます。",
      callTitle: "お問い合わせやご注文はお電話ください",


      // product section 
      productsubtitle: "ヘムロック製品を探索する",
      producttitle: "ビジネスニーズのためのプレミアムソリューション",
      products1: "新鮮な果物",
      products2: "新鮮な野菜",
      products3: "天然の蜂蜜",
      products4: "高級米",
      products5: "工芸的な優雅さ",
      products6: "キッチン用品",
      products7: "新鮮なドライフルーツ",
      products8: "ヒマラヤピンクソルト",
      products9: "ハーベストハブ食品",


      // contact section 
      contactTitle: "Hemrocと連絡を取る: つながりましょう",
      nameLabel: "名前",
      emailLabel: "メール",
      phoneLabel: "電話番号",
      messageLabel: "メッセージ",
      submitBtn: "メッセージを送信",


      // gallery section 
      sectionTitle: "ヘムロックの信頼できるグローバル輸送・物流",
      package1Title1: "新鮮な果物",
      package1Title2: "新鮮なミカン",
      package1Title3: "新鮮な野菜",
      package1Title4: "手工芸品",
      package1Title5: "純粋な天然蜂蜜",
      package1Title6: "新鮮なマンゴー",
      package1Title7: "重機",
      package1Title8: "高級米",

      package1Destination1: "目的地：カタール / UAE",
      package1Destination2: "目的地：カタール / UAE",
      package1Destination3: "目的地：カタール / UAE / イタリア",
      package1Destination4: "目的地：カタール / トルコ",
      package1Destination5: "目的地：カタール / クウェート",
      package1Destination6: "目的地：カタール / クウェート / EU",
      package1Destination7: "目的地：カタール / サウジアラビア",
      package1Destination8: "目的地：カタール / サウジアラビア",

      // certificate section 

      certificationTitle: "ヘムロックの認証",
      certificationDescription: "世界的に認められた認証を通じて、品質、信頼性、国際基準の遵守に対する自信をお届けします。",


      clientTitle: "大切なお客様",
      clientDescription: "世界中の大手ブランドから信頼されています",



      companyDescription: "Hemrocは2014年に、安全を重視する専門家のグループによって設立され、さまざまな業界で比類のない取引サービスを提供しています。",
      airFreight: "当社のカスタマイズされた航空ソリューションは、急速に動く産業の要求を満たし、貨物が迅速に目的地に到着することを保証します。",
      cargoShips: "当社の広範な艦隊は主要な国際貿易ルートを航行し、大量貨物が安全に時間通りに到着することを保証します。",
      landTransport: "当社の広範なトラックネットワークと流通チャネルは、陸上輸送のニーズに対して迅速で信頼できる輸送を保証します。"




  },
  mly: {
      home: "Utama",
      about: "Tentang",
      pages: "Produk",
      faq: "Pensijilan",
      contact: "Hubungi",
      title: "Penyelesaian Import & Eksport Global",
      subtitle1: "Global",
      subtitle2: "Perdagangan",
      description: "Hemroc Trading (Pvt.) Ltd. memberikan perkhidmatan cemerlang dalam import dan eksport merentasi industri, termasuk hospitaliti, hasil segar, jentera berat, dan infrastruktur. Kami memastikan perkhidmatan berkualiti tinggi disesuaikan dengan keperluan anda.",
      typedStrings: ["Melalui Kargo Udara", "Melalui Kapal Kargo", "Melalui  Darat"],


      // overview section 
      overviewtitle: "Penyelesaian Disesuaikan untuk Perdagangan Global",
      overviewsubtitle: "Pakar Perdagangan Global",
      tab1: "Penyimpanan & Rantaian Bekalan",
      tab2: "Rantaian Bekalan Hasil Segar",
      tab3: "Logistik Mesin Berat",
      tab4: "Penyelesaian Hospitaliti",
      description1: "Hemroc Trading (Pvt.) Ltd. menawarkan penyimpanan komprehensif dan penyelesaian rantaian bekalan untuk mengoptimumkan proses logistik anda.",
      description2: "Logistik hasil segar kami memastikan penghantaran tepat pada masanya dan buah-buahan, sayur-sayuran berkualiti tinggi, dari ladang ke pasaran di destinasi global.",
      description3: "Kami pakar dalam pengangkutan dan logistik mesin berat, memastikan penghantaran selamat dan cekap untuk projek industri dan infrastruktur.",
      description4: "Menyediakan penyelesaian import/eksport premium untuk meningkatkan perniagaan hospitaliti anda. Dari barangan mewah hingga bekalan penting, kami menyediakan logistik khusus dan lancar untuk industri hospitaliti.",

      // about section 
      aboutSubtitle1: "Mengenai ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Memudahkan Penyelesaian Import & Eksport Global untuk Pelbagai Industri",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. menyediakan perkhidmatan import/eksport yang tiada tandingan dalam industri seperti perhotelan, hasil segar, rantaian bekalan makanan dan mesin berat. Dengan pejabat strategik di Qatar, Pakistan, Turki dan Itali, kami memastikan logistik yang lancar dan penyelesaian yang disesuaikan untuk memenuhi keperluan khusus perniagaan anda, meningkatkan kecekapan dan kejayaan dalam perdagangan global.",
      callTitle: "Call untuk pertanyaan atau order",

      // product section 
      productsubtitle: "Terokai Produk Hemroc",
      producttitle: "Penyelesaian Premium untuk Keperluan Perniagaan Anda",
      products1: "Buah-buahan Segar",
      products2: "Sayur-sayuran Segar",
      products3: "Madu Semulajadi",
      products4: "Beras Premium",
      products5: "Keanggunan Buatan Tangan",
      products6: "Peralatan Dapur",
      products7: "Buah-buahan Kering Segar",
      products8: "Garam Merah Jambu Himalaya",
      products9: "Makanan Harvest Hub",


      // contact section 
      contactTitle: "Hubungi Hemroc: Mari Berhubung",
      nameLabel: "Nama",
      emailLabel: "Emel",
      phoneLabel: "Telefon",
      messageLabel: "Mesej",
      submitBtn: "Hantar Mesej",


      sectionTitle: "Pengangkutan & Logistik Global Terpercaya Hemroc",
      package1Title1: "Buah Segar",
      package1Title2: "Limau Segar",
      package1Title3: "Sayur-sayuran Segar",
      package1Title4: "Kraf Tangan",
      package1Title5: "Madu Asli Tulen",
      package1Title6: "Mangga Segar",
      package1Title7: "Mesin Berat",
      package1Title8: "Beras Premium",

      package1Destination1: "Destinasi: Qatar / UAE",
      package1Destination2: "Destinasi: Qatar / UAE",
      package1Destination3: "Destinasi: Qatar / UAE / Itali",
      package1Destination4: "Destinasi: Qatar / Turki",
      package1Destination5: "Destinasi: Qatar / Kuwait",
      package1Destination6: "Destinasi: Qatar / Kuwait / EU",
      package1Destination7: "Destinasi: Qatar / Arab Saudi",
      package1Destination8: "Destinasi: Qatar / Arab Saudi",


      // certificate 

      certificationTitle: "Sijil Hemroc",
      certificationDescription: "Melalui pensijilan yang diiktiraf secara global, kami membawa keyakinan kualiti, kebolehpercayaan, dan pematuhan kepada piawaian antarabangsa.",


      clientTitle: "Pelanggan Bernilai Kami",
      clientDescription: "Dipercayai oleh Jenama Terkemuka Di Seluruh Dunia",


      companyDescription: "Hemroc diasaskan pada 2014 oleh sekumpulan profesional yang fokus pada keselamatan yang menawarkan perkhidmatan perdagangan yang tiada tandingannya dalam pelbagai industri.",
      airFreight: "Penyelesaian udara kami yang disesuaikan memenuhi tuntutan industri yang bergerak pantas, memastikan kargo anda sampai ke destinasinya dengan cepat.",
      cargoShips: "Armada kami yang luas menavigasi laluan perdagangan global utama, memastikan penghantaran pukal anda tiba dengan selamat dan tepat pada masanya.",
      landTransport: "Rangkaian trak kami yang luas dan saluran pengedaran memastikan pengangkutan yang cepat dan boleh dipercayai untuk keperluan darat anda."


  },
  german: {
      home: "Startseite",
      about: "Um",
      pages: "Produkte",
      faq: "Zertifizierungen",
      contact: "Kontakt",
      title: "Globale Import- & Exportlösungen",
      subtitle1: "Global",
      subtitle2: "Handel",
      description: "Hemroc Trading (Pvt.) Ltd. bietet Exzellenz im Import und Export über verschiedene Branchen, einschließlich Gastgewerbe, frische Produkte, schwere Maschinen und Infrastruktur. Wir gewährleisten maßgeschneiderte Qualitätsdienstleistungen, die auf Ihre Bedürfnisse abgestimmt sind.",
      typedStrings: ["Per Luftfracht", "Per Frachtschiff", "Per Landtransport"],


      // overview section 
      overviewtitle: "Maßgeschneiderte Lösungen für den globalen Handel",
      overviewsubtitle: "Experten für globalen Handel",
      tab1: "Lagerhaltung & Lieferkette",
      tab2: "Lieferkette für frische Produkte",
      tab3: "Schwermaschinenlogistik",
      tab4: "Lösungen für Gastgewerbe",
      description1: "Hemroc Trading (Pvt.) Ltd. bietet umfassende Lager- und Lieferkettenlösungen, um Ihren Logistikprozess zu optimieren. Mit unseren modernen Lagerstätten.",
      description2: "Unsere frischen Logistiklösungen gewährleisten die rechtzeitige Lieferung und hochwertige Früchte, Gemüse und mehr, vom Hof bis zum Markt auf globaler Ebene.",
      description3: "Wir sind spezialisiert auf den Transport und die Logistik von Schwermaschinen und gewährleisten eine sichere und effiziente Lieferung für industrielle und Infrastrukturprojekte.",
      description4: "Wir bieten Premium-Import-/Exportlösungen zur Verbesserung Ihres Gastronomiebetriebs. Von Luxusgütern bis hin zu lebenswichtigen Lieferungen.",
      //   about section 
      aboutSubtitle1: "Über ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Optimierung Globaler Import- & Exportlösungen für Vielfältige Branchen",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd. bietet unvergleichliche Import-/Export-Dienstleistungen in Branchen wie Gastgewerbe, Frischwaren, Lebensmittelversorgungskette und Schwermaschinen. Mit strategischen Büros in Katar, Pakistan, der Türkei und Italien sorgen wir für nahtlose Logistik und maßgeschneiderte Lösungen, die die spezifischen Bedürfnisse Ihres Unternehmens erfüllen und die Effizienz und den Erfolg im globalen Handel steigern.",
      callTitle: "Bei Fragen oder Bestellung anrufen",


      // product section 
      productsubtitle: "Erkunden Sie Hemroc Produkte",
      producttitle: "Premiumlösungen für Ihre Geschäftsanforderungen",
      products1: "Frisches Obst",
      products2: "Frisches Gemüse",
      products3: "Natürlicher Honig",
      products4: "Premiumreis",
      products5: "Handgefertigte Eleganz",
      products6: "Küchenutensilien",
      products7: "Frische Trockenfrüchte",
      products8: "Himalaya-Pink-Salz",
      products9: "Harvest Hub Lebensmittel",


      // contact section 
      contactTitle: "Kontaktieren Sie Hemroc: Lassen Sie uns verbinden",
      nameLabel: "Name",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      messageLabel: "Nachricht",
      submitBtn: "Nachricht senden",


      // gallery section 
      sectionTitle: "Hemrocs Vertrauenswürdiger Globaler Transport & Logistik",
      package1Title1: "Frisches Obst",
      package1Title2: "Frische Mandarine",
      package1Title3: "Frisches Gemüse",
      package1Title4: "Handwerkskunst",
      package1Title5: "Reiner Natürlicher Honig",
      package1Title6: "Frische Mangos",
      package1Title7: "Schwermaschinen",
      package1Title8: "Premium Reis",

      package1Destination1: "Ziel: Katar / VAE",
      package1Destination2: "Ziel: Katar / VAE",
      package1Destination3: "Ziel: Katar / VAE / Italien",
      package1Destination4: "Ziel: Katar / Türkei",
      package1Destination5: "Ziel: Katar / Kuwait",
      package1Destination6: "Ziel: Katar / Kuwait / EU",
      package1Destination7: "Ziel: Katar / Saudi-Arabien",
      package1Destination8: "Ziel: Katar / Saudi-Arabien",


      // certificate section 

      certificationTitle: "Hemroc Zertifizierungen",
      certificationDescription: "Durch weltweit anerkannte Zertifizierungen bieten wir Ihnen Vertrauen in Qualität, Zuverlässigkeit und Einhaltung internationaler Standards.",


      clientTitle: "Unsere Geschätzten Kunden",
      clientDescription: "Vertraut von Führenden Marken Weltweit",



      companyDescription: "Hemroc wurde 2014 von einer Gruppe sicherheitsorientierter Fachleute gegründet, die unvergleichliche Handelsdienstleistungen in verschiedenen Branchen anbieten.",
      airFreight: "Unsere maßgeschneiderten Luftlösungen erfüllen die Anforderungen schnelllebiger Industrien und sorgen dafür, dass Ihre Fracht schnell ans Ziel gelangt.",
      cargoShips: "Unsere umfangreiche Flotte befahren wichtige globale Handelsrouten, um sicherzustellen, dass Ihre Massengutsendungen sicher und pünktlich ankommen.",
      landTransport: "Unser weitreichendes Netzwerk von LKWs und Vertriebskanälen garantiert einen schnellen und zuverlässigen Transport für Ihre Landfrachtbedürfnisse."


  },
  potagal: {
      home: "Início",
      about: "Sobre Nós",
      pages: "Produtos",
      faq: "Certificações",
      contact: "Contato",
      title: "Soluções Globais de Importação e Exportação",
      subtitle1: "Global",
      subtitle2: "Comércio",
      description: "A Hemroc Trading (Pvt.) Ltd. oferece excelência em importação e exportação em diversos setores, incluindo hotelaria, produtos frescos, máquinas pesadas e infraestrutura. Garantimos serviços de alta qualidade adaptados às suas necessidades.",
      typedStrings: ["Por Carga Aérea", "Por Navios de Carga", "Por Transporte Terrestre"],


      // overview section 
      overviewtitle: "Soluções Personalizadas para o Comércio Global",
      overviewsubtitle: "Especialistas em Comércio Global",
      tab1: "Armazenamento e Cadeia de Suprimentos",
      tab2: "Cadeia de Suprimentos de Produtos Frescos",
      tab3: "Logística de Máquinas Pesadas",
      tab4: "Soluções para Hotelaria",
      description1: "A Hemroc Trading (Pvt.) Ltd. oferece soluções completas de armazenamento e cadeia de abastecimento para otimizar o seu processo logístico.",
      description2: "Nossa logística de produtos frescos garante entrega pontual e frutas, vegetais e mais de alta qualidade, do campo ao mercado em destinos globais.",
      description3: "Somos especializados no transporte e logística de máquinas pesadas, garantindo entrega segura e eficiente para projetos industriais e de infraestrutura.",
      description4: "Oferecemos soluções premium de importação/exportação para impulsionar seu negócio de hotelaria. De produtos de luxo a suprimentos essenciais, fornecemos logística personalizada e sem complicações para a indústria hoteleira.",


      //  about section 

      aboutSubtitle1: "Sobre ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "Soluções Globais de Importação & Exportação para Diversos Setores",
      aboutDescription: "A Hemroc Trading (Pvt.) Ltd. oferece serviços incomparáveis de importação/exportação em setores como hospitalidade, produtos frescos, cadeia de abastecimento alimentar e máquinas pesadas. Com escritórios estratégicos no Qatar, Paquistão, Turquia e Itália, garantimos uma logística fluida e soluções personalizadas que atendem às necessidades específicas do seu negócio, melhorando a eficiência e o sucesso no comércio global.",
      callTitle: "Ligue para fazer o pedido",


      // product section 
      productsubtitle: "Explore os Produtos Hemroc",
      producttitle: "Soluções Premium para as Necessidades do seu Negócio",
      products1: "Frutas Frescas",
      products2: "Legumes Frescos",
      products3: "Mel Natural",
      products4: "Arroz Premium",
      products5: "Elegância Artesanal",
      products6: "Utensílios de Cozinha",
      products7: "Frutas Secas Frescas",
      products8: "Sal Rosa do Himalaia",
      products9: "Alimentos Harvest Hub",


      // contact section 
      contactTitle: "Entre em contato com a Hemroc: Vamos Conectar",
      nameLabel: "Nome",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      messageLabel: "Mensagem",
      submitBtn: "Enviar Mensagem",

      // gallery section 

      sectionTitle: "Transporte e Logística Global Confiável da Hemroc",
      package1Title1: "Frutas Frescas",
      package1Title2: "Tangerinas Frescas",
      package1Title3: "Legumes Frescos",
      package1Title4: "Artesanato",
      package1Title5: "Mel Puro Natural",
      package1Title6: "Mangas Frescas",
      package1Title7: "Máquinas Pesadas",
      package1Title8: "Arroz Premium",

      package1Destination1: "Destino: Catar / EAU",
      package1Destination2: "Destino: Catar / EAU",
      package1Destination3: "Destino: Catar / EAU / Itália",
      package1Destination4: "Destino: Catar / Turquia",
      package1Destination5: "Destino: Catar / Kuwait",
      package1Destination6: "Destino: Catar / Kuwait / UE",
      package1Destination7: "Destino: Catar / AS",
      package1Destination8: "Destino: Catar / AS",


      // certificate section 

      certificationTitle: "Certificações Hemroc",
      certificationDescription: "Através de certificações reconhecidas globalmente, trazemos a confiança na qualidade, confiabilidade e conformidade com os padrões internacionais.",

      clientTitle: "Nossos Clientes Valiosos",
      clientDescription: "Confiado por Marcas Líderes em Todo o Mundo",


      companyDescription: "A Hemroc foi fundada em 2014 por um grupo de profissionais focados na segurança que oferece serviços de negociação incomparáveis em diferentes indústrias.",
      airFreight: "Nossas soluções aéreas personalizadas atendem às demandas de indústrias em rápido movimento, garantindo que sua carga chegue rapidamente ao destino.",
      cargoShips: "Nossa ampla frota navega nas principais rotas comerciais globais, garantindo que suas remessas em massa cheguem com segurança e a tempo.",
      landTransport: "Nossa ampla rede de caminhões e canais de distribuição garante transporte rápido e confiável para suas necessidades terrestres."


  },
  korea: {
      home: "홈",
      about: "회사 소개",
      pages: "제품",
      faq: "인증서",
      contact: "문의하기",
      title: "글로벌 수출입 솔루션",
      subtitle1: "글로벌",
      subtitle2: "무역",
      description: "Hemroc Trading (Pvt.) Ltd.는 호텔업, 신선 농산물, 중장비, 인프라를 포함한 다양한 산업에 걸쳐 수출입 분야에서 탁월함을 제공합니다. 고객의 요구에 맞춘 고품질 서비스를 보장합니다.",
      typedStrings: ["항공 화물", "화물선", "육상 운송"],


      // overview section 
      overviewtitle: "글로벌 무역을 위한 맞춤형 솔루션",
      overviewsubtitle: "글로벌 무역 전문가",
      tab1: "창고 및 공급망",
      tab2: "신선 농산물 공급망",
      tab3: "중장비 물류",
      tab4: "환대 산업 솔루션",
      description1: "Hemroc Trading (Pvt.) Ltd.는 귀하의 물류 프로세스를 최적화하기 위한 포괄적인 창고 및 공급망 솔루션을 제공합니다. 최첨단 저장 시설과 함께.",
      description2: "저희의 신선 농산물 물류는 제때의 배송과 최고 품질의 과일, 채소 등을 농장에서 시장으로 전 세계 목적지로 제공합니다.",
      description3: "저희는 중장비 운송 및 물류에 특화되어 있으며, 산업 및 인프라 프로젝트에 안전하고 효율적인 배송을 보장합니다.",
      description4: "귀하의 환대 산업을 향상시키기 위한 프리미엄 수출입 솔루션을 제공합니다. 고급품에서 필수 공급품까지, 저희는 환대 산업을 위한 맞춤형 물류를 매끄럽게 제공합니다.",

      //   about section starts 

      aboutSubtitle1: "소개 ",
      aboutSubtitle2: "Hemroc Trading",
      aboutTitle: "다양한 산업을 위한 글로벌 수출입 솔루션의 효율화",
      aboutDescription: "Hemroc Trading (Pvt.) Ltd.는 환대 산업, 신선 제품, 식품 공급망 및 중장비 산업에서 비할 데 없는 수출입 서비스를 제공합니다. 카타르, 파키스탄, 터키, 이탈리아의 전략적 사무소를 통해 원활한 물류와 귀사의 비즈니스 요구 사항에 맞춘 맞춤형 솔루션을 제공하여 글로벌 무역에서 효율성과 성공을 높입니다.",
      callTitle: "문의 또는 주문을 위해 전화하세요",


      // product section 
      productsubtitle: "Hemroc 제품 탐색",
      producttitle: "비즈니스 요구를 위한 프리미엄 솔루션",
      products1: "신선한 과일",
      products2: "신선한 채소",
      products3: "천연 꿀",
      products4: "프리미엄 쌀",
      products5: "수제 우아함",
      products6: "주방 용품",
      products7: "신선한 건과일",
      products8: "히말라야 핑크 소금",
      products9: "하베스트 허브 식품",


      // contact section 
      contactTitle: "Hemroc와 연락하세요: 연결합시다",
      nameLabel: "이름",
      emailLabel: "이메일",
      phoneLabel: "전화번호",
      messageLabel: "메시지",
      submitBtn: "메시지 보내기",



      // gallery section 
      sectionTitle: "Hemroc의 신뢰할 수 있는 글로벌 운송 및 물류",
      package1Title1: "신선한 과일",
      package1Title2: "신선한 귤",
      package1Title3: "신선한 채소",
      package1Title4: "수공예품",
      package1Title5: "순수 천연 꿀",
      package1Title6: "신선한 망고",
      package1Title7: "중장비",
      package1Title8: "고급 쌀",

      package1Destination1: "목적지: 카타르 / UAE",
      package1Destination2: "목적지: 카타르 / UAE",
      package1Destination3: "목적지: 카타르 / UAE / 이탈리아",
      package1Destination4: "목적지: 카타르 / 터키",
      package1Destination5: "목적지: 카타르 / 쿠웨이트",
      package1Destination6: "목적지: 카타르 / 쿠웨이트 / EU",
      package1Destination7: "목적지: 카타르 / 사우디아라비아",
      package1Destination8: "목적지: 카타르 / 사우디아라비아",


      // certificate 

      certificationTitle: "Hemroc 인증",
      certificationDescription: "전 세계적으로 인정받는 인증을 통해 품질, 신뢰성, 그리고 국제 표준 준수에 대한 신뢰를 제공합니다.",


      clientTitle: "소중한 고객",
      clientDescription: "세계 유수 브랜드들이 신뢰합니다",



      companyDescription: "Hemroc는 2014년에 안전에 중점을 둔 전문가 그룹에 의해 설립되어 다양한 산업 분야에서 독보적인 거래 서비스를 제공합니다.",
      airFreight: "당사의 맞춤형 항공 솔루션은 빠르게 움직이는 산업의 요구를 충족시키며 화물이 빠르게 목적지에 도착하도록 보장합니다.",
      cargoShips: "당사의 광범위한 선단은 주요 글로벌 무역 경로를 항해하여 대량 화물이 안전하고 제시간에 도착하도록 보장합니다.",
      landTransport: "당사의 광범위한 트럭 및 유통망은 육상 운송 요구 사항에 대해 빠르고 신뢰할 수 있는 운송을 보장합니다."


  }

};

function changeLanguage1(){
  const value = document.getElementById("language").value;
  changeLanguage(value)
}
function changeLanguage2(){
  const value = document.getElementById("language2").value;
  changeLanguage(value)
}


function changeLanguage(value) {
  const selectedLanguage = value;

      // Applying translations to elements with class 'lannav1'
    let navItems1 = document.querySelectorAll(".lannav1");
    navItems1.forEach(item => {
      item.textContent = translations[selectedLanguage].home;
    });

    // Similarly for other classes
    let navItems2 = document.querySelectorAll(".lannav2");
    navItems2.forEach(item => {
      item.textContent = translations[selectedLanguage].about;
    });

    let navItems3 = document.querySelectorAll(".lannav3");
    navItems3.forEach(item => {
      item.textContent = translations[selectedLanguage].pages;
    });

    let navItems4 = document.querySelectorAll(".lannav4");
    navItems4.forEach(item => {
      item.textContent = translations[selectedLanguage].faq;
    });

    let navItems5 = document.querySelectorAll(".lannav5");
    navItems5.forEach(item => {
      item.textContent = translations[selectedLanguage].contact;
    });

  // Update banner
  document.querySelector(".banner-content .subtitle1").textContent = translations[selectedLanguage].subtitle1;
  document.querySelector(".banner-content .subtitle2").textContent = translations[selectedLanguage].subtitle2;

  document.querySelector(".banner-content .title").textContent = translations[selectedLanguage].title;
  document.querySelector(".banner-content p").textContent = translations[selectedLanguage].description;


  //    overview section 
  // Overview section text content updates
  document.querySelector(".overview-tab-thumb .nav-tab-header .sub-title").textContent = translations[selectedLanguage].overviewsubtitle;
  document.querySelector(".overview-tab-thumb .nav-tab-header .title").textContent = translations[selectedLanguage].overviewtitle;

  // Tab buttons content updates
  document.querySelector("#private-jet-tab").innerHTML = `<span>01</span> ${translations[selectedLanguage].tab1}`;
  document.querySelector("#business-jet-tab").innerHTML = `<span>02</span> ${translations[selectedLanguage].tab2}`;
  document.querySelector("#private-helicopter-tab").innerHTML = `<span>03</span> ${translations[selectedLanguage].tab3}`;
  document.querySelector("#air-ambulance-tab").innerHTML = `<span>04</span> ${translations[selectedLanguage].tab4}`;
  // Tab content descriptions updates
  document.querySelector("#private-jet .overview-thumb-content h3 a").textContent = translations[selectedLanguage].tab1;
  document.querySelector("#private-jet .overview-thumb-content p").textContent = translations[selectedLanguage].description1;

  document.querySelector("#business-jet .overview-thumb-content h3 a").textContent = translations[selectedLanguage].tab2;
  document.querySelector("#business-jet .overview-thumb-content p").textContent = translations[selectedLanguage].description2;

  document.querySelector("#private-helicopter .overview-thumb-content h3 a").textContent = translations[selectedLanguage].tab3;
  document.querySelector("#private-helicopter .overview-thumb-content p").textContent = translations[selectedLanguage].description3;

  document.querySelector("#air-ambulance .overview-thumb-content h3 a").textContent = translations[selectedLanguage].tab4;
  document.querySelector("#air-ambulance .overview-thumb-content p").textContent = translations[selectedLanguage].description4;



  // About section text content updates
  document.querySelector(".about-content .sub-title .sub-title1").textContent = translations[selectedLanguage].aboutSubtitle1;
  document.querySelector(".about-content .sub-title .sub-title2").textContent = translations[selectedLanguage].aboutSubtitle2;
  document.querySelector(".about-content .title").textContent = translations[selectedLanguage].aboutTitle;
  document.querySelector(".about-content p").textContent = translations[selectedLanguage].aboutDescription;

  // Call-to-action section updates
  document.querySelector(".about-book-left .call-title").textContent = translations[selectedLanguage].callTitle;




  // product section start 
  document.getElementById("producttitle").textContent = translations[selectedLanguage].producttitle;
  document.getElementById("productsubtitle").textContent = translations[selectedLanguage].productsubtitle;
  document.getElementById("product1").textContent = translations[selectedLanguage].products1;
  document.getElementById("product2").textContent = translations[selectedLanguage].products2;
  document.getElementById("product3").textContent = translations[selectedLanguage].products3;
  document.getElementById("product4").textContent = translations[selectedLanguage].products4;
  document.getElementById("product5").textContent = translations[selectedLanguage].products5;
  document.getElementById("product6").textContent = translations[selectedLanguage].products6;
  document.getElementById("product7").textContent = translations[selectedLanguage].products7;
  document.getElementById("product8").textContent = translations[selectedLanguage].products8;
  document.getElementById("product9").textContent = translations[selectedLanguage].products9;




  // contact section 
  document.getElementById('contact-title').innerText = translations[selectedLanguage].contactTitle;
  document.getElementById('name-label').innerText = translations[selectedLanguage].nameLabel;
  document.getElementById('email-label').innerText = translations[selectedLanguage].emailLabel;
  document.getElementById('phone-label').innerText = translations[selectedLanguage].phoneLabel;
  document.getElementById('message-label').innerText = translations[selectedLanguage].messageLabel;
  document.getElementById('submit-button-contact').innerText = translations[selectedLanguage].submitBtn;


  // gallery section 
  document.getElementById('section-title-gallery').textContent = translations[selectedLanguage].sectionTitle;
  document.getElementById('package-1-title').textContent = translations[selectedLanguage].package1Title1;
  document.getElementById('package-2-title').textContent = translations[selectedLanguage].package1Title2;
  document.getElementById('package-3-title').textContent = translations[selectedLanguage].package1Title3;
  document.getElementById('package-4-title').textContent = translations[selectedLanguage].package1Title4;
  document.getElementById('package-5-title').textContent = translations[selectedLanguage].package1Title5;
  document.getElementById('package-6-title').textContent = translations[selectedLanguage].package1Title6;
  document.getElementById('package-7-title').textContent = translations[selectedLanguage].package1Title7;
  document.getElementById('package-8-title').textContent = translations[selectedLanguage].package1Title8;

  document.getElementById('package-1-destination').textContent = translations[selectedLanguage].package1Destination1;
  document.getElementById('package-2-destination').textContent = translations[selectedLanguage].package1Destination2;
  document.getElementById('package-3-destination').textContent = translations[selectedLanguage].package1Destination3;
  document.getElementById('package-4-destination').textContent = translations[selectedLanguage].package1Destination4;
  document.getElementById('package-5-destination').textContent = translations[selectedLanguage].package1Destination5;
  document.getElementById('package-6-destination').textContent = translations[selectedLanguage].package1Destination6;
  document.getElementById('package-7-destination').textContent = translations[selectedLanguage].package1Destination7;
  document.getElementById('package-8-destination').textContent = translations[selectedLanguage].package1Destination8;



  // ;certificate section 
  document.getElementById("certificationTitle").textContent = translations[selectedLanguage].certificationTitle;
  document.getElementById("certificationDescription").textContent = translations[selectedLanguage].certificationDescription;


  // client section 
  document.getElementById('clientTitle').innerText = translations[selectedLanguage].clientTitle;
  document.getElementById('clientDescription').innerText = translations[selectedLanguage].clientDescription;



  document.getElementById('hemrocdesc').innerText = translations[selectedLanguage].companyDescription;
  document.getElementById('viaair').innerText = translations[selectedLanguage].airFreight;
  document.getElementById('viasea').innerText = translations[selectedLanguage].cargoShips;
  document.getElementById('vialand').innerText = translations[selectedLanguage].landTransport;

  // Reinitialize Typed.js with the translated strings
  initTypedStrings(translations[selectedLanguage].typedStrings);


}

function initTypedStrings(strings) {
  // Destroy the previous instance of Typed if needed
  if (window.typed) {
      window.typed.destroy();
  }

  // Initialize Typed.js with new strings
  window.typed = new Typed('.subtitle3', {
      strings: strings,
      typeSpeed: 70, // Typing speed
      backSpeed: 25, // Backspace speed
      backDelay: 1000, // Delay before backspacing
      startDelay: 500, // Delay before typing starts
      loop: true // Keep repeating the typing effect
  });
}
window.onload = function () {
  const selectedLanguage = document.getElementById("language").value || 'en'; // Default to English if no language is selected
  changeLanguage(selectedLanguage); // Call changeLanguage to set up the initial translation and Typed.js
};

window.onload = function () {
  const selectedLanguage = document.getElementById("language2").value || 'en'; // Default to English if no language is selected
  changeLanguage(selectedLanguage); // Call changeLanguage to set up the initial translation and Typed.js
};



// navbar setting 

function toggleMenu() {
  const menu = document.querySelector(".nav-menu-container2");
  menu.classList.toggle("open"); // Toggle the 'open' class
}

