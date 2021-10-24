import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';


function App() {
  return (
    <>
      <Particles 
      className="particules-canvas"
        params={{
          particles:{
            number:{
              value:100,
              density:{
                enable:true,
                value_area:900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width: 6,
                color: "#206baf"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
    );
}

export default App;
