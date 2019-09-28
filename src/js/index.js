// imports
import api from './services';

class Cart {
    constructor() {
        this.cart = [];
    }

    addToCart(obj) {
        let iconCart = document.querySelector('#qtd');
        let objects = [];
        
        this.cart.push(obj);
        let unique = new Set(this.cart);
        
        unique.forEach(el => {
            let qtd = this.cart.filter(f => f.id === el.id).length;
            objects.push({ el, qtd });
        });

        iconCart.textContent = this.cart.length;
        this.renderCart(objects);
    }

    removeFromCart(obj) {
        let iconCart = document.querySelector('#qtd');
        let objects = [];
        
        this.cart.pop(obj);
        let unique = new Set(this.cart);
        
        unique.forEach(el => {
            let qtd = this.cart.filter(f => f.id === el.id).length;
            objects.push({ el, qtd });
        });
        
        iconCart.textContent = this.cart.length;
        this.renderCart(objects);
    }

    clearRender() {
        let sideCart = document.querySelector('#cart');
        sideCart.innerHTML = "";
    }

    renderCart(objects) {
        let render = '';
        let sideCart = document.querySelector('#cart');        
        
        objects.forEach(p => {
            this.clearRender();
            render += `
            <section class="bag">
                <section className="bag__item" data-id="${p.el.id}">
                    <ul class="bag__info">
                        <li>${p.el.title}</li>
                        <li>${p.el.price}</li>
                        <li>${p.qtd}</li>
                    </ul>
                    <section class="bag__actions">
                        <button class="add" data-id="${p.el.id}">+</button>
                        <button class="remove" data-id="${p.el.id}">-</button>
                    </section>
                </section>
            </section>`;
        });

        sideCart.insertAdjacentHTML('afterbegin', render);
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
                    <ul class="features">
                        <li>${this.chipType}</li>
                        <li>${this.memory}</li>
                    </ul>
                </section>
                <section class="product__price">
                    <p class="price">${this.currentPrice}</p>
                    <p class="oldPrice"><small><del>${this.oldPrice}</del></small></p>
                </section>
            </section>
            <section class="product__actions">
                <button class="button bookmark">♥</button>
                <button type="button" class="button add" data-id="${this.id}">Add to Cart</button>
                <button class="button compare">♣</button>
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
            let obj = this.product.elements.filter(el => el.id == target.getAttribute('data-id'));
            
            target.classList.contains('add') && this.cart.addToCart(obj[0]);
            target.classList.contains('remove') && this.cart.removeFromCart(obj[0]);
        });
    }
}

const Shop = new ShopCart;

document.addEventListener('DOMContentLoaded', Shop.mount(), false);


