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

export default Template;