# SIMPLE SHOP CART IN VANILLA JAVASCRIPT

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
