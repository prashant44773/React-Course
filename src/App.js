// import logo from './logo.svg';
import './App.css';
import './Components/Textform';
import './Components/About';

import './Components/Navbar';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import Alert from './Components/Alert';
import React, {useState} from "react";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
   const [mode, setmode] = useState('light');
   const [alert, setAlert] = useState(null);
   
   const showAlert = (message,type)=> {
	   setAlert({
		   msg: message,
		   type: type
		})
		setTimeout(() => {
			setAlert(null);
		}, 3000);
   }
   
   const toggleMode=()=>{ 
        if(mode === 'light')
        {   
            setmode('dark');
            document.body.style.backgroundColor = 'grey';
            showAlert("Dark Mode has been Enabled","SUCCESS");
        }
        else
        {
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been Enabled","SUCCESS");
        }
   }
  return (
   <>
			<Navbar title="TextTutils" mode={mode} toggleMode={toggleMode}/>
			<Textform></Textform>
			{/* <Router>
			<Navbar title="TextTutils" mode={mode} toggleMode={toggleMode}/>
			<Alert alert={alert}></Alert>
				<Routes>
			          <Route  path="/" element={<Textform/>}/>
			          <Route  exact path="/about" element={<About/>}/>
		        </Routes> 
			</Router> */}
    </>
  );
}

export default App;
