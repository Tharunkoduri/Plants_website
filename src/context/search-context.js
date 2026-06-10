import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProducts,setAllProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products")
      .then(response =>{
        const updatedProducts = response.data.map(product =>({...product,price:product.price * 85}));
        setAllProducts(prev=>[...prev, ...updatedProducts]);
      }
      );
  },[])

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, allProducts, setAllProducts }}>
      {children}
    </SearchContext.Provider>
  );
}