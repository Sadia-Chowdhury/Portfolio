import { Outfit, Ovo } from "next/font/google";
import './globals.css';

const outfit = Outfit({
  
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
 
  subsets: ["latin"], weight:["400"]
});

export const metadata = {
  title: "Portfolio",
  description: "Sadia Haque Chowdhury's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
