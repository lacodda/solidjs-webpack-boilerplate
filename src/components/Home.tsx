import { createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Button } from '@/ui';
import logo from '@/images/logo.svg';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background: var(--gr-azure-pink);
  width: 100%;
  height: 100%;
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .count {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
  }
`;

const Title = styled.div`
  display: flex;
  column-gap: 1rem;
  h1 {
    font-size: var(--font-size-h1);
    width: max-content;
    text-transform: uppercase;
    background: var(--teal);
    background: var(--gr-teal-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Home = () => {
  const [count, setCount] = createSignal(0);

  function inc (): void {
    setCount(count() + 1);
  }
  function dec (): void {
    setCount(count() - 1);
  }

  return (
    <Container>
      <Title>
        <img src={logo} width="100" />
        <h1>Solid JS Boilerplate</h1>
      </Title>
      <div class="counter">
        <Button class="size-l" onClick={inc}>+</Button>
        <Button class="size-l" onClick={dec}>−</Button>
        <div class="count">{count()}</div>
      </div>
    </Container>
  );
};

export default Home;