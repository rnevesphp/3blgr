const doc = document;
const API = "http://localhost:3001/catalogo";
const cata = doc.getElementById("catalogo");

const ft = doc.getElementById("footer");
const hd = doc.getElementById("header");

import header from "../header/header.js"
import footer from "../footer/footer.js"

const getCatalogo = async () => {
    cata.innerHTML = "";

    hd.innerHTML = ""
    ft.innerHTML = "" 

    hd.insertAdjacentHTML(
        'beforebegin', header
    )
 
    const responseFromAPI = await fetch(API);
    const catalogoFromDatabase = await responseFromAPI.json();

    console.log(catalogoFromDatabase);

    catalogoFromDatabase.map((marca) => {
        cata.insertAdjacentHTML
        (
            'beforeend', `
                <div class="">
                    <div class="content">
                        <div class="col s12 m6 l3">
                            <div class="card">
                                <div class="card-image">
                                    <img class="responsive-img" src="">
                                </div>
                                <div class="card-content">
                                    <div class="product-info">
                                        <span class="card-title title-prod">${marca.nombre}</span>
                                        <span class="text-description">Descripcion del producto Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis</span>
                                    </div>
                                    <div class="prod-cta">
                                        <div class="add-to-car">
                                            <button class="btn">
                                                <i class="fa-solid fa-cart-shopping"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        );
    });

    ft.insertAdjacentHTML(
        'beforebegin', footer
    );
};

getCatalogo();