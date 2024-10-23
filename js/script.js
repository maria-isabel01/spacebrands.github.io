document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 1200,
    },
    slidesPerView: 4,
    spaceBetween: 1,
  });


  // Manejo de audio
  var audio = document.getElementById("background-audio");
  audio.volume = 0.2;

  function playAudio() {
    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
      })
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

  // Menu Lateral
  const sidebar = document.querySelector('nav.sidebar');
  sidebar.querySelector('a.catalogo').textContent = translations.barra_lateral.catalogo;
  sidebar.querySelector('a.ubicacion-sur').textContent = translations.barra_lateral.ubicacion_sur;
  sidebar.querySelector('a.ubicacion-norte').textContent = translations.barra_lateral.ubicacion_norte;
  sidebar.querySelector('a.contacto').textContent = translations.barra_lateral.contacto;
  sidebar.querySelector('a.precios').textContent = translations.barra_lateral.saber_mas;

  // Menu Vertical
  const menuSection = document.querySelector('.sections.desktop');
  menuSection.querySelector('a.spacebrands').textContent = translations.navegacion.inicio;
  menuSection.querySelector('a.estrategia').textContent = translations.navegacion.estrategia;
  menuSection.querySelector('a.abordar').textContent = translations.navegacion.servicios;
  menuSection.querySelector('a.marcas').textContent = translations.navegacion.marcas;
  menuSection.querySelector('a.canales').textContent = translations.navegacion.canales_de_ventas;
  menuSection.querySelector('a.line').textContent = translations.navegacion.linea;
  menuSection.querySelector('a.tecnologia').textContent = translations.navegacion.tecnologia;

  // Footer
  const footers = document.querySelectorAll('.footer-column');
  footers.forEach(footer => {
    footer.querySelector('#contact-info').textContent = translations.pie_de_pagina.contacto;
    footer.querySelector('#correo').textContent = translations.pie_de_pagina.correo;
    footer.querySelector('#unirse').textContent = translations.pie_de_pagina.unirse;
    footer.querySelector('#derecho').textContent = translations.pie_de_pagina.derechos;
  });

