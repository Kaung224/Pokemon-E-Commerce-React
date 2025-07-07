import React, { useState, useEffect } from "react";
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
    <div className="mt-[100px] font-times">
      <div className="js-products-grid grid grid-cols-5 gap-10 pl-[50px] pr-[50px] max-4xl:grid-cols-4 max-3xl:grid-cols-3 max-2xl:grid-cols-2 max-1xl:grid-cols-1" >
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
              <div key={product.id} className="p-2.5 border border-solid border-[rgba(0,0,0,0.1)] rounded-lg bg-white text-black flex flex-row gap-4 transition-shadow hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] shadow-[0_0_4px_rgba(0,0,0,0.2)] cursor-pointer">
                <div className="flex items-center justify-center overflow-hidden h-[180px] w-[150px]">
                  <img className="w-full object-contain h-full" src={product.images.small} />
                </div>

                <div className="flex flex-col align-start">
                  <div className="mb-2 font-bold text-xl">
                    {product.name}
                  </div>

                  <div className="text-[rgb(105,105,105)] mb-2 text-sm">
                    {product.set.id.toUpperCase()}: {product.set.name}
                  </div>

                  <div className="text-[rgb(48,48,48)] text-sm">
                    {Math.round(Math.random() * 10)} listings from
                  </div>

                  <div className="font-semibold text-2xl mb-2">
                    ${price == 0 ? "OUT OF STOCK" : price}
                  </div>

                  <div className="text-[green] font-semibold">
                    <strong className="text-black">Market Price:</strong> {marketPrice == 0 ? "OUT OF STOCK" : "$" + marketPrice}
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