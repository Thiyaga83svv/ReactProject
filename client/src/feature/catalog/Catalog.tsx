
import { useState, useEffect } from "react";
import { Product } from "../../app/Models/product";
import ProductList from "./ProductList";

export default function Catalog()
{
    const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  fetch('http://localhost:5201/api/products')
  .then(response => response.json())
  .then(data => setProducts(data))
}, [])



    return ( <>
      <ProductList products={products} />
      </>
      )
}

