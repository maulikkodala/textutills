import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark')
      showAlert("Dark Mode Enable", "success")
    } else {
      setMode('light')
      showAlert("Light Mode Enable", "success")
    }
  }

  return (
    <Router>
      <>
        <Navbar title="Text Utils" abouttext="About" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
