document.addEventListener('DOMContentLoaded', function() {
    const saleForm = document.getElementById('saleForm');
    const saleDetails = document.getElementById('saleDetails');
    const subtotalElement = document.getElementById('subtotal');
    const ivaElement = document.getElementById('iva');
    const descuentoElement = document.getElementById('descuento');
    const totalElement = document.getElementById('total');

    let subtotal = 0;
    let iva = 0;
    let total = 0;
    let descuento = 0;

    saleForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        let productQuantity = parseFloat(document.getElementById('productQuantity').value);

        // Verifica que el nombre del producto no contenga números
        if (/\d/.test(productName)) {
            alert('Por favor, ingrese un nombre de producto válido, sin números.');
            return;
        }

        if (isNaN(productPrice) || isNaN(productQuantity) || productPrice <= 0 || productQuantity <= 0) {
            alert('Por favor, ingrese un precio válido, sin letras.');
            return;
        }

        productQuantity = Math.abs(productQuantity);

        const productTotal = productPrice * productQuantity;
        const detailElement = document.createElement('div');
        detailElement.classList.add('detail');
        detailElement.innerHTML = `
            <p>${productName}: $${productPrice.toFixed(2)} x ${productQuantity} = $${productTotal.toFixed(2)}</p>
        `;
        saleDetails.appendChild(detailElement);

        subtotal += productTotal;

        if (subtotal >= 10) {
            descuento = 0.1;
            subtotal -= descuento;
        }

        subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
        iva = subtotal * 0.15;
        ivaElement.textContent = `IVA: $${iva.toFixed(2)}`;
        descuentoElement.textContent = `Descuento: $${descuento.toFixed(2)}`;
        total = subtotal + iva - descuento;
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    });
});
