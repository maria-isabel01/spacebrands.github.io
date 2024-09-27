

















function actualizarTextos(data) {
    // Footer
    document.getElementById('contact-info').textContent = data.pie_de_pagina.contacto;
    document.getElementById('correo').textContent = data.pie_de_pagina.correo;
    document.querySelector('.titulo').textContent = data.pie_de_pagina.unirse;
    document.getElementById('derecho').textContent = data.pie_de_pagina.derechos;

  
    // Barra
    document.getElementById('play-audio').textContent = data.navegacion.inicio;
    document.getElementById('estrategia').textContent = data.navegacion.estrategia;
    document.getElementById('servicios').textContent = data.navegacion.servicios;
    document.getElementById('canales').textContent = data.navegacion.canales_de_ventas;
    document.getElementById('line').textContent = data.navegacion.linea;
    document.getElementById('tecnologia').textContent = data.navegacion.tecnologia;
  
    // Menu
    document.getElementById('catalogo').textContent = data.barra_lateral.catalogo;
    document.getElementById('ubicacion_sur').textContent = data.barra_lateral.ubicacion_sur;
    document.getElementById('ubicacion_norte').textContent = data.barra_lateral.ubicacion_norte;
    document.getElementById('contacto-lateral').textContent = data.barra_lateral.contacto;
    document.getElementById('saber_mas').textContent = data.barra_lateral.saber_mas;
  
    // Home
    document.querySelector('.slide h1').textContent = data.inicio.titulo;
    document.querySelector('.slide h5').textContent = data.inicio.subtitulo; 
    document.querySelector('.text-86').textContent = data.inicio.descripcion; 
  }
  
  let currentLanguage = 'es-PE';

  function cambiarIdioma(idioma) {
    currentLanguage = idioma;
    fetch(`./i18n/${idioma}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }
        return response.json();
      })
      .then(data => {
        actualizarTextos(data);
      })
      .catch(error => {
        console.error('Error al cargar el JSON:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    cambiarIdioma(currentLanguage);
  });
  
  

  function createFooter() {
    const footerHTML = `
      <footer class="footer-column">
          <div class="container-footer">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div class="left" style="flex: 1;">
                      <a class="small corr" id="contact-info" href="#"></a><br>
                      <span id="social-icon">
                          <svg class="ali">
                              <use xlink:href="#mail"></use>
                          </svg>
                          <span id="correo" class="small ali corr toLeft"></span>
                      </span>
                  </div>
                  <a class="titulo" href="#" style="flex: 1; text-align: center;"></a>
                  <ul class="social opacity-8 icnsF" id="social-icons" style="flex: 1; display: flex; justify-content: flex-end;">
                      <li>
                          <a href="https://www.facebook.com/SpaceBrandsM/" target="_blank" aria-label="Facebook">
                              <svg>
                                  <use xlink:href="#facebook"></use>
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/spacebrandss/" target="_blank" aria-label="Instagram">
                              <svg>
                                  <use xlink:href="#instagram"></use>
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/company/space-brands" target="_blank" aria-label="LinkedIn">
                              <svg>
                                  <use xlink:href="#linkedin"></use>
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.tiktok.com/@spacebrands" target="_blank" aria-label="Tiktok">
                              <svg>
                                  <use xlink:href="#twitter"></use>
                              </svg>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.whatsapp.com" target="_blank" aria-label="WhatsApp">
                              <svg>
                                  <use xlink:href="#whatsapp"></use>
                              </svg>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="brd" style="text-align: center; margin-top: 1rem;">
                  <a class="titulo" href="#" id="derecho"></a>
              </div>
              <div class="language-selector" style="text-align: center; margin-top: 1rem;">
                  <button id="btn-espanol" class="language-button">Español</button>
                  <button id="btn-ingles" class="language-button">Inglés</button>
              </div>
          </div>
      </footer>
    `;
  
    const footers = document.querySelectorAll('.footer-placeholder');
  
    footers.forEach(footerPlaceholder => {
      footerPlaceholder.innerHTML = footerHTML;
    });
  
    // Manejar el cambio de idioma
    document.getElementById('btn-espanol').addEventListener('click', () => cambiarIdioma('es-PE'));
    document.getElementById('btn-ingles').addEventListener('click', () => cambiarIdioma('en'));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createFooter();
    cambiarIdioma(currentLanguage);
  });
  

