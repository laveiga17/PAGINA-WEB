class SaleDetail {
    static _line = 0;

    constructor(product, quantity) {
        SaleDetail._line += 1;
        this.__id = SaleDetail._line;
        this.product = product;
        this.preci = product.preci;
        this.quantity = quantity;
    }

    get id() {
        return this.__id;
    }

    toString() {
        return `${this.id} ${this.product.descrip} ${this.preci} ${this.quantity}`;
    }
}

// Crear detalles de venta
const product1 = { descrip: "Aceite", preci: 2 };
const product2 = { descrip: "Colas", preci: 3 };
const product3 = { descrip: "Leche", preci: 1 };

const saleDetails = [
    new SaleDetail(product1, 2),
    new SaleDetail(product2, 1),
    new SaleDetail(product3, 3)
];

// Mostrar detalles de venta en la página
const saleDetailsContainer = document.getElementById('sale-details-container');
saleDetails.forEach(detail => {
    const detailCard = document.createElement('div');
    detailCard.classList.add('sale-detail');
    detailCard.innerHTML = `
        <h2>${detail.product.descrip}</h2>
        <p>ID: ${detail.id}</p>
        <p>Precio: $${detail.preci}</p>
        <p>Cantidad: ${detail.quantity}</p>
    `;
    saleDetailsContainer.appendChild(detailCard);
});
