// imports
import Product from './Product';
import Cart from './Cart';
import Template from './Template';

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
            let miniCart = this.cart;
            let container = document.querySelector('#products');
            let obj = this.product.elements.filter(el => el.id == target.getAttribute('data-id'))[0];
            let products = '';
            let inStock = obj.quantity;
            let inCart = miniCart.cart.filter(f => f.id === obj.id).length;

            if (inCart >= inStock) {
                miniCart.clearRender(container);
                this.product.elements.forEach(p => {
                    let template = ''
                    if (p.id == obj.id) {
                        template = new Template(p, obj.id);
                    } else {
                        template = new Template(p);
                    }
                    products += template.template();
                })
                container.insertAdjacentHTML('afterbegin', products);
                return;
            }

            target.classList.contains('add') && this.cart.addToCart(obj);
            target.classList.contains('remove') && this.cart.removeFromCart(obj[0]);
        });
    }
}

export default ShopCart;