import './App.css';
import './CommonStyles.scss';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} exact />
      </Routes>
    </Router>
    
  );
}

export default App;
