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
          let currentPrice = (p.el.price - (p.el.price * 0.2)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
          render += `
          <section class="bag">
              <section class="bag__item" data-id="${p.el.id}">
                  <figure>
                      <img src="${p.el.picture}" />
                  </figure>
                  <ul class="bag__info">
                      <li>${p.el.title}</li>
                      <li>${currentPrice}</li>
                  </ul>
                  <section class="bag__actions">
                      <button class="add" data-id="${p.el.id}">+</button>
                      <span>${p.qtd}</span>
                      <button class="remove" data-id="${p.el.id}">-</button>
                  </section>
              </section>
          </section>`;
      });

      sideCart.insertAdjacentHTML('afterbegin', render);
  }
}

export default Cart;