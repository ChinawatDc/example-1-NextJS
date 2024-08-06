import "../styles/globals.css";
import "../styles/styles.css";
import { Prompt } from 'next/font/google';
import ThemeRegistry from '../components/Theme/ThemeRegistry';
import Navbar from "../layout/Navbar";
import Sidebar2 from "../layout/Sidebar2";
import Sidebar from "../layout/Sidebar";
import 'primeflex/primeflex.css';                                   // css utility
import 'primereact/resources/primereact.css';                       // core css
import 'primereact/resources/primereact.min.css';                       // core css
import "primereact/resources/themes/lara-light-cyan/theme.css";// theme
import 'primeicons/primeicons.css';

const prompt = Prompt({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Example01",
  description: "Example01",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <ThemeRegistry>
          <Navbar />
          <div className="globals-layout">
            <div className="flex ">
              <div className="hidden md:block border-e pr-6">
                <Sidebar />
              </div>
              {/* <Sidebar2 /> */}
              <div className="w-[100vw] md:px-6">
                {children}
              </div>
            </div>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
