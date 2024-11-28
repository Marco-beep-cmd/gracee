$(document).ready(function(){
      // Al cargar la página, ocultamos las cortinas
      $('.left-curtain').css('width', '0%');
      $('.right-curtain').css('width', '0%');
    
      $('.valentines-day').click(function(){
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
          // Ocultar elementos dentro de .valentines-day
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
          
    
          // Hacer visible la carta con una animación ondulante
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
            $(this).css('transform', 'scale(' + scale + ')');
          }}); // Animación de ondulación
        });
      });
    });
    function mostrarMensajeFlotante() {
      const mensaje = document.getElementById("mensaje-flotante");
      mensaje.classList.add("mostrar");
      mensaje.classList.remove("desaparecer");
    }
    
    function desaparecerMensaje() {
      const mensaje = document.getElementById("mensaje-flotante");
      mensaje.classList.add("desaparecer");
      setTimeout(() => {
        mensaje.classList.remove("mostrar");
        mensaje.style.display = "none"; // Asegura que desaparezca después del efecto
      }, 1000); // Espera el tiempo del efecto de transición (1s)
    }
    function desaparecerNo() {
      const noElement = document.getElementById("no");
      noElement.classList.add("desaparecer");
      setTimeout(() => {
        noElement.style.display = "none"; // Asegura que desaparezca completamente después del efecto
      }, 1000); // Tiempo sincronizado con la transición CSS
    }
    
    
    