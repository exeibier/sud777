import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Menu from "../../components/Layout/Menu-en";
import Head from "next/head";
import Image from "next/image";
import Title from "../../components/UI/Title";
import Paragraph from "../../components/UI/Paragraph";
import styles from "../index.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HEADER_IMAGES = [
  {
    id: 1,
    image: "slide-1.jpg",
  },
  {
    id: 2,
    image: "slide-2.jpg",
  },
  {
    id: 3,
    image: "slide-3.jpg",
  },
  {
    id: 4,
    image: "slide-4.jpg",
  },
  {
    id: 5,
    image: "slide-5.jpg",
  },
];

const MENU_IMAGES = [
  {
    id: 1,
    imageDesktop: "degu-en-sp.jpg",
    imageMobile: "mobiledegu-en-sp.jpg",
    width: 2251,
    height: 3800,
  },
  {
    id: 2,
    imageDesktop: "vegano-en-sp.jpg",
    imageMobile: "mobilevegano-en-sp.jpg",
    width: 2251,
    height: 3800,
  },
  {
    id: 3,
    imageDesktop: "entrada-en-sp.jpg",
    imageMobile: "mobileentra-en-sp.jpg",
    width: 2251,
    height: 3500,
  },
  {
    id: 4,
    imageDesktop: "verdes-en-sp.jpg",
    imageMobile: "mobileverde-en-sp.jpg",
    width: 2251,
    height: 3500,
  },
  {
    id: 5,
    imageDesktop: "fuertes-en-sp.jpg",
    imageMobile: "mobifuertes-en-sp.jpg",
    width: 2251,
    height: 3500,
  },
  {
    id: 6,
    imageDesktop: "postres-en-sp.jpg",
    imageMobile: "mobilepostres-en-sp.jpg",
    width: 2251,
    height: 3500,
  },
];

const WINE_IMAGES = [
  {
    id: 1,
    imageDesktop: "vinos1.jpg",
    imageMobile: "vinos1.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 2,
    imageDesktop: "vinos2.jpg",
    imageMobile: "vinos2.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 3,
    imageDesktop: "vinos3.jpg",
    imageMobile: "vinos3.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 4,
    imageDesktop: "vinos4.jpg",
    imageMobile: "vinos4.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 5,
    imageDesktop: "vinos5.jpg",
    imageMobile: "vinos5.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 6,
    imageDesktop: "vinos6.jpg",
    imageMobile: "vinos6.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 7,
    imageDesktop: "vinos7.jpg",
    imageMobile: "vinos7.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 8,
    imageDesktop: "vinos8.jpg",
    imageMobile: "vinos8.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 9,
    imageDesktop: "vinos9.jpg",
    imageMobile: "vinos9.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 10,
    imageDesktop: "vinos10.jpg",
    imageMobile: "vinos10.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 11,
    imageDesktop: "vinos11.jpg",
    imageMobile: "vinos11.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 12,
    imageDesktop: "vinos12.jpg",
    imageMobile: "vinos12.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 13,
    imageDesktop: "vinos13.jpg",
    imageMobile: "vinos13.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 14,
    imageDesktop: "vinos14.jpg",
    imageMobile: "vinos14.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 15,
    imageDesktop: "vinos15.jpg",
    imageMobile: "vinos15.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 16,
    imageDesktop: "vinos16.jpg",
    imageMobile: "vinos16.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 17,
    imageDesktop: "vinos17.jpg",
    imageMobile: "vinos17.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 18,
    imageDesktop: "vinos18.jpg",
    imageMobile: "vinos18.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 19,
    imageDesktop: "vinos19.jpg",
    imageMobile: "vinos19.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 20,
    imageDesktop: "vinos20.jpg",
    imageMobile: "vinos20.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 21,
    imageDesktop: "vinos21.jpg",
    imageMobile: "vinos21.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 22,
    imageDesktop: "vinos22.jpg",
    imageMobile: "vinos22.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 23,
    imageDesktop: "vinos23.jpg",
    imageMobile: "vinos23.jpg",
    width: 1900,
    height: 1385,
  },
  {
    id: 24,
    imageDesktop: "vinos24.jpg",
    imageMobile: "vinos24.jpg",
    width: 1900,
    height: 1385,
  },
];

