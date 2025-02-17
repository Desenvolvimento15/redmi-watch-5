$(function(){
    $(".galeria").slick({
    
     arrows: false,
     autoplay:true,
     slidesToShow:1,
     slidesToScroll: 1,
     autoplaySpeed: 5000,
     infinite: true,
     
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
       
        }
      },
  
     ]
  });
  });