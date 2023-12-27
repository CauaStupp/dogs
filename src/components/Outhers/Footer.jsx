import Logo from '../../assets/dogs-footer.svg?react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <p className={styles.copy}>
        Dogs &copy; Alguns direitos reservados.
      </p>
    </footer>
  )
}

export default Footer