// Importando api e módulo que gera o template
import api from './../services';
import Template from './Template';

class Product {  
  constructor() {
      this.products = '';
      this.elements = [];
  }  
  
  // Retrieving products
  async request() {
      let container = document.getElementById('products');
      let res = await api.get();
    //   let productData = res.data.products;
      let productData = res.data;
      
      // For each product, use class Template to generate a html schema of product (I know, there's a lot of other methods)
      productData.forEach(p => {
          let template = new Template(p);
          this.products += template.template();
          this.elements.push(p)
      });
      container.insertAdjacentHTML('afterbegin', this.products);

      // Returning a product array to use in Main.js
      return this.elements
  }

  // Clear product list (not mini cart)
  clearList() {
    let container = document.getElementById('products');

    container.innerHTML = "";
  }

  // Show and Close modals
  showDetails(id) {
    document.querySelector(`.modal[data-id="${id}"]`).style.display = 'block';
  }

  closeDetails(id) {
    document.querySelector(`.modal[data-id="${id}"]`).style.display = 'none';
  }
}

export default Product;