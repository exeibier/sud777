import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import Paragraph from "../UI/Paragraph";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.izquierda}>
        <Paragraph>© 2022 Todos los derechos reservados</Paragraph>
      </div>
      <div className={styles.derecha}>
        <Link href="/aviso-de-privacidad">
          <a rel="noreferrer">Aviso De Privacidad</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
