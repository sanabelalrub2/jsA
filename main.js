


fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        const products = data.products;
        let html = "";
        products.forEach(product => {
            html += `<div>
                        <h2>${product.title}</h2>
                        <img src="${product.thumbnail}" alt="${product.title}" />
                        <p>Price: ${product.price}</p>
                     </div>`;
        });
        document.getElementById('product-list').innerHTML = html;
    });
 