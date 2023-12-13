import {Container} from 'react-bootstrap';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      
      <Footer />
      
    </>
  );
}

export default App;
