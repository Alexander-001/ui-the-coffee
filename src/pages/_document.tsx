import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
        rel="stylesheet"
      />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
