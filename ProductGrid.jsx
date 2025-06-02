import React, { useState, useEffect } from "react";
import "./productGrid.css"
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ProductGrid = () => {

  const { searchQuery } = useOutletContext();
  const [products, setProducts] = useState([]);

  const url = "https://api.pokemontcg.io/v2/cards?q=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${encodeURIComponent(searchQuery)}`, {
          headers: { "X-Api-Key": "226adf21-60c4-45d4-a3e1-603b6be32acf" },
        });
        const data = await response.json();
        setProducts(data.data || []);
        console.log("Fetched products:", data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className="main">
      <div className="products-grid js-products-grid">
        {products.map((product) => {
          const price =
            product.tcgplayer?.prices?.holofoil?.directLow ||
            product.tcgplayer?.prices?.normal?.directLow ||
            product.cardmarket?.prices?.trendPrice ||
            0;

          const marketPrice = product.tcgplayer?.prices?.holofoil?.market ||
            product.tcgplayer?.prices?.normal?.market ||
            product.cardmarket?.prices?.averageSellPrice ||
            0;
          return (
            <NavLink to="/productDetails" key={product.id} state={{ product }}>
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.images.small} />
                </div>

                <div className="product-details">

                  <div className="product-name limit-text-to-2-lines">
                    {product.name}
                  </div>

                  <div className="product-set">
                    {product.set.id.toUpperCase()}: {product.set.name}
                  </div>

                  <div className="product-list-count">
                    {Math.round(Math.random() * 10)} listings from
                  </div>

                  <div className="product-price">
                    ${price == 0 ? "OUT OF STOCK" : price}
                  </div>

                  <div className="product-market-price">
                    <strong>Market Price:</strong> {marketPrice == 0 ? "OUT OF STOCK" : "$" + marketPrice}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;

// export const productGridLoader = async ({ params }) => {
//   const searchQuery = "set.id:sv6";
//   const url = `https://api.pokemontcg.io/v2/cards?q=${encodeURIComponent(searchQuery)}`;

//   try {
//     const response = await fetch(url, {
//       headers: { "X-Api-Key": "226adf21-60c4-45d4-a3e1-603b6be32acf" },
//     });
//     const data = await response.json();
//     return data.data || [];
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }