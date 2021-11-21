# Projeto Refactoring
O projeto Refactoring consiste em passar por todos os meus repositórios antigos e refatorar o código existente e finalizar os projetos inacabados.

A ideia também é manter a versão antiga em outra branch, assim posso fazer comparações entre eles.

## 16. Simple shop cart (sim, mais um) com Javascript puro.

## Main Topics

- Vanilla JS
- ES6
- Object Oriented Programming
- 100 days of code
- Classes
- Front-End Challenge

> ### Obs
>
> See the comments through the application to understand every piece of code and its role.

## Initializing application

To initialize the application, you have to execute the server that simulate an API (See [Json Server](https://github.com/typicode/json-server)):

        npm run server

Then, execute the application with:

        npm run dev

## Disclaimer

The initial used API doesn't allow PATCH method, therefore I had to use a fake API JSON Server.
To use initial API and control the stock, use script below.

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

        obj.forEach(p => {
                this.clearRender();
                let currentPrice = (p.el.price - (p.el.price * 0.2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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

## Branches

### master

- Stable channel

### config/xxx

- Readme, package.json, gulp, webpack, etc.

### feature/xxx

- Adding of complete new features

### fix/xxx

- Issues for fix

### style/xxx

- Styling application

### js/xxx

- Adding of simple snippets

> #### OBSERVAÇÕES
>
> O ExpressJS foi instalado, mas ainda não foi configurado
