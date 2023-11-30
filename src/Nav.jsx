import icon from './assets/icon.svg';
import styles from './Nav.module.css';
import searchIcon from './assets/search.svg';

export function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navBrand}>
        <img className={styles.navBrandIcon} src={icon} alt='logo' />
        <a href='home' className={styles.navBrandName}>ReactShop</a>
      </div>
      <form className={styles.searchBar}>
        <input className={styles.searchBarInput}
          type="text"
          placeholder="Buscar..."
        />
        <img className={styles.searchBarIcon} src={searchIcon} alt='search' />
      </form>
      <ul className={styles.navMenuList}>
        <li>
          <a href="sale" className={styles.navMenuItemLink}>Ofertas</a>
        </li>
        <li>
          <a href="support" className={styles.navMenuItemLink}>Soporte</a>
        </li>
      </ul>
    </div>
  );
}