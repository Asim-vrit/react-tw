import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../../api/services/ProductServices";

function Products() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetchProducts().then((data) => {
      setResponse(data);
    });
  }, []);
  console.log(response);
  return <div>Products</div>;
}

export default Products;