//Home
const homeSection = document.querySelector('[data-cid="slide-10-ef5acf51"]');
if (homeSection) {
    // Mantén la primera parte sin cambios usando span con translate="no"
    homeSection.querySelector('h1').textContent = translations.inicio.titulo;
    homeSection.querySelector('h5.h5-1').textContent = translations.inicio.subtitulo;
    
    const descripcionElement = homeSection.querySelector('.text-86');
    descripcionElement.innerHTML = `<span translate="no">Space Brands es líder en la distribución de tecnología y electrodomésticos en LATAM, con un staff de 10 años de experiencia en Retail.</span> ${translations.inicio.descripcion}`;
}

  //Estrategia
  const estrategiaSection = document.querySelector('[data-cid="slide-30-a8e55e42"]');
  if (estrategiaSection) {
    estrategiaSection.querySelector('h1.coreTitle').textContent = translations.estrategia.titulo;
    const elementos = translations.estrategia.elementos;
    const listaElementos = estrategiaSection.querySelector('ul.flex');
    listaElementos.innerHTML = '';

    //Cards
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

  //Servicios
  const serviciosSection = document.querySelector('[data-cid="slide-161-b914a482"]');
  if (serviciosSection) {
    serviciosSection.querySelector('h1.coreTitle').textContent = translations.servicios.titulo;
    serviciosSection.querySelector('p.ae-1.left').textContent = translations.servicios.descripcion;

    const elementos = translations.servicios.elementos;
    const listaElementos = serviciosSection.querySelector('ul.flex');
    listaElementos.innerHTML = '';

    //Cards
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

  //Marcas
  const marcasSection = document.querySelector('[data-name="marcas"]');
  if (marcasSection) {
    marcasSection.querySelector('h1.coreTitle').textContent = translations.marcas.titulo;
  }
  //Parnet
  const sociosSection = document.querySelector('[data-cid="slide-01-a330447f"]');
  if (sociosSection) {

    sociosSection.querySelector('h1.coreTitle').textContent = translations.socios.titulo;
    sociosSection.querySelector('p.cropBottom.small.opacity-8').textContent = translations.socios.descripcion;

    const secciones = translations.socios.secciones;
    const servContainer = sociosSection.querySelector('.serv');
    const existingSections = servContainer.querySelectorAll('.section');

    secciones.forEach((seccion, index) => {
      const sectionDiv = existingSections[index];
      if (sectionDiv) {
        const sectionTitle = sectionDiv.querySelector('p.smaller.bold.uppercase.cropBottom.center');
        if (sectionTitle) {
          sectionTitle.textContent = seccion.titulo;
        }
      }
    });

    sociosSection.querySelector('p.cropBottom.small.opacity-8.pt-3.fowo').textContent = translations.socios.descripcion_footer;

    // Actualizar la cobertura de distribución offline
    const coberturaTitulo = sociosSection.querySelector('h1.coreTitle.left');
    coberturaTitulo.textContent = translations.socios.cobertura.titulo;

    const coberturaDescripcion = sociosSection.querySelector('p.cropBottom.small.opacity-8.pt-3.descp');
    coberturaDescripcion.textContent = translations.socios.cobertura.descripcion;
    const servSection = sociosSection.querySelector('.serv.pt-3.cards-mapa');
    servSection.innerHTML = '';

    const leftDiv = document.createElement('div');
    leftDiv.className = 'section-left';
    const rightDiv = document.createElement('div');
    rightDiv.className = 'section-right';

    const regiones = translations.socios.cobertura.regiones;

    ['norte', 'centro'].forEach(region => {
      const cuadroDiv = document.createElement('div');
      cuadroDiv.className = 'cuadro left pt-5';

      const regionTitle = document.createElement('h5');
      regionTitle.textContent = region.charAt(0).toUpperCase() + region.slice(1);
      cuadroDiv.appendChild(regionTitle);

      const regionPartners = document.createElement('p');
      regionPartners.innerHTML = regiones[region].join('<br>');
      cuadroDiv.appendChild(regionPartners);

      leftDiv.appendChild(cuadroDiv);
    });

    ['oriente', 'sur'].forEach(region => {
      const cuadroDiv = document.createElement('div');
      cuadroDiv.className = 'cuadro right pt-5';

      const regionTitle = document.createElement('h5');
      regionTitle.textContent = region.charAt(0).toUpperCase() + region.slice(1);
      cuadroDiv.appendChild(regionTitle);

      const regionPartners = document.createElement('p');
      regionPartners.innerHTML = regiones[region].join('<br>');
      cuadroDiv.appendChild(regionPartners);

      rightDiv.appendChild(cuadroDiv);
    });

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container center';
    const mapImage = document.createElement('img');
    mapImage.src = translations.socios.cobertura.imagenMapa.src;
    mapImage.width = translations.socios.cobertura.imagenMapa.width;
    mapImage.alt = translations.socios.cobertura.imagenMapa.alt;
    imageContainer.appendChild(mapImage);

    servSection.appendChild(leftDiv);
    servSection.appendChild(imageContainer);
    servSection.appendChild(rightDiv);
  }

  //Line
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';

  translations.line.cards.forEach((data) => {
    const cardColor = getRandomColor();

    const card = document.createElement('div');
    card.className = 'card';
    card.style.border = `1px solid ${cardColor}`;

    card.innerHTML = `
        <div class="card-header" style="background-color: ${cardColor};">${data.title}</div>
        <div class="card-body">
          <h3>${data.header}</h3>
          <p>${data.content}</p>
        </div>
        <div class="card-footer" style="background-color: ${cardColor};">${data.footer}</div>
      `;
    cardContainer.appendChild(card);
  });


  function getRandomColor() {
    const colors = ['rgb(23, 43, 77)'];
    return colors;
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const scrollAmount = 268;

  let cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight) + 18;

  prevBtn.addEventListener('click', () => {
    document.getElementById('card-container').scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    document.getElementById('card-container').scrollBy({ left: cardWidth, behavior: 'smooth' });
  });


  //Tecnología
  const tecnologiaSection = document.querySelector('[data-name="tecnologia"]');

  if (tecnologiaSection) {
    const { titulo, descripcion, elementos, fondo } = translations.tecnologia;

    tecnologiaSection.querySelector('h1').textContent = titulo;
    tecnologiaSection.querySelector('p').textContent = descripcion;

    const elementosContenedor = tecnologiaSection.querySelector('#elementos-tecnologia');
    elementosContenedor.innerHTML = '';
    elementos.forEach(elemento => {
      elementosContenedor.innerHTML += `
      <div class="popupTrigger ae-3 fromRight relative custom-flex-86 done pt-3-1" data-popup-id="86-1">
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


//Footers
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
                    <svg class="ali">
                        <use xlink:href="#mail"></use>
                    </svg>
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
            <ul class="social opacity-8 icnsF" id="social-icons"
                style="flex: 1; display: flex; justify-content: flex-end;">
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
                      <img src="asset/svg/tiktok.svg" class="img-icon">
                    </a>
                </li>
            </ul>
        </div>
        <div class="brd" style="text-align: center;">
            <a class="titulo" href="#" id="derecho"></a>
        </div>
    </div>
</footer>
  `;

  const footers = document.querySelectorAll('.footer-placeholder');

  footers.forEach(footerPlaceholder => {
    footerPlaceholder.innerHTML = footerHTML;
    footerPlaceholder.querySelector('.btn-espanol').addEventListener('click', () => cambiarIdioma('es-PE'));
    footerPlaceholder.querySelector('.btn-ingles').addEventListener('click', () => cambiarIdioma('en'));
  });
}

document.addEventListener('DOMContentLoaded', function () {
  createFooter();
  cambiarIdioma('es-PE');
});