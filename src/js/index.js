// imports
import api from './services';

class Cart {
    constructor() {
        this.cart = [];
    }

    addToCart(id) {
        let domCart = document.querySelector('#itemsCart');
        this.cart.push(id);
        domCart.textContent = cart.length;
        this.renderCart();
    }

    removeFromCart(id) {
        let domCart = document.querySelector('#itemsCart');
        this.cart.pop(id);
        domCart.textContent = cart.length;
    }

    renderCart() {
        let cart = '';
        let sideCart = document.querySelector('#cart');
        if (this.cart.length > 0) {
            this.cart.forEach(el => {
                let qtd = this.cart.filter(el => el.id === el.id).length;
                cart += `<ul>
                    <li>${el.title}</li>
                    <li>${el.price}</li>
                    <li>${qtd}</li>
                </ul>`;
            });
        }
        sideCart.insertAdjacentHTML('afterbegin', cart);
    }
}

class Template {
    constructor(prod) {
        this.id = prod.id,
        this.title = prod.title,
        this.picture = prod.picture,
        this.brand = prod.brand,
        this.memory = prod.memory,
        this.chipType = prod.chipType,
        this.price = prod.price,
        this.description = prod.description,
        this.quantity = prod.quantity
    }

    get currentPrice(){
        let currentPrice = (this.price - (this.price * 0.2)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        return currentPrice;
    }

    get oldPrice(){
        let oldPrice = this.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        return oldPrice;
    }

    template(){
        let template = `
        <section class="product" id="${this.id}">
            <figure class="product__image">
                <img src="${this.picture}" alt="${this.brand}"/>
            </figure>
            <section class="product__info">
                <section class="product__title">
                    <p class="title">${this.title}</p>
                    <ul>
                        <li>${this.chipType}</li>
                        <li>${this.memory}</li>
                    </ul>
                </section>
                <section class="product__price">
                    <p class="price">${this.currentPrice}</p>
                    <p class="oldPrice"><small><del>${this.oldPrice}</del></small></p>
                </section>
            </section>
            <section class="actions">
                <button class="bookmark">♥</button>
                <button type="button" class="addToCart" data-id="${this.id}">Add to Cart</button>
                <button class="compare">♣</button>
            </section>
        </section>
        `;

        return template;
    }
}

class Product {  
    constructor() {
        this.products = '';
        this.elements = [];
    }  
    
    async request() {
        let container = document.getElementById('products');
        let res = await api.get();
        let productData = res.data.products;
        
        productData.forEach(p => {
            let template = new Template(p);
            this.products += template.template();
            this.elements.push(p)
        });
        container.insertAdjacentHTML('afterbegin', this.products);

        return this.elements
    }
}

class ShopCart {
    constructor() {
        this.cart = new Cart;
        this.product = new Product;
    }

    mount() {
        this.product.request()
        this.addEvent()
    }

    addEvent() {
        document.addEventListener('click', e => {
            let target = e.target;
            target != 'addTocart' && false;

            let obj = this.product.elements.filter(el => el.id == target.getAttribute('data-id'));

            target && this.cart.addToCart(obj[0]);
        });
    }
}

const Shop = new ShopCart;

document.addEventListener('DOMContentLoaded', Shop.mount(), false);


