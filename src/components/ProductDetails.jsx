import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

  const location = useLocation();
  const product = location.state?.product;

  const marketPrice = product.tcgplayer?.prices?.holofoil?.market ||
    product.tcgplayer?.prices?.normal?.market ||
    product.cardmarket?.prices?.averageSellPrice ||
    0;

  return (
    <div className="mt-[100px] font-sans">
      <div className="p-[20px] max-w-[1300px] mx-auto grid grid-cols-[450px_1fr] gap-5">
        <div className="flex items-center justify-center bg-[#f7f7f8] px-[50px] py-5 rounded-lg">
          <img src={product.images.large} alt="" className="w-[90%] max-h-full object-contain" />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className='font-semibold text-2xl mb-2'>{product.name} - {product.number.toString().padStart(3, "0")}/{product.set.total} - {product.set.id.toString().toUpperCase()}:{product.set.name}</h2>
            <p className='text-[gray] text-sm'>{product.set.id.toString().toUpperCase()}:{product.set.name}</p>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <p className='mb-2 text-sm'><strong>Product Details</strong></p>
              <p className='mb-2 text-sm'><strong>Card Numbers / Rarity:</strong> {product.number.toString().padStart(3, "0")}/{product.set.total} / {product.rarity}</p>
              <p className='mb-2 text-sm'><strong>Card Type / Hp / Stage: </strong>{product.types} / {product.hp} / {product.subtypes}</p>
              { }
              <p className='mb-2 text-sm'><strong>Attack 1: </strong>{product.attacks[0]?.name} ({product.attacks[0]?.damage}) {product.attacks[0].text}</p>
              {product.attacks[1] &&
                <p className='mb-2 text-sm'><strong>Attack 2: </strong>{product.attacks[1]?.name} ({product.attacks[1]?.damage})</p>
              }
              <p className='mb-2 text-sm'><strong>Weakness / Resistance / Retreat Cost: </strong> {product.weaknesses[0].type.toString().slice(0, 1)}x{product.weaknesses[0].value.slice(-1)} / None / {product.retreatCost.length}</p>
              <p className='mb-2 text-sm'><strong>Artist: </strong>{product.artist}</p>
            </div>
            <div className='flex flex-col gap-2.5'>
              <div className='border border-[#add8e6] overflow-hidden rounded-[8px]'>
                <div className='p-1 text-center w-full bg-[#edf4fe]'>⚡ Direct By Yamz</div>
                <div className='p-[15px] pb-2.5'>
                  <div className='mb-2'>Near Mint Reverse Holofoil</div>
                  <div className='text-xl font-semibold'>${marketPrice}</div>
                </div>
                <div className="text-center text-sm">⚡ Available via Yamz Direct</div>
                <div className='p-[15px] pt-[10px]'>
                  <div className="text-sm text-[gray] mb-2">Sold by Winchester Cards AK</div>
                  <div className='flex gap-2.5 justify-center items-center mb-2'>
                    <div className="flex items-center flex-1">
                      <select id="choices" defaultValue={1} className="block text-center flex-1 py-3 px-4 border border-[#ccc] rounded-tl-[5px] rounded-bl-[5px] text-sm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <div className="px-4 py-3 border border-[#ccc] rounded-tr-[5px] rounded-br-[5px] text-sm flex flex-1 justify-center items-center border-l-0 bg-[#f7f7f8]">
                        of 3
                      </div>
                    </div>
                    <button className="flex-1 rounded-sm bg-[blue] text-white py-[11px] px-[10px] border-0 text-sm">Add to Cart</button>
                  </div>
                  <div className="text-sm">
                    <p>PayPal Pay in 4 interest-free payments on purchases of $0-$1,00.</p>
                    <a href='#' className='text-blue-700'>Learn More</a>
                  </div>
                </div>

              </div>
              <div className="border border-[#add8e6] rounded-[5px] p-3.5 flex flex-col mb-2.5 items-center">
                <div><a href="" className='underline text-sm'>View {Math.round(Math.random() * 100) + 1} Other Listings </a></div>
                <div>As Low As ${marketPrice}</div>
              </div>
              <div className="text-[12px] flex justify-center gap-5 mb-2.5">
                <div className='flex-1 flex justify-end items-center'>Sell this 🏷️</div>
                <div className='flex-1 flex justify-start items-center'>Report a problem ⚠️</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className='flex gap-5'>
          <div className='flex-1'>
            <h2 className='text-[16px]'>Market Price History</h2>
            <div className=''>

            </div>
          </div>
          <div className='flex-1'>
            <h2 className='text-[16px]'>Near Mint Comparison Prices</h2>
            <p className='text-sm mb-[14px]'>Market prices for alternative printings and conditions</p>
            <div className='w-full border border-[#ccc] rounded-[5px] p-2.5 mb-2.5 border-collapse text-[12px]'>
              <table>
                <tbody>
                  <tr>
                    <td className='w-[30%] font-semibold'>Holofoil:</td>
                    <td className='w-[20%] text-right pr-[10px]'>$0.12</td>
                    <td className='w-[30%] font-semibold pl-[5px]'>Reverse Holofoil:</td>
                    <td className='w-[20%] text-right'>$0.25</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=''>
              <div className='flex justify-between items-center text-[16px]'>
                <h3>Price Points ⚠️</h3>
                <p>Near Mint Holofoil</p>
              </div>
              <div className='border border-[#ccc] rounded-[5px] p-2.5'>
                <div className='font-semibold text-[18px] mb-1 flex justify-between items-center py-0 px-[8px]'>
                  <span className=''>Market Price:</span>
                  <span className=''>${marketPrice}</span>
                </div>
                <div className='text-sm mb-1.5 flex justify-between items-center py-0 px-[8px]'>
                  <span className=''>Most Recent Sale</span>
                  <span className=''>$0.25</span>
                </div>
                <div className='flex justify-between items-center py-0 px-[8px]'>
                  <span className=''>Price Volatility:</span>
                  <span className=''><input type="range" min="0" max="100" value="50" /></span>
                </div>
                <div className='flex justify-between items-center py-0 px-[8px]'>
                  <span className=''>Listed Median:</span>
                  <span className=''>$0.04</span>
                </div>
                <div className='text-[14px] flex justify-between items-center py-0 px-[8px]'>
                  <table className='table-fixed w-full'>
                    <tbody>
                      <tr>
                        <td className='w-[35%] font-bold'>Current Quantity:</td>
                        <td className='w-[15%] text-right pr-[5px]'>87</td>
                        <td className='w-[35%] font-bold pl-[10px]'>Current Sellers:</td>
                        <td className='w-[15%] text-right'>18</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails