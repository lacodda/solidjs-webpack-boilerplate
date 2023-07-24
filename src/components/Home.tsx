import { createSignal } from 'solid-js';
import logo from '@/images/logo.svg';
import '../styles/home.scss';

const Home = () => {
  const [counter, setCounter] = createSignal(0);

  return (
    <div class="home__container">
      <div class="home__title">
        <img src={logo} width="100" />
        <h1>Solid JS Boilerplate</h1>
      </div>
      <div class="home__counter">
        <button class="btn" onClick={() => { setCounter(counter() + 1); }}>+</button>
        <button class="btn" onClick={() => { setCounter(counter() > 0 ? counter() - 1 : 0); }}>−</button>
        <div class="home__count">{counter()}</div>
      </div>
    </div>
  );
};

export default Home;