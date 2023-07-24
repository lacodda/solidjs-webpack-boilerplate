import { Router, Route, Routes } from '@solidjs/router';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Info from './Info';
import '../styles/app.scss';

const App = () => (
  <Router>
    <div class="app">
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/info" component={Info} />
      </Routes>
    </div >
  </Router>
);

export default App;