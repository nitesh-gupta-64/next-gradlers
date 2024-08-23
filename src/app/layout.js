import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import AppContextProvider from "@/Context/AppContext";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gradlers",
  description:
    "Gradlers is a student first overseas education specialist, where your global education dreams are shaped and fulfilled seamlessly.",
  keywords:
    "gradlers, Gradlers, students, gmat, mba, usa, visa, studyAbroad, abroad, alumni, network ",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo.png",
        href: "/images/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta title="Gradlers" />
        <meta
          name="description"
          content="Gradlers is a student first overseas education specialist, where your global education dreams are shaped and fulfilled seamlessly."
        />
        <meta
          name="keywords"
          content="gradlers, Gradlers, students, gmat, mba, usa, visa, studyAbroad, abroad, alumni, network"
        />
        <link
          rel="icon"
          href="/images/logo.png"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/logo.png"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
        />
          <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="shortcut icon"
          href="/images/logo.png"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={inter.className}>
        {/* <script type="text/javascript">
          var npf_d='https://collegeconnect.in8.nopaperforms.com'; var
          npf_c='6158'; var npf_m='1'; var s=document.createElement("script");
          s.type="text/javascript"; s.async=true;
          s.src="https://track.nopaperforms.com/js/track.js";
          document.body.appendChild(s);
        </script> */}
        <AppContextProvider>
          <AppRouterCacheProvider>
            <>
              <Header />
              {children}
              <Footer />
              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  // Define default options
                  duration: 5000,
                  style: {
                    background: "#363636",
                    color: "#fff",
                  },
                  // Default options for specific types
                  success: {
                    duration: 3000,
                    theme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
              <ToastContainer />
            </>
          </AppRouterCacheProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
