// Importando api e módulo que gera o template
import api from './../services';
import Template from './Template';

class Product {  
  constructor() {
      this.products = '';
      this.elements = [];
  }  
  
  async request() {
      let container = document.getElementById('products');
      let res = await api.get();
    //   let productData = res.data.products;
      let productData = res.data;
      
      productData.forEach(p => {
          let template = new Template(p);
          this.products += template.template();
          this.elements.push(p)
      });
      container.insertAdjacentHTML('afterbegin', this.products);

      return this.elements
  }

  clearList() {
    let container = document.getElementById('products');

    container.innerHTML = "";
  }

  showDetails(id) {
    document.querySelector(`.modal[data-id="${id}"]`).style.display = 'block';
  }

  closeDetails(id) {
    document.querySelector(`.modal[data-id="${id}"]`).style.display = 'none';
  }
}

export default Product;