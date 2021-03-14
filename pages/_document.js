import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Style from '../assets/styles/tailwind.css'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css" integrity="sha512-wl80ucxCRpLkfaCnbM88y4AxnutbGk327762eM9E/rRTvY/ZGAHWMZrYUq66VQBYMIYDFpDdJAOGSLyIPHZ2IQ==" crossorigin="anonymous" />
          <link
            rel="shortcut icon"
            href={require("assets/img/brand/favicon.png")}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/brand/favicon.png")}
          />
        </Head>
        <body className="text-gray-800 antialiased" >
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
