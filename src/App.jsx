import Home from "../src/pages/Home";
import './css/App.css';
import Favorites from "./pages/Favorites";
import {Routes,Route} from "react-router-dom";
import { MovieProvider } from "./contex/MovieContex";
import NavBar from "./components/NavBar"

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>

      </main>
    </MovieProvider>
        
  );
}

export default App;
