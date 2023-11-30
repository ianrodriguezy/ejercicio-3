import styles from "./Recommended.module.css"
import products from "./products.json"

export function Recommended() {
  return (
    <div className={styles.recommended}>
      <h2>Recomendados</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.sku} className={styles.product}>
            <img src={product.image} alt={product.name} />
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <div className={styles.price}>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}