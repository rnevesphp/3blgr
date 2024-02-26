const doc = document;
const API = "http://localhost:3001/colecciones";
const col = doc.getElementById("collections");

const ft = doc.getElementById("footer");
const hd = doc.getElementById("header"); 

import header from "../header/header.js"
import footer from "../footer/footer.js"

const getCollections = async () => {
    col.innerHTML = ""; 

    hd.innerHTML = ""; 
    ft.innerHTML = ""; 

    hd.insertAdjacentHTML(
        'beforeend', header
    );

    const responseFromAPI = await fetch(API);
    const collectionsFromDatabase = await responseFromAPI.json();

    console.log(collectionsFromDatabase); 

    collectionsFromDatabase.map( (collection) => {
        col.insertAdjacentHTML
        (   
            'beforeend', 
                `<div class="row ">
                    <div class="col s12 m12 l4 card-box">
                        <div href="/views/catalogue.html" class="card card-1">
                            <div class="card-image ">
                                <a>
                                    <img src="" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="info-collection">
                            <h3>${collection.nombrecoleccion}</h3>
                            <a href="/views/catalogue.html">VER AHORA</a>
                        </div>
                    </div>
                </div>
            `
        );
    })

    ft.insertAdjacentHTML(
        'beforeend', footer
    );
};

getCollections(); 