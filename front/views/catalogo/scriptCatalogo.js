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

            <div class=""></div>
            <main>
                <div class="filtros row">
                    <div class="col s4 m6 l6">
                        <div class="filtro-marca input-field">
                            <select name="category" id="category">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="Guess">Guess</option>
                                <option value="Moschino">Moschino</option>
                                <option value="Lacoste">Lacoste</option>
                                <option value="Calvin Klein">Calvin Klein</option>
                                <option value="Hugo Boss">Hugo Boss</option>
                                <option value="Superdry">Superdry</option>
                                <option value="Nike">Nike</option>
                                <option value="Adidas">Adidas</option>
                                <option value="Valentino">Valentino</option>
                                <option value="Tommy H">Tommy H</option>
                            </select>
                        </div>
                    </div>

                    <div class="col s4 m6 l6">
                        <div class="filtro-marca input-field">
                            <select name="category" id="category">
                                <option value="" disabled selected>Choose your Brand</option>
                                <option value="t-shirt">t-shirt</option>
                                <option value="Jeans">Jeans</option>
                                <option value="SweatShirts">SweatShirts</option>
                                <option value="Tops">Tops</option>
                                <option value="Polo-shirts">Polo-shirts</option>
                                <option value="knitWear">knitWear</option>
                                <option value="Sweaters">Sweaters</option>
                                <option value="Trousers">Trousers</option>
                                <option value="Cardigans">Cardigans</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Jackets&Coats">Jackets&Coats</option>
                                <option value="Suit">Suit</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row">
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
            </main>
            `
        );
    });

    ft.insertAdjacentHTML(
        'beforebegin', footer
    ) 
};

getCatalogo();