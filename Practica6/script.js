var productController;


class Product {
    constructor(productName, price, quantity, description) {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

class ProductController {
    constructor() {
        this.txtProductName = document.getElementById('txtProductName');
        this.txtPrice = document.getElementById('txtPrice');
        this.txtQuantity = document.getElementById('txtQuantity');
        this.txtDescription = document.getElementById('txtDescription');
        this.tbBody = document.getElementById('tbBody');

        this.products = new Array();
    }

    addProduct() {

        let productName = this.txtProductName.value;
        let price = this.txtPrice.value;
        let quantity = this.txtQuantity.value;
        let description = this.txtDescription.value;

        let product = new Product(productName, price, quantity, description );
        this.products.push(product);

        this.displayProducts();

        this.txtProductName.value = '';
        this.txtPrice.value = '';
        this.txtQuantity.value = '';
        this.txtDescription.value = '';

    }

    deleteProducts(i) {
        this.products.splice(i, 1);
        this.displayProducts();
    }

    displayProducts() {
        this.tbBody.innerHTML = '';

        for (let i in this.products) {
            let product = this.products[i];

            let tr = document.createElement('tr');

            let tdProductName = document.createElement('td');
            tdProductName.innerHTML = product.productName;

            let tdPrice = document.createElement('td');
            tdPrice.innerHTML = product.price;

            let tdQuantity = document.createElement('td');
            tdQuantity.innerHTML = product.quantity;

            let tdDescription = document.createElement('td');
            tdDescription.innerHTML = product.description;

            let tdOption = document.createElement('td');
            let btnDelete = document.createElement('button');

            btnDelete.type = 'button';
            btnDelete.innerHTML = 'Delete';
            btnDelete.className = 'btn btn-primary';

            btnDelete.onclick = function() {
                productController.deleteProducts(i);
            }

            tdOption.appendChild(btnDelete);

            tr.appendChild(tdProductName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdQuantity);
            tr.appendChild(tdDescription);

            this.tbBody.appendChild(tr);
        }
    }
}

window.onload = function() {
    productController = new ProductController();
}
