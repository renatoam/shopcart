// Importando módulo que controla a aplicação
import ShopCart from "./components/Main";

// Importando funções auxiliares
import Fix from "./handlers/FixImage";
import Inject from './handlers/InjectImage';

// Importando estilos
import '../scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';

// Instanciando a classe de controle
const Shop = new ShopCart();

// Executando função assim que o DOM carregar seu conteúdo
document.addEventListener("DOMContentLoaded", () => {

    // Inicializando a aplicação com método que monta a classe de controle
    Shop.mount();

    // Executando funções auxiliares após o DOM carregar seu conteúdo
    setTimeout(() => {
      
      // Correção de imagens que não carregaram (aplicação de placeholder)
      Fix(); 

      // Injetando algumas imagens no HTML
      Inject();

    }, 200);
  }, false
);