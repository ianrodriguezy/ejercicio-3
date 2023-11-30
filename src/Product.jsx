import PropTypes from 'prop-types';
import styles from './Product.module.css';

Product.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

/**
 * Componente de Producto.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.sku - ID del producto.
 * @param {string} props.name - Nombre del producto.
 * @param {number} props.price - Precio del producto.
 * @param {string} props.image - URL de la imagen del producto.
 * @param {string} props.description - Descripción del producto.
 * @param {number} props.stock - Stock del producto.
 * @returns {JSX.Element} Un elemento JSX que representa un producto.
 */

export function Product({ sku, name, price, image, description, stock }) {
  const formattedDescription = description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
  return (
    <div className={styles.product}>
      <img className={styles.productImg} src={image} alt={sku} />
      <section className={styles.productInfo}>
        <h1 className={styles.productName}>{name}</h1>
        <h2 className={styles.productPrice}>
          ${price.toLocaleString('es-ES')}
          <p className={styles.productSku}>SKU: {sku}
           <span className={styles.productStock}>{stock === 0 ? 'Sin stock' : `Stock: ${stock}`}</span>
          </p>
        </h2>

        <p className={styles.productDescription}>{formattedDescription}</p>
        <button className={styles.btn}>Comprar en Tienda</button>
      </section>
    </div>
  );
}