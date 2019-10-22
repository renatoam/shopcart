import FixImage from "../handlers/FixImage";

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
      this.mountCart(objects);
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
      this.mountCart(objects);
  }

  clearRender() {
      let sideCart = document.querySelector('#cart');
      sideCart.innerHTML = "";
  }

  calculate() {
    let vlTotal = 0;
    this.cart.forEach(el => vlTotal += el.price - (el.price * 0.2));

    return vlTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  mountCart(objects) {
      let render = '';
      
      if (objects.length > 0) {
        objects.forEach(p => {
            this.clearRender();
            let currentPrice = (p.el.price - (p.el.price * 0.2)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
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
                        <li>${currentPrice}</li>
                        <li><img src="${logo}" alt="Logo ${brand}" style="${brand == 'Samsung' && "width: 45px"}"/></li>
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
          this.clearRender()
      }

      this.renderCart(render);
  }

  renderCart(render) {
    let sideCart = document.querySelector('#cart');
    let contentCart = '';
    let total = `
    <section class="bag__total">
        <p>Total(${this.cart.length == 1 ? this.cart.length + " item" : this.cart.length + " itens"}): </p>
        <p>${this.calculate()}</p>
    </section>
    `;

    contentCart = render + total;
    sideCart.insertAdjacentHTML('afterbegin', contentCart);
    FixImage();
  }
}

export default Cart;