import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
