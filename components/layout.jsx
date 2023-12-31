"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import inicioStyles from "../styles/inicio.module.css";

import Link from "next/link";
import { useState } from "react";
export const siteTitle = "greedyMe";
export default function Layout({ children, home }) {
  const [inicio, setInicio] = useState(true);
  setTimeout(() => {
    setInicio(false);
  }, 4000);

  return (
    <>
      {home && inicio ? (
        <div className={inicioStyles.container}>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <Image
            priority
            src="/assets/logo.png"
            fill={true}
            className={inicioStyles.logo}
          />
        </div>
      ) : (
        <div className={styles.container}>
          {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}
          <header className={styles.header}>
            {/* {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )} */}
          </header>
          <main>{children}</main>

          {/* {!home && (
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          )} */}
        </div>
      )}
    </>
  );
}
