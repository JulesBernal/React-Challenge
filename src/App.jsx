import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Middle from './components/Middle'
import Last from './components/Last'

function App() {
  return (
    <main>
      <h2>Hi</h2>
      <Router >
        <Navbar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/middle" element={<Middle />} />
            <Route path="/last" element={<Last />} />
          </Routes>
      </Router>
  </main>
  );
}

export default App;
