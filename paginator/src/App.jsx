
import Gallery from './components/Gallery.jsx'
import ProductPage from './components/ProductPage'
import { useState, useEffect } from 'react';
import './App.css';
export default function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [product, setProduct] = useState([])

  const itemsPerPage = 10;
  const totalProducts = product.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);//194/10=19.4=20
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;//end=start+itemsPerPage

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200")
    const json = await data.json()
    console.log(json)
    return setProduct(json.products);

  }
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  function handleClick(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <div><h1>Pagination</h1></div>
      {/* <div className="product-container">
        {product.slice(start, end).map((p) => <ProductPage key={p.id} img={p.thumbnail} title={p.title} />)}
      </div>
       <div className="pagination-buttons">
        <button disabled={currentPage == 1} onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
        {pages.map((page) => <button className={page == currentPage ? "active" : ""} onClick={() => handleClick(page)}>{page}</button>)}
        <button disabled={currentPage == totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div> */}
      <Gallery/>
    </>
  )
}
