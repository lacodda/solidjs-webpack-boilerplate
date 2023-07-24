import { A } from '@solidjs/router';
import '../styles/navbar.scss';

const Navbar = () => (
  <nav class="navbar__container">
    <div class="navbar__menu">
      <A href="/">Home</A>
      <A href="/info">Info</A>
      <A href="/about">About</A>
    </div>
  </nav>
);

export default Navbar;