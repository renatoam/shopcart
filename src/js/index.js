// Importando módulos
import ShopCart from "./components/Main";
import Fix from "./handlers/FixImage";

// Instanciando os componentes (classes)
const Shop = new ShopCart();

// Renderizando conteúdo no DOM
document.addEventListener("DOMContentLoaded", () => {
    Shop.mount();
    // Executando correção de imagens depois que o conteúdo é carregado, senão não funciona
    setTimeout(() => { Fix() }, 200);
  }, false
);
