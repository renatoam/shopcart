import api from './../services';
import Template from './Template';
// let api = require('./../services');
// let Template = require('./Template');

class Product {  
  constructor() {
      this.products = '';
      this.elements = [];
  }  
  
  async request() {
      let container = document.getElementById('products');
      let res = await api.get();
      let productData = res.data.products;
      
      productData.forEach(p => {
          let template = new Template(p);
          this.products += template.template();
          this.elements.push(p)
      });
      container.insertAdjacentHTML('afterbegin', this.products);

      return this.elements
  }
}

export default Product;