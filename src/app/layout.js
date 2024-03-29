import { Inter } from "next/font/google";
import "./globals.css";
// app/layout.tsx
import { Providers } from './providers';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Github user Finder",
  description: "Generated by github user information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <Providers> {children}</Providers>
    
       
        </body>
    </html>
  );
}