function useMobileHeight(height) {
  const [mobileHeight, setMobileHeight] = useState(height);

  function computeMobileHeight() {
    const isMobile = window.innerWidth < 768;
    setMobileHeight(isMobile ? "310px" : height);
  }

  useEffect(() => {
    computeMobileHeight();

    function handleResize() {
      computeMobileHeight();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [height]);

  return mobileHeight;
}

export default function Home() {

  const mobileHeight = useMobileHeight("100vh");

  return (
    <Fragment>
      <Head>
        <title>Sud777</title>
        <meta name="description" content="SUD" />
      </Head>

      <Menu />

      <main>
        <div className={styles.header}>
          <div className={styles.carousel}>
            <Carousel
              showStatus={false}
              autoPlay={true}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
            >
              {HEADER_IMAGES.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={styles.item}
                    style={{
                      backgroundImage: `url(/img/slider/${item.image})`,
                    }}
                  ></div>
                );
              })}
            </Carousel>
          </div>
          <div className={styles.overlay}></div>
          <div className={styles.contenido}>
            <div className={styles.image}>
              <Image alt="logo" src="/img/logo.png" width={1233} height={316} />
            </div>
            <h3>BLVD DE LA LUZ 777 / JARDINES DEL PEDREGAL</h3>
          </div>
        </div>
        <div className={styles.banner}>
          <Image alt="banner" src="/img/img1.jpg" width={1900} height={989} />
        </div>
        <div className={styles.acerca} id="acerca">
          <div className="container">
            <Title>SUD 777</Title>
            <Paragraph>
              Located in the heart of Pedregal, Sud 777 is a restaurant that
              honors the tradition of a neighborhood designed by prominent urban
              planners and architects. Since its opening in 2008, it has been
              part of the culinary offerings of southern Mexico City due to the
              gastronomic proposal of chef Edgar Núñez who has positioned
              himself worldwide for his prodigious technique and his Mexican
              vegetable cuisine. He has obtained a position on the Latin
              America&#39;s&#39; 50 Best Restaurants list for the last four
              consecutive years.
            </Paragraph>
            <Paragraph>
              Today, the restaurant offers a tasting menu that changes according
              to the best ingredients offered by the season —a large part comes
              from the restaurant&#39;s&#39; gardens. Visitors can also enjoy an
              experience in the terrace lounge to try the cocktail or a glass of
              wine and take a break from the hustle and bustle of the city.
            </Paragraph>
          </div>
        </div>
        <div className={styles.menus} id="menu">
          <Title>MENÚ</Title>
          <div className={styles.carousel}>
            <Carousel
              showStatus={false}
              autoPlay={true}
              showArrows={true}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
            >
              {MENU_IMAGES.map((item) => {
                return (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.imagen}>
                      <div className="hide-mobile">
                        <Image
                          alt="Menu"
                          src={`/img/menu/nov/${item.imageDesktop}`}
                          width={1900}
                          height={1200}
                        />
                      </div>
                      <div className="show-mobile">
                        <Image
                          alt="Menu"
                          src={`/img/menu/nov/${item.imageMobile}`}
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className={styles.menus} id="vinos">
          <Title>MENÚ</Title>
          <div className={styles.carousel}>
            <Carousel
              showStatus={false}
              autoPlay={true}
              showArrows={true}
              showThumbs={false}
              showIndicators={false}
              infiniteLoop={true}
            >
              {WINE_IMAGES.map((item) => {
                return (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.imagen}>
                      <div className="hide-mobile">
                        <Image
                          alt="vinos"
                          src={`/img/vinos-en/${item.imageDesktop}`}
                          width={1900}
                          height={1200}
                        />
                      </div>
                      <div className="show-mobile">
                        <Image
                          alt="vinos"
                          src={`/img/vinos-en/${item.imageMobile}`}
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className={styles.chef} id="chef">
          <div className={styles.imagen}>
            <Image
              alt="Chef Edgar Nuñez"
              src="/img/nu_chef.jpg"
              width={1010}
              height={1385}
            />
          </div>
          <div className={styles.texto}>
            <Title>CHEF EDGAR NUÑEZ</Title>
            <Paragraph>
              From an early age, chef Edgar Núñez developed a taste for
              vegetables by inheritance from his mother, since then, that
              culinary inclination has become a guiding principle of his
              gastronomic proposal, which he calls Mexican vegetable cuisine. At
              the same time, he is a chef who seeks to explore the infinite
              possibilities offered by a good product, from the one he gets in
              the garden of his restaurant and the Xochimilco chinampas to the
              fish and shellfish from other Mexican regions.
            </Paragraph>
            <Paragraph>
              The visitor can explore his visions around the kitchen in the
              restaurants of which he is co-owner chef. SUD 777 is his vision of
              fine dining, which has placed him in the 17th position of the
              Latin America’s 50 Best Restaurants list and in the 58 th position
              of The World’s 50 Best Restaurants list. He is also the chef
              co-owner of Comedor Jacinta, a Mexican dining room with a casual
              proposal that is much more informal with dishes from his childhood
              and his interpretation of how he sees Mexican cuisine today.
            </Paragraph>
            <Paragraph>
              The chef is a member of ACADEMIE CULINAIRE DE FRANCE and the
              Colectivo Mexicano de Cocina AC.
            </Paragraph>

            <div className={styles.redes}>
              <Link href="https://www.instagram.com/edgarnunezm/">
                <a target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="35"
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
                    width="25"
                    height="25"
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
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.instagram}>
          <Title>
            <Link href="https://www.instagram.com/edgarnunezm/">
              <a target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </Link>
          </Title>
          <div className={styles.grid}>
          <iframe
              src="https://snapwidget.com/embed/1031305"
              className="snapwidget-widget"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              style={{ border: "none", overflow: "hidden", width: "100%", height: mobileHeight }}
            /> 
          </div>
        </div>
        <div className={styles.contacto} id="contacto">
          <div className="container">
            <Title>SUD777.COM</Title>
            <div className={styles.redes}>
              <Link href="https://www.instagram.com/edgarnunezm/">
                <a target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
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
                    width="25"
                    height="25"
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
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className={styles.imagen}>
              <Image
                alt="Chef Edgar Nuñez"
                src="/img/contacto.jpg"
                width={1028}
                height={336}
              />
            </div>
            <div className={styles.texto1}>
              BLVRD DE LA LUZ 777 / JARDINES DEL PEDREGAL
            </div>
            <div className={styles.texto2}>
              <Link href="tel:55 55 68 4777">
                <a target="_blank" rel="noreferrer">
                  55 55 68 47 77
                </a>
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link href="https://www.opentable.com.mx/sud-777-reservations-mexico-city?restref=20653&lang=es-MX">
                <a target="_blank" rel="noreferrer">
                  RESERVATION
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
