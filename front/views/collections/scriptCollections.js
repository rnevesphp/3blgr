const doc = document;
const API = "http://localhost:3001/colecciones";
const col = doc.getElementById("collections");

const ft = doc.getElementById("footerCollections");
const hd = doc.getElementById("headerCollections"); 

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
                `<div class="">
                    <div class="col s12 m12 l3 card-box">
                        <div href="/views/catalogue.html" class="card card-1">
                            <div class="card-image ">
                                <a>
                                    <img src="" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="info-collection">
                            <h3>${collection.nombrecoleccion} ${collection.collectionyear}</h3>
                            <a>VER AHORA</a>
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


