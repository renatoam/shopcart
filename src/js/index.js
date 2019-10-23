// Importing application control module
import ShopCart from "./components/Main";

// Importing aux functions
import Fix from "./handlers/FixImage";
import Inject from './handlers/InjectImage';

// Importing styles
import '../scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';

// Instantating the control class
const Shop = new ShopCart();

// Calling function after DOM load its content
document.addEventListener("DOMContentLoaded", () => {

    // Executing the mount application module that starts application
    Shop.mount();

    // Waiting DOM load its content to call aux functions
    setTimeout(() => {
      
      // Fix not loading images
      Fix(); 

      // Injecting some images in HTML file
      Inject();

    }, 200);
  }, false
);