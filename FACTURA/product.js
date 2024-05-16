// Clase Product
class Product {
    constructor(id = 0, descrip = "Ninguno", preci = 0, stock = 0) {
        this.id = id;
        this.descrip = descrip;
        this.preci = preci;
        this.stock = stock;
    }

    getJson() {
        return {
            id: this.id,
            descripcion: this.descrip,
            precio: this.preci,
            stock: this.stock
        };
    }
}

// Función para cargar los productos en la página
function cargarProductos() {
    const products = [
        new Product(1, "Aceite", 2, 1000),
        new Product(2, "Colas", 3, 5000),
        new Product(3, "Leche", 1, 300)
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.innerHTML = `
            <h2>${product.descrip}</h2>
            <p>ID: ${product.id}</p>
            <p>Precio: $${product.preci}</p>
            <p>Stock: ${product.stock}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Llamar a la función para cargar los productos cuando la página se carga completamente
window.addEventListener('load', cargarProductos);
