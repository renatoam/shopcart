import logo from './../../assets/logo-akatsuki.png';
let boxLogo = document.querySelector('.header__logo img');

export default function InjectImg() {
  boxLogo.setAttribute('src', logo);
}