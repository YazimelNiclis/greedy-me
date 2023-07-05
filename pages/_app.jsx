import "../styles/global.css";

import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
