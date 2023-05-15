import './App.css';
import AboutUs from './Components/AboutUs';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import Section from './Components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <h2 className='text-4xl font-bold text-center mt-20 text-black'>Products</h2>
      <Products />
      <AboutUs />
      <Features />
    </div>
  );
}

export default App;
