
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Card from './components/Card';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let count = false;
  const [change, setChange] = useState(null);
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(" mode has been enabled", "dark");
      setChange({ color: 'white' });
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" mode has been enabled", "light");
      setChange({ color: 'black' });
    }
  }
  const toggleBlueMode = () => {
    if (mode === 'light') {
      setMode('blue');
      document.body.style.backgroundColor = '#2475eb';
      showAlert(" mode has been enabled", "primary");
    }
    else if (mode === 'dark') {
      setMode('blue');
      document.body.style.backgroundColor = '#2475eb';
    }
    else if (mode === 'blue') {
      if (count === true) {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
      else if (count === false) {
        setMode('dark');
        document.body.style.backgroundColor = 'black';
      }

    }
  }

  return (
    <>
      
      <Router>
      <Navbar title='Ford Mustang' mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode} change={change} />
      <Alert alert={alert} />
        <div className="container my-5">
          <Switch>
            <Route exact path="/"> <Card /> </Route>
            <Route exact path="/about"> <About /> </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
