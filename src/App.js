import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
