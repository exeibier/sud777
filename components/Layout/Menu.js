import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";
import { useState, useEffect, useRef } from "react";

function Menu() {
  //MENU
  const [isSubmenuActive, setSubmenuActive] = useState(false);
  const submenuHandler = () => {
    setSubmenuActive((prevState) => !prevState);
  };
  //SCROLL
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef();
  const submenuRef = useRef();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    const menu = menuRef.current;
    const submenu = submenuRef.current;
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (scrollPosition > 200) {
      menu.classList.add("scrolled");
      submenu.classList.add("scrolled");
    } else {
      menu.classList.remove("scrolled");
      submenu.classList.remove("scrolled");
    }
  }, [scrollPosition]);

  return (
    <Fragment>
      <div className={styles.menu_desktop} ref={menuRef}>
        <Link href="/">
          <a>INICIO</a>
        </Link>
        <Link href="#acerca">
          <a>ACERCA</a>
        </Link>
        <Link href="#menu">
          <a>MENÚ</a>
        </Link>
        <Link href="#vinos">
          <a>CARTA DE VINOS</a>
        </Link>
        <Link href="#chef">
          <a>CHEF</a>
        </Link>
        <Link href="#contacto">
          <a>CONTACTO</a>
        </Link>
        <ul>
          <li className={styles.submenu_trigger}>
            <Link href="#">
              <a>EVENTOS</a>
            </Link>
            <ul className={styles.submenu} ref={submenuRef}>
              <li>
                <Link href="/docs/brochure.pdf">
                  <a rel="noreferrer">DESCARGAR BROCHURE</a>
                </Link>
                <Link href="https://atom.take-take.com.mx/e-store/mx/sud777">
                  <a target="_blank" rel="noreferrer">
                    GIFT CARD
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <Link href="/docs/hokusai.pdf">
          <a rel="noreferrer">HOKUSAI</a>
        </Link>
        <Link href="/en">
          <a rel="noreferrer">ENG</a>
        </Link>
      </div>

      <div className={styles.menu_mobile}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <Image
                    alt="logo"
                    src="/img/logo.png"
                    width={1233}
                    height={316}
                    priority="true"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.burguer} onClick={submenuHandler}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
        {isSubmenuActive && (
          <div className={styles.menu_hidden}>
            <Link href="/">
              <a>INICIO</a>
            </Link>
            <Link href="#acerca">
              <a>ACERCA</a>
            </Link>
            <Link href="#menu">
              <a>MENÚ</a>
            </Link>
            <Link href="#vinos">
              <a>CARTA DE VINOS</a>
            </Link>
            <Link href="#chef">
              <a>CHEF</a>
            </Link>
            <Link href="#contacto">
              <a>CONTACTO</a>
            </Link>
            <Link href="#">
              <a>EVENTOS</a>
            </Link>
            <Link href="/docs/brochure.pdf">
              <a rel="noreferrer">DESCARGAR BROCHURE</a>
            </Link>
            <Link href="https://atom.take-take.com.mx/e-store/mx/sud777">
              <a target="_blank" rel="noreferrer">
                GIFT CARD
              </a>
            </Link>
            <Link href="/docs/hokusai.pdf">
              <a rel="noreferrer">HOKUSAI</a>
            </Link>
            <Link href="/en">
              <a rel="noreferrer">ENG</a>
            </Link>
            <div className={styles.redes}>
              <Link href="https://www.instagram.com/edgarnunezm/">
                <a target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.facebook.com/edgar.nunezmagana">
                <a target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://twitter.com/edgarnunezm">
                <a target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Menu;
