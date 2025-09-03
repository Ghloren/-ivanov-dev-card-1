
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './blocks/Header/header';
import { Container } from './blocks/Container/Container'; 
import './App.css';

// Заглушки для компонентов страниц
const MainSection = () => (
  <Container> 
    <div>Главная (в разработке)</div>
  </Container>
);

const Resume = () => (
  <Container> 
    <div>Резюме (в разработке)</div>
  </Container>
);

const Portfolio = () => (
  <Container> 
    <div>Портфолио (в разработке)</div>
  </Container>
);

const Hobbies = () => (
  <Container> 
    <div>Хобби (в разработке)</div>
  </Container>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="app__main">
            <Routes>
              <Route path="/" element={<MainSection />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;