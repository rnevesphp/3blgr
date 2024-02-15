const doc = document;
const API = "http://localhost:3001/catalogo";
const elementoHTML = doc.getElementById("catalogo");
const getCatalogo = async () => {
  elementoHTML.innerHTML = "";

  const responseFromAPI = await fetch(API);
  const catalogoFromDatabase = await responseFromAPI.json();

  console.log(catalogoFromDatabase);

  var cont= 0; 

  catalogoFromDatabase.map((marca) => {
    cont++

    console.log(cont)
    
    elementoHTML.insertAdjacentHTML(
      "beforeend",
      `<div class="content row">
        <div class="col s12 m6 l3">
          <div class="card">
              <div class="card-image">
                  <img class="responsive-img" src="">
              </div>
              <div class="card-content">
                  <div class="product-info">
                      <span class="card-title title-prod">
                          Sudadera ${marca.marcas.marca.nombre}</span>
                      <span class="prod-description">43€</span>
                      <span class="text-description">Descripcion del
                          producto Lorem ipsum dolor sit amet
                          consectetur adipisicing
                          elit. Veritatis
                      </span>
                  </div>
                  <div class="prod-variant">
                      <span class="title-variant">Color</span>
                      <div class="color-variant">
                          <ul>
                              <li class="variant-rounded"></li>
                              <li class="variant-rounded"></li>
                              <li class="variant-rounded"></li>
                              <li class="variant-rounded"></li>
                          </ul>
                      </div>
                  </div>
                  <div class="prod-sizes">
                      <span class="title-variant">Tamaño</span>
                      <div class="sizes">
                          <ul>
                              <li class="size-box">XS</li>
                              <li class="size-box">S</li>
                              <li class="size-box">M</li>
                              <li class="size-box">L</li>
                          </ul>
                      </div>
                  </div>
                  <div class="prod-cta">
                      <div class="quantity-counter">
                          <i class="fa-solid fa-minus"></i>
                          <div class="contador">2</div>
                          <i class="fa-solid fa-plus"></i>
                      </div>
                      <div class="add-to-car">
                          <button class="btn">
                              <i class="fa-solid fa-cart-shopping"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>`
    );
  });
};

getCatalogo();
