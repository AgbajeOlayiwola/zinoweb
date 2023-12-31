import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { mutationApi } from "@/reduxtoolkit/api/mutationApi";
import { persistor } from "@/reduxtoolkit/Provider/store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Providers } from "@/reduxtoolkit/Provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zino",
  // description: 'Generated by create next app',
};
// let persistor = persistStore(store);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      {/* </PersistGate> */}
    </Providers>
  );
}
