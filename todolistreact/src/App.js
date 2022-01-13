import {Routes, Route} from 'react-router-dom';

import Home from './paginas/Home'
import About from './paginas/About'

function App() {

  return (
      <Routes className="text-center">
        <Route path="about" element={<About/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
  );
}

export default App;
