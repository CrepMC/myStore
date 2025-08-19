import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {

  const name = 'nahn';

  return (
    <>
      <Header />
      <h1>Hello {name}</h1>
      <p>This is my shop</p>
      <Footer />
    </>
  );
}

export default App;