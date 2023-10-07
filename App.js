import './App.css';
import Main from './Main';
import Details from './Details';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route index element={<Main/>} />
      <Route path='Details' element={<Details/>} />
    </Routes>


  </>
  );

}

export default App;
