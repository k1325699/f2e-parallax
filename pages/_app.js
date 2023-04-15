import "@/styles/globals.css";
import localFont from "next/font/local";
const GenJyuuGothic = localFont({
  src: [
    {
      path: "./font/GenJyuuGothic-Normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/GenJyuuGothic-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/GenJyuuGothic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={GenJyuuGothic.className}>
      <Component {...pageProps} />
    </main>
  );
}
