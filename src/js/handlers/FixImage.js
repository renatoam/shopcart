export default function FixImage () {
 let img = Array.from(document.querySelectorAll('img'));
 
 img.forEach(i => {
   i.addEventListener('error', () => {
    this.setAttribute('src', './../../assets/chibi-naruto.png');
   });
 });
}