// Obtener elementos del DOM
const companyNameElement = document.getElementById('company-name');
const companyRucElement = document.getElementById('company-ruc');
const invoiceNumberElement = document.getElementById('invoice-number');
const invoiceDateElement = document.getElementById('invoice-date');
const clientNameElement = document.getElementById('client-name');
const clientDniElement = document.getElementById('client-dni');
const invoiceDetailsBodyElement = document.getElementById('invoice-details-body');
const subtotalElement = document.getElementById('subtotal');
const discountElement = document.getElementById('discount');
const ivaElement = document.getElementById('iva');
const totalElement = document.getElementById('total');

// Función para mostrar la factura
function printInvoice(sale) {
    companyNameElement.textContent = "Nombre Empresa"; // Colocar el nombre de la empresa
    companyRucElement.textContent = "RUC: 1234567890"; // Colocar el RUC de la empresa
    invoiceNumberElement.textContent = `Factura#: ${sale.invoice}`;
    invoiceDateElement.textContent = `Fecha: ${sale.date}`;
    clientNameElement.textContent = `Cliente: ${sale.client.fullName()}`;
    clientDniElement.textContent = `DNI: ${sale.client.dni}`;

    invoiceDetailsBodyElement.innerHTML = ''; // Limpiar detalles de factura antes de agregar nuevos

    sale.sale_detail.forEach(detail => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${detail.id}</td>
            <td>${detail.product.descrip}</td>
            <td>${detail.preci}</td>
            <td>${detail.quantity}</td>
            <td>${detail.preci * detail.quantity}</td>
        `;
        invoiceDetailsBodyElement.appendChild(row);
    });

    subtotalElement.textContent = `Subtotal: ${sale.subtotal}`;
    discountElement.textContent = `Descuento: ${sale.discount}`;
    ivaElement.textContent = `IVA: ${sale.iva}`;
    totalElement.textContent = `Total: ${sale.total}`;
}

// Llamar a la función printInvoice con datos de prueba
const sale = {
    invoice: 'F001',
    date: '2024-05-21',
    client: { fullName: () => 'Nombre Cliente', dni: '123456789' },
    sale_detail: [{ id: 1, product: { descrip: 'Producto 1' }, preci: 10, quantity: 2 }],
    subtotal: 0,
    discount: 0,
    iva: 0,
    total: 0
};

printInvoice(sale);
