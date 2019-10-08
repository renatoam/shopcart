import Template from './Template';
import Product from './Product';

class Cart {
    constructor() {
        this.cart = [];
        this.products = new Product;
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

        let del = this.cart.findIndex(el => el.id === obj.id);

        this.cart.splice(del, 1);
        let unique = new Set(this.cart);

        unique.forEach(el => {
            let qtd = this.cart.filter(f => f.id === el.id).length;
            objects.push({ el, qtd });
        });

        iconCart.textContent = this.cart.length;
        this.renderCart(objects);
    }

    clearRender(element) {
        element.innerHTML = "";
    }

    renderCart(objects) {
        let render = '';
        let sideCart = document.querySelector('#cart');

        if (objects.length > 0) {
            objects.forEach(p => {
                this.clearRender(sideCart);
                let currentPrice = (p.el.price - (p.el.price * 0.2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                let logo = '';
                let brand = p.el.brand;
                switch (brand) {
                    case 'Motorola': logo = './../../src/assets/moto.png';
                        break;
                    case 'LG': logo = './../../src/assets/lg.png';
                        break;
                    case 'Samsung': logo = './../../src/assets/samsung.png';
                        break;
                    case 'Lenovo': logo = './../../src/assets/lenovo.png';
                        break;
                    default: logo = './../../src/assets/chibi-naruto.png'
                }
                render += `
                <section class="bag">
                    <section class="bag__item" data-id="${p.el.id}">
                        <figure>
                            <img src="${p.el.picture}" />
                        </figure>
                        <ul class="bag__info">
                            <li>${p.el.title}</li>
                            ${p.el.quantity > 0 ? currentPrice : '<li>INDISPONÍVEL</li>'}
                            ${p.el.quantity > 0 ? '<li>EM ESTOQUE</li>' : false}
                            <li><img src="${logo}" alt="Logo ${brand}" ${brand == 'Samsung' || brand == 'Lenovo' ? 'style="width: 45px"' : false} /></li>
                        </ul>
                        <section class="bag__actions">
                            <button class="add" data-id="${p.el.id}">+</button>
                            <span>${p.qtd}</span>
                            <button class="remove" data-id="${p.el.id}">-</button>
                        </section>
                    </section>
                </section>`;
            });
        } else {
            this.clearRender(sideCart)
        }

        sideCart.insertAdjacentHTML('afterbegin', render);
    }
}

export default Cart;