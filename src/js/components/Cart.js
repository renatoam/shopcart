// Importing functions that fix images not loading
import FixImage from "../handlers/FixImage";

// Importing API for requests
import api from './../services';

// Importing images
import moto from './../../assets/moto.png';
import lg from './../../assets/lg.png';
import samsung from './../../assets/samsung.png';
import lenovo from './../../assets/lenovo.png';
import notfound from './../../assets/chibi-naruto.png';

class Cart {
    constructor() {
        this.cart = [];
    }

    // Show item count on Header (cart icon) 
    countItems(items) {
        document.querySelector('#qtd').textContent = items;
    }

    updateStock(id, qtd) {
        api.patch(`/${id}`, {
            quantity: qtd
        });
    }

    addToCart(obj) {
        let stockQtd = obj.quantity - 1

        if (obj.quantity > 0) {
            this.cart.push(obj);
            this.updateStock(obj.id, stockQtd);
            this.countItems(this.cart.length);
            this.mountCart(obj);
        } else {
            return;
        }
    }

    removeFromCart(obj) {
        let stockQtd = obj.quantity + 1
        let del = this.cart.findIndex(el => el.id === obj.id);

        if (obj.quantity > 0) {
            this.cart.splice(del, 1);
            this.countItems(this.cart.length);
            this.updateStock(obj.id, stockQtd);
            this.mountCart(obj);
        } else {
            return;
        }
    }

    clearRender() {
        let sideCart = document.querySelector('#cart');
        sideCart.innerHTML = "";
    }

    calculate() {
        let vlTotal = 0;
        this.cart.forEach(el => vlTotal += el.price - (el.price * 0.2));

        return vlTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    setBrand(brand) {
        let logo = '';
        switch (brand) {
            case 'Motorola': logo = moto;
                break;
            case 'LG': logo = lg;
                break;
            case 'Samsung': logo = samsung;
                break;
            case 'Lenovo': logo = lenovo;
                break;
            default: logo = notfound;
        }

        return logo;
    }

    currentPrice(obj) {
        if (obj) {
            return (obj.price - (obj.price * 0.2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        } else {
            return;
        }
    }

    total(length) {
       return `<section class="bag__total">
                    <p>Total(${length == 1 ? length + " item" : length + " itens"}): </p>
                    <p>${this.calculate()}</p>
                </section>`;
    }

    mountCart(obj) {
        let render = '';

        if (obj.quantity > 0) {
            let logo = this.setBrand(obj.brand);
            let currentPrice = this.currentPrice(obj);
            let quantity = this.cart.filter(el => el.id == obj.id).length;
            this.clearRender();

            render += `
            <section class="bag">
                <section class="bag__item" data-id="${obj.id}">
                    <figure>
                        <img src="${obj.picture}" />
                    </figure>
                    <ul class="bag__info">
                        <li>${obj.title}</li>
                        <li>${currentPrice}</li>
                        <li><img src="${logo}" alt="Logo ${obj.brand}" style="${obj.brand == 'Samsung' && "width: 45px"}"/></li>
                    </ul>
                    <section class="bag__actions">
                        <button class="add" data-id="${obj.id}">+</button>
                        <span>${quantity}</span>
                        <button class="remove" data-id="${obj.id}">-</button>
                    </section>
                </section>
            </section>`;
        } else {
            this.clearRender()
        }

        this.renderCart(render);
    }

    renderCart(render) {
        let sideCart = document.querySelector('#cart');
        let contentCart = '';
        let total = this.total(this.cart.length);

        contentCart = render + total;
        sideCart.insertAdjacentHTML('afterbegin', contentCart);
        FixImage();
    }
}

export default Cart;