import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./App.css";
import { Error404 } from "./components/Error404";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Tienda" />} />
        <Route path="/tipo/:id" element={<ItemListContainer greeting="categorias" />} />
        <Route path="/aptoCeliaco/:id" element={<ItemListContainer greeting="items"/>}/>
        <Route path="/items/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error404/>}/>


      
      </Routes>
    </BrowserRouter>
  );
}
export default App;
