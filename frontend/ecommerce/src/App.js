import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router,  Routes,  Route,  Link,  useParams } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/about" element={<MyAbout />} />
          <Route path="/user/:userId" element={<MyUser />} />
          <Route path="/products/*" element={<MyProducts />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
    <Footer/>
  </Router>
  );
}

export default App;