import Header from './Header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
