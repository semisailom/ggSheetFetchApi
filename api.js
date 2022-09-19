//Url del Google Sheets
//const url = 'https://docs.google.com/spreadsheets/d/1kZcUs9kuis-yD5n3SHmMoxUT3lxK11hSc3AjZPPZY00/gviz/tq?';
const url = 'https://docs.google.com/spreadsheets/d/1qqcewCVPu3hTQTlgLBHbPWKJShlVnEiKu4ZdHLctPvc/gviz/tq?';
const productsContainer = document.querySelector('.products-grid');
    fetch(url)
    .then(res => res.text())
    .then(response =>{

        //Parseando el JSON
        const data = JSON.parse(response.substr(47).slice(0,-2));
        //consologeando el JSON
        console.log(data);

        //Iterando sobre el JSON para crear los productos
        data.table.rows.forEach(product => {

            const productCard = document.createElement('div');
            productCard.classList.add('product-card',);
            productCard.setAttribute('data-aos', 'fade-up');
            productCard.innerHTML = `
                <div class="product-card__image">
                    <img class="product-img" src="${product.c[4].v}" alt="${product[0]}">
                </div>
                <div class="product-card__info">
                    <h2 class="product-brand">Brand: ${product.c[0].v}</h2>
                    <p class="product-text">Model: ${product.c[1].v}</p>
                    <p class="product-text">Year: ${product.c[3].v}</p>
                    <a class="product-link" href="${product.c[5].v}">
                    <button class="product-btn">More</button>
                    </a>
                </div>
            `;
            productsContainer.appendChild(productCard);
        }
    );
}).catch(error => console.log(error)); //catch error en caso de que no se pueda parsear el JSON
