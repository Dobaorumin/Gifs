import { useState } from "react";
import AddCategory from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";
import "./css/Main.css";

//const apiKey = "sYhaRgCBd5NIISV5n5MOir3f2w8SZwLH"







function App() {
  const [categories, setCategories] = useState([]);

  const deleteCategorie = (nombre) => {
    const result = [...categories].filter((e) => e !== nombre)
    setCategories(result)
  }



  return (
    <>
      <section className="main-section">
        <h1 className="main-title">Givemify</h1>
        <AddCategory setCategories={setCategories} />
        {categories.length >= 1 ? (
          <div className="categorias">
              {categories.map((categorias,index) => {
                return <button  onClick={() => deleteCategorie(categorias)}key={index} className="categorias-btn">{categorias}<span className="closer">x</span></button>;
              })}
          </div>
        ) : null}
      </section>
      <div className="gif-container">
        <ul className="gif-grid">
          {categories.map((result,index) => {
            return <GifGrid category={result} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
