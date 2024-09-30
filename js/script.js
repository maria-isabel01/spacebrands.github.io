document.addEventListener("DOMContentLoaded", function () {
  // Inicializa Swiper
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: 3,
    spaceBetween: 2,
  });

  // Manejo de audio
  var audio = document.getElementById("background-audio");
  audio.volume = 0.2;

  function playAudio() {
    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log("El audio se está reproduciendo.");
      }).catch(error => {
        console.log("Error al reproducir el audio:", error);
      });
    }
  }

  playAudio();

  document.body.addEventListener("click", function () {
    if (audio.paused) {
      playAudio();
    }
  });
});


// Cargar el archivo JSON con las traducciones
function loadLanguageFile(language, callback) {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', `./i18n/${language}.json`, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

function applyTranslations(translations) {


  const sidebar = document.querySelector('nav.sidebar');

  // Actualizar los elementos del menú de la barra lateral con las traducciones correspondientes
  sidebar.querySelector('a.catalogo').textContent = translations.barra_lateral.catalogo;
  sidebar.querySelector('a.ubicacion-sur').textContent = translations.barra_lateral.ubicacion_sur;
  sidebar.querySelector('a.ubicacion-norte').textContent = translations.barra_lateral.ubicacion_norte;
  sidebar.querySelector('a.contacto').textContent = translations.barra_lateral.contacto; // Selección por posición en la lista
  sidebar.querySelector('a.precios').textContent = translations.barra_lateral.saber_mas;



  const menuSection = document.querySelector('.sections.desktop');
  // Actualizar los elementos del menú con las traducciones correspondientes
  menuSection.querySelector('a.spacebrands').textContent = translations.navegacion.inicio;
  menuSection.querySelector('a.estrategia').textContent = translations.navegacion.estrategia;
  menuSection.querySelector('a.abordar').textContent = translations.navegacion.servicios;
  menuSection.querySelector('a.canales').textContent = translations.navegacion.canales_de_ventas;
  menuSection.querySelector('a.line').textContent = translations.navegacion.linea;
  menuSection.querySelector('a.tecnologia').textContent = translations.navegacion.tecnologia;




  const footers = document.querySelectorAll('.footer-column');

  footers.forEach(footer => {
    footer.querySelector('#contact-info').textContent = translations.pie_de_pagina.contacto;
    footer.querySelector('#correo').textContent = translations.pie_de_pagina.correo;
    footer.querySelector('#unirse').textContent = translations.pie_de_pagina.unirse;

    footer.querySelector('#derecho').textContent = translations.pie_de_pagina.derechos;
  });

  const homeSection = document.querySelector('[data-cid="slide-10-ef5acf51"]');
  if (homeSection) {
    homeSection.querySelector('h1').textContent = translations.inicio.titulo;
    homeSection.querySelector('h5.h5-1').textContent = translations.inicio.subtitulo;
    homeSection.querySelector('.text-86').textContent = translations.inicio.descripcion;
  }



  // Traducir la sección Estrategia
  const estrategiaSection = document.querySelector('[data-cid="slide-30-a8e55e42"]');
  if (estrategiaSection) {
    estrategiaSection.querySelector('h1.coreTitle').textContent = translations.estrategia.titulo;

    const elementos = translations.estrategia.elementos;
    const listaElementos = estrategiaSection.querySelector('ul.flex');
    listaElementos.innerHTML = ''; // Limpiar los elementos existentes

    // Reemplazar los elementos de estrategia
    elementos.forEach(elemento => {
      const listItem = document.createElement('li');
      listItem.className = 'col-3-12 margin-bottom-1 left ae-3';
      listItem.innerHTML = `
          <div class="popupTrigger ae-3 fromRight relative custom-flex-86 done" data-popup-id="86-1">
            <div class="icons-c">
              <span class="crop button play white button-86 center">
                <img src="${elemento.imagen.src}" alt="${elemento.imagen.alt}">
              </span>
            </div>
            <div class="text-86">
              <p class="smaller bold uppercase cropBottom center">${elemento.titulo}</p>
              <p class="cropBottom small-0 opacity-8 center pt-3">${elemento.descripcion}</p>
            </div>
          </div>
        `;
      listaElementos.appendChild(listItem);
    });
  }






  // Traducir la sección Servicios
  const serviciosSection = document.querySelector('[data-cid="slide-161-b914a482"]');
  if (serviciosSection) {
    // Actualizar el título y la descripción
    serviciosSection.querySelector('h1.coreTitle').textContent = translations.servicios.titulo;
    serviciosSection.querySelector('p.ae-1.left').textContent = translations.servicios.descripcion;

    const elementos = translations.servicios.elementos;
    const listaElementos = serviciosSection.querySelector('ul.flex');
    listaElementos.innerHTML = ''; // Limpiar los elementos existentes

    // Reemplazar los elementos de servicios
    elementos.forEach(elemento => {
      const listItem = document.createElement('li');
      listItem.className = 'col-3-12 margin-bottom-1 left ae-3';
      listItem.innerHTML = `
      <div class="popupTrigger ae-3 fromRight relative custom-flex-86 done" data-popup-id="86-1">
        <div class="icons-c">
          <span class="crop button play white button-86 center">
            <img src="${elemento.imagen.src}" alt="${elemento.imagen.alt}">
          </span>
        </div>
        <div class="text-86">
          <p class="smaller bold uppercase cropBottom center">${elemento.titulo}</p>
          <p class="cropBottom small opacity-8 center pt-3">${elemento.descripcion}</p>
        </div>
      </div>
    `;
      listaElementos.appendChild(listItem);
    });
  }


  const sociosSection = document.querySelector('[data-cid="slide-01-a330447f"]');
  if (sociosSection) {
    // Actualizar el título y la descripción
    sociosSection.querySelector('h1.coreTitle').textContent = translations.socios.titulo;
    sociosSection.querySelector('p.cropBottom.small.opacity-8').textContent = translations.socios.descripcion;

    const secciones = translations.socios.secciones;



    // Limpiar solo los títulos de las secciones existentes
    const servContainer = sociosSection.querySelector('.serv');

    // Asegúrate de que servContainer esté limpio antes de agregar los nuevos títulos
    // Obtiene todas las secciones existentes
    const existingSections = servContainer.querySelectorAll('.section');

    // Reemplazar los títulos de las secciones de socios
    secciones.forEach((seccion, index) => {
      // Verifica si la sección ya existe
      const sectionDiv = existingSections[index];

      if (sectionDiv) {
        // Actualiza el título desde el objeto seccion
        const sectionTitle = sectionDiv.querySelector('p.smaller.bold.uppercase.cropBottom.center');

        if (sectionTitle) {
          sectionTitle.textContent = seccion.titulo; // Actualiza el título
        }
      }
    });


    // Actualizar la cobertura de distribución offline
    const coberturaTitulo = sociosSection.querySelector('h1.coreTitle.left'); // Asumiendo que es el segundo título
    coberturaTitulo.textContent = translations.socios.cobertura.titulo;

    const coberturaDescripcion = sociosSection.querySelector('p.cropBottom.small.opacity-8.pt-3'); // Asumiendo que es el segundo párrafo
    coberturaDescripcion.textContent = translations.socios.cobertura.descripcion;

    // Limpiar y añadir regiones
    const regionesDiv = document.createElement('div');
    const regiones = translations.socios.cobertura.regiones;

    Object.keys(regiones).forEach(region => {
      const cuadroDiv = document.createElement('div');
      cuadroDiv.className = 'cuadro left pt-5';

      const regionTitle = document.createElement('h5');
      regionTitle.textContent = region.charAt(0).toUpperCase() + region.slice(1); // Capitalizar la primera letra
      cuadroDiv.appendChild(regionTitle);

      const regionPartners = document.createElement('p');
      regionPartners.innerHTML = regiones[region].join('<br>'); // Unir los socios con saltos de línea
      cuadroDiv.appendChild(regionPartners);

      regionesDiv.appendChild(cuadroDiv);
    });

    // Añadir imagen del mapa
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const mapImg = document.createElement('img');
    mapImg.src = translations.socios.cobertura.imagenMapa.src;
    mapImg.width = translations.socios.cobertura.imagenMapa.width;
    mapImg.alt = translations.socios.cobertura.imagenMapa.alt;

    imageContainer.appendChild(mapImg);

    // Añadir el contenedor de imágenes y las regiones al sociosSection
    sociosSection.appendChild(imageContainer);
    sociosSection.appendChild(regionesDiv);
  }





  // Traducir la sección Tecnología
  const tecnologiaSection = document.querySelector('[data-name="tecnologia"]');

  if (tecnologiaSection) {
    // Actualizar título y descripción
    const { titulo, descripcion, elementos, fondo } = translations.tecnologia;

    tecnologiaSection.querySelector('h1').textContent = titulo;
    tecnologiaSection.querySelector('p').textContent = descripcion;

    // Limpiar elementos existentes y agregar nuevos
    const elementosContenedor = tecnologiaSection.querySelector('#elementos-tecnologia');
    elementosContenedor.innerHTML = ''; // Limpiar elementos existentes

    elementos.forEach(elemento => {
      elementosContenedor.innerHTML += `
      <div class="popupTrigger ae-3 fromRight relative custom-flex-86 done" data-popup-id="86-1">
        <span class="crop button play white button-86 center">
          <img src="${elemento.imagen.src}" alt="${elemento.imagen.alt}">
        </span>
        <div class="text-86">
          <p class="smaller bold uppercase cropBottom">${elemento.titulo}</p>
          <p class="cropBottom small opacity-8">${elemento.descripcion}</p>
        </div>
      </div>
    `;
    });

  }


}







// Cambiar el idioma de la página y aplicar las traducciones a todos los footers
function cambiarIdioma(language) {
  loadLanguageFile(language, function (translations) {
    applyTranslations(translations);
  });
}

function createFooter() {
  const footerHTML = `
    <footer class="footer-column">
      <div class="container-footer">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div class="left" style="flex: 1;">
            <a class="small corr" id="contact-info" href="#"></a><br>
            <span id="social-icon">
              <svg class="ali"><use xlink:href="#mail"></use></svg>
              <span id="correo" class="small ali corr toLeft"></span>
            </span>
          </div>


     <div class="centers" style="flex: 1;">
  <a class="titulo" id="unirse" href="#"></a>
  <div class="language-selector">
    <button class="btn-espanol language-button">Español</button>
    <button class="btn-ingles language-button">Inglés</button>
  </div>
</div>


          
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

      </div>
    </footer>
  `;

  const footers = document.querySelectorAll('.footer-placeholder');

  footers.forEach(footerPlaceholder => {
    footerPlaceholder.innerHTML = footerHTML;

    // Añadir eventos a los botones de idioma para cada footer dinámicamente
    footerPlaceholder.querySelector('.btn-espanol').addEventListener('click', () => cambiarIdioma('es-PE'));
    footerPlaceholder.querySelector('.btn-ingles').addEventListener('click', () => cambiarIdioma('en'));
  });
}

document.addEventListener('DOMContentLoaded', function () {
  createFooter();
  cambiarIdioma('es-PE');
});
