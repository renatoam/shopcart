// Importando módulos
import MiniCart from "./components/Main";
import Fix from "./handlers/FixImage";

// Instanciando os componentes (classes)
const Mini = new MiniCart();

// Renderizando conteúdo no DOM
document.addEventListener("DOMContentLoaded", () => {
    Mini.mount();
    // Executando correção de imagens depois que o conteúdo é carregado, senão não funciona
    setTimeout(() => { Fix() }, 200);
  }, false
);
