import React from 'react'
import styles from './ProductDetails.module.css'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {

  const location = useLocation();
  const product = location.state?.product;

  const marketPrice = product.tcgplayer?.prices?.holofoil?.market ||
    product.tcgplayer?.prices?.normal?.market ||
    product.cardmarket?.prices?.averageSellPrice ||
    0;

  return (
    <div className={styles.main}>
      <div className={styles["product-container"]}>
        <div className={styles["product-image-container"]}>
          <img src={product.images.large} alt="" />
        </div>
        <div className={styles["product-details-container"]}>
          <div className={styles["product-details-header"]}>
            <h2>{product.name} - {product.number.toString().padStart(3, "0")}/{product.set.total} - {product.set.id.toString().toUpperCase()}:{product.set.name}</h2>
            <p>{product.set.id.toString().toUpperCase()}:{product.set.name}</p>
          </div>
          <div className={styles["product-details-wrapper"]}>
            <div className={styles["product-details"]}>
              <p><strong>Product Details</strong></p>
              <p><strong>Card Numbers / Rarity:</strong> {product.number.toString().padStart(3, "0")}/{product.set.total} / {product.rarity}</p>
              <p><strong>Card Type / Hp / Stage: </strong>{product.types} / {product.hp} / {product.subtypes}</p>
              { }
              <p><strong>Attack 1: </strong>{product.attacks[0]?.name} ({product.attacks[0]?.damage}) {product.attacks[0].text}</p>
              {product.attacks[1] &&
                <p><strong>Attack 2: </strong>{product.attacks[1]?.name} ({product.attacks[1]?.damage})</p>
              }
              <p><strong>Weakness / Resistance / Retreat Cost: </strong> {product.weaknesses[0].type.toString().slice(0, 1)}x{product.weaknesses[0].value.slice(-1)} / None / {product.retreatCost.length}</p>
              <p><strong>Artist: </strong>{product.artist}</p>
            </div>
            <div className={styles["product-price-container"]}>
              <div className={styles["price-container"]}>
                <div className={styles["website-name"]}>⚡ Direct By Yamz</div>
                <div className={styles["price-bottom-container"]}>
                  <div className={styles.condition}>Near Mint Reverse Holofoil</div>
                  <div className={styles.price}>${marketPrice}</div>
                  <div className={styles.via}>⚡ Available via Yamz Direct</div>
                  <div className={styles.sold}>Sold by Winchester Cards AK</div>
                  <div className={styles['buttons']}>
                    <div className={styles.quantity}>
                      <select id="choices" defaultValue={1} className={styles['quantity-select']}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <div className={styles['quantity-label']}>
                        of 3
                      </div>
                    </div>
                    <button className={styles['add-to-button']}>Add to Cart</button>
                  </div>
                  <div className={styles['pay-option']}>
                    <p>PayPal Pay in 4 interest-free payments on purchases of $0-$1,00.</p>
                    <a href='#'>Learn More</a>
                  </div>
                </div>
              </div>
              <div className={styles['listing']}>
                <div><a href="">View {Math.round(Math.random() * 100) + 1} Other Listings </a></div>
                <div>As Low As ${marketPrice}</div>
              </div>
              <div className={styles['product-actions']}>
                <div>Sell this 🏷️</div>
                <div>Report a problem ⚠️</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className={styles["stats-container"]}>
          <div className={styles['market-price-history']}>
            <h2>Market Price History</h2>
            <div className={styles['market-price-chart']}>

            </div>
          </div>
          <div className={styles['comparison-prices']}>
            <h2>Near Mint Comparison Prices</h2>
            <p>Market prices for alternative printings and conditions</p>
            <div className={styles['comparison-table']}>
              <table>
                <tbody>
                  <tr>
                    <td>Holofoil:</td>
                    <td>$0.12</td>
                    <td>Reverse Holofoil:</td>
                    <td>$0.25</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles['price-points']}>
              <div className={styles['price-point-header']}>
                <h3>Price Points ⚠️</h3>
                <p>Near Mint Holofoil</p>
              </div>
              <div className={styles['price-point-details']}>
                <div className={styles['price-point-market']}>
                  <span className={styles['price-point-label']}>Market Price:</span>
                  <span className={styles['price-point-value']}>${marketPrice}</span>
                </div>
                <div className={styles['price-point-recent']}>
                  <span className={styles['price-point-label']}>Most Recent Sale</span>
                  <span className={styles['price-point-value']}>$0.25</span>
                </div>
                <div className={styles['price-point-volatility']}>
                  <span className={styles['price-point-label']}>Price Volatility:</span>
                  <span className={styles['price-point-value']}><input type="range" min="0" max="100" value="50" /></span>
                </div>
                <div className={styles['price-point-listed']}>
                  <span className={styles['price-point-label']}>Listed Median:</span>
                  <span className={styles['price-point-value']}>$0.04</span>
                </div>
                <div className={styles['quantity-comparison-table']}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Current Quantity:</td>
                        <td>87</td>
                        <td>Current Sellers:</td>
                        <td>18</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div >
  )
}

export default ProductDetails