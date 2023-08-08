import { Router, Route, Routes, A } from '@solidjs/router';
import { styled } from 'solid-styled-components';
import { Navbar } from '@/ui';
import Home from './Home';
import About from './About';
import Info from './Info';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => (
  <Router>
    <Container>
      <Navbar>
        <A href="/">Home</A>
        <A href="/info">Info</A>
        <A href="/about">About</A>
      </Navbar>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Info} />
      </Routes>
    </Container >
  </Router>
);

export default App;