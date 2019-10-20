// imports
// let Product = require('./Product');
// let Cart = require('./Cart');
import Product from './Product';
import Cart from './Cart';

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

export default ShopCart;