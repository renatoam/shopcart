import bkp from './../../assets/chibi-naruto.png';

export default function FixImage () {
 let img = Array.from(document.querySelectorAll('img'));
 
 // Select all images from page and on image error, change the src attribute with a backup image
 img.forEach(i => {
   i.addEventListener('error', () => {
    this.setAttribute('src', bkp);
   });
 });
}