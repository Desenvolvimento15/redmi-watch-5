 $(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,  // Mostra 3 slides por vez (ajuste se necessário)
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplay: true, 
      autoplaySpeed: 500, 
      dots: false, 
      arrows: false,
      infinite: true, // Garante o loop infinito
      cssEase: 'linear',
      centerMode: true, // Define se os slides ficam centralizados
      variableWidth: true// Evita que os slides tenham larguras variáveis
    });
  });

  $(document).ready(function(){
    $('.slider-2').slick({
      slidesToShow: 3,  // Mostra 3 slides por vez (ajuste se necessário)
      slidesToScroll: 1, // Avança 1 slide por vez
      autoplaySpeed: 2000,
      autoplay: true, 
      dots: false, 
      arrows: false,
      infinite: true, // Garante o loop infinito
      cssEase: 'linear',
      leftMode: true, // Define se os slides ficam centralizados
      variableWidth: true// Evita que os slides tenham larguras variáveis
    });
  });