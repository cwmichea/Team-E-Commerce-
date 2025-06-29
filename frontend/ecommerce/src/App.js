import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router,  Routes,  Route,  Link,  useParams } from 'react-router-dom';
import MyHome from './Components/MyHome'
import MyAbout  from './Components/MyAbout'
import MyUser from './Components/MyUser'
import MyProducts from './Components/MyProducts'
import styled from 'styled-components';


const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Nav/>
        <Wrapper>
          <Routes>
            <Route path="/" element={<MyHome />} />
            <Route path="/about" element={<MyAbout />} />
            <Route path="/user/:userId" element={<MyUser />} />
            <Route path="/products/" element={<MyProducts />} />
            <Route path="/products/productId" element={<MyProducts />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </Wrapper>
        <Footer/>
      </AppWrapper>
  </Router>
  );
}

const AppWrapper = styled.div`
  //KezarE: Adding properties to stick footer at the bottom of the screen
  display: flex;
  flex-direction: column;
  min-height:100vh;
`
const Wrapper = styled.div`
    //KezarE: Adding to push Footer to the bottom, no matter the amount of data in body
    flex-grow: 1;
`
export default App;