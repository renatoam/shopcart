// importing product and cart control modules
import Product from './Product';
import Cart from './Cart';

// Application Control Class
class ShopCart {
    constructor() {
        this.cart = new Cart;
        this.product = new Product;
    }

    // Render products and attach events to dynamic elements
    mount() {
        this.product.request()
        this.addEvent()
    }

    // Attach events to dynamic elements
    addEvent() {
        document.addEventListener('click', e => {
            let target = e.target;
            let obj = this.product.elements.filter(el => el.id == target.getAttribute('data-id'));
            // Verify all elements that match target element ID and creates an array "obj"
            
            target.classList.contains('add') && this.cart.addToCart(obj[0]);
            target.classList.contains('remove') && this.cart.removeFromCart(obj[0]);
            target.classList.contains('closeOrder') && this.cart.closeOrder();
            target.classList.contains('details') && this.product.showDetails(target.getAttribute('data-id'));
            target.classList.contains('modal__close') && this.product.closeDetails(target.getAttribute('data-id'));
            // Verify by class name if it add or remove an item and pass as argument only one item from array obj
        });
    }
}

export default ShopCart;